import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event_name, event_params, page_path, session_id, referrer } = body;

    if (!event_name) {
      return NextResponse.json({ error: 'event_name is required' }, { status: 400 });
    }

    const userAgent = request.headers.get('user-agent') || '';

    // Filter bots and spam traffic
    const ua = userAgent.toLowerCase();
    const isBot = /bot|spider|crawler|scraper|curl|wget|python|java\/|go-http|headless|phantom|selenium/.test(ua);
    if (isBot) {
      return new NextResponse(null, { status: 204 });
    }

    await supabase.from('website_events').insert({
      event_name,
      event_params: event_params || {},
      page_path: page_path || '',
      session_id: session_id || '',
      user_agent: userAgent,
      referrer: referrer || '',
    });

    return new NextResponse(null, { status: 204 });
  } catch {
    return new NextResponse(null, { status: 204 });
  }
}
