import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Send,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  X,
  Menu
} from 'lucide-react';
import {
  CREATIVES_COORDINATES,
  CREATIVES_SOCIAL_LINKS,
  CREATIVE_SERVICES,
  CREATIVE_PROCESS,
  TRACK_RECORD_KPIS,
  CLIENT_PUBLISHED_BOOKS,
  WEB_PROJECTS,
  SITE_COORDINATES,
  WebProject
} from '../data/siteData';
import { XBrandIcon } from '../components/Icons';
import { submitInquiry, SubmissionOutcome } from '../lib/formService';

const SERVICE_OPTIONS = [
  'Branding & Visual Communication',
  'Client Book Design, Formatting & Publishing Services',
  'Website & Digital Platform Development',
  'Technology & IT Infrastructure Solutions',
  'Complete Creative Direction Retainer'
];

export const CreativesPage: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [previewPlatform, setPreviewPlatform] = useState<WebProject | null>(null);
  const [briefForm, setBriefForm] = useState({
    name: '',
    email: '',
    organisation: '',
    service: SERVICE_OPTIONS[0],
    budget: '',
    timeline: '',
    message: ''
  });
  const [outcome, setOutcome] = useState<SubmissionOutcome | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitInquiry({
      channel: 'creatives',
      name: briefForm.name,
      email: briefForm.email,
      organisation: briefForm.organisation,
      topic: briefForm.service,
      budget: briefForm.budget,
      timeline: briefForm.timeline,
      message: briefForm.message
    });
    setOutcome(res);
    setSubmitting(false);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Richson Creatives Studio, I would like to inquire about "${briefForm.service}".`
  );
  const studioWhatsappUrl = `https://wa.me/${CREATIVES_COORDINATES.phoneRaw}?text=${whatsappMessage}`;

  const renderSocialIcon = (name: string) => {
    switch (name) {
      case 'Instagram':
        return <Instagram className="h-4 w-4" />;
      case 'Facebook':
        return <Facebook className="h-4 w-4" />;
      case 'LinkedIn':
        return <Linkedin className="h-4 w-4" />;
      case 'X':
        return <XBrandIcon className="h-3.5 w-3.5" />;
      case 'WhatsApp':
        return <MessageSquare className="h-4 w-4" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-obsidian text-linen min-h-screen">
      {/* Clean Inline 3-Zone Studio Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian/95 backdrop-blur-md border-b border-linen/15 py-3.5">
        <div className="container-arc flex items-center justify-between gap-8">
          {/* Zone 1: Official Logo + Studio Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group"
            aria-label="Richson Creatives — Return to Richson Global"
          >
            <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-gold/40 flex items-center justify-center">
              <img
                src={SITE_COORDINATES.logoUrl}
                alt="Richson Global Logo"
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain p-0.5"
              />
            </span>
            <span className="font-display text-lg font-semibold text-linen group-hover:text-gold transition-colors">
              Richson Creatives
            </span>
          </Link>

          {/* Zone 2: Inline Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-[0.16em] text-linen/80"
            aria-label="Richson Creatives Navigation"
          >
            <Link to="/" className="hover:text-gold transition-colors whitespace-nowrap shrink-0">
              Richson Global
            </Link>
            <a href="#platforms" className="hover:text-gold transition-colors whitespace-nowrap shrink-0">
              Platforms
            </a>
            <a href="#work" className="hover:text-gold transition-colors whitespace-nowrap shrink-0">
              Work
            </a>
            <a href="#client-books" className="hover:text-gold transition-colors whitespace-nowrap shrink-0">
              Client Books
            </a>
            <a href="#services" className="hover:text-gold transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#process" className="hover:text-gold transition-colors whitespace-nowrap shrink-0">
              Process
            </a>
          </nav>

          {/* Zone 3: Single Primary CTA */}
          <div className="hidden lg:flex items-center shrink-0">
            <a href="#start" className="btn-ember py-2.5 px-5 text-xs font-semibold whitespace-nowrap">
              <span>Start Project</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="lg:hidden p-2 text-linen hover:text-gold cursor-pointer"
            aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileNavOpen && (
          <div className="lg:hidden border-t border-linen/15 bg-obsidian px-6 py-5 space-y-4">
            <nav className="flex flex-col space-y-3 text-sm text-linen/85">
              <Link to="/" onClick={() => setMobileNavOpen(false)} className="text-gold">
                ← Return to Richson Global
              </Link>
              <a href="#platforms" onClick={() => setMobileNavOpen(false)}>Digital Platforms Delivered</a>
              <a href="#work" onClick={() => setMobileNavOpen(false)}>Selected Work</a>
              <a href="#client-books" onClick={() => setMobileNavOpen(false)}>Client Books</a>
              <a href="#services" onClick={() => setMobileNavOpen(false)}>Services</a>
              <a href="#process" onClick={() => setMobileNavOpen(false)}>Process</a>
            </nav>
            <a
              href="#start"
              onClick={() => setMobileNavOpen(false)}
              className="btn-ember w-full py-2.5 text-xs"
            >
              <span>Start Project</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-linen/10">
        <div className="ember-halo absolute inset-0 pointer-events-none" />
        <div className="grain-layer" />

        <div className="container-arc relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Creative &amp; Technology Services Company · Accra, Ghana
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-linen [text-wrap:balance]">
              We make good organisations{' '}
              <span className="text-gold">visible, credible &amp; easy to choose.</span>
            </h1>

            <p className="text-base sm:text-lg text-linen/75 leading-relaxed max-w-2xl">
              Richson Creatives is the creative, publishing production, and technology engineering studio within the Richson Global ecosystem. We design brand identities, websites, IT systems, and client book publications across Ghana and West Africa.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a href="#start" className="btn-ember py-3.5 px-8 text-xs font-semibold whitespace-nowrap">
                <span>Send Project Brief</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#platforms" className="btn-ember-quiet py-3.5 px-8 text-xs font-semibold whitespace-nowrap">
                <span>Inspect Client Websites</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end justify-center">
            <div className="w-full max-w-xs border border-linen/15 bg-linen/5 p-8 text-center space-y-5">
              <img
                src={CREATIVES_COORDINATES.markUrl}
                alt="Richson Creatives Mark"
                referrerPolicy="no-referrer"
                className="mx-auto h-32 w-32 object-contain"
              />
              <div className="border-t border-linen/15 pt-4 space-y-1">
                <p className="font-display text-xl font-semibold text-linen">Richson Creatives</p>
                <p className="text-xs text-linen/65">{CREATIVES_COORDINATES.tagline}</p>
                <a
                  href={`tel:${CREATIVES_COORDINATES.phoneRaw}`}
                  className="inline-block pt-2 font-mono text-sm text-gold hover:underline tabular-nums"
                >
                  {CREATIVES_COORDINATES.phoneDisplay} · {CREATIVES_COORDINATES.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Metrics Strip */}
        <div className="container-arc relative z-10 mt-14 pt-8 border-t border-linen/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-linen/80">
          <div>
            <p className="font-display text-3xl font-bold text-gold tabular-nums">100+</p>
            <p className="text-xs uppercase tracking-wider text-linen/55 mt-1">Digital Assets (SIB Bank)</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-linen tabular-nums">15+ SKUs</p>
            <p className="text-xs uppercase tracking-wider text-linen/55 mt-1">Packaging Systems</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-gold tabular-nums">99.5%</p>
            <p className="text-xs uppercase tracking-wider text-linen/55 mt-1">Infrastructure Uptime</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-linen tabular-nums">19+</p>
            <p className="text-xs uppercase tracking-wider text-linen/55 mt-1">Client Books Produced</p>
          </div>
        </div>
      </section>

      {/* Digital Platforms Delivered — Client Website Front-Page Screenshots */}
      <section id="platforms" className="py-24 border-b border-linen/10 bg-obsidian scroll-mt-24">
        <div className="container-arc">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="eyebrow text-gold mb-3">Digital Platforms Delivered</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-linen [text-wrap:balance]">
                Front Pages of Websites Designed &amp; Engineered
              </h2>
              <p className="mt-3 text-sm text-linen/70 leading-relaxed">
                Every platform below was designed and engineered for real institutional, agricultural, executive, and publishing operations. Click any screenshot to inspect full-size.
              </p>
            </div>
            <a
              href="#start"
              className="text-xs uppercase tracking-[0.18em] text-gold hover:underline whitespace-nowrap"
            >
              Commission a Website →
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {WEB_PROJECTS.map((wp) => (
              <div
                key={wp.domain}
                className="group border border-linen/15 bg-linen/5 flex flex-col justify-between overflow-hidden hover:border-gold transition-colors"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setPreviewPlatform(wp)}
                    className="block w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    aria-label={`Inspect ${wp.name} front page`}
                  >
                    <div className="flex items-center justify-between px-4 py-2 bg-black/50 border-b border-linen/10 text-[0.72rem] font-mono text-linen/70">
                      <span className="truncate">{wp.domain}</span>
                      <span className="text-gold shrink-0 ml-2">Front Page Preview</span>
                    </div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                      <img
                        src={wp.screenshotUrl}
                        alt={`${wp.name} website front page`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </button>

                  <div className="p-6 md:p-7 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-linen/60">
                      <span className="text-gold font-semibold">{wp.scope}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{wp.domain}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-linen group-hover:text-gold transition-colors">
                      {wp.name}
                    </h3>
                    <p className="text-xs text-linen/70 leading-relaxed">{wp.summary}</p>
                    <p className="text-[0.72rem] text-linen/55 italic pt-1">{wp.attribution}</p>
                  </div>
                </div>

                <div className="px-6 md:px-7 py-4 border-t border-linen/10 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setPreviewPlatform(wp)}
                    className="uppercase tracking-[0.16em] text-linen/75 hover:text-gold transition-colors cursor-pointer"
                  >
                    Expand Screenshot
                  </button>
                  <a
                    href={wp.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold hover:text-linen font-semibold uppercase tracking-[0.16em]"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work & Case Studies */}
      <section id="work" className="py-24 border-b border-linen/10 bg-black/25 scroll-mt-24">
        <div className="container-arc">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-gold mb-3">Portfolio &amp; Track Record</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-linen">
                Selected Work &amp; Enterprise Systems
              </h2>
            </div>
            <a href="#start" className="text-xs uppercase tracking-widest text-gold hover:underline">
              Commission a Project →
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TRACK_RECORD_KPIS.map((item, idx) => (
              <div
                key={idx}
                className="border border-linen/15 bg-linen/5 p-7 flex flex-col justify-between hover:border-gold transition-colors"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-linen/10 pb-3 mb-4">
                    <span className="font-display text-3xl font-bold text-gold tabular-nums">
                      {item.kpi}
                    </span>
                    <span className="text-[0.68rem] text-linen/50">Delivered</span>
                  </div>
                  {item.screenshotUrl && (
                    <div className="mb-4 aspect-[16/9] overflow-hidden border border-linen/15 bg-black">
                      <img
                        src={item.screenshotUrl}
                        alt={`${item.title} website preview`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  )}
                  <h3 className="font-display text-xl font-semibold text-linen">{item.title}</h3>
                  <p className="mt-1 text-xs text-gold font-medium">{item.scope}</p>
                  <p className="mt-3 text-xs leading-relaxed text-linen/70">{item.description}</p>
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
        </div>
      </section>

      {/* Client Books Gallery (Strictly under Richson Creatives) */}
      <section id="client-books" className="py-24 border-b border-linen/10 bg-obsidian scroll-mt-24">
        <div className="container-arc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold mb-3">Client Publishing Services · Richson Creatives</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-linen">
              Books Designed, Formatted &amp; Produced For Clients
            </h2>
            <p className="mt-4 text-sm text-linen/70 leading-relaxed">
              Cover design, interior typesetting, print-ready production, and publishing coordination delivered by Richson Creatives for independent authors and institutional titles — distinct from Eric Richson Darko's personal authorship catalog.
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
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = SITE_COORDINATES.logoUrl;
                    }}
                  />
                </div>
                <h4 className="mt-3 font-display text-xs font-semibold text-linen line-clamp-1 group-hover:text-gold transition-colors">
                  {b.title}
                </h4>
                <p className="text-[0.65rem] text-gold line-clamp-1 mt-0.5">{b.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Capabilities */}
      <section id="services" className="py-24 border-b border-linen/10 bg-black/25 scroll-mt-24">
        <div className="container-arc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold mb-3">Capabilities</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-linen">
              Four Core Studio Disciplines
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {CREATIVE_SERVICES.map((srv, idx) => (
              <div key={idx} className="border border-linen/15 bg-linen/5 p-8 md:p-10 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold tabular-nums">
                    0{idx + 1}. Discipline
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-linen">{srv.title}</h3>
                  <p className="mt-2 text-sm text-linen/70 italic">{srv.body}</p>
                </div>

                <div className="pt-4 border-t border-linen/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-linen/55 mb-3">
                    Deliverables &amp; Scope
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
      <section id="process" className="py-24 border-b border-linen/10 bg-obsidian scroll-mt-24">
        <div className="container-arc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold mb-3">Execution Rigour</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-linen">
              The Five-Step Studio Process
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {CREATIVE_PROCESS.map((prc) => (
              <div key={prc.number} className="border border-linen/15 bg-linen/5 p-6 space-y-3">
                <span className="font-display text-3xl font-bold text-gold tabular-nums">
                  {prc.number}
                </span>
                <h4 className="font-display text-lg font-semibold text-linen">{prc.title}</h4>
                <p className="text-xs text-linen/70 leading-relaxed">{prc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Brief Form */}
      <section id="start" className="py-24 border-b border-linen/10 bg-black/25 scroll-mt-24">
        <div className="container-arc grid gap-12 lg:grid-cols-[1fr_360px]">
          <div className="border border-linen/15 bg-linen/5 p-8 md:p-12">
            {outcome ? (
              <div className="py-8 space-y-6">
                <div className="h-12 w-12 rounded-full bg-gold/20 text-gold flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-linen">
                  {outcome.status === 'delivered' ? 'Project Brief Dispatched' : 'Brief Ready for Direct Dispatch'}
                </h3>
                <p className="text-sm text-linen/75 max-w-xl leading-relaxed">{outcome.message}</p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={outcome.mailtoUrl}
                    className="btn-ember py-3 px-6 text-xs whitespace-nowrap"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Send via Email ({CREATIVES_COORDINATES.email})</span>
                  </a>
                  <a
                    href={outcome.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold py-3 px-6 text-xs whitespace-nowrap"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Send via WhatsApp ({CREATIVES_COORDINATES.phoneDisplay})</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setOutcome(null)}
                    className="btn-outline py-3 px-6 text-xs border-linen/30 text-linen hover:bg-linen hover:text-obsidian whitespace-nowrap"
                  >
                    Edit Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="eyebrow text-gold mb-2">Initiate Work</p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-linen">
                    Tell Richson Creatives What You Need
                  </h3>
                  <p className="mt-1 text-xs text-linen/60">
                    Direct routing to {CREATIVES_COORDINATES.email} · {CREATIVES_COORDINATES.phoneDisplay}
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
                  className="btn-ember py-3.5 px-8 text-xs font-semibold w-full sm:w-auto whitespace-nowrap"
                >
                  <Send className="h-4 w-4" />
                  <span>{submitting ? 'Submitting Brief...' : 'Send Project Brief'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Studio Direct Coordinates */}
          <div className="space-y-6">
            <div className="border border-linen/15 bg-linen/5 p-6 space-y-4">
              <p className="eyebrow text-gold">Studio Direct Lines</p>
              <div className="space-y-3 text-xs text-linen/80">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  <a href={`tel:${CREATIVES_COORDINATES.phoneRaw}`} className="hover:text-gold font-mono tabular-nums">
                    {CREATIVES_COORDINATES.phoneDisplay} ({CREATIVES_COORDINATES.phone})
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  <a href={`mailto:${CREATIVES_COORDINATES.email}`} className="hover:text-gold">
                    {CREATIVES_COORDINATES.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold shrink-0" />
                  <span>{CREATIVES_COORDINATES.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-linen/10 flex flex-wrap gap-2">
                {CREATIVES_SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Richson Creatives on ${s.name}`}
                    className="h-9 w-9 rounded-full border border-linen/20 flex items-center justify-center text-linen/80 hover:text-gold hover:border-gold transition-colors"
                  >
                    {renderSocialIcon(s.name)}
                  </a>
                ))}
              </div>
            </div>

            <div className="border border-linen/15 bg-gold/10 p-6 space-y-3">
              <p className="eyebrow text-gold">Fast Track</p>
              <h4 className="font-display text-lg font-semibold text-linen">Prefer WhatsApp?</h4>
              <p className="text-xs text-linen/70 leading-relaxed">
                Message Richson Creatives directly on {CREATIVES_COORDINATES.phoneDisplay} for immediate project scoping.
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

      {/* Studio Attribution Footer */}
      <footer className="py-10 bg-obsidian text-xs text-linen/60">
        <div className="container-arc flex flex-col sm:flex-row items-center justify-between gap-4 pb-12 sm:pb-0">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-white overflow-hidden flex items-center justify-center">
              <img
                src={SITE_COORDINATES.logoUrl}
                alt="Richson Global Logo"
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain p-0.5"
              />
            </span>
            <span>
              Designed &amp; Engineered by <strong className="text-gold">Richson Creatives</strong> ·{' '}
              <a href={`tel:${CREATIVES_COORDINATES.phoneRaw}`} className="text-linen hover:text-gold font-mono tabular-nums">
                {CREATIVES_COORDINATES.phoneDisplay}
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-gold">Richson Global</Link>
            <span aria-hidden="true">·</span>
            <Link to="/library-store" className="hover:text-gold">Personal Authorship</Link>
            <span aria-hidden="true">·</span>
            <Link to="/contact" className="hover:text-gold">Contact</Link>
          </div>
        </div>
      </footer>

      {/* Platform Screenshot Lightbox */}
      {previewPlatform && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xs overflow-y-auto"
          onClick={() => setPreviewPlatform(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-obsidian border border-linen/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-linen/15 text-linen">
              <div>
                <p className="font-display text-lg font-semibold">{previewPlatform.name}</p>
                <p className="text-xs text-linen/65">
                  {previewPlatform.scope} · {previewPlatform.domain}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={previewPlatform.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold py-2 px-4 text-xs whitespace-nowrap"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewPlatform(null)}
                  aria-label="Close preview"
                  className="p-2 text-linen/70 hover:text-linen cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <img
              src={previewPlatform.screenshotUrl}
              alt={`${previewPlatform.name} website front page`}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[75vh] object-contain bg-black"
            />
            <div className="px-5 py-3.5 border-t border-linen/15 text-xs text-linen/75">
              {previewPlatform.attribution}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
