import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  X,
  Mail,
  Send,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import {
  submitViaWeb3Forms,
  buildWhatsAppRoutingUrl,
  formatInquirySummary,
  copyTextToClipboard,
  validateFormPayload
} from '../lib/formService';

const WIDGET_TOPICS = [
  'General Enquiry',
  'Richson Creatives (Brand / Web / Publishing / IT)',
  'Personal Authorship & Book Orders',
  'Wisefold Network',
  'Pastoral Ministry & Speaking',
  'Strategic Partnerships'
];

/**
 * Persistent "Enquire With Us" widget anchored to the bottom-left corner of every page.
 * Supports dual routing: Option A (Web3Forms Email) + Option B (WhatsApp 233530554498) + Copy Summary fallback.
 */
export const EnquireWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: WIDGET_TOPICS[0],
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });
  const [copied, setCopied] = useState(false);

  const payload = {
    formSource: 'Enquire With Us Widget',
    subject: `Enquire With Us — ${form.topic}`,
    name: form.name,
    email: form.email,
    phone: form.phone,
    topic: form.topic,
    message: form.message
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    const res = await submitViaWeb3Forms(payload, true);
    setSubmitting(false);

    if (res.ok) {
      setStatus({ type: 'success', message: res.message });
    } else {
      setStatus({ type: 'error', message: res.message });
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const err = validateFormPayload(payload, false);
    if (err && !form.message.trim() && !form.name.trim()) {
      // Allow opening WhatsApp even with partial info, just clear stale errors
      setStatus({ type: 'idle', message: '' });
      return;
    }
    if (e.defaultPrevented) return;
  };

  const handleCopySummary = async () => {
    const summary = formatInquirySummary(payload);
    const ok = await copyTextToClipboard(summary);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const resetWidget = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      topic: WIDGET_TOPICS[0],
      message: ''
    });
    setStatus({ type: 'idle', message: '' });
  };

  const whatsappUrl = buildWhatsAppRoutingUrl(payload);

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start">
      {open && (
        <div
          role="dialog"
          aria-label="Enquire With Us"
          className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm border border-linen/15 bg-obsidian text-linen shadow-2xl overflow-hidden max-h-[80vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-linen/10 shrink-0">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold">
                Richson Global · Quick Inquiry
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-linen">
                Enquire With Us
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close enquiry panel"
              className="p-1.5 text-linen/60 hover:text-linen transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 overflow-y-auto space-y-4">
            {status.type === 'success' ? (
              <div className="py-4 space-y-4">
                <div className="flex items-start gap-3 text-sm text-linen">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{status.message}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold py-2 px-4 text-xs whitespace-nowrap"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Also Send via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={resetWidget}
                    className="btn-outline border-linen/30 text-linen py-2 px-4 text-xs hover:bg-linen hover:text-obsidian whitespace-nowrap"
                  >
                    New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="space-y-3.5">
                <input type="hidden" name="form_source" value="Enquire With Us Widget" />

                {status.type === 'error' && (
                  <div className="flex items-start gap-2 p-2.5 bg-ember/20 border border-ember/50 text-xs text-linen">
                    <AlertCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="ew-name" className="block text-[0.65rem] uppercase tracking-wider text-linen/70 mb-1">
                      Name *
                    </label>
                    <input
                      id="ew-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full border border-linen/20 bg-linen/5 px-3 py-2 text-xs text-linen placeholder:text-linen/35 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="ew-email" className="block text-[0.65rem] uppercase tracking-wider text-linen/70 mb-1">
                      Email *
                    </label>
                    <input
                      id="ew-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full border border-linen/20 bg-linen/5 px-3 py-2 text-xs text-linen placeholder:text-linen/35 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="ew-topic" className="block text-[0.65rem] uppercase tracking-wider text-linen/70 mb-1">
                    Area of Interest
                  </label>
                  <select
                    id="ew-topic"
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full border border-linen/20 bg-obsidian px-3 py-2 text-xs text-linen focus:outline-none focus:border-gold"
                  >
                    {WIDGET_TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="ew-msg" className="block text-[0.65rem] uppercase tracking-wider text-linen/70 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="ew-msg"
                    required
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe how we can help..."
                    className="w-full border border-linen/20 bg-linen/5 px-3 py-2 text-xs text-linen placeholder:text-linen/35 focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                {/* Dual Delivery Actions */}
                <div className="space-y-2 pt-1">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-ember w-full py-2.5 px-4 text-xs whitespace-nowrap"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{submitting ? 'Sending Email...' : 'Send via Email'}</span>
                  </button>

                  <div className="grid grid-cols-[1fr_auto] gap-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={handleWhatsAppClick}
                      className="btn-gold py-2.5 px-3 text-xs whitespace-nowrap"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      title="Copy formatted summary"
                      className="inline-flex items-center justify-center gap-1.5 border border-linen/25 px-3 py-2 text-xs text-linen/85 hover:border-gold hover:text-gold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {copied ? <Check className="h-3.5 w-3.5 text-gold" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="pt-3 border-t border-linen/10 flex items-center justify-between text-[0.7rem] text-linen/65">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1 text-gold hover:underline"
              >
                <span>Open Full Contact Page</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
              <a
                href="mailto:info@richsonglobal.com"
                className="inline-flex items-center gap-1 hover:text-linen"
              >
                <Mail className="h-3 w-3" />
                <span>Direct Email</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Enquire"
        className="btn-ember py-3 px-5 text-xs font-semibold tracking-[0.16em] whitespace-nowrap shadow-2xl"
      >
        {open ? (
          <>
            <X className="h-4 w-4 shrink-0" />
            <span>Close</span>
          </>
        ) : (
          <>
            <MessageSquare className="h-4 w-4 shrink-0" />
            <span>ENQUIRE</span>
          </>
        )}
      </button>
    </div>
  );
};
