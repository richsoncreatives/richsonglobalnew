import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import {
  CREATIVES_COORDINATES,
  VENTURES,
  EMERGING_VENTURE,
  MARQUEE_QUOTES
} from '../data/siteData';
import { Marquee } from '../components/Marquee';
import { InteractivePortrait } from '../components/InteractivePortrait';

const DESTINATION_PREVIEWS = [
  {
    eyebrow: 'Richson Creatives',
    title: 'Client Websites, Brand Systems & Client Publishing',
    summary:
      'Inspect live front pages engineered for CORM, Kerd Farms, Isaiah Adegoke, and Richson Global, alongside 19+ client-produced books and enterprise IT systems.',
    cta: 'Open Creatives Portfolio',
    path: '/creatives/portfolio'
  },
  {
    eyebrow: 'Personal Authorship',
    title: '18 Authored Books by Eric Richson Darko',
    summary:
      'Browse 15 solo titles and 3 co-authored volumes on relational intelligence, leadership capacity, and spiritual architecture—separate from studio client work.',
    cta: 'Browse Digital Library',
    path: '/library-store'
  },
  {
    eyebrow: 'Methodology & Ethos',
    title: 'Five-Stage Venture Framework & Core Values',
    summary:
      'Examine how ideas move from identification to self-sustaining institutions designed to outlive their founders.',
    cta: 'Read Our Approach',
    path: '/approach'
  },
  {
    eyebrow: 'Blog Nuggets & Essays',
    title: 'Curated Reflections on Leadership, Tech & Faith',
    summary:
      'Short diagnostic perspectives on systems thinking, creative discipline, relational clarity, and marketplace stewardship.',
    cta: 'Read Insights',
    path: '/insights'
  }
];

export const HomePage: React.FC = () => {
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

          {/* Right Interactive Portrait Stage */}
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
      <Marquee quotes={MARQUEE_QUOTES} />

      {/* Concise Executive Thesis Gateway */}
      <section className="py-20 md:py-24 border-b border-border bg-linen">
        <div className="container-arc grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-start">
          <div>
            <p className="eyebrow text-gold mb-3">Executive Overview</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian leading-tight [text-wrap:balance]">
              Building Beyond The Founder.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground max-w-2xl">
            <p className="text-obsidian font-medium">
              Founded by Eric Richson Darko in Accra, Ghana, Richson Global is the parent umbrella housing distinct ventures across creative technology, personal authorship, disciplined reading communities, and pastoral leadership.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-maritime hover:text-gold transition-colors border-b border-maritime pb-1"
              >
                <span>Founder Profile</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/approach"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-maritime hover:text-gold transition-colors border-b border-maritime pb-1"
              >
                <span>Institutional Approach</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Concise Ecosystem Gateway (High-Level Directional Cards Only) */}
      <section className="py-20 md:py-24 border-b border-border bg-secondary/30">
        <div className="container-arc">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow text-gold mb-3">Our Ecosystem</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian [text-wrap:balance]">
                Distinct Entities. Clear Boundaries.
              </h2>
            </div>
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-maritime hover:text-gold transition-colors whitespace-nowrap"
            >
              <span>View Ecosystem Structure</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VENTURES.map((v) => (
              <Link
                key={v.id}
                to={v.path}
                className="group flex flex-col justify-between border border-border bg-linen p-7 transition-colors duration-200 hover:border-gold"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold tabular-nums">
                      {v.number}
                    </span>
                    {v.mark?.src && (
                      <div className="h-9 w-9 shrink-0 overflow-hidden bg-white border border-border flex items-center justify-center p-1">
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

                  <h3 className="font-display text-xl font-semibold text-obsidian group-hover:text-maritime transition-colors">
                    {v.name}
                  </h3>
                  <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wider text-maritime">
                    {v.category}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {v.purpose || v.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-maritime group-hover:text-gold transition-colors">
                  <span>{v.ctaLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                </div>
              </Link>
            ))}
          </div>

          {/* Emerging Ventures Compact Strip */}
          <div className="mt-6 border border-border bg-obsidian text-linen p-7 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                05 · {EMERGING_VENTURE.name}
              </p>
              <p className="mt-2 text-sm text-linen/75 leading-relaxed">
                Open to strategic alliances, institutional collaborations, and emerging ventures aligned with long-term value creation.
              </p>
            </div>
            <Link
              to="/partnerships"
              className="btn-gold py-3 px-6 text-xs whitespace-nowrap self-start md:self-auto"
            >
              <span>Explore Partnerships</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Directional Destination Previews (Zero Duplicated Subpage Blocks) */}
      <section className="py-20 md:py-24 border-b border-border bg-linen">
        <div className="container-arc">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow text-gold mb-3">Quick Pathways</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
              Navigate Directly To Each Archive
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {DESTINATION_PREVIEWS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group border border-border bg-card p-8 flex flex-col justify-between hover:border-gold transition-colors"
              >
                <div>
                  <p className="eyebrow text-gold mb-2">{item.eyebrow}</p>
                  <h3 className="font-display text-2xl font-semibold text-obsidian group-hover:text-maritime transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-maritime group-hover:text-gold transition-colors">
                  <span>{item.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
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
            Commission Richson Creatives ({CREATIVES_COORDINATES.phoneDisplay}), order authored titles, connect with Wisefold Network, or propose a strategic partnership.
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
              to="/creatives/portfolio"
              className="btn-ember py-3.5 px-8 text-xs font-semibold whitespace-nowrap"
            >
              <span>Richson Creatives Portfolio</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
