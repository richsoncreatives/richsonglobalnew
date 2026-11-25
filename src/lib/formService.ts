/**
 * Dual Contact Form Routing Service:
 *  - Option A: Email delivery via Web3Forms (POST https://api.web3forms.com/submit)
 *  - Option B: Formatted WhatsApp delivery via https://wa.me/233530554498?text=...
 *  - Fallback: Copy formatted summary to clipboard in case pop-ups are blocked
 */

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
export const WEB3FORMS_ACCESS_KEY = '26fcdf27-22b5-40be-8527-e9f0da2c8866';
export const WHATSAPP_ROUTING_NUMBER = '233530554498';

export interface FormPayload {
  formSource: string;
  subject?: string;
  name?: string;
  email: string;
  phone?: string;
  organisation?: string;
  topic?: string;
  budget?: string;
  timeline?: string;
  message?: string;
}

export interface EmailSubmissionResult {
  ok: boolean;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateFormPayload(
  payload: FormPayload,
  requireNameAndMessage = true
): string | null {
  if (!payload.email || !EMAIL_RE.test(payload.email.trim())) {
    return 'Please enter a valid email address.';
  }
  if (requireNameAndMessage) {
    if (!payload.name?.trim()) {
      return 'Please enter your name.';
    }
    if (!payload.message?.trim()) {
      return 'Please enter your message or project details.';
    }
  }
  return null;
}

export function formatInquirySummary(payload: FormPayload): string {
  const lines = [
    `*${payload.formSource}*`,
    payload.subject ? `Subject: ${payload.subject}` : null,
    payload.name?.trim() ? `Name: ${payload.name.trim()}` : null,
    payload.email?.trim() ? `Email: ${payload.email.trim()}` : null,
    payload.phone?.trim() ? `Phone: ${payload.phone.trim()}` : null,
    payload.organisation?.trim() ? `Organisation: ${payload.organisation.trim()}` : null,
    payload.topic?.trim() ? `Topic / Service: ${payload.topic.trim()}` : null,
    payload.budget?.trim() ? `Budget: ${payload.budget.trim()}` : null,
    payload.timeline?.trim() ? `Timeline: ${payload.timeline.trim()}` : null,
    payload.message?.trim() ? `\nMessage:\n${payload.message.trim()}` : null
  ].filter(Boolean);

  return lines.join('\n');
}

export function buildWhatsAppRoutingUrl(payload: FormPayload): string {
  const summary = formatInquirySummary(payload);
  return `https://wa.me/${WHATSAPP_ROUTING_NUMBER}?text=${encodeURIComponent(summary)}`;
}

export async function copyTextToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fallback below
  }
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export async function submitViaWeb3Forms(
  payload: FormPayload,
  requireNameAndMessage = true
): Promise<EmailSubmissionResult> {
  const validationError = validateFormPayload(payload, requireNameAndMessage);
  if (validationError) {
    return { ok: false, message: validationError };
  }

  const resolvedSubject =
    payload.subject ||
    `${payload.formSource}${payload.topic ? ` — ${payload.topic}` : ''}`;

  const body: Record<string, string> = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: resolvedSubject,
    form_source: payload.formSource,
    from_name: payload.name?.trim() || 'Richson Global Website Visitor',
    email: payload.email.trim(),
    replyto: payload.email.trim(),
    botcheck: ''
  };

  if (payload.name?.trim()) body.name = payload.name.trim();
  if (payload.phone?.trim()) body.phone = payload.phone.trim();
  if (payload.organisation?.trim()) body.organisation = payload.organisation.trim();
  if (payload.topic?.trim()) body.topic = payload.topic.trim();
  if (payload.budget?.trim()) body.budget = payload.budget.trim();
  if (payload.timeline?.trim()) body.timeline = payload.timeline.trim();
  if (payload.message?.trim()) body.message = payload.message.trim();

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json().catch(() => null);
    if (response.ok && data?.success) {
      return {
        ok: true,
        message: 'Your inquiry has been delivered via email. Thank you — we will respond shortly.'
      };
    }

    return {
      ok: false,
      message:
        data?.message ||
        'Email submission could not be completed right now. You can send via WhatsApp or copy your summary below.'
    };
  } catch {
    return {
      ok: false,
      message:
        'Network error while sending via email. Please try again, or use Send via WhatsApp / Copy Summary below.'
    };
  }
}
