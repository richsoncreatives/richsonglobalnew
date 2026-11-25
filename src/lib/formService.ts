/**
 * Transparent Form Submission Service for Cloudflare Pages.
 * Attempts real delivery via configured VITE_FORM_ENDPOINT or Cloudflare Pages Function (/api/inquire).
 * Never fabricates a backend delivery when no email gateway is configured — instead provides
 * structured, one-click Email (mailto:) and WhatsApp direct handoff links.
 */

import { CREATIVES_COORDINATES, SITE_COORDINATES } from '../data/siteData';

export type InquiryChannel = 'contact' | 'partnerships' | 'creatives' | 'newsletter';

export interface InquirySubmission {
  channel: InquiryChannel;
  name?: string;
  email: string;
  phone?: string;
  organisation?: string;
  topic?: string;
  budget?: string;
  timeline?: string;
  message?: string;
}

export interface SubmissionOutcome {
  status: 'delivered' | 'handoff_required' | 'error';
  message: string;
  mailtoUrl: string;
  whatsappUrl: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function buildHandoffLinks(payload: InquirySubmission) {
  const isCreatives = payload.channel === 'creatives';
  const recipientEmail = isCreatives ? CREATIVES_COORDINATES.email : SITE_COORDINATES.email;
  const recipientPhone = isCreatives ? CREATIVES_COORDINATES.phoneRaw : SITE_COORDINATES.phoneRaw;

  const subjectMap: Record<InquiryChannel, string> = {
    contact: `Richson Global Inquiry: ${payload.topic || 'General Enquiry'}`,
    partnerships: `Partnership Proposal: ${payload.topic || 'Strategic Partnership'}`,
    creatives: `Richson Creatives Project Brief: ${payload.topic || 'Studio Engagement'}`,
    newsletter: `Subscribe to The Capacity Dispatch`
  };

  const lines = [
    payload.channel === 'newsletter'
      ? `Please add my email (${payload.email}) to The Capacity Dispatch newsletter.`
      : null,
    payload.name ? `Name: ${payload.name}` : null,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : null,
    payload.organisation ? `Organisation: ${payload.organisation}` : null,
    payload.topic ? `Focus / Service: ${payload.topic}` : null,
    payload.budget ? `Budget Range: ${payload.budget}` : null,
    payload.timeline ? `Timeline: ${payload.timeline}` : null,
    payload.message ? `\nDetails:\n${payload.message}` : null
  ]
    .filter(Boolean)
    .join('\n');

  const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    subjectMap[payload.channel]
  )}&body=${encodeURIComponent(lines)}`;

  const whatsappUrl = `https://wa.me/${recipientPhone}?text=${encodeURIComponent(
    `${subjectMap[payload.channel]}\n\n${lines}`
  )}`;

  return { mailtoUrl, whatsappUrl };
}

export async function submitInquiry(payload: InquirySubmission): Promise<SubmissionOutcome> {
  const { mailtoUrl, whatsappUrl } = buildHandoffLinks(payload);

  if (!payload.email || !EMAIL_RE.test(payload.email.trim())) {
    return {
      status: 'error',
      message: 'Please enter a valid email address before submitting.',
      mailtoUrl,
      whatsappUrl
    };
  }

  if (payload.channel !== 'newsletter' && (!payload.name?.trim() || !payload.message?.trim())) {
    return {
      status: 'error',
      message: 'Please complete your name and message details.',
      mailtoUrl,
      whatsappUrl
    };
  }

  const endpoint = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined)?.trim() || '/api/inquire';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const data = await response.json().catch(() => ({ delivered: true }));
      if (data.delivered !== false) {
        return {
          status: 'delivered',
          message:
            payload.channel === 'newsletter'
              ? 'Your email has been received for The Capacity Dispatch.'
              : 'Your brief has been dispatched securely to our desk. Expect a personal reply within two business days.',
          mailtoUrl,
          whatsappUrl
        };
      }
    }

    // 404 (static dev/preview without Cloudflare Functions) or 501 (RESEND_API_KEY not yet set)
    return {
      status: 'handoff_required',
      message:
        'Automated email dispatch is not yet connected on this deployment (configure RESEND_API_KEY in Cloudflare Pages or VITE_FORM_ENDPOINT). Your message has been formatted below for immediate direct delivery via Email or WhatsApp.',
      mailtoUrl,
      whatsappUrl
    };
  } catch {
    return {
      status: 'handoff_required',
      message:
        'Automated email dispatch is unavailable in offline/static mode. Use the pre-filled Email or WhatsApp button below to send your brief directly.',
      mailtoUrl,
      whatsappUrl
    };
  }
}
