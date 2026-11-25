import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  X
} from 'lucide-react';
import {
  SITE_COORDINATES,
  CREATIVES_COORDINATES,
  VENTURES,
  EMERGING_VENTURE,
  APPROACH_STAGES,
  FEATURED_BOOKS,
  TRACK_RECORD_KPIS,
  WEB_PROJECTS,
  CAPACITY_QUOTES,
  Book,
  WebProject
} from '../data/siteData';
import { Marquee } from '../components/Marquee';
import { BookModal } from '../components/BookModal';
import { InteractivePortrait } from '../components/InteractivePortrait';

export const HomePage: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [previewPlatform, setPreviewPlatform] = useState<WebProject | null>(null);

  return (
    <div className="bg-linen min-h-screen">
      {/* Dark Luxury Front-Page Hero with Interactive 5-Expression Portrait */}
      <section className="relative overflow-hidden bg-obsidian text-linen pt-28 pb-16 md:pt-32 md:pb-20 border-b border-linen/10">
        <div className="ember-halo absolute inset-0 pointer-events-none" />
        <div className="grain-layer" />

        <div className="container-arc relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          {/* Left Copy Column */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
              Richson Global · Accra, Ghana
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-bold text-linen leading-[1.06] [text-wrap:balance]">
              An Ecosystem of Ideas, Enterprises &amp; Impact.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-linen/85 max-w-xl">
              We build ventures, develop ideas, strengthen systems and create opportunities that contribute to lasting impact.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-linen/65 max-w-xl">
              Through creativity, innovation, knowledge and purposeful leadership, we are building an ecosystem of enterprises and institutions designed to grow beyond their beginnings.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="btn-ember py-3.5 px-7 text-xs font-semibold whitespace-nowrap"
              >
                <span>Book Us / Start a Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/ecosystem"
                className="inline-flex items-center justify-center gap-2 border border-linen/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-linen hover:bg-linen hover:text-obsidian transition-colors whitespace-nowrap"
              >
                <span>Explore Our Ecosystem</span>
              </Link>
            </div>
          </div>

          {/* Right Interactive Portrait Stage (from attached archive) */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <InteractivePortrait />
          </div>
        </div>

        {/* Full-Width Key Metrics Strip */}
        <div className="container-arc relative z-10 mt-12 pt-8 border-t border-linen/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold text-gold tabular-nums">18</p>
              <p className="text-xs uppercase tracking-[0.18em] text-linen/60 mt-1">
                Authored Titles
              </p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold text-linen tabular-nums">99.5%</p>
              <p className="text-xs uppercase tracking-[0.18em] text-linen/60 mt-1">
                IT Systems Uptime
              </p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold text-gold tabular-nums">19+</p>
              <p className="text-xs uppercase tracking-[0.18em] text-linen/60 mt-1">
                Client Books Produced
              </p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold text-linen tabular-nums">05</p>
              <p className="text-xs uppercase tracking-[0.18em] text-linen/60 mt-1">
                Ecosystem Pillars
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <Marquee quotes={CAPACITY_QUOTES.slice(0, 8)} />

      {/* Introduction Thesis */}
      <section className="py-20 md:py-28 border-b border-border bg-linen">
        <div className="container-arc grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div>
            <p className="eyebrow text-gold mb-3">Institutional Vision</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-obsidian leading-tight [text-wrap:balance]">
              Building Beyond The Founder.
            </h2>
          </div>

          <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
            <p className="text-obsidian font-medium">
              Richson Global represents a collection of enterprises, initiatives and capabilities united by a common thesis: meaningful growth requires building structures, people, and processes that outlive their originators.
            </p>
            <p>
              What began with individual design craft, systems administration, and pastoral counseling is structured into an expanding ecosystem of distinct ventures. Each carries its own mandate, serves a unique audience, and reinforces collective capacity.
            </p>
            <div className="pt-2">
              <Link
                to="/approach"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-maritime hover:text-gold transition-colors border-b border-maritime pb-1"
              >
                <span>Read Our Institutional Approach</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Pillars Grid */}
      <section className="py-20 md:py-28 border-b border-border bg-secondary/30">
        <div className="container-arc">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-gold mb-3">Our Ecosystem</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian [text-wrap:balance]">
                Distinct Mandates. Shared Standard.
              </h2>
            </div>
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-maritime hover:text-gold transition-colors whitespace-nowrap"
            >
              <span>Explore All Pillars</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {VENTURES.map((v) => (
              <div
                key={v.id}
                className="group relative flex flex-col justify-between border border-border bg-linen p-8 md:p-10 transition-colors duration-200 hover:border-gold"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="font-semibold uppercase tracking-[0.24em] text-gold tabular-nums">
                        {v.number}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{v.status}</span>
                    </div>
                    {v.mark?.src && (
                      <div className="h-10 w-10 shrink-0 overflow-hidden bg-white border border-border flex items-center justify-center p-1">
                        <img
                          src={v.mark.src}
                          alt={v.mark.alt || v.name}
                          referrerPolicy="no-referrer"
                          className={`h-full w-full ${
                            v.mark.kind === 'image' ? 'object-cover object-top' : 'object-contain'
                          }`}
                        />
                      </div>
                    )}
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-obsidian group-hover:text-maritime transition-colors">
                    {v.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-maritime">
                    {v.category}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>

                  {v.focus && (
                    <div className="mt-6 space-y-1.5 border-t border-border/60 pt-4">
                      {v.focus.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                  <Link
                    to={v.path}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-maritime group-hover:text-gold transition-colors"
                  >
                    <span>{v.ctaLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Emerging Venture Banner */}
          <div className="mt-8 border border-border bg-obsidian text-linen p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                05 · {EMERGING_VENTURE.category}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-linen">
                {EMERGING_VENTURE.name}
              </h3>
              <p className="mt-2 text-sm text-linen/70 leading-relaxed">
                {EMERGING_VENTURE.description}
              </p>
            </div>
            <Link
              to={EMERGING_VENTURE.path}
              className="btn-gold py-3 px-6 whitespace-nowrap self-start md:self-auto"
            >
              <span>Explore Partnerships</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Digital Platforms Delivered (Client Website Front Pages Showcase) */}
      <section className="py-20 md:py-28 border-b border-border bg-linen">
        <div className="container-arc">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="eyebrow text-gold mb-3">Richson Creatives · Digital Platforms Delivered</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian [text-wrap:balance]">
                Websites Designed &amp; Engineered for Clients
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Live digital platforms built by Richson Creatives for institutions, agricultural enterprises, executive authors, and the Richson Global ecosystem.
              </p>
            </div>
            <Link
              to="/creatives#platforms"
              className="btn-ember py-2.5 px-6 text-xs font-semibold whitespace-nowrap"
            >
              <span>Visit Richson Creatives</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {WEB_PROJECTS.map((project) => (
              <div
                key={project.domain}
                className="group border border-border bg-card flex flex-col justify-between overflow-hidden transition-colors hover:border-gold"
              >
                <div>
                  {/* Browser Chrome & Front Page Screenshot */}
                  <button
                    type="button"
                    onClick={() => setPreviewPlatform(project)}
                    className="block w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maritime"
                    aria-label={`Preview ${project.name} front page screenshot`}
                  >
                    <div className="flex items-center justify-between px-4 py-2 bg-obsidian text-linen/70 text-[0.7rem] font-mono border-b border-linen/10">
                      <span className="truncate">{project.domain}</span>
                      <span className="text-gold shrink-0 ml-2">Front Page</span>
                    </div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-obsidian">
                      <img
                        src={project.screenshotUrl}
                        alt={`${project.name} website front page`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </button>

                  <div className="p-6 md:p-7 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-semibold text-gold">{project.scope}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{project.domain}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-obsidian group-hover:text-maritime transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    <p className="text-[0.72rem] text-obsidian/70 italic pt-1">
                      {project.attribution}
                    </p>
                  </div>
                </div>

                <div className="px-6 md:px-7 py-4 border-t border-border flex items-center justify-between gap-4 text-xs">
                  <button
                    type="button"
                    onClick={() => setPreviewPlatform(project)}
                    className="font-semibold uppercase tracking-[0.16em] text-obsidian/75 hover:text-maritime transition-colors cursor-pointer"
                  >
                    Inspect Front Page
                  </button>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-[0.16em] text-maritime hover:text-gold transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Personal Authorship Section */}
      <section className="py-20 md:py-28 border-b border-border bg-secondary/20">
        <div className="container-arc">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-gold mb-3">Personal Authorship · Eric Richson Darko</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                The Digital Library
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                Eighteen published titles examining spiritual architecture, relational intelligence, and vocational capacity. Separate from Richson Creatives client publishing services.
              </p>
            </div>
            <Link
              to="/library-store"
              className="btn-navy py-2.5 px-6 text-xs font-semibold whitespace-nowrap"
            >
              <span>View All 18 Titles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_BOOKS.slice(0, 4).map((book) => (
              <div
                key={book.id}
                onClick={() => setSelectedBook(book)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedBook(book);
                  }
                }}
                className="group cursor-pointer flex flex-col border border-border bg-card p-4 transition-colors duration-200 hover:border-gold"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-obsidian/5 border border-border/60">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = SITE_COORDINATES.logoUrl;
                    }}
                  />
                </div>

                <div className="mt-4 flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
                      {book.category}
                    </p>
                    <h3 className="mt-1 font-display text-base font-semibold text-obsidian leading-snug group-hover:text-maritime transition-colors">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-1 italic">
                        {book.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs">
                    <span className="font-bold text-obsidian font-display text-sm tabular-nums">
                      GHS {book.priceGhs}
                    </span>
                    <span className="text-[0.68rem] font-semibold text-maritime uppercase tracking-wider group-hover:text-gold transition-colors">
                      View &amp; Order →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Approach (5 Stages) */}
      <section className="py-20 md:py-28 border-b border-border bg-linen">
        <div className="container-arc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold mb-3">Methodology</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
              The Five-Stage Capacity Framework
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              How ideas transform into structured institutions: from identifying latent value to establishing self-sustaining governance beyond the founder.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {APPROACH_STAGES.map((stg) => (
              <div
                key={stg.number}
                className="border border-border bg-card p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-3xl font-bold text-gold/70 tabular-nums">
                    {stg.number}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-obsidian">
                    {stg.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {stg.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Track Record */}
      <section className="py-20 md:py-28 border-b border-border bg-secondary/25">
        <div className="container-arc">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-gold mb-3">Enterprise Track Record</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Tested In Production. Proven In Execution.
              </h2>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-maritime hover:text-gold transition-colors whitespace-nowrap"
            >
              <span>Read Full Executive Record</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TRACK_RECORD_KPIS.slice(0, 6).map((item, idx) => (
              <div
                key={idx}
                className="border border-border bg-linen p-7 flex flex-col justify-between hover:border-gold transition-colors"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-border pb-3 mb-4">
                    <span className="font-display text-3xl font-bold text-maritime tabular-nums">
                      {item.kpi}
                    </span>
                    <span className="text-[0.68rem] text-muted-foreground">
                      Delivered
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-obsidian">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-maritime font-medium">
                    {item.scope}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {item.website && (
                  <div className="mt-6 pt-3 border-t border-border">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-maritime hover:text-gold font-medium"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-maritime text-linen relative overflow-hidden">
        <div className="container-arc text-center max-w-3xl space-y-6">
          <p className="eyebrow text-gold">Initiate Engagement</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-linen leading-tight [text-wrap:balance]">
            Ready to Build With Rigour &amp; Purpose?
          </h2>
          <p className="text-base text-linen/80 leading-relaxed">
            Whether commissioning Richson Creatives ({CREATIVES_COORDINATES.phoneDisplay}), ordering books, joining Wisefold Network, or proposing strategic partnerships.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="btn-gold py-3.5 px-8 text-xs font-semibold whitespace-nowrap"
            >
              <span>Contact Executive Desk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/creatives"
              className="btn-ember py-3.5 px-8 text-xs font-semibold whitespace-nowrap"
            >
              <span>Explore Richson Creatives</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Book Detail Modal */}
      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}

      {/* Full-Screen Platform Screenshot Lightbox */}
      {previewPlatform && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-xs overflow-y-auto"
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
            <div className="px-5 py-3.5 border-t border-linen/15 text-xs text-linen/75 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>{previewPlatform.attribution}</span>
              <Link
                to="/creatives"
                onClick={() => setPreviewPlatform(null)}
                className="text-gold hover:underline shrink-0"
              >
                Engineered by Richson Creatives ({CREATIVES_COORDINATES.phoneDisplay})
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
