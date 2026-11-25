import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, Send, Mail } from 'lucide-react';
import { SITE_COORDINATES } from '../data/siteData';
import { submitInquiry, SubmissionOutcome } from '../lib/formService';

const PARTNERSHIP_MODELS = [
  {
    title: "Strategic Partnerships",
    desc: "Long-term institutional alignments combining domain expertise, cross-market distribution, or co-venturing."
  },
  {
    title: "Business Collaborations",
    desc: "Commercial joint ventures and operational partnerships across creative technology, software, and enterprise."
  },
  {
    title: "Investment & Venture Opportunities",
    desc: "Capital participation in emerging initiatives with scalable institutional potential."
  },
  {
    title: "Creative & Technology Engagements",
    desc: "Retainer-based branding, visual identity systems, and enterprise IT infrastructure implementations via Richson Creatives."
  },
  {
    title: "Publishing Collaborations",
    desc: "Editorial direction, client book cover design, interior layout, printing coordination, and distribution via Richson Creatives."
  },
  {
    title: "Institutional Development Initiatives",
    desc: "Capacity workshops, pre-marital counseling curriculum integration, and youth mentorship programs."
  }
];

export const PartnershipsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    phone: '',
    focus: 'Strategic Partnerships',
    proposal: ''
  });
  const [outcome, setOutcome] = useState<SubmissionOutcome | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitInquiry({
      channel: 'partnerships',
      name: formData.name,
      email: formData.email,
      organisation: formData.organisation,
      phone: formData.phone,
      topic: formData.focus,
      message: formData.proposal
    });
    setOutcome(res);
    setSubmitting(false);
  };

  const whatsappUrl = `https://wa.me/${SITE_COORDINATES.phoneRaw}?text=${encodeURIComponent(
    `Hello Eric, I am interested in discussing a partnership regarding "${formData.focus}".`
  )}`;

  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Header */}
      <section className="container-arc py-12 md:py-20 border-b border-border">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold mb-3">Strategic Alliances</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1]">
            Partnerships &amp; Co-Creation
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Richson Global welcomes strategic partnerships, business collaborations, creative &amp; technology engagements, publishing projects, and institutional development initiatives.
          </p>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 border-b border-border bg-linen">
        <div className="container-arc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold mb-3">Avenues of Engagement</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
              How We Collaborate
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERSHIP_MODELS.map((model, idx) => (
              <div
                key={idx}
                className="border border-border bg-card p-8 flex flex-col justify-between hover:border-gold transition-colors"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold tabular-nums">
                    0{idx + 1}. Model
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-obsidian">
                    {model.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Submission Form */}
      <section className="py-20 border-b border-border bg-secondary/30">
        <div className="container-arc max-w-4xl">
          <div className="border border-border bg-linen p-8 md:p-14">
            {outcome ? (
              <div className="py-8 space-y-6">
                <div className="h-12 w-12 rounded-full bg-gold/15 text-gold flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-obsidian">
                  {outcome.status === 'delivered'
                    ? 'Partnership Proposal Dispatched'
                    : 'Proposal Ready for Direct Dispatch'}
                </h3>
                <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
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
                    Edit Proposal
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <p className="eyebrow text-gold mb-2">Initiate Alignment</p>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-obsidian">
                    Submit a Partnership Brief
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Provide the key dimensions of your proposal. Every brief is reviewed personally by Eric Richson Darko.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="eyebrow block mb-2" htmlFor="part-name">Full Name *</label>
                    <input
                      id="part-name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samuel Ansah"
                      className="w-full border-b border-border bg-transparent py-2.5 text-sm text-obsidian focus:outline-none focus:border-maritime"
                    />
                  </div>

                  <div>
                    <label className="eyebrow block mb-2" htmlFor="part-email">Work Email *</label>
                    <input
                      id="part-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. samuel@organisation.com"
                      className="w-full border-b border-border bg-transparent py-2.5 text-sm text-obsidian focus:outline-none focus:border-maritime"
                    />
                  </div>

                  <div>
                    <label className="eyebrow block mb-2" htmlFor="part-org">Organisation / Firm</label>
                    <input
                      id="part-org"
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="e.g. Heritage Bank / Independent"
                      className="w-full border-b border-border bg-transparent py-2.5 text-sm text-obsidian focus:outline-none focus:border-maritime"
                    />
                  </div>

                  <div>
                    <label className="eyebrow block mb-2" htmlFor="part-focus">Partnership Focus</label>
                    <select
                      id="part-focus"
                      value={formData.focus}
                      onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                      className="w-full border-b border-border bg-card py-2.5 text-sm text-obsidian focus:outline-none focus:border-maritime"
                    >
                      {PARTNERSHIP_MODELS.map((m) => (
                        <option key={m.title} value={m.title}>{m.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="eyebrow block mb-2" htmlFor="part-prop">Executive Summary of Proposal *</label>
                  <textarea
                    id="part-prop"
                    required
                    rows={5}
                    value={formData.proposal}
                    onChange={(e) => setFormData({ ...formData, proposal: e.target.value })}
                    placeholder="Describe the opportunity, strategic alignment, timeline, and anticipated institutional outcomes..."
                    className="w-full border-b border-border bg-transparent py-2.5 text-sm text-obsidian focus:outline-none focus:border-maritime resize-none"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-navy w-full sm:w-auto py-3.5 px-8 text-xs font-semibold whitespace-nowrap"
                  >
                    <Send className="h-4 w-4" />
                    <span>{submitting ? 'Submitting Brief...' : 'Transmit Proposal'}</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-muted-foreground hover:text-maritime flex items-center gap-1.5"
                  >
                    <MessageSquare className="h-4 w-4 text-gold" />
                    <span>Or converse directly via WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
