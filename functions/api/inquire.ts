/**
 * Cloudflare Pages Function: /api/inquire
 * Secure server-side handler for Contact, Partnership, Studio Brief, and Newsletter submissions.
 * Configure RESEND_API_KEY in Cloudflare Pages Dashboard -> Settings -> Environment Variables.
 */

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_RECIPIENT_EMAIL?: string;
  CREATIVES_RECIPIENT_EMAIL?: string;
  SENDER_EMAIL?: string;
}

interface InquiryPayload {
  channel: 'contact' | 'partnerships' | 'creatives' | 'newsletter';
  name?: string;
  email: string;
  phone?: string;
  organisation?: string;
  topic?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  honeypot?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store'
  };

  try {
    const body = (await context.request.json()) as InquiryPayload;

    // Silent honeypot check for spam bots
    if (body.honeypot && body.honeypot.trim().length > 0) {
      return new Response(JSON.stringify({ delivered: true }), { status: 200, headers });
    }

    if (!body.email || !EMAIL_RE.test(body.email.trim())) {
      return new Response(
        JSON.stringify({ delivered: false, error: 'Please provide a valid email address.' }),
        { status: 400, headers }
      );
    }

    if (body.channel !== 'newsletter' && (!body.name?.trim() || !body.message?.trim())) {
      return new Response(
        JSON.stringify({ delivered: false, error: 'Name and message are required.' }),
        { status: 400, headers }
      );
    }

    const apiKey = context.env?.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          delivered: false,
          configured: false,
          error:
            'Email delivery gateway (RESEND_API_KEY) is not yet configured in Cloudflare Pages environment variables.'
        }),
        { status: 501, headers }
      );
    }

    const toEmail =
      body.channel === 'creatives'
        ? context.env.CREATIVES_RECIPIENT_EMAIL || 'info@richsoncreatives.com'
        : context.env.CONTACT_RECIPIENT_EMAIL || 'info@richsonglobal.com';

    const fromEmail = context.env.SENDER_EMAIL || 'Richson Global <onboarding@resend.dev>';

    const subjectMap: Record<InquiryPayload['channel'], string> = {
      contact: `[Richson Global Inquiry] ${body.topic || 'General Enquiry'} — ${body.name}`,
      partnerships: `[Partnership Brief] ${body.topic || 'Strategic Partnership'} — ${body.name}`,
      creatives: `[Richson Creatives Brief] ${body.topic || 'Studio Project'} — ${body.name}`,
      newsletter: `[Capacity Dispatch] New Newsletter Subscriber — ${body.email}`
    };

    const textLines = [
      `Channel: ${body.channel}`,
      body.name ? `Name: ${body.name}` : null,
      `Email: ${body.email}`,
      body.phone ? `Phone: ${body.phone}` : null,
      body.organisation ? `Organisation: ${body.organisation}` : null,
      body.topic ? `Topic / Service: ${body.topic}` : null,
      body.budget ? `Budget: ${body.budget}` : null,
      body.timeline ? `Timeline: ${body.timeline}` : null,
      body.message ? `\nMessage:\n${body.message}` : null
    ].filter(Boolean);

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: body.email.trim(),
        subject: subjectMap[body.channel],
        text: textLines.join('\n')
      })
    });

    if (!resendRes.ok) {
      return new Response(
        JSON.stringify({
          delivered: false,
          configured: true,
          error: 'The upstream email provider rejected the dispatch. Please use WhatsApp or direct email.'
        }),
        { status: 502, headers }
      );
    }

    return new Response(JSON.stringify({ delivered: true, configured: true }), {
      status: 200,
      headers
    });
  } catch {
    return new Response(
      JSON.stringify({ delivered: false, error: 'Malformed request payload.' }),
      { status: 400, headers }
    );
  }
};
