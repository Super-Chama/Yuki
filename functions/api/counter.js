/**
 * Cloudflare Pages Function — Visitor Counter
 * KV binding required: VISIT_COUNTER (set in Pages dashboard)
 *
 * GET  /api/counter  → returns { count: N }  (read-only, no increment)
 * POST /api/counter  → increments and returns { count: N }
 */

const KV_KEY = 'visit_count';
const BASE   = 4721; // Starting offset so counter doesn't begin at 0

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Content-Type': 'application/json',
};

export async function onRequest(context) {
  const { env, request } = context;

  // Pre-flight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

  // KV binding not configured yet (local dev / before KV is attached)
  if (!env.VISIT_COUNTER) {
    return new Response(JSON.stringify({ count: BASE, note: 'KV not bound' }), {
      status: 200, headers: CORS,
    });
  }

  const raw   = await env.VISIT_COUNTER.get(KV_KEY);
  let   count = parseInt(raw ?? '0', 10);

  if (request.method === 'POST') {
    count++;
    await env.VISIT_COUNTER.put(KV_KEY, String(count));
  }

  return new Response(JSON.stringify({ count: count + BASE }), {
    status: 200, headers: CORS,
  });
}
