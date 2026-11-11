import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, Users, HeartHandshake, CheckCircle2, ExternalLink } from 'lucide-react';
import { VENTURES, EMERGING_VENTURE, WEB_PROJECTS } from '../data/siteData';

export const EcosystemPage: React.FC = () => {
  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Page Header */}
      <section className="container-arc py-12 md:py-20 border-b border-border">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold mb-3">Our Ecosystem</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1]">
            Ventures, Practices & Initiatives
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Explore the Richson Global ecosystem: each venture addresses a distinct societal or organizational need, operates with independent systems, and shares an uncompromising standard of execution.
          </p>
        </div>
      </section>

      {/* Ventures Detailed Breakdown */}
      <section className="py-20 border-b border-border bg-linen">
        <div className="container-arc space-y-20">
          {/* Venture 01: Richson Creatives */}
          <div id="creatives" className="grid gap-12 lg:grid-cols-2 items-center border border-border bg-card p-8 md:p-14 shadow-sm scroll-mt-28">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-gold">Venture 01</span>
                <span className="text-xs uppercase tracking-wider bg-gold/15 text-gold px-2.5 py-0.5 font-semibold">Operating Studio</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Richson Creatives
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-maritime">
                Brand, Publishing & Digital Development Studio
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Richson Creatives brings together creative thinking, design excellence, and technological innovation to help individuals, businesses, and institutions establish memorable identities and solve practical operational challenges.
              </p>
              <div className="space-y-2 border-t border-border pt-4">
                <p className="text-xs font-semibold text-obsidian uppercase tracking-wider">Practice Areas:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />Brand identity & strategy</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />Packaging design & SKU systems</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />Book cover & interior layout</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />Web & digital platforms</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />IT systems infrastructure</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />Publishing coordination</li>
                </ul>
              </div>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/creatives" className="btn-ember py-3 px-6 text-xs">
                  <Sparkles className="h-4 w-4" />
                  <span>Enter Creatives Studio Portal</span>
                </Link>
                <Link to="/creatives#work" className="btn-outline py-3 px-6 text-xs">
                  <span>View Agency Portfolio</span>
                </Link>
              </div>
            </div>

            <div className="border border-border bg-obsidian text-linen p-8 md:p-12 flex flex-col justify-between aspect-square">
              <div>
                <p className="eyebrow text-gold">The Studio Creed</p>
                <blockquote className="mt-4 font-display text-2xl font-semibold leading-snug text-linen">
                  "To make good organisations visible, credible and easy to choose."
                </blockquote>
              </div>
              <div className="pt-6 border-t border-linen/15 text-xs text-linen/60 space-y-2">
                <p>Location: Accra, Ghana · Operating Internationally</p>
                <p>Clients: Financial institutions, agricultural leaders, publishing houses, and universities.</p>
              </div>
            </div>
          </div>

          {/* Venture 02: Personal Authorship */}
          <div id="authorship" className="grid gap-12 lg:grid-cols-2 items-center border border-border bg-card p-8 md:p-14 shadow-sm scroll-mt-28">
            <div className="border border-border bg-linen p-8 md:p-12 flex flex-col justify-between aspect-square order-2 lg:order-1">
              <div>
                <p className="eyebrow text-gold">Publishing Practice</p>
                <blockquote className="mt-4 font-display text-2xl font-semibold leading-snug text-obsidian">
                  "Words build worlds — and they demolish them. Ideas disciplined into print outlive empires."
                </blockquote>
              </div>
              <div className="pt-6 border-t border-border text-xs text-muted-foreground space-y-1">
                <p className="font-semibold text-obsidian">Digital Distribution & Licensing:</p>
                <p>Available directly via Selar, Mobile Money, and global ePub & PDF downloads.</p>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-gold">Venture 02</span>
                <span className="text-xs uppercase tracking-wider bg-secondary px-2.5 py-0.5 text-muted-foreground font-semibold">18 Titles</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Personal Authorship
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-maritime">
                Books, Writing & Intellectual Contributions
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                The personal authorship practice of Eric Richson Darko: 18 published works (15 solo treatises, 3 co-authored works with Collins Angel Ross) addressing pre-marital readiness, systemic relational discernment, leadership capacity, and declarative faith.
              </p>
              <div className="space-y-2 border-t border-border pt-4">
                <p className="text-xs font-semibold text-obsidian uppercase tracking-wider">Key Sub-Disciplines:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />The Three-Fold Cord (Altar, Home & Field)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />Relational Intelligence & Red Flags</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />360° Men & Women of Capacity</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />Declarative Prayer & Mindset Renewal</li>
                </ul>
              </div>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/library-store" className="btn-navy py-3 px-6 text-xs">
                  <BookOpen className="h-4 w-4" />
                  <span>Browse Digital Bookstore</span>
                </Link>
                <Link to="/library-store#publishing" className="btn-outline py-3 px-6 text-xs">
                  <span>Author Publishing Services</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Venture 03: Wisefold Network */}
          <div id="wisefold" className="grid gap-12 lg:grid-cols-2 items-center border border-border bg-card p-8 md:p-14 shadow-sm scroll-mt-28">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-gold">Venture 03</span>
                <span className="text-xs uppercase tracking-wider bg-gold/15 text-gold px-2.5 py-0.5 font-semibold">Founded July 10, 2024</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Wisefold Network
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-maritime">
                Disciplined Reading Community & Capacity Hub
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
                  <p className="font-semibold text-obsidian">Pillar 3: Leadership & Character Development</p>
                  <p>Fostering peer accountability, moral integrity, and professional excellence.</p>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/contact" className="btn-gold py-3 px-6 text-xs">
                  <Users className="h-4 w-4" />
                  <span>Inquire About Wisefold Membership</span>
                </Link>
              </div>
            </div>

            <div className="border border-border bg-obsidian text-linen p-8 md:p-12 flex flex-col justify-between aspect-square">
              <div>
                <p className="eyebrow text-gold">The Wisefold Mandate</p>
                <blockquote className="mt-4 font-display text-2xl font-semibold leading-snug text-linen">
                  "Ideas worth reading. Knowledge worth sharing. A disciplined mind cannot be easily enslaved."
                </blockquote>
              </div>
              <div className="pt-6 border-t border-linen/15 text-xs text-linen/60">
                <p>Convener: Eric Richson Darko</p>
                <p>Format: Structured reading cohorts, synthesis papers, and discussion forums.</p>
              </div>
            </div>
          </div>

          {/* Venture 04: Pastoral Ministry */}
          <div id="ministry" className="grid gap-12 lg:grid-cols-2 items-center border border-border bg-card p-8 md:p-14 shadow-sm scroll-mt-28">
            <div className="border border-border bg-linen p-8 md:p-12 flex flex-col justify-between aspect-square order-2 lg:order-1">
              <div>
                <p className="eyebrow text-gold">Pastoral Oversight</p>
                <blockquote className="mt-4 font-display text-2xl font-semibold leading-snug text-obsidian">
                  "Discipleship that equips young adults to embody kingdom excellence in church and marketplace alike."
                </blockquote>
              </div>
              <div className="pt-6 border-t border-border text-xs text-muted-foreground space-y-1">
                <p className="font-semibold text-obsidian">Assembly:</p>
                <p>Charismatic Evangelistic Ministry (CEM), East Legon, Accra, Ghana.</p>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-gold">Venture 04</span>
                <span className="text-xs uppercase tracking-wider bg-secondary px-2.5 py-0.5 text-muted-foreground font-semibold">Pastoral Call</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
                Ministry & Discipleship
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-maritime">
                Youth Leadership, Spiritual Formation & Marital Preservation
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Eric serves as an Associate Pastor with dedicated youth pastoral oversight at Charismatic Evangelistic Ministry (CEM), East Legon. His ministerial focus combines deep biblical exposition with pragmatic relational guidance and youth leadership formation.
              </p>
              <div className="space-y-2 border-t border-border pt-4">
                <p className="text-xs font-semibold text-obsidian uppercase tracking-wider">Pastoral Scope:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />Youth pastoral care & discipleship</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />Pre-marital counseling & vetting</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />Leadership development & mentoring</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-gold" />Sermon & conference speaking</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link to="/ministry" className="btn-navy py-3 px-6 text-xs">
                  <span>Explore Pastoral Ministry Archive</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Venture 05: Emerging Ventures */}
          <div id="emerging" className="border border-border bg-obsidian text-linen p-8 md:p-14 shadow-xl scroll-mt-28">
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-gold">Venture 05</span>
                <span className="text-xs uppercase tracking-wider bg-gold/20 text-gold px-2.5 py-0.5 font-semibold">Open Framework</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-linen">
                {EMERGING_VENTURE.name}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-linen/75">
                {EMERGING_VENTURE.description}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/partnerships" className="btn-gold py-3 px-7 text-xs">
                  <span>Submit Partnership Proposal</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-outline py-3 px-7 text-xs border-linen/30 text-linen hover:bg-linen hover:text-obsidian">
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
