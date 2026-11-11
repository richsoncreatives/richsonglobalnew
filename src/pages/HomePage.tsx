import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Layers,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';
import {
  SITE_COORDINATES,
  VENTURES,
  EMERGING_VENTURE,
  APPROACH_STAGES,
  FEATURED_BOOKS,
  ALL_BOOKS,
  TRACK_RECORD_KPIS,
  CAPACITY_QUOTES,
  Book
} from '../data/siteData';
import { Marquee } from '../components/Marquee';
import { BookModal } from '../components/BookModal';

export const HomePage: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-border">
        {/* Subtle radial background glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-arc grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Left Text Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-maritime">
                Executive & Creative Archive
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-obsidian leading-[1.12]">
              More Than a Name. <br />
              <span className="text-maritime">A Growing Ecosystem</span> of Ideas & Enterprise.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
              An ecosystem uniting brand identity & digital systems (<span className="text-obsidian font-medium">Richson Creatives</span>), personal authorship (<span className="text-obsidian font-medium">18 published titles</span>), disciplined intellectual capacity (<span className="text-obsidian font-medium">Wisefold Network</span>), and youth pastoral leadership.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                to="/ecosystem"
                className="btn-navy py-3 px-7 text-xs font-semibold"
              >
                <span>Explore The Ecosystem</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/creatives"
                className="btn-ember py-3 px-7 text-xs font-semibold"
              >
                <Sparkles className="h-4 w-4" />
                <span>Richson Creatives Studio</span>
              </Link>
              <Link
                to="/library-store"
                className="btn-outline py-3 px-7 text-xs font-semibold"
              >
                <span>Author's Bookstore</span>
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-maritime">18</p>
                <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground mt-0.5">
                  Published Books
                </p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-gold">99.5%</p>
                <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground mt-0.5">
                  Systems Uptime
                </p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-obsidian">05</p>
                <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground mt-0.5">
                  Ecosystem Pillars
                </p>
              </div>
            </div>
          </div>

          {/* Right Portrait Column */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-border shadow-2xl bg-obsidian">
              <img
                src={SITE_COORDINATES.heroPortrait}
                alt={SITE_COORDINATES.founderName}
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = SITE_COORDINATES.portraitUrl;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />

              {/* Founder Caption Card on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-linen/95 backdrop-blur-md border border-border shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-display text-lg font-bold text-obsidian">
                      {SITE_COORDINATES.founderName}
                    </h2>
                    <p className="text-[0.62rem] uppercase tracking-[0.25em] text-gold font-semibold">
                      {SITE_COORDINATES.title}
                    </p>
                  </div>
                  <Link
                    to="/about"
                    className="p-2 bg-maritime text-linen hover:bg-gold transition-colors rounded-xs"
                    aria-label="Read full bio"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-obsidian leading-tight">
              Building Beyond <br />The Founder.
            </h2>
          </div>

          <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p className="text-obsidian font-medium">
              Richson Global represents a collection of enterprises, initiatives and capabilities united by a common thesis: meaningful growth requires building structures, people, and processes that outlive their originators.
            </p>
            <p>
              What began with individual design craft, systems administration, and pastoral counseling is structured into an expanding ecosystem of distinct ventures. Each carries its own mandate, serves a unique audience, and reinforces the collective capacity.
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow text-gold mb-3">Our Ecosystem</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Distinct Mandates. Shared Standard.
              </h2>
            </div>
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-maritime hover:text-gold transition-colors"
            >
              <span>Explore All Pillars</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {VENTURES.map((v) => (
              <div
                key={v.id}
                className="group relative flex flex-col justify-between border border-border bg-linen p-8 md:p-10 shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                      Venture {v.number}
                    </span>
                    <span className="text-[0.6rem] font-semibold uppercase tracking-wider bg-secondary px-2.5 py-1 text-muted-foreground">
                      {v.status}
                    </span>
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
                          <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
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
              <span className="eyebrow text-gold">Venture 05</span>
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
              <span>Explore Strategic Partnerships</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Authorship Section */}
      <section className="py-20 md:py-28 border-b border-border bg-linen">
        <div className="container-arc">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow text-gold mb-3">Personal Authorship</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                The Digital Library
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                Eighteen published titles examining spiritual architecture, relational intelligence, and vocational capacity.
              </p>
            </div>
            <Link
              to="/library-store"
              className="btn-navy py-2.5 px-6 text-xs font-semibold"
            >
              <span>View All 18 Titles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Featured Books Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_BOOKS.slice(0, 4).map((book) => (
              <div
                key={book.id}
                onClick={() => setSelectedBook(book)}
                className="group cursor-pointer flex flex-col border border-border bg-card p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-obsidian/5 border border-border/60">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = SITE_COORDINATES.avatarUrl;
                    }}
                  />
                  <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/20 transition-colors" />
                </div>

                <div className="mt-4 flex flex-1 flex-col justify-between">
                  <div>
                    <span className="eyebrow text-gold text-[0.62rem]">{book.category}</span>
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
                    <span className="font-bold text-obsidian font-display text-sm">
                      GHS {book.priceGhs}
                    </span>
                    <span className="text-[0.68rem] font-semibold text-maritime uppercase tracking-wider group-hover:text-gold transition-colors">
                      View Details & Order →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Approach (5 Stages) */}
      <section className="py-20 md:py-28 border-b border-border bg-secondary/20">
        <div className="container-arc">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-gold mb-3">Methodology</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
              The Five-Stage Capacity Framework
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              How ideas transform into structured institutions: from identifying latent talent to building self-sustaining governance beyond the founder.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {APPROACH_STAGES.map((stg) => (
              <div
                key={stg.number}
                className="border border-border bg-linen p-6 flex flex-col justify-between relative"
              >
                <div>
                  <span className="font-display text-3xl font-bold text-gold/60">
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

      {/* Track Record & Enterprise Case Studies */}
      <section className="py-20 md:py-28 border-b border-border bg-linen">
        <div className="container-arc">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow text-gold mb-3">Enterprise Track Record</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Tested In Production. Proven In Execution.
              </h2>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-maritime hover:text-gold transition-colors"
            >
              <span>Read Full Executive Record</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TRACK_RECORD_KPIS.slice(0, 6).map((item, idx) => (
              <div
                key={idx}
                className="border border-border bg-card p-7 flex flex-col justify-between shadow-xs hover:border-gold transition-colors"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-border pb-3 mb-4">
                    <span className="font-display text-3xl font-bold text-maritime">
                      {item.kpi}
                    </span>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-wider text-gold">
                      Validated
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
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-linen leading-tight">
            Ready to Build With Rigour & Purpose?
          </h2>
          <p className="text-base text-linen/75 leading-relaxed">
            Whether inquiring about creative agency partnerships, purchasing book licenses, exploring Wisefold Network, or scheduling leadership engagements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="btn-gold py-3.5 px-8 text-xs font-semibold"
            >
              <span>Contact The Executive Desk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/creatives"
              className="btn-ember py-3.5 px-8 text-xs font-semibold"
            >
              <Sparkles className="h-4 w-4" />
              <span>Explore Richson Creatives</span>
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
    </div>
  );
};
