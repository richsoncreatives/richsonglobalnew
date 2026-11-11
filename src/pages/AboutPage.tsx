import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Globe,
  Award,
  CheckCircle2,
  ExternalLink,
  Shield,
  Layers,
  HeartHandshake
} from 'lucide-react';
import {
  SITE_COORDINATES,
  AFFILIATIONS,
  EDUCATION_LIST,
  SKILLS_LIST,
  LANGUAGES_LIST,
  CORE_VALUES,
  TRACK_RECORD_KPIS
} from '../data/siteData';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Hero Header */}
      <section className="container-arc py-12 md:py-20 border-b border-border">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="eyebrow text-gold mb-3">Founder & Architect of Capacity</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1]">
              Eric Richson Darko
            </h1>
            <p className="mt-3 text-lg font-medium text-maritime font-display">
              Author · Creative Director · Technology Professional · Associate Pastor
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              A multidisciplinary practitioner bridging creative design, robust IT infrastructure, intellectual publishing, and spiritual formation. Based in Accra, Ghana, operating across international spheres.
            </p>
            <div className="pt-6 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-navy py-3 px-6 text-xs font-semibold">
                <span>Inquire With Eric</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/library-store" className="btn-outline py-3 px-6 text-xs font-semibold">
                <span>Explore Authorship (18 Titles)</span>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden border border-border shadow-2xl bg-obsidian">
            <img
              src={SITE_COORDINATES.formalPortrait}
              alt="Eric Richson Darko"
              className="h-full w-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.src = SITE_COORDINATES.avatarUrl;
              }}
            />
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 border-b border-border bg-linen">
        <div className="container-arc grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-gold mb-3">The Narrative</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian leading-tight">
              An Architecture of Multiple Competencies
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p className="text-obsidian font-medium text-lg">
              "We believe that real leadership is not the preservation of an individual's charisma, but the establishment of enduring capacity."
            </p>
            <p>
              Eric Richson Darko is a Ghanaian author, creative director, information systems professional, and ordained youth pastor whose life work centers on personal capacity, relational intelligence, and institutional resilience.
            </p>
            <p>
              With a professional background spanning over seven years managing enterprise IT infrastructure and leading brand communication agencies, Eric couples technical rigor with deep relational counseling insight. As author of 18 published books (including 15 solo treatises and 3 co-authored volumes), he provides practical frameworks for youth leadership, marital readiness, and purposeful living.
            </p>
            <p>
              He serves as the Associate Pastor with dedicated youth oversight at Charismatic Evangelistic Ministry (CEM), East Legon, and Vice President of the College of Relationship & Marriage (CORM).
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Affiliations */}
      <section id="affiliations" className="py-20 border-b border-border bg-secondary/30 scroll-mt-24">
        <div className="container-arc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold mb-3">Governance & Service</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
              Leadership & Institutional Affiliations
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Independent organizations and ministerial bodies where Eric serves or has provided leadership.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {AFFILIATIONS.map((affil, idx) => (
              <div
                key={idx}
                className="border border-border bg-linen p-8 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                    <span className="text-xs font-semibold text-maritime uppercase tracking-wider">
                      {affil.period}
                    </span>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-wider text-gold">
                      Active
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-obsidian">
                    {affil.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-gold uppercase tracking-wider">
                    {affil.role}
                  </p>
                  <p className="mt-3 text-xs italic text-muted-foreground">
                    {affil.nature}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {affil.summary}
                  </p>
                </div>

                {affil.url && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <a
                      href={affil.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-maritime hover:text-gold font-medium"
                    >
                      <span>Visit Institution Website</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Qualifications & Certifications */}
      <section className="py-20 border-b border-border bg-linen">
        <div className="container-arc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold mb-3">Academic Foundation</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian">
              Education & Professional Credentials
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EDUCATION_LIST.map((edu, idx) => (
              <div
                key={idx}
                className="border border-border bg-card p-6 flex flex-col justify-between"
              >
                <div>
                  <GraduationCap className="h-5 w-5 text-gold mb-3" />
                  <h3 className="font-display text-sm font-semibold text-obsidian leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {edu.school}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border text-[0.65rem] font-mono text-maritime font-semibold">
                  {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies & Languages */}
      <section className="py-20 border-b border-border bg-secondary/20">
        <div className="container-arc grid gap-12 lg:grid-cols-2">
          {/* Competencies */}
          <div className="border border-border bg-linen p-8">
            <p className="eyebrow text-gold mb-4">Core Competencies</p>
            <h3 className="font-display text-2xl font-semibold text-obsidian mb-6">
              Functional Practice Areas
            </h3>
            <ul className="space-y-3">
              {SKILLS_LIST.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-obsidian/85">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages & Values */}
          <div className="border border-border bg-linen p-8 flex flex-col justify-between">
            <div>
              <p className="eyebrow text-gold mb-4">Linguistic Fluency</p>
              <h3 className="font-display text-2xl font-semibold text-obsidian mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {LANGUAGES_LIST.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-secondary text-xs font-semibold text-maritime uppercase tracking-wider border border-border"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="eyebrow text-gold mb-3">Institutional Creed</p>
              <p className="font-display text-lg text-obsidian italic">
                "Work designed to outlive the season that produced it."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-obsidian text-linen">
        <div className="container-arc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-gold mb-3">Guiding Principles</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-linen">
              Our Non-Negotiable Values
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((val) => (
              <div key={val.name} className="border border-linen/15 p-6 bg-linen/5">
                <span className="text-gold font-display text-lg font-bold">
                  {val.name}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-linen/70">
                  {val.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
