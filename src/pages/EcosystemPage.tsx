import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, CheckCircle2, ExternalLink } from 'lucide-react';
import { EMERGING_VENTURE, SITE_COORDINATES, CREATIVES_COORDINATES, WEB_PROJECTS } from '../data/siteData';

export const EcosystemPage: React.FC = () => {
  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Page Header */}
      <section className="container-arc py-12 md:py-20 border-b border-border">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold mb-3">Our Ecosystem</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1]">
            Ventures, Practices &amp; Initiatives
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Explore the Richson Global ecosystem: each venture addresses a distinct societal or organizational need, operates with clear brand separation, and shares an uncompromising standard of execution.
          </p>
        </div>
      </section>

      {/* Ventures Detailed Breakdown */}
      <section className="py-20 border-b border-border bg-linen">
        <div className="container-arc space-y-20">
          {/* Venture 01: Richson Creatives */}
          <div id="creatives" className="grid gap-12 lg:grid-cols-2 items-center border border-border bg-card p-8 md:p-14 scroll-mt-28">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                01 · Operating Venture
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Richson Creatives
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-maritime">
                Creative &amp; Technology Services Company · {CREATIVES_COORDINATES.phoneDisplay}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Richson Creatives brings together creative thinking, design excellence, client book publishing production, and technological innovation to help individuals, businesses, and institutions establish memorable identities and solve practical operational challenges.
              </p>
              <div className="space-y-2 border-t border-border pt-4">
                <p className="text-xs font-semibold text-obsidian uppercase tracking-wider">Practice Areas</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />Brand identity &amp; strategy</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />Packaging design &amp; SKU systems</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />Client book design &amp; publishing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />Web &amp; digital platforms</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />IT systems infrastructure</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />Print &amp; publishing coordination</li>
                </ul>
              </div>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/creatives" className="btn-ember py-3 px-6 text-xs whitespace-nowrap">
                  <span>Enter Richson Creatives</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/creatives#platforms" className="btn-outline py-3 px-6 text-xs whitespace-nowrap">
                  <span>View Client Websites</span>
                </Link>
              </div>
            </div>

            <div className="border border-border bg-obsidian text-linen p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={CREATIVES_COORDINATES.markUrl}
                  alt="Richson Creatives emblem"
                  referrerPolicy="no-referrer"
                  className="h-16 w-16 object-contain shrink-0"
                />
                <div>
                  <p className="eyebrow text-gold">The Studio Creed</p>
                  <blockquote className="mt-1 font-display text-xl font-semibold leading-snug text-linen">
                    "To make good organisations visible, credible and easy to choose."
                  </blockquote>
                </div>
              </div>

              {/* Client Platforms Mini Preview Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {WEB_PROJECTS.map((wp) => (
                  <a
                    key={wp.domain}
                    href={wp.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block border border-linen/15 overflow-hidden bg-black hover:border-gold transition-colors"
                  >
                    <img
                      src={wp.screenshotUrl}
                      alt={`${wp.name} front page`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[16/10] object-cover object-top"
                    />
                    <div className="px-2.5 py-1.5 flex items-center justify-between text-[0.65rem] text-linen/80 group-hover:text-gold">
                      <span className="truncate">{wp.domain}</span>
                      <ExternalLink className="h-3 w-3 shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Venture 02: Personal Authorship */}
          <div id="authorship" className="grid gap-12 lg:grid-cols-2 items-center border border-border bg-card p-8 md:p-14 scroll-mt-28">
            <div className="border border-border bg-linen p-8 md:p-12 flex flex-col justify-between space-y-8 order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <span className="h-14 w-14 rounded-full bg-white border border-border overflow-hidden flex items-center justify-center shrink-0">
                  <img
                    src={SITE_COORDINATES.logoUrl}
                    alt="Eric Richson Darko authorship emblem"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain p-1"
                  />
                </span>
                <p className="eyebrow text-gold">Personal Authorship Practice</p>
              </div>
              <blockquote className="font-display text-2xl font-semibold leading-snug text-obsidian">
                "Words build worlds — and they demolish them. Ideas disciplined into print outlive empires."
              </blockquote>
              <div className="pt-6 border-t border-border text-xs text-muted-foreground space-y-1">
                <p className="font-semibold text-obsidian">Independent from Richson Creatives Client Services</p>
                <p>Available directly via Selar, Mobile Money ({SITE_COORDINATES.momo}), and ePub &amp; PDF digital delivery.</p>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                02 · 18 Published Titles
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Personal Authorship
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-maritime">
                Books, Writing &amp; Intellectual Contributions by Eric Richson Darko
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                The personal authorship practice of Eric Richson Darko: 18 published works (15 solo treatises, 3 co-authored works with Collins Angel Ross) addressing pre-marital readiness, relational discernment, leadership capacity, and declarative faith.
              </p>
              <div className="space-y-2 border-t border-border pt-4">
                <p className="text-xs font-semibold text-obsidian uppercase tracking-wider">Key Sub-Disciplines</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />The Three-Fold Cord (Altar, Home &amp; Field)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />Relational Intelligence &amp; Red Flags</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />360° Men &amp; Women of Capacity</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />Declarative Prayer &amp; Mindset Renewal</li>
                </ul>
              </div>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/library-store" className="btn-navy py-3 px-6 text-xs whitespace-nowrap">
                  <BookOpen className="h-4 w-4" />
                  <span>Browse Digital Bookstore</span>
                </Link>
                <Link to="/creatives#client-books" className="btn-outline py-3 px-6 text-xs whitespace-nowrap">
                  <span>Client Book Services (Richson Creatives)</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Venture 03: Wisefold Network */}
          <div id="wisefold" className="grid gap-12 lg:grid-cols-2 items-center border border-border bg-card p-8 md:p-14 scroll-mt-28">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                03 · Active Network Initiative · Founded July 10, 2024
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Wisefold Network
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-maritime">
                Disciplined Reading Community &amp; Capacity Hub
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Wisefold Network exists to counter superficial knowledge and mental stagnation by building a culture of intentional, book-by-book reading, rigorous knowledge synthesis, and peer accountability among young professionals, executives, and students.
              </p>
              <div className="space-y-3 border-t border-border pt-4">
                <div className="text-xs text-muted-foreground space-y-1">
                  <p className="font-semibold text-obsidian">Pillar 1: Structured Reading Culture</p>
                  <p>Book-by-book reading journeys that build sustained mental stamina.</p>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p className="font-semibold text-obsidian">Pillar 2: Intellectual Capacity Building</p>
                  <p>Training members in the discipline of knowledge synthesis, critical thinking, and practical execution.</p>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p className="font-semibold text-obsidian">Pillar 3: Leadership &amp; Character Development</p>
                  <p>Fostering peer accountability, moral integrity, and professional excellence.</p>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/contact" className="btn-gold py-3 px-6 text-xs whitespace-nowrap">
                  <Users className="h-4 w-4" />
                  <span>Inquire About Wisefold Membership</span>
                </Link>
              </div>
            </div>

            <div className="border border-border bg-obsidian text-linen p-8 md:p-12 flex flex-col justify-between space-y-8">
              <div className="flex items-center gap-4">
                <img
                  src={SITE_COORDINATES.wisefoldMark}
                  alt="Wisefold Network emblem"
                  referrerPolicy="no-referrer"
                  className="h-16 w-16 object-contain shrink-0"
                />
                <p className="eyebrow text-gold">The Wisefold Mandate</p>
              </div>
              <blockquote className="font-display text-2xl font-semibold leading-snug text-linen">
                "Ideas worth reading. Knowledge worth sharing. A disciplined mind cannot be easily enslaved."
              </blockquote>
              <div className="pt-6 border-t border-linen/15 text-xs text-linen/65 space-y-1">
                <p>Convener: Eric Richson Darko</p>
                <p>Format: Structured reading cohorts, synthesis papers, and discussion forums.</p>
              </div>
            </div>
          </div>

          {/* Venture 04: Pastoral Ministry */}
          <div id="ministry" className="grid gap-12 lg:grid-cols-2 items-center border border-border bg-card p-8 md:p-14 scroll-mt-28">
            <div className="border border-border bg-linen overflow-hidden order-2 lg:order-1 flex flex-col">
              <div className="aspect-[16/10] w-full overflow-hidden bg-obsidian">
                <img
                  src={SITE_COORDINATES.ministryPortrait}
                  alt="Pastoral Ministry and Youth Discipleship"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-8 space-y-4">
                <p className="eyebrow text-gold">Pastoral Oversight</p>
                <blockquote className="font-display text-xl font-semibold leading-snug text-obsidian">
                  "Discipleship that equips young adults to embody kingdom excellence in church and marketplace alike."
                </blockquote>
                <p className="text-xs text-muted-foreground pt-3 border-t border-border">
                  Charismatic Evangelistic Ministry (CEM), East Legon, Accra, Ghana.
                </p>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                04 · Ongoing Pastoral Ministry
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Ministry &amp; Discipleship
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-maritime">
                Youth Leadership, Spiritual Formation &amp; Marital Preservation
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Eric serves as an Associate Pastor with dedicated youth pastoral oversight at Charismatic Evangelistic Ministry (CEM), East Legon. His ministerial focus combines deep biblical exposition with pragmatic relational guidance and youth leadership formation.
              </p>
              <div className="space-y-2 border-t border-border pt-4">
                <p className="text-xs font-semibold text-obsidian uppercase tracking-wider">Pastoral Scope</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />Youth pastoral care &amp; discipleship</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />Pre-marital counseling &amp; vetting</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />Leadership development &amp; mentoring</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />Sermon &amp; conference speaking</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link to="/ministry" className="btn-navy py-3 px-6 text-xs whitespace-nowrap">
                  <span>Explore Pastoral Ministry Archive</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Venture 05: Emerging Ventures */}
          <div id="emerging" className="border border-border bg-obsidian text-linen p-8 md:p-14 scroll-mt-28">
            <div className="max-w-3xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                05 · Open Strategic Framework
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-linen">
                {EMERGING_VENTURE.name}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-linen/75">
                {EMERGING_VENTURE.description}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/partnerships" className="btn-gold py-3 px-7 text-xs whitespace-nowrap">
                  <span>Submit Partnership Proposal</span>
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
