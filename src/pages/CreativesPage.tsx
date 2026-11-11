import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Layers,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  Briefcase
} from 'lucide-react';
import {
  CREATIVES_COORDINATES,
  CREATIVES_SOCIAL_LINKS,
  CREATIVE_SERVICES,
  CREATIVE_PROCESS,
  TRACK_RECORD_KPIS,
  CLIENT_PUBLISHED_BOOKS,
  WEB_PROJECTS,
  SITE_COORDINATES
} from '../data/siteData';

const SERVICE_OPTIONS = [
  'Branding & Visual Communication',
  'Publishing & Editorial Layout',
  'Website & Digital Platform Development',
  'Technology & IT Infrastructure Solutions',
  'Complete Creative Direction Retainer'
];

export const CreativesPage: React.FC = () => {
  const [briefForm, setBriefForm] = useState({
    name: '',
    email: '',
    organisation: '',
    service: SERVICE_OPTIONS[0],
    budget: '',
    timeline: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      // Store inquiry locally
      try {
        const inquiries = JSON.parse(localStorage.getItem('creatives_inquiries') || '[]');
        inquiries.push({ ...briefForm, date: new Date().toISOString() });
        localStorage.setItem('creatives_inquiries', JSON.stringify(inquiries));
      } catch (err) {}
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Richson Creatives Studio, I would like to inquire about "${briefForm.service}".`
  );
  const studioWhatsappUrl = `https://wa.me/${CREATIVES_COORDINATES.phoneRaw}?text=${whatsappMessage}`;

  return (
    <div className="bg-obsidian text-linen min-h-screen">
      {/* Studio Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian/90 backdrop-blur-md border-b border-linen/10 py-4">
        <div className="container-arc flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-linen/60 hover:text-gold text-xs uppercase tracking-widest transition-colors">
              ← Richson Global
            </Link>
            <span className="text-linen/20">|</span>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-linen tracking-wide">
                Richson Creatives
              </span>
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-gold">
                Brand · Publishing · Digital
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-linen/75">
            <a href="#work" className="hover:text-gold transition-colors">Work</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#process" className="hover:text-gold transition-colors">Process</a>
            <a href="#client-books" className="hover:text-gold transition-colors">Client Books</a>
            <a href="#start" className="btn-ember py-2 px-4 text-xs font-semibold">
              <Sparkles className="h-3 w-3" />
              <span>Start Project</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden border-b border-linen/10">
        <div className="ember-halo absolute inset-0 pointer-events-none" />
        <div className="grain-layer" />

        <div className="container-arc relative z-10 max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ember/10 border border-ember/30">
            <span className="h-2 w-2 rounded-full bg-ember animate-ping" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ember-bright">
              Operating Creative Studio
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.08] text-linen">
            We make good organisations <br />
            <span className="bg-gradient-to-r from-gold via-accent to-ember-bright bg-clip-text text-transparent">
              visible, credible & easy to choose.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-linen/70 leading-relaxed max-w-2xl">
            A brand identity, publication design, and digital systems practice in Accra. We partner with leaders, authors, institutions, and businesses across Ghana and West Africa to engineer memorable presence and durable systems.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#start"
              className="btn-ember py-3.5 px-8 text-xs font-semibold"
            >
              <Sparkles className="h-4 w-4" />
              <span>Send Project Brief</span>
            </a>
            <a
              href="#work"
              className="btn-ember-quiet py-3.5 px-8 text-xs font-semibold"
            >
              <span>View Selected Work</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-linen/10 text-linen/80">
            <div>
              <p className="font-display text-3xl font-bold text-gold">100+</p>
              <p className="text-[0.62rem] uppercase tracking-wider text-linen/50 mt-1">Digital Assets (SIB Bank)</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-ember-bright">15+ SKUs</p>
              <p className="text-[0.62rem] uppercase tracking-wider text-linen/50 mt-1">Packaging Systems</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-gold">99.5%</p>
              <p className="text-[0.62rem] uppercase tracking-wider text-linen/50 mt-1">Infrastructure Uptime</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-linen">19+</p>
              <p className="text-[0.62rem] uppercase tracking-wider text-linen/50 mt-1">Client Books Produced</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work & Case Studies */}
      <section id="work" className="py-24 border-b border-linen/10 bg-obsidian scroll-mt-24">
        <div className="container-arc">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow text-gold mb-3">Portfolio & Track Record</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-linen">
                Selected Work & Systems
              </h2>
            </div>
            <a
              href="#start"
              className="text-xs uppercase tracking-widest text-gold hover:underline"
            >
              Commission a Project →
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TRACK_RECORD_KPIS.map((item, idx) => (
              <div
                key={idx}
                className="border border-linen/15 bg-linen/5 p-8 flex flex-col justify-between hover:border-gold transition-colors"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-linen/10 pb-3 mb-4">
                    <span className="font-display text-3xl font-bold text-gold">
                      {item.kpi}
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-wider text-linen/50">
                      Delivered
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-linen">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-ember-bright font-medium">
                    {item.scope}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-linen/70">
                    {item.description}
                  </p>
                </div>

                {item.website && (
                  <div className="mt-6 pt-4 border-t border-linen/10">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-linen"
                    >
                      <span>Explore Live Project</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Web Projects List */}
          <div className="mt-16 pt-12 border-t border-linen/10">
            <p className="eyebrow text-gold mb-6">Digital Platforms Delivered</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WEB_PROJECTS.map((wp, idx) => (
                <div key={idx} className="border border-linen/15 p-5 bg-linen/5 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display text-base font-semibold text-linen">{wp.name}</h4>
                    <p className="text-[0.62rem] uppercase tracking-wider text-gold mt-1">{wp.scope}</p>
                    <p className="text-xs text-linen/60 mt-2 leading-relaxed">{wp.summary}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-linen/10">
                    <a
                      href={wp.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[0.68rem] text-gold hover:text-linen"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Books Gallery */}
      <section id="client-books" className="py-24 border-b border-linen/10 bg-secondary/10 scroll-mt-24">
        <div className="container-arc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold mb-3">Publishing Portfolio</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-linen">
              Books Designed & Produced For Clients
            </h2>
            <p className="mt-4 text-sm text-linen/70 leading-relaxed">
              Covers, interior layout, typesetting, and print-ready production delivered by Richson Creatives for independent authors and corporate titles.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {CLIENT_PUBLISHED_BOOKS.map((b) => (
              <div key={b.id} className="group flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-linen/5 border border-linen/15">
                  <img
                    src={b.coverUrl}
                    alt={b.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = SITE_COORDINATES.avatarUrl;
                    }}
                  />
                </div>
                <h4 className="mt-3 font-display text-xs font-semibold text-linen line-clamp-1 group-hover:text-gold transition-colors">
                  {b.title}
                </h4>
                <p className="text-[0.6rem] text-gold uppercase tracking-wider line-clamp-1 mt-0.5">
                  {b.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Capabilities */}
      <section id="services" className="py-24 border-b border-linen/10 bg-obsidian scroll-mt-24">
        <div className="container-arc">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-gold mb-3">Capabilities</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-linen">
              Four Core Studio Disciplines
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {CREATIVE_SERVICES.map((srv, idx) => (
              <div key={idx} className="border border-linen/15 bg-linen/5 p-8 md:p-10 space-y-6">
                <div>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold">
                    Discipline 0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-linen">
                    {srv.title}
                  </h3>
                  <p className="mt-2 text-sm text-linen/70 italic">
                    {srv.body}
                  </p>
                </div>

                <div className="pt-4 border-t border-linen/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-linen/50 mb-3">
                    Deliverables & Scope:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-linen/80">
                    {srv.items.map((it, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section id="process" className="py-24 border-b border-linen/10 bg-secondary/10 scroll-mt-24">
        <div className="container-arc">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-gold mb-3">Execution Rigour</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-linen">
              The Five-Step Studio Process
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {CREATIVE_PROCESS.map((prc) => (
              <div key={prc.number} className="border border-linen/15 bg-linen/5 p-6 space-y-3">
                <span className="font-display text-3xl font-bold text-gold">
                  {prc.number}
                </span>
                <h4 className="font-display text-lg font-semibold text-linen">
                  {prc.title}
                </h4>
                <p className="text-xs text-linen/70 leading-relaxed">
                  {prc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Brief Form */}
      <section id="start" className="py-24 bg-obsidian scroll-mt-24">
        <div className="container-arc grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* Form */}
          <div className="border border-linen/15 bg-linen/5 p-8 md:p-12">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="h-14 w-14 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-linen">
                  Project Brief Received
                </h3>
                <p className="text-sm text-linen/70 max-w-md mx-auto leading-relaxed">
                  Thank you — the studio has received your brief. You will receive an honest appraisal of scope, timeline, and budget within two working days.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <a
                    href={studioWhatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold py-3 px-6 text-xs"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Message The Studio on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline py-3 px-6 text-xs border-linen/30 text-linen hover:bg-linen hover:text-obsidian"
                  >
                    Send Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="eyebrow text-gold mb-2">Initiate Work</p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-linen">
                    Tell The Studio What You Need
                  </h3>
                  <p className="mt-1 text-xs text-linen/60">
                    Direct routing to info@richsoncreatives.com.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="eyebrow block mb-2 text-linen/70" htmlFor="cr-name">Name *</label>
                    <input
                      id="cr-name"
                      required
                      type="text"
                      value={briefForm.name}
                      onChange={(e) => setBriefForm({ ...briefForm, name: e.target.value })}
                      className="w-full border-b border-linen/20 bg-transparent py-2 text-sm text-linen focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="eyebrow block mb-2 text-linen/70" htmlFor="cr-email">Email *</label>
                    <input
                      id="cr-email"
                      required
                      type="email"
                      value={briefForm.email}
                      onChange={(e) => setBriefForm({ ...briefForm, email: e.target.value })}
                      className="w-full border-b border-linen/20 bg-transparent py-2 text-sm text-linen focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="eyebrow block mb-2 text-linen/70" htmlFor="cr-org">Organisation</label>
                    <input
                      id="cr-org"
                      type="text"
                      value={briefForm.organisation}
                      onChange={(e) => setBriefForm({ ...briefForm, organisation: e.target.value })}
                      className="w-full border-b border-linen/20 bg-transparent py-2 text-sm text-linen focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="eyebrow block mb-2 text-linen/70" htmlFor="cr-service">Required Service</label>
                    <select
                      id="cr-service"
                      value={briefForm.service}
                      onChange={(e) => setBriefForm({ ...briefForm, service: e.target.value })}
                      className="w-full border-b border-linen/20 bg-obsidian py-2 text-sm text-linen focus:outline-none focus:border-gold"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="eyebrow block mb-2 text-linen/70" htmlFor="cr-budget">Budget Range (optional)</label>
                    <input
                      id="cr-budget"
                      type="text"
                      placeholder="e.g. GHS 10,000–25,000"
                      value={briefForm.budget}
                      onChange={(e) => setBriefForm({ ...briefForm, budget: e.target.value })}
                      className="w-full border-b border-linen/20 bg-transparent py-2 text-sm text-linen focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="eyebrow block mb-2 text-linen/70" htmlFor="cr-timeline">Target Timeline</label>
                    <input
                      id="cr-timeline"
                      type="text"
                      placeholder="e.g. Launch in 6 weeks"
                      value={briefForm.timeline}
                      onChange={(e) => setBriefForm({ ...briefForm, timeline: e.target.value })}
                      className="w-full border-b border-linen/20 bg-transparent py-2 text-sm text-linen focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="eyebrow block mb-2 text-linen/70" htmlFor="cr-msg">Project Description *</label>
                  <textarea
                    id="cr-msg"
                    required
                    rows={4}
                    value={briefForm.message}
                    onChange={(e) => setBriefForm({ ...briefForm, message: e.target.value })}
                    placeholder="Describe your objectives, current challenges, and desired deliverables..."
                    className="w-full border-b border-linen/20 bg-transparent py-2 text-sm text-linen focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-ember py-3.5 px-8 text-xs font-semibold w-full sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  <span>{submitting ? 'Transmitting Brief...' : 'Send Project Brief'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Studio Direct Coordinates */}
          <div className="space-y-6">
            <div className="border border-linen/15 bg-linen/5 p-6 space-y-4">
              <p className="eyebrow text-gold">Direct Lines</p>
              <div className="space-y-3 text-xs text-linen/80">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold" />
                  <a href={`tel:${CREATIVES_COORDINATES.phoneRaw}`} className="hover:text-gold">
                    {CREATIVES_COORDINATES.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold" />
                  <a href={`mailto:${CREATIVES_COORDINATES.email}`} className="hover:text-gold">
                    {CREATIVES_COORDINATES.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span>{CREATIVES_COORDINATES.location}</span>
                </div>
              </div>
            </div>

            <div className="border border-linen/15 bg-gold/10 p-6 space-y-3">
              <p className="eyebrow text-gold">Fast Track</p>
              <h4 className="font-display text-lg font-semibold text-linen">
                Prefer WhatsApp?
              </h4>
              <p className="text-xs text-linen/70">
                WhatsApp is the fastest route directly to the studio's creative director.
              </p>
              <a
                href={studioWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-gold py-2.5 px-5 text-xs w-full text-center justify-center"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
