import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Building2, ShieldCheck, Landmark, Compass } from 'lucide-react';
import { SITE_COORDINATES } from '../data/siteData';

type DeepDiveTab = 'governance' | 'stewardship' | 'vision';

const OPERATING_PILLARS = [
  {
    number: '01',
    title: 'Intellectual Discipline & Study Rhythm',
    body: 'Systematic reading across scripture, leadership, finance, management, marriage, and purpose using the "Chewing, Eating, Digesting, and Assimilating" method. Members revisit chapters for depth over speed, submit daily practical summaries by 11:00 PM GMT, and share distilled lessons publicly under #wisefoldnetwork as the community continues to grow.'
  },
  {
    number: '02',
    title: 'Gatherings & Accountability',
    body: 'Built on peer accountability ("Iron sharpens iron"), members convene for monthly online meetings dedicated to prayer, teaching, guidance, and fellowship, alongside End-of-Book Assemblies, annual End-of-Year Dinners, and a planned yearly 3-day conference.'
  },
  {
    number: '03',
    title: 'Mentorship & Legacy Standards',
    body: 'Raising "Wise Builders" committed to lifelong growth—including mentoring protégés, publishing books, pursuing postgraduate, academic, and entrepreneurial advancement, and cultivating disciplined savings habits.'
  },
  {
    number: '04',
    title: 'Corporate Savings & Long-Term Stewardship',
    body: 'Structured corporate savings and long-term investments anchored by a high standard of transparency, collective governance, and responsible asset stewardship built to endure across generations.'
  }
];

const AUDIENCE_CARDS = [
  {
    icon: BookOpen,
    title: 'Individuals',
    body: 'Build consistent reading habits, deep comprehension, personal discipline, and practical application in everyday life.'
  },
  {
    icon: Users,
    title: 'Churches & Ministries',
    body: 'Adopt structured reading cycles and accountability to strengthen discipleship, leadership depth, and shared learning.'
  },
  {
    icon: Building2,
    title: 'Teams & Organizations',
    body: 'Foster a culture of continuous learning, clear execution, and disciplined stewardship.'
  }
];

const VISION_PHASES = [
  {
    phase: 'Phase 1',
    period: 'Years 1–10 · 2025–2035',
    title: 'Establish & Consolidate',
    body: 'Institutional foundation, disciplined reading cycles, mentorship and publishing growth, monthly online fellowship, annual gatherings and the planned yearly 3-day conference, expanded digital reach, and long-term investment building.'
  },
  {
    phase: 'Phase 2',
    period: 'Years 11–20 · 2035–2045',
    title: 'Expand & Multiply',
    body: 'Launching the Wisefold Leadership Academy, expanding across chapters and nations, cultivating church and university partnerships, broadening publishing and certification pathways, and scaling collective impact.'
  },
  {
    phase: 'Phase 3',
    period: 'Years 21–30 · 2045–2055',
    title: 'Legacy & Succession',
    body: 'Establishing a permanent headquarters, institutional endowment and foundation structures, deliberate leadership succession, and enduring generational impact.'
  }
];

const DEEP_DIVE_TABS: { id: DeepDiveTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'governance', label: 'Governance & Constitution', icon: ShieldCheck },
  { id: 'stewardship', label: 'Corporate Savings & Investment Principles', icon: Landmark },
  { id: 'vision', label: '30-Year Vision (2025–2055)', icon: Compass }
];

