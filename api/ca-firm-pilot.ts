import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Client } from '@notionhq/client';

// ---------------------------------------------------------------------------
// Rate-limiting (in-memory, per-serverless-instance)
// ---------------------------------------------------------------------------
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_MAX = 5; // max requests per IP per window
const ipHits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_MAX) return true;
  hits.push(now);
  ipHits.set(ip, hits);
  return false;
}

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------
const ALLOWED_CLIENT_COUNTS = ['1-25', '25-100', '100-300', '300+'] as const;
const ALLOWED_SOFTWARE = [
  'Tally Prime',
  'Zoho Books',
  'Busy Accounting',
  'Excel Spreadsheets',
] as const;

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isValidWhatsApp(v: string): boolean {
  const digits = v.replace(/[\s\-+()]/g, '');
  return /^\d{7,15}$/.test(digits);
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  // Method gate
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Rate limit
  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ??
    req.socket?.remoteAddress ??
    'unknown';

  if (isRateLimited(ip)) {
    res.status(429).json({ error: 'Too many requests. Please try again in a minute.' });
    return;
  }

  // Parse & validate body
  const {
    partnerName,
    firmName,
    email,
    whatsapp,
    clientCount,
    software,
    agreeTerms,
    _honeypot,
  } = (req.body as Record<string, any>) ?? {};

  // Honeypot spam check
  if (_honeypot) {
    res.status(201).json({ ok: true });
    return;
  }

  // Required strings
  if (
    typeof partnerName !== 'string' || !partnerName.trim() ||
    typeof firmName !== 'string' || !firmName.trim() ||
    typeof email !== 'string' || !email.trim() ||
    typeof whatsapp !== 'string' || !whatsapp.trim()
  ) {
    res.status(400).json({ error: 'All fields are required.' });
    return;
  }

  if (!isValidEmail(email)) {
    res.status(400).json({ error: 'Please provide a valid email address.' });
    return;
  }

  if (!isValidWhatsApp(whatsapp)) {
    res.status(400).json({ error: 'Please provide a valid WhatsApp number.' });
    return;
  }

  if (!ALLOWED_CLIENT_COUNTS.includes(clientCount)) {
    res.status(400).json({ error: 'Invalid client count selection.' });
    return;
  }

  if (!ALLOWED_SOFTWARE.includes(software)) {
    res.status(400).json({ error: 'Invalid accounting tool selection.' });
    return;
  }

  if (agreeTerms !== true) {
    res.status(400).json({ error: 'You must agree to the pilot terms.' });
    return;
  }

  // Notion environment check
  const notionKey = process.env.NOTION_API_KEY;
  const dataSourceId = process.env.NOTION_DATA_SOURCE_ID;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!notionKey || (!dataSourceId && !databaseId)) {
    console.error('Missing NOTION_API_KEY or (NOTION_DATA_SOURCE_ID / NOTION_DATABASE_ID).');
    res.status(500).json({
      error: 'Server configuration error. Missing Notion credentials.',
    });
    return;
  }

  try {
    const notion = new Client({ auth: notionKey });

    const properties: Record<string, any> = {
      'Partner Name': {
        title: [{ text: { content: partnerName.trim() } }],
      },
      'Firm Name': {
        rich_text: [{ text: { content: firmName.trim() } }],
      },
      Email: {
        email: email.trim().toLowerCase(),
      },
      'WhatsApp Number': {
        phone_number: whatsapp.trim(),
      },
      'Total GST Clients': {
        select: { name: clientCount },
      },
      'Primary Accounting Tool': {
        select: { name: software },
      },
      'Pilot Agreement': {
        checkbox: true,
      },
      'Application Status': {
        select: { name: 'New' },
      },
    };

    // Try data_source_id first (Notion API Sept 2025+), fallback to database_id
    if (dataSourceId) {
      try {
        await notion.pages.create({
          parent: { data_source_id: dataSourceId } as any,
          properties,
        });
        res.status(201).json({ ok: true });
        return;
      } catch (err: any) {
        console.warn('Attempt with data_source_id failed:', err?.message);
        if (!databaseId) {
          throw err;
        }
      }
    }

    if (databaseId) {
      await notion.pages.create({
        parent: { database_id: databaseId } as any,
        properties,
      });
      res.status(201).json({ ok: true });
      return;
    }

    res.status(500).json({ error: 'Failed to save application to Notion.' });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Unknown error saving application.';
    console.error('Notion API error:', message);
    res.status(500).json({
      error: 'Failed to save your application. Please try again.',
      details: message,
    });
  }
}
