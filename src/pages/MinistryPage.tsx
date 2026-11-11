import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, Users, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_COORDINATES } from '../data/siteData';

const MINISTRY_PILLARS = [
  {
    title: "Youth Pastoral Discipleship",
    subtitle: "CEM East Legon Assembly",
    desc: "Pastoral care, mentoring, and spiritual grounding for young adults, college graduates, and emerging leaders navigating faith in modern culture."
  },
  {
    title: "Pre-Marital Vetting & Relational Intelligence",
    subtitle: "Counseling & Covenant Architecture",
    desc: "Diagnostic frameworks, behavioral red flag identification, and pre-marital counseling to construct stable, God-honoring families."
  },
  {
    title: "The Three-Fold Cord Architecture",
    subtitle: "Altar, Home & Field Integration",
    desc: "Harmonizing personal prayer devotion (Altar), domestic sanctuary and family order (Home), and marketplace vocational excellence (Field)."
  },
  {
    title: "Biblical Exposition & Mentorship",
    subtitle: "Rigorous Word Discipleship",
    desc: "Empowering believers with doctrinal depth, declarative prayer authority ('Word Your World'), and moral fortitude."
  }
];

export const MinistryPage: React.FC = () => {
  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Header */}
      <section className="container-arc py-12 md:py-20 border-b border-border">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold mb-3">Pastoral Ministry</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1]">
            Youth Discipleship & Spiritual Architecture
          </h1>
          <p className="mt-3 text-lg font-medium text-maritime font-display">
            Rev. Eric Richson Darko · Associate Pastor, CEM East Legon
          </p>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            A ministry grounded in biblical depth, relational integrity, and marketplace readiness. Equipping a generation to stand blameless in covenant, character, and calling.
          </p>
        </div>
      </section>

      {/* Pastoral Oversight Narrative */}
      <section className="py-20 border-b border-border bg-linen">
        <div className="container-arc grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
          <div className="space-y-6">
            <p className="eyebrow text-gold">The Pastoral Call</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian leading-snug">
              Shepherding With Both Spiritual Depth & Practical Rigour
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Serving on the pastoral team of Charismatic Evangelistic Ministry (CEM), East Legon, Eric Richson Darko exercises pastoral oversight tailored to youth and young adult spiritual formation.
              </p>
              <p>
                His ministry challenges superficial religion by confronting the real tensions of young adulthood: career ambition versus consecration, relationship confusion versus covenant clarity, and emotional impulses versus spiritual discernment.
              </p>
              <p>
                Through the College of Relationship & Marriage (CORM) where he serves as Vice President, Eric has prepared dozens of couples for marital longevity, providing structured diagnostic tools before vows are spoken.
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="btn-navy py-3 px-6 text-xs font-semibold">
                <span>Request Speaking / Pastoral Engagement</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden border border-border shadow-2xl bg-obsidian">
            <img
              src={SITE_COORDINATES.portraitUrl}
              alt="Eric Richson Darko — Pastoral Ministry"
              className="h-full w-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.src = SITE_COORDINATES.avatarUrl;
              }}
            />
          </div>
        </div>
      </section>

      {/* Ministry Pillars Grid */}
      <section className="py-20 border-b border-border bg-secondary/30">
        <div className="container-arc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold mb-3">Core Focus</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
              Pillars of Ministerial Labour
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {MINISTRY_PILLARS.map((pil, idx) => (
              <div
                key={idx}
                className="border border-border bg-linen p-8 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-obsidian">
                    {pil.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-maritime uppercase tracking-wider">
                    {pil.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {pil.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastoral Books Banner */}
      <section className="py-20 bg-obsidian text-linen">
        <div className="container-arc text-center max-w-3xl space-y-6">
          <p className="eyebrow text-gold">Spiritual & Relational Treatises</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-linen">
            Published Works on Faith & Relationships
          </h2>
          <p className="text-base text-linen/75 leading-relaxed">
            From "The Altar, The Home & The Field" to "Unmasking the Strange Partner", explore Eric's full theological and relational catalog.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link to="/library-store" className="btn-gold py-3.5 px-8 text-xs font-semibold">
              <span>View The 18 Published Titles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
