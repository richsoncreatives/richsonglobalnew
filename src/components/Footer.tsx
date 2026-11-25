import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { SITE_COORDINATES, CREATIVES_COORDINATES, SOCIAL_LINKS } from '../data/siteData';
import { XBrandIcon } from './Icons';
import { submitInquiry, SubmissionOutcome } from '../lib/formService';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [outcome, setOutcome] = useState<SubmissionOutcome | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubmitting(true);
    const res = await submitInquiry({
      channel: 'newsletter',
      email: newsletterEmail.trim()
    });
    setOutcome(res);
    setSubmitting(false);
    if (res.status === 'delivered') {
      setNewsletterEmail('');
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'Facebook':
        return <Facebook className="h-4 w-4" />;
      case 'Instagram':
        return <Instagram className="h-4 w-4" />;
      case 'LinkedIn':
        return <Linkedin className="h-4 w-4" />;
      case 'YouTube':
        return <Youtube className="h-4 w-4" />;
      case 'X':
        return <XBrandIcon className="h-3.5 w-3.5" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <footer className="border-t border-border bg-obsidian text-linen relative overflow-hidden">
      <div className="grain-layer" />

      {/* Newsletter Section */}
      <div className="border-b border-linen/10 py-16">
        <div className="container-arc grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-gold">The Capacity Dispatch</p>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-snug md:text-3xl text-linen">
              Strategic reflections on enterprise, relational intelligence &amp; leadership.
            </h3>
            <p className="mt-3 text-sm text-linen/70 leading-relaxed max-w-xl">
              Periodic essays, book announcements, and intellectual frameworks delivered directly to your inbox. No noise. Only depth.
            </p>
          </div>

          <div>
            {outcome ? (
              <div className="space-y-3 p-4 bg-maritime/40 border border-gold/40 text-linen text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{outcome.message}</p>
                </div>
                {outcome.status === 'handoff_required' && (
                  <div className="flex flex-wrap gap-2 pl-8">
                    <a
                      href={outcome.mailtoUrl}
                      className="btn-gold py-2 px-4 text-xs whitespace-nowrap"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>Confirm via Email</span>
                    </a>
                    <a
                      href={outcome.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline border-linen/30 text-linen py-2 px-4 text-xs whitespace-nowrap hover:bg-linen hover:text-obsidian"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Join via WhatsApp</span>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-linen/5 border border-linen/20 px-4 py-3 text-sm text-linen placeholder:text-linen/40 focus:outline-none focus:border-gold flex-1"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold whitespace-nowrap py-3 px-6"
                >
                  <span>{submitting ? 'Submitting...' : 'Subscribe'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="container-arc py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Founder & Official Brand Mark */}
          <div className="space-y-5">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-gold/50 flex items-center justify-center">
                <img
                  src={SITE_COORDINATES.logoUrl}
                  alt="Richson Global Logo"
                  className="h-full w-full object-contain p-0.5"
                  referrerPolicy="no-referrer"
                />
              </span>
              <div>
                <span className="font-display text-xl font-semibold tracking-wide text-linen group-hover:text-gold transition-colors block">
                  {SITE_COORDINATES.founderName}
                </span>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold mt-0.5">
                  {SITE_COORDINATES.brandName} · {SITE_COORDINATES.title}
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-linen/65">
              Author, Creative Director, IT Professional, and Associate Pastor. An architecture of purpose uniting vocational excellence, relational intelligence, and kingdom stewardship.
            </p>

            {/* Social Links with Original X Icon */}
            <div className="flex flex-wrap gap-2 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={`${social.name} (${social.handle})`}
                  className="h-9 w-9 rounded-full border border-linen/20 flex items-center justify-center text-linen/80 hover:text-gold hover:border-gold transition-colors"
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Ecosystem */}
          <div className="space-y-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Ecosystem
            </p>
            <ul className="space-y-3 text-sm text-linen/75">
              <li>
                <Link to="/creatives" className="hover:text-gold transition-colors">
                  Richson Creatives Studio
                </Link>
              </li>
              <li>
                <Link to="/library-store" className="hover:text-gold transition-colors">
                  Personal Authorship &amp; Store
                </Link>
              </li>
              <li>
                <Link to="/ecosystem#wisefold" className="hover:text-gold transition-colors">
                  Wisefold Network
                </Link>
              </li>
              <li>
                <Link to="/ministry" className="hover:text-gold transition-colors">
                  Pastoral Ministry Archive
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="hover:text-gold transition-colors">
                  Emerging Ventures
                </Link>
              </li>
              <li>
                <a
                  href="https://cormgh.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>CORM Ghana</span>
                  <ExternalLink className="h-3 w-3 text-gold" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Navigation
            </p>
            <ul className="space-y-3 text-sm text-linen/75">
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About Eric Richson Darko
                </Link>
              </li>
              <li>
                <Link to="/approach" className="hover:text-gold transition-colors">
                  Our Institutional Approach
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-gold transition-colors">
                  Blog Nuggets &amp; Essays
                </Link>
              </li>
              <li>
                <Link to="/library-store#publishing" className="hover:text-gold transition-colors">
                  Client Book Design &amp; Publishing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Direct Inquiries &amp; Briefs
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-gold transition-colors text-linen/60">
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Executive Desk */}
          <div className="space-y-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Executive Desk
            </p>
            <div className="space-y-3 text-sm text-linen/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>{SITE_COORDINATES.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a href={`tel:${SITE_COORDINATES.phoneRaw}`} className="hover:text-gold transition-colors tabular-nums">
                  {SITE_COORDINATES.phone1}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a href={`mailto:${SITE_COORDINATES.email}`} className="hover:text-gold transition-colors">
                  {SITE_COORDINATES.email}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-linen/10">
              <p className="text-[0.62rem] uppercase tracking-wider text-gold font-semibold">
                Direct Mobile Money
              </p>
              <p className="text-xs text-linen/80 font-mono tabular-nums mt-0.5">
                MTN MoMo: {SITE_COORDINATES.momo}
              </p>
              <p className="text-[0.68rem] text-linen/50">
                Eric Richson Darko
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Richson Creatives Design & Engineering Attribution Bar */}
      <div className="border-t border-linen/10 bg-black/25 py-6">
        <div className="container-arc flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-linen/75">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
            <span className="text-linen/60">Website Designed &amp; Engineered by</span>
            <Link
              to="/creatives"
              className="font-semibold text-gold hover:text-linen transition-colors underline underline-offset-4"
            >
              Richson Creatives
            </Link>
            <span aria-hidden="true" className="text-linen/30">·</span>
            <a
              href={`tel:${CREATIVES_COORDINATES.phoneRaw}`}
              className="font-mono tabular-nums text-linen hover:text-gold transition-colors"
            >
              {CREATIVES_COORDINATES.phoneDisplay}
            </a>
            <span aria-hidden="true" className="text-linen/30">·</span>
            <a
              href={`mailto:${CREATIVES_COORDINATES.email}`}
              className="hover:text-gold transition-colors"
            >
              {CREATIVES_COORDINATES.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[0.72rem] text-linen/65">
            <Link to="/creatives#platforms" className="hover:text-gold transition-colors">
              Client Platforms
            </Link>
            <span aria-hidden="true" className="text-linen/25">·</span>
            <a
              href={CREATIVES_COORDINATES.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold transition-colors"
            >
              WhatsApp Studio
            </a>
            <span aria-hidden="true" className="text-linen/25">·</span>
            <a
              href="https://www.instagram.com/richsoncreatives"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold transition-colors"
            >
              Instagram
            </a>
            <span aria-hidden="true" className="text-linen/25">·</span>
            <a
              href="https://www.linkedin.com/company/richsoncreatives/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-linen/10 py-6 text-xs text-linen/50">
        <div className="container-arc flex flex-col sm:flex-row items-center justify-between gap-4 pb-12 sm:pb-0">
          <p>© {new Date().getFullYear()} Richson Global · Eric Richson Darko. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[0.72rem]">
            <Link to="/about" className="hover:text-gold">Bio</Link>
            <span aria-hidden="true" className="text-linen/20">·</span>
            <Link to="/library-store" className="hover:text-gold">Bookstore</Link>
            <span aria-hidden="true" className="text-linen/20">·</span>
            <Link to="/creatives" className="hover:text-gold">Richson Creatives</Link>
            <span aria-hidden="true" className="text-linen/20">·</span>
            <Link to="/contact" className="hover:text-gold">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
