import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Layers, Users } from 'lucide-react';
import { APPROACH_STAGES, CORE_VALUES } from '../data/siteData';

export const ApproachPage: React.FC = () => {
  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Header */}
      <section className="container-arc py-12 md:py-20 border-b border-border">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold mb-3">Our Approach</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1]">
            From Ideas to Institutions
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            How Richson Global develops ventures: identify, develop, establish, grow and institutionalise — with the uncompromising long-term aim of building beyond the founder.
          </p>
        </div>
      </section>

      {/* The 5 Stages in Detail */}
      <section className="py-20 border-b border-border bg-linen">
        <div className="container-arc space-y-12">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold mb-2">The Framework</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
              The Five Stages of Venture Institutionalisation
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            {APPROACH_STAGES.map((stg) => (
              <div
                key={stg.number}
                className="border border-border bg-card p-8 flex flex-col justify-between shadow-xs hover:border-gold transition-colors"
              >
                <div>
                  <span className="font-display text-4xl font-bold text-gold/40">
                    {stg.number}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-obsidian">
                    {stg.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {stg.body}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border/60 text-[0.62rem] font-semibold uppercase tracking-wider text-maritime">
                  Stage {stg.number} Discipline
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Beyond the Founder Manifesto */}
      <section className="py-20 md:py-28 border-b border-border bg-secondary/30">
        <div className="container-arc grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div>
            <p className="eyebrow text-gold mb-3">Core Philosophy</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-obsidian leading-tight">
              Building Beyond <br />The Founder.
            </h2>
            <div className="mt-8 p-6 border-l-2 border-gold bg-linen">
              <p className="text-sm font-display text-maritime italic leading-relaxed">
                "The ultimate measure of institution-building is not how dependent an organisation remains on its founder, but how effectively it can fulfil its purpose through established systems, capable leadership and sustainable organisational structures."
              </p>
            </div>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p className="text-obsidian font-medium text-lg">
              At Richson Global, we believe that longevity is an architectural decision made at inception, not an afterthought.
            </p>
            <p>
              Our long-term approach is to develop ventures with the capacity to establish their own identities, attract their own audiences, develop independent management, and operate sustainably without relying on a single individual's daily presence.
            </p>
            <p>
              As ventures mature, they evolve into distinct companies or institutions with their own governance, executive leadership, and strategic direction. Richson Global provides the overarching strategic foundation, philosophical anchor, and seed capital from which this autonomous growth can flourish.
            </p>
            <div className="pt-4">
              <Link to="/partnerships" className="btn-navy py-3 px-6 text-xs font-semibold">
                <span>Explore Strategic Alliances</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-obsidian text-linen">
        <div className="container-arc">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow text-gold mb-3">Ethos</p>
            <h2 className="font-display text-3xl font-semibold text-linen">
              Institutional Values in Daily Practice
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((v) => (
              <div key={v.name} className="border border-linen/15 p-6 bg-linen/5">
                <span className="font-display text-xl font-bold text-gold">
                  {v.name}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-linen/70">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
