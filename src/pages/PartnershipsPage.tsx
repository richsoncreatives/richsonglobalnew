import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Handshake, Briefcase, Sparkles, Building, Send } from 'lucide-react';
import { SITE_COORDINATES } from '../data/siteData';

const PARTNERSHIP_MODELS = [
  {
    title: "Strategic Partnerships",
    desc: "Long-term institutional alignments combining domain expertise, cross-market distribution, or co-venturing."
  },
  {
    title: "Business Collaborations",
    desc: "Commercial joint ventures and operational partnerships across creative technology, software, and agro-business."
  },
  {
    title: "Investment & Venture Opportunities",
    desc: "Capital participation in emerging initiatives with scalable institutional potential."
  },
  {
    title: "Creative & Technology Engagements",
    desc: "Retainer-based branding, visual identity systems, and enterprise IT infrastructure implementations."
  },
  {
    title: "Publishing Collaborations",
    desc: "Editorial direction, book cover design, interior layout, printing coordination, and distribution channels."
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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      // Store locally
      try {
        const existing = JSON.parse(localStorage.getItem('richson_partnerships') || '[]');
        existing.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('richson_partnerships', JSON.stringify(existing));
      } catch (err) {}
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
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
            Partnerships & Co-Creation
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Richson Global welcomes strategic partnerships, business collaborations, creative & technology engagements, publishing projects, and institutional development initiatives.
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
                className="border border-border bg-card p-8 flex flex-col justify-between shadow-xs hover:border-gold transition-colors"
              >
                <div>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold">
                    Model 0{idx + 1}
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
          <div className="border border-border bg-linen p-8 md:p-14 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="h-14 w-14 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-obsidian">
                  Partnership Proposal Received
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
                  Thank you for initiating this dialogue. Our executive desk will review your submission and respond within two business days.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-navy py-3 px-6 text-xs"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Message Directly on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organisation: '',
                        phone: '',
                        focus: 'Strategic Partnerships',
                        proposal: ''
                      });
                    }}
                    className="btn-outline py-3 px-6 text-xs"
                  >
                    Submit Another Brief
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
                    className="btn-navy w-full sm:w-auto py-3.5 px-8 text-xs font-semibold"
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
