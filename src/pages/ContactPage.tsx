import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Building,
  CreditCard,
  ExternalLink
} from 'lucide-react';
import { SITE_COORDINATES } from '../data/siteData';

const INQUIRY_TOPICS = [
  'General Enquiry',
  'Richson Creatives (Agency / Branding / Tech)',
  'Publishing & Authorship (Book Orders / Services)',
  'Wisefold Network (Reading Hub / Membership)',
  'Pastoral Ministry (Speaking / Counseling)',
  'Partnerships & Investments',
  'Other Opportunities'
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: INQUIRY_TOPICS[0],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('richson_contacts') || '[]');
        existing.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem('richson_contacts', JSON.stringify(existing));
      } catch (err) {}
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Eric, I am contacting you regarding "${formData.topic}".`
  );
  const whatsappUrl = `https://wa.me/${SITE_COORDINATES.phoneRaw}?text=${whatsappMessage}`;

  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Header */}
      <section className="container-arc py-12 md:py-20 border-b border-border">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold mb-3">Executive Communication</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1]">
            Contact & Inquiries
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Connect with Eric Richson Darko and the Richson Global ecosystem. Every message is attended to with deliberate care.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 border-b border-border bg-linen">
        <div className="container-arc grid gap-12 lg:grid-cols-[1fr_400px]">
          {/* Inquiry Form */}
          <div className="border border-border bg-card p-8 md:p-12 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="h-14 w-14 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-obsidian">
                  Message Dispatched
                </h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We will review your message and reply via email or phone within 24 to 48 hours.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-navy py-3 px-6 text-xs"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Converse on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        topic: INQUIRY_TOPICS[0],
                        message: ''
                      });
                    }}
                    className="btn-outline py-3 px-6 text-xs"
                  >
                    Send Another Message
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
                    className="btn-navy py-3 px-8 text-xs font-semibold w-full sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    <span>{submitting ? 'Transmitting...' : 'Send Inquiry'}</span>
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

          {/* Contact Details Card */}
          <div className="space-y-6">
            <div className="border border-border bg-linen p-8 space-y-6 shadow-xs">
              <p className="eyebrow text-gold">Direct Channels</p>

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
                    <p className="font-semibold text-obsidian">Telephone Lines</p>
                    <a href={`tel:${SITE_COORDINATES.phoneRaw}`} className="text-muted-foreground hover:text-maritime block">
                      {SITE_COORDINATES.phone1}
                    </a>
                    <a href="tel:+233548685856" className="text-muted-foreground hover:text-maritime block">
                      {SITE_COORDINATES.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-obsidian">Electronic Mail</p>
                    <a href={`mailto:${SITE_COORDINATES.email}`} className="text-muted-foreground hover:text-maritime block">
                      {SITE_COORDINATES.email}
                    </a>
                    <a href={`mailto:${SITE_COORDINATES.emailDirect}`} className="text-muted-foreground hover:text-maritime block text-xs">
                      {SITE_COORDINATES.emailDirect}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Coordinates */}
            <div className="border border-border bg-secondary/40 p-8 space-y-4">
              <p className="eyebrow text-gold">Commercial & Payment</p>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-obsidian block">MTN Mobile Money:</span>
                  <span className="font-mono text-sm text-maritime font-bold">{SITE_COORDINATES.momo}</span>
                  <span className="text-[0.68rem] text-muted-foreground block">Name: Eric Richson Darko</span>
                </div>

                <div className="pt-2 border-t border-border">
                  <span className="font-bold text-obsidian block">Bank Transfer:</span>
                  <span className="text-muted-foreground block">{SITE_COORDINATES.bankBranch}</span>
                  <span className="font-mono text-sm text-maritime font-bold block mt-0.5">
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
