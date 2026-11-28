import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users } from 'lucide-react';
import { EMERGING_VENTURE, SITE_COORDINATES, CREATIVES_COORDINATES } from '../data/siteData';

export const EcosystemPage: React.FC = () => {
  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Page Header */}
      <section className="container-arc py-12 md:py-20 border-b border-border">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold mb-3">Institutional Architecture</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1]">
            One Ecosystem. Six Distinct Entities.
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Richson Global maintains deliberate brand and operational separation across its parent umbrella, commercial studio, personal authorship, reading network, pastoral ministry, and emerging ventures.
          </p>
        </div>
      </section>

      {/* Parent Entity: Richson Global */}
      <section className="py-16 border-b border-border bg-obsidian text-linen">
        <div className="container-arc grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Parent Institutional Umbrella
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-linen">
              Richson Global
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-linen/75 max-w-2xl">
              The overarching strategic foundation founded by Eric Richson Darko. Richson Global anchors governance, institutional philosophy, and cross-venture stewardship while enabling each operating pillar to serve its distinct audience independently.
            </p>
          </div>
          <div className="flex flex-wrap lg:justify-end gap-3">
            <Link to="/approach" className="btn-gold py-3 px-6 text-xs whitespace-nowrap">
              <span>Institutional Framework</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="btn-outline py-3 px-6 text-xs border-linen/30 text-linen hover:bg-linen hover:text-obsidian whitespace-nowrap">
              <span>Founder Profile</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Structural Overview of Distinct Pillars */}
      <section className="py-20 border-b border-border bg-linen">
        <div className="container-arc space-y-12">
          {/* 01: Richson Creatives */}
          <div id="creatives" className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center border border-border bg-card p-8 md:p-12 scroll-mt-28">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                01 · Commercial Studio &amp; Technology Company
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Richson Creatives
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-maritime">
                Branding · Client Book Publishing Production · Web Engineering · IT Systems
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                The dedicated commercial agency and technology services company within the ecosystem. All client brand identity systems, website engineering, IT infrastructure engagements, and client book cover design, typesetting, and publishing services live exclusively under Richson Creatives.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link to="/creatives/portfolio" className="btn-ember py-3 px-6 text-xs whitespace-nowrap">
                  <span>Open Creatives Portfolio</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/creatives/portfolio#client-books" className="btn-outline py-3 px-6 text-xs whitespace-nowrap">
                  <span>Client Book Publishing</span>
                </Link>
              </div>
            </div>

            <div className="border border-border bg-obsidian text-linen p-8 space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src={CREATIVES_COORDINATES.markUrl}
                  alt="Richson Creatives emblem"
                  referrerPolicy="no-referrer"
                  className="h-14 w-14 object-contain shrink-0"
                />
                <div>
                  <p className="eyebrow text-gold">Entity Boundary</p>
                  <p className="text-xs text-linen/75 mt-1">
                    Commercial client work &amp; studio services ({CREATIVES_COORDINATES.phoneDisplay})
                  </p>
                </div>
              </div>
              <blockquote className="font-display text-lg font-semibold leading-snug text-linen border-t border-linen/15 pt-4">
                "To make good organisations visible, credible and easy to choose."
              </blockquote>
            </div>
          </div>

          {/* 02: Personal Authorship */}
          <div id="authorship" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center border border-border bg-card p-8 md:p-12 scroll-mt-28">
            <div className="border border-border bg-linen p-8 space-y-5 order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-white border border-border overflow-hidden flex items-center justify-center shrink-0">
                  <img
                    src={SITE_COORDINATES.logoUrl}
                    alt="Eric Richson Darko authorship emblem"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain p-1"
                  />
                </span>
                <div>
                  <p className="eyebrow text-gold">Entity Boundary</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Separate from Richson Creatives client publishing
                  </p>
                </div>
              </div>
              <blockquote className="font-display text-lg font-semibold leading-snug text-obsidian border-t border-border pt-4">
                "Ideas disciplined into print outlive seasons and build lasting intellectual equity."
              </blockquote>
            </div>

            <div className="space-y-5 order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                02 · Independent Authorship Catalog · 18 Authored Titles
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Personal Authorship — Eric Richson Darko
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-maritime">
                15 Solo · 3 Co-Authored
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Eric Richson Darko's personal catalog of written works covering spiritual formation, relational intelligence, pre-marital discernment, and leadership capacity—maintained strictly separate from commercial client book production handled by Richson Creatives.
              </p>
              <div className="pt-2">
                <Link to="/library-store" className="btn-navy py-3 px-6 text-xs whitespace-nowrap">
                  <BookOpen className="h-4 w-4" />
                  <span>Browse Personal Authorship Store</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 03: Wisefold Network */}
          <div id="wisefold" className="grid gap-10 lg:grid-cols-2 items-center border border-border bg-card p-8 md:p-12 scroll-mt-28">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                03 · Active Network Initiative · Founded July 10, 2024
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Wisefold Network — The House of Wisdom
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-maritime">
                Reading Discipline · Mentorship · Corporate Stewardship
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Headquartered in the Greater Accra Region, Ghana with global digital operations, Wisefold Network raises Wise Builders through systematic reading, peer accountability, mentorship, publishing, and transparent long-term stewardship.
              </p>
              <div className="pt-2">
                <Link to="/wisefold" className="btn-gold py-3 px-6 text-xs whitespace-nowrap">
                  <Users className="h-4 w-4" />
                  <span>Explore Wisefold Network</span>
                </Link>
              </div>
            </div>

            <div className="border border-border bg-obsidian text-linen p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={SITE_COORDINATES.wisefoldMark}
                  alt="Wisefold Network emblem"
                  referrerPolicy="no-referrer"
                  className="h-14 w-14 object-contain shrink-0"
                />
                <p className="eyebrow text-gold">The Wisefold Motto</p>
              </div>
              <blockquote className="font-display text-2xl font-semibold leading-snug text-linen">
                "Where the Manifold Wisdom of God becomes the Light of the World."
              </blockquote>
              <div className="pt-5 border-t border-linen/15 text-xs text-linen/65">
                Anchor Scriptures: Ephesians 3:10 · Proverbs 4:7
              </div>
            </div>
          </div>

          {/* 04: Pastoral Ministry */}
          <div id="ministry" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center border border-border bg-card p-8 md:p-12 scroll-mt-28">
            <div className="border border-border bg-linen overflow-hidden order-2 lg:order-1">
              <div className="aspect-[16/10] w-full overflow-hidden bg-obsidian">
                <img
                  src={SITE_COORDINATES.ministryPortrait}
                  alt="Pastoral Ministry and Youth Discipleship"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6 text-xs text-muted-foreground">
                Charismatic Evangelistic Ministry (CEM), East Legon &amp; College of Relationship &amp; Marriage (CORM).
              </div>
            </div>

            <div className="space-y-5 order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                04 · Faith &amp; Relational Leadership
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Ministry &amp; Discipleship
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-maritime">
                Youth Oversight · Pre-Marital Counseling · Biblical Teaching
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Pastoral oversight at Charismatic Evangelistic Ministry (CEM), East Legon, combined with relationship and marriage education through the College of Relationship &amp; Marriage (CORM).
              </p>
              <div className="pt-2">
                <Link to="/ministry" className="btn-navy py-3 px-6 text-xs whitespace-nowrap">
                  <span>Explore Ministry Page</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 05: Emerging Ventures */}
          <div id="emerging" className="border border-border bg-obsidian text-linen p-8 md:p-12 scroll-mt-28">
            <div className="max-w-3xl space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                05 · Open Strategic Framework
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-linen">
                {EMERGING_VENTURE.name}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-linen/75">
                {EMERGING_VENTURE.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/partnerships" className="btn-gold py-3 px-7 text-xs whitespace-nowrap">
                  <span>Explore Partnership Pathways</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-outline py-3 px-7 text-xs border-linen/30 text-linen hover:bg-linen hover:text-obsidian whitespace-nowrap">
                  <span>Connect With Leadership</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
