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
  ExternalLink
} from 'lucide-react';
import { SITE_COORDINATES, SOCIAL_LINKS } from '../data/siteData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      // Store in localStorage for persistence
      try {
        const existing = JSON.parse(localStorage.getItem('richson_subscribers') || '[]');
        existing.push({ email: newsletterEmail, date: new Date().toISOString() });
        localStorage.setItem('richson_subscribers', JSON.stringify(existing));
      } catch (err) {
        // Ignore
      }
      setSubscribed(true);
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
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <footer className="border-t border-border bg-obsidian text-linen relative overflow-hidden">
      {/* Decorative subtle grain overlay */}
      <div className="grain-layer" />

      {/* Newsletter Section */}
      <div className="border-b border-linen/10 py-16">
        <div className="container-arc grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-gold">The Capacity Dispatch</p>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-snug md:text-3xl text-linen">
              Strategic reflections on enterprise, relational intelligence & leadership.
            </h3>
            <p className="mt-3 text-sm text-linen/70 leading-relaxed max-w-xl">
              Periodic essays, book announcements, and intellectual frameworks delivered directly to your inbox. No noise. Only depth.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div className="flex items-center gap-3 p-4 bg-maritime/40 border border-gold/40 text-linen text-sm">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                <span>You are subscribed. We look forward to sharing strategic insights with you.</span>
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
                  className="btn-gold whitespace-nowrap py-3 px-6"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-arc py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Founder & Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-block group">
              <span className="font-display text-2xl font-semibold tracking-wide text-linen group-hover:text-gold transition-colors">
                {SITE_COORDINATES.founderName}
              </span>
              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold mt-1">
                {SITE_COORDINATES.title}
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-linen/65">
              Author, Creative Director, IT Professional, and Associate Pastor. An architecture of purpose uniting vocational excellence, relational intelligence, and kingdom stewardship.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
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
                <Link to="/creatives" className="hover:text-gold transition-colors flex items-center justify-between">
                  <span>Richson Creatives Studio</span>
                  <span className="text-[0.6rem] text-gold uppercase tracking-wider">Agency</span>
                </Link>
              </li>
              <li>
                <Link to="/library-store" className="hover:text-gold transition-colors">
                  Personal Authorship & Store
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

          {/* Column 3: Platform */}
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
                  Blog Nuggets & Essays
                </Link>
              </li>
              <li>
                <Link to="/library-store#publishing" className="hover:text-gold transition-colors">
                  Publishing Services for Authors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Direct Inquiries & Briefs
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-gold transition-colors text-linen/50">
                  Client & Member Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Coordinates */}
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
                <a href={`tel:${SITE_COORDINATES.phoneRaw}`} className="hover:text-gold transition-colors">
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

            <div className="pt-2 border-t border-linen/10">
              <p className="text-[0.6rem] uppercase tracking-wider text-gold font-semibold">
                Direct Mobile Money
              </p>
              <p className="text-xs text-linen/80 font-mono mt-0.5">
                MTN MoMo: {SITE_COORDINATES.momo}
              </p>
              <p className="text-[0.68rem] text-linen/50">
                Eric Richson Darko
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-linen/10 py-8 text-center text-xs text-linen/50">
        <div className="container-arc flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Eric Richson Darko. All rights reserved.</p>
          <p className="text-[0.7rem] text-linen/40">
            A refined digital ecosystem for executive consulting, creative agency, authorship, and ministry.
          </p>
          <div className="flex items-center gap-4 text-[0.7rem]">
            <Link to="/about" className="hover:text-gold">Bio</Link>
            <span className="text-linen/20">·</span>
            <Link to="/library-store" className="hover:text-gold">Bookstore</Link>
            <span className="text-linen/20">·</span>
            <Link to="/creatives" className="hover:text-gold">Studio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