export const WisefoldPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DeepDiveTab>('governance');

  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* 1. Hero & Core Identity */}
      <section className="bg-obsidian text-linen border-b border-linen/10 py-14 md:py-22 relative overflow-hidden">
        <div className="grain-layer" />
        <div className="container-arc relative z-10 space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 overflow-hidden bg-linen/10 border border-linen/20 flex items-center justify-center p-1.5">
                  <img
                    src={SITE_COORDINATES.wisefoldMark}
                    alt="Wisefold Network emblem"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                  Wisefold Network
                </p>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-linen leading-[1.08] [text-wrap:balance]">
                Wisefold Network — The House of Wisdom
              </h1>

              {/* Clean unboxed metadata */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-linen/70 tabular-nums">
                <span>Founded <strong className="text-linen font-semibold">July 10, 2024</strong></span>
                <span aria-hidden="true" className="text-gold">·</span>
                <span>Headquartered in the <strong className="text-linen font-semibold">Greater Accra Region, Ghana</strong></span>
                <span aria-hidden="true" className="text-gold">·</span>
                <span>Global Digital Operations</span>
              </div>

              <p className="font-display text-xl sm:text-2xl italic text-gold leading-snug max-w-2xl">
                “Where the Manifold Wisdom of God becomes the Light of the World.”
              </p>

              {/* Anchor Scriptures */}
              <div className="pt-2 space-y-1.5 text-xs sm:text-sm text-linen/75">
                <p>
                  <span className="uppercase tracking-[0.18em] text-gold font-semibold text-[0.7rem]">
                    Primary Anchor Scriptures:
                  </span>{' '}
                  <strong className="text-linen">Ephesians 3:10</strong> &amp; <strong className="text-linen">Proverbs 4:7</strong>
                </p>
                <p className="text-linen/60 text-xs">
                  Supporting Foundations: Proverbs 10:14 · Proverbs 13:14 · Proverbs 3:16
                </p>
              </div>
            </div>

            {/* The Wisefold Declaration */}
            <div className="border border-gold/35 bg-linen/5 p-8 md:p-10 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                The Wisefold Declaration
              </p>
              <blockquote className="font-display text-2xl sm:text-[1.7rem] font-semibold leading-snug text-linen">
                “We will read. We will submit. We will save. We will mentor. We will publish. We will build. No excuses. No shortcuts.”
              </blockquote>
              <div className="pt-4 border-t border-linen/15 flex flex-wrap items-center justify-between gap-3 text-xs text-linen/65">
                <span>#wisefoldnetwork</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-[0.16em] text-gold hover:text-linen transition-colors"
                >
                  <span>Inquire About Membership</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How Wisefold Operates */}
      <section className="py-20 md:py-24 border-b border-border bg-linen">
        <div className="container-arc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold mb-3">Operating Architecture</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian [text-wrap:balance]">
              How Wisefold Operates
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Four disciplined pillars govern daily study, community accountability, leadership formation, and long-term collective stewardship.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {OPERATING_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="border border-border bg-card p-8 md:p-9 space-y-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold tabular-nums">
                  {pillar.number}. Pillar
                </p>
                <h3 className="font-display text-2xl font-semibold text-obsidian leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who Wisefold Is For */}
      <section className="py-20 md:py-24 border-b border-border bg-secondary/30">
        <div className="container-arc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold mb-3">Community &amp; Alignment</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
              Who Wisefold Is For
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {AUDIENCE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="border border-border bg-linen p-8 space-y-4"
                >
                  <Icon className="h-5 w-5 text-gold" />
                  <h3 className="font-display text-2xl font-semibold text-obsidian">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Interactive Deep-Dive Tabs */}
      <section className="py-20 md:py-24 border-b border-border bg-linen">
        <div className="container-arc">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow text-gold mb-3">Institutional Framework</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian [text-wrap:balance]">
              Governance, Stewardship &amp; 30-Year Vision
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Explore the constitutional principles, collective investment standards, and generational roadmap guiding Wisefold Network.
            </p>
          </div>

          {/* Tab Selector Bar */}
          <div
            role="tablist"
            aria-label="Wisefold Network institutional details"
            className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 border-b border-border"
          >
            {DEEP_DIVE_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap shrink-0 border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-maritime text-linen border-maritime'
                      : 'bg-card text-obsidian/80 border-border hover:border-maritime hover:text-obsidian'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? 'text-gold' : 'text-maritime'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Panels */}
          <div className="border border-border bg-card p-8 md:p-12">
            {activeTab === 'governance' && (
              <div
                id="panel-governance"
                role="tabpanel"
                aria-labelledby="tab-governance"
                className="space-y-8"
              >
                <div className="max-w-3xl space-y-3">
                  <p className="eyebrow text-gold">Constitutional Order</p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-obsidian">
                    Governance &amp; Constitution
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    Wisefold Network operates under a written founding Constitution that defines membership categories, leadership accountability, conflict resolution, and financial integrity so the community grows as an enduring institution rather than an informal club.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3 pt-2 border-t border-border">
                  <div className="space-y-2 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maritime">
                      Three-Tier Leadership
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Stewarded through <strong className="text-obsidian">The Head / Visionary</strong>, the <strong className="text-obsidian">Executive Council</strong>, and an independent <strong className="text-obsidian">Board of Advisors</strong> serving within defined leadership terms.
                    </p>
                  </div>
                  <div className="space-y-2 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maritime">
                      Membership &amp; Restoration
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Structured membership categories uphold clear expectations of participation, while disputes and discipline follow biblical conflict resolution principles aimed at unity and accountability.
                    </p>
                  </div>
                  <div className="space-y-2 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maritime">
                      Financial Oversight
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      All institutional accounts and disbursements require dual-signatory financial oversight and transparent reporting to protect member trust and long-term stewardship.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'stewardship' && (
              <div
                id="panel-stewardship"
                role="tabpanel"
                aria-labelledby="tab-stewardship"
                className="space-y-8"
              >
                <div className="max-w-3xl space-y-3">
                  <p className="eyebrow text-gold">Collective Asset Discipline</p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-obsidian">
                    Corporate Savings &amp; Investment Principles
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    Wisefold Network practices structured corporate savings and long-term investments anchored by a high standard of transparency, shared accountability, and prudent risk management.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3 pt-2 border-t border-border">
                  <div className="space-y-2 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maritime">
                      Collective Approval
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Major investment decisions are never unilateral; they require a formal <strong className="text-obsidian">majority vote</strong> and clearly defined <strong className="text-obsidian">percentage thresholds</strong> for approval.
                    </p>
                  </div>
                  <div className="space-y-2 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maritime">
                      Compliance &amp; Transparency
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Consistent participation standards, dual-signatory controls, and periodic member briefings ensure every stewardship decision meets rigorous compliance expectations.
                    </p>
                  </div>
                  <div className="space-y-2 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maritime">
                      Structured Exits
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Clear constitutional percentage thresholds govern orderly withdrawals and structured exits, safeguarding both individual fairness and the stability of long-term collective assets.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div
                id="panel-vision"
                role="tabpanel"
                aria-labelledby="tab-vision"
                className="space-y-8"
              >
                <div className="max-w-3xl space-y-3">
                  <p className="eyebrow text-gold">Generational Roadmap</p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-obsidian">
                    30-Year Vision (2025–2055)
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    A deliberate three-phase progression designed to establish institutional roots, multiply leadership across nations, and transition into multi-generational legacy.
                  </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3 pt-2 border-t border-border">
                  {VISION_PHASES.map((item) => (
                    <div key={item.phase} className="pt-4 space-y-2.5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold tabular-nums">
                        {item.phase} · {item.period}
                      </p>
                      <h4 className="font-display text-xl font-semibold text-obsidian">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Call to Action & Clear Entity Boundary */}
      <section className="py-20 bg-obsidian text-linen">
        <div className="container-arc grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-4 max-w-2xl">
            <p className="eyebrow text-gold">Join or Partner With Wisefold</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-linen leading-tight [text-wrap:balance]">
              Build Disciplined Wisdom for the Long Term.
            </h2>
            <p className="text-sm sm:text-base text-linen/75 leading-relaxed">
              Reach out to inquire about Wisefold Network membership, church or campus reading cohorts, or institutional partnerships.
            </p>
            <p className="text-xs text-linen/55 leading-relaxed pt-1">
              Wisefold Network operates as an independent reading, mentorship, and stewardship community within the Richson Global ecosystem—distinct from Richson Creatives and Eric Richson Darko’s personal authorship.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Link
              to="/contact"
              className="btn-gold py-3.5 px-7 text-xs font-semibold whitespace-nowrap w-full sm:w-auto lg:w-64 justify-center"
            >
              <span>Membership Inquiry</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/partnerships"
              className="inline-flex items-center justify-center gap-2 border border-linen/30 py-3.5 px-7 text-xs font-semibold uppercase tracking-[0.18em] text-linen hover:bg-linen hover:text-obsidian transition-colors whitespace-nowrap w-full sm:w-auto lg:w-64"
            >
              <span>Explore Partnerships</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
