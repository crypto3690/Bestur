const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyEPeAfgziCGtWu9t5fYIPZ-iB9Vv4Rhe68GqTFk6KuDZzhKgxoLtSvUPdESi7Vevf6/exec';

export default async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    response.setHeader('Access-Control-Allow-Origin', 'https://bestur.mx');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return response.status(204).end();
  }

  response.setHeader('Access-Control-Allow-Origin', 'https://bestur.mx');
  response.setHeader('Vary', 'Origin');

  if (request.method !== 'POST') {
    return response.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const secret = process.env.BESTUR_INGEST_SECRET;
  if (!secret) {
    return response.status(500).json({ ok: false, error: 'relay_not_configured' });
  }

  const body = request.body && typeof request.body === 'object' ? request.body : {};
  const recordType = body.record_type === 'event' ? 'event' : body.record_type === 'lead' ? 'lead' : '';
  if (!recordType || !body.payload || typeof body.payload !== 'object') {
    return response.status(400).json({ ok: false, error: 'invalid_payload' });
  }

  try {
    const upstream = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, record_type: recordType, payload: body.payload })
    });
    const text = await upstream.text();
    let result;
    try { result = JSON.parse(text); } catch (_) { result = { ok: false, error: 'invalid_upstream_response' }; }
    return response.status(upstream.ok ? 200 : 502).json(result);
  } catch (_) {
    return response.status(502).json({ ok: false, error: 'upstream_unavailable' });
  }
}
