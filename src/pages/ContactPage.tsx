import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { SITE_COORDINATES, CREATIVES_COORDINATES, SOCIAL_LINKS } from '../data/siteData';
import { XBrandIcon } from '../components/Icons';
import { submitInquiry, SubmissionOutcome } from '../lib/formService';

const INQUIRY_TOPICS = [
  'General Enquiry',
  'Richson Creatives (Agency / Branding / Web / IT)',
  'Client Book Design, Formatting & Publishing (Richson Creatives)',
  'Personal Authorship & Book Orders',
  'Wisefold Network (Reading Hub / Membership)',
  'Pastoral Ministry (Speaking / Counseling)',
  'Partnerships & Investments'
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: INQUIRY_TOPICS[0],
    message: ''
  });
  const [outcome, setOutcome] = useState<SubmissionOutcome | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitInquiry({
      channel: 'contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      topic: formData.topic,
      message: formData.message
    });
    setOutcome(res);
    setSubmitting(false);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Eric, I am contacting you regarding "${formData.topic}".`
  );
  const whatsappUrl = `https://wa.me/${SITE_COORDINATES.phoneRaw}?text=${whatsappMessage}`;

  const renderSocialIcon = (name: string) => {
    switch (name) {
      case 'Facebook':
        return <Facebook className="h-4 w-4" />;
      case 'Instagram':
        return <Instagram className="h-4 w-4" />;
      case 'LinkedIn':
        return <Linkedin className="h-4 w-4" />;
      case 'YouTube':
        return <Youtube className="h-4 w-4" />;
      case 'X':
        return <XBrandIcon className="h-3.5 w-3.5" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Header */}
      <section className="container-arc py-12 md:py-20 border-b border-border">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold mb-3">Executive Communication</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1] [text-wrap:balance]">
            Every Meaningful Connection Begins With a Conversation.
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Whether you are interested in our ventures, exploring a partnership, commissioning Richson Creatives, or simply wishing to connect, we welcome your enquiry.
          </p>
        </div>
      </section>

      {/* Direct Pay Strip */}
      <section className="bg-maritime text-linen py-4 border-b border-border">
        <div className="container-arc flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold uppercase tracking-[0.2em] text-gold">Direct Pay</span>
            <span aria-hidden="true" className="text-linen/30">·</span>
            <span className="text-linen/85">Frictionless local ordering &amp; settlement</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 font-mono tabular-nums">
            <span>MTN MoMo: {SITE_COORDINATES.momo}</span>
            <span aria-hidden="true" className="text-linen/30">|</span>
            <span>Studio Line: {CREATIVES_COORDINATES.phoneDisplay}</span>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 border-b border-border bg-linen">
        <div className="container-arc grid gap-12 lg:grid-cols-[1fr_400px]">
          {/* Inquiry Form */}
          <div className="border border-border bg-card p-8 md:p-12">
            {outcome ? (
              <div className="py-8 space-y-6">
                <div className="h-12 w-12 rounded-full bg-gold/15 text-gold flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-obsidian">
                  {outcome.status === 'delivered' ? 'Message Dispatched' : 'Message Ready for Direct Dispatch'}
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                  {outcome.message}
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={outcome.mailtoUrl}
                    className="btn-navy py-3 px-6 text-xs whitespace-nowrap"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Send via Email</span>
                  </a>
                  <a
                    href={outcome.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold py-3 px-6 text-xs whitespace-nowrap"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setOutcome(null)}
                    className="btn-outline py-3 px-6 text-xs whitespace-nowrap"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="eyebrow text-gold mb-2">Message The Desk</p>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-obsidian">
                    Send an Official Inquiry
                  </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="eyebrow block mb-2" htmlFor="c-name">Full Name *</label>
                    <input
                      id="c-name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Owusu"
                      className="w-full border-b border-border bg-transparent py-2.5 text-sm text-obsidian focus:outline-none focus:border-maritime"
                    />
                  </div>

                  <div>
                    <label className="eyebrow block mb-2" htmlFor="c-email">Email Address *</label>
                    <input
                      id="c-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. david@example.com"
                      className="w-full border-b border-border bg-transparent py-2.5 text-sm text-obsidian focus:outline-none focus:border-maritime"
                    />
                  </div>

                  <div>
                    <label className="eyebrow block mb-2" htmlFor="c-phone">Phone Number</label>
                    <input
                      id="c-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +233 24 000 0000"
                      className="w-full border-b border-border bg-transparent py-2.5 text-sm text-obsidian focus:outline-none focus:border-maritime"
                    />
                  </div>

                  <div>
                    <label className="eyebrow block mb-2" htmlFor="c-topic">Nature of Engagement</label>
                    <select
                      id="c-topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full border-b border-border bg-card py-2.5 text-sm text-obsidian focus:outline-none focus:border-maritime"
                    >
                      {INQUIRY_TOPICS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="eyebrow block mb-2" htmlFor="c-msg">Message *</label>
                  <textarea
                    id="c-msg"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your project, inquiry, or question..."
                    className="w-full border-b border-border bg-transparent py-2.5 text-sm text-obsidian focus:outline-none focus:border-maritime resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-navy py-3 px-8 text-xs font-semibold w-full sm:w-auto whitespace-nowrap"
                  >
                    <Send className="h-4 w-4" />
                    <span>{submitting ? 'Submitting...' : 'Send Inquiry'}</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-muted-foreground hover:text-maritime flex items-center gap-1.5"
                  >
                    <MessageSquare className="h-4 w-4 text-gold" />
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details Sidebar */}
          <div className="space-y-6">
            <div className="border border-border bg-linen p-8 space-y-6">
              <p className="eyebrow text-gold">Richson Global Desk</p>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-obsidian">Headquarters</p>
                    <p className="text-muted-foreground">{SITE_COORDINATES.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-obsidian">Executive Telephone Lines</p>
                    <a href={`tel:${SITE_COORDINATES.phoneRaw}`} className="text-muted-foreground hover:text-maritime block font-mono tabular-nums text-xs mt-0.5">
                      {SITE_COORDINATES.phone1}
                    </a>
                    <a href="tel:+233548685856" className="text-muted-foreground hover:text-maritime block font-mono tabular-nums text-xs mt-0.5">
                      {SITE_COORDINATES.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-obsidian">Electronic Mail</p>
                    <a href={`mailto:${SITE_COORDINATES.email}`} className="text-muted-foreground hover:text-maritime block text-xs mt-0.5">
                      {SITE_COORDINATES.email}
                    </a>
                    <a href={`mailto:${SITE_COORDINATES.emailDirect}`} className="text-muted-foreground hover:text-maritime block text-xs mt-0.5">
                      {SITE_COORDINATES.emailDirect}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-obsidian/75 hover:text-maritime hover:border-maritime transition-colors"
                  >
                    {renderSocialIcon(s.name)}
                  </a>
                ))}
              </div>
            </div>

            {/* Richson Creatives Dedicated Contact */}
            <div className="border border-border bg-obsidian text-linen p-8 space-y-4">
              <p className="eyebrow text-gold">Richson Creatives Studio</p>
              <p className="text-xs text-linen/70 leading-relaxed">
                For brand identity, website engineering, IT systems, or client book design and publishing production:
              </p>
              <div className="space-y-2 text-xs">
                <a href={`tel:${CREATIVES_COORDINATES.phoneRaw}`} className="block font-mono tabular-nums text-gold hover:text-linen">
                  Phone / WhatsApp: {CREATIVES_COORDINATES.phoneDisplay} ({CREATIVES_COORDINATES.phone})
                </a>
                <a href={`mailto:${CREATIVES_COORDINATES.email}`} className="block text-linen/80 hover:text-gold">
                  Email: {CREATIVES_COORDINATES.email}
                </a>
              </div>
              <Link to="/creatives" className="btn-ember py-2.5 px-5 text-xs w-full text-center">
                Visit Richson Creatives Portal
              </Link>
            </div>

            {/* Financial Coordinates */}
            <div className="border border-border bg-secondary/40 p-8 space-y-4">
              <p className="eyebrow text-gold">Commercial &amp; Payment</p>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-obsidian block">MTN Mobile Money:</span>
                  <span className="font-mono tabular-nums text-sm text-maritime font-bold">{SITE_COORDINATES.momo}</span>
                  <span className="text-[0.68rem] text-muted-foreground block">Name: Eric Richson Darko</span>
                </div>

                <div className="pt-2 border-t border-border">
                  <span className="font-bold text-obsidian block">Bank Transfer:</span>
                  <span className="text-muted-foreground block">{SITE_COORDINATES.bankBranch}</span>
                  <span className="font-mono tabular-nums text-sm text-maritime font-bold block mt-0.5">
                    Account: {SITE_COORDINATES.bankAccount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
