import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { SITE_COORDINATES, NAV_LINKS } from '../data/siteData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ecosystemDropdownOpen, setEcosystemDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setEcosystemDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isCreatives = location.pathname.startsWith('/creatives');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-linen/95 backdrop-blur-md shadow-sm border-b border-border/80 py-3'
          : 'bg-linen/80 backdrop-blur-xs py-5'
      }`}
    >
      <div className="container-arc flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link
          to="/"
          className="group flex items-center gap-3.5 focus-visible:outline-none"
          aria-label="Eric Richson Darko — Home"
        >
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/40 transition-transform duration-300 group-hover:scale-105">
            <img
              src={SITE_COORDINATES.avatarUrl}
              alt="Eric Richson Darko"
              className="h-full w-full object-cover"
              onError={(e) => {
                // Fallback to initial
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="h-full w-full bg-maritime flex items-center justify-center text-linen font-display font-semibold text-sm">
              ED
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[1.05rem] font-semibold tracking-wide text-obsidian transition-colors group-hover:text-maritime">
              {SITE_COORDINATES.founderName}
            </span>
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
              {SITE_COORDINATES.title}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            if (link.children) {
              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setEcosystemDropdownOpen(true)}
                  onMouseLeave={() => setEcosystemDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setEcosystemDropdownOpen(!ecosystemDropdownOpen)}
                    className={`flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] py-2 transition-colors cursor-pointer ${
                      location.pathname.startsWith('/ecosystem') || location.pathname === '/creatives' || location.pathname === '/library-store' || location.pathname === '/ministry'
                        ? 'text-maritime font-semibold'
                        : 'text-obsidian/75 hover:text-maritime'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 ${
                      ecosystemDropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-linen/95 backdrop-blur-md border border-border shadow-xl p-2 rounded-xs">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className={`block px-3.5 py-2.5 text-xs tracking-wider transition-colors rounded-xs ${
                            location.pathname === child.path
                              ? 'bg-maritime text-linen font-medium'
                              : 'text-obsidian/80 hover:bg-secondary/60 hover:text-maritime'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`text-xs font-medium uppercase tracking-[0.16em] py-2 transition-colors ${
                  isActive
                    ? 'text-maritime font-semibold border-b border-maritime'
                    : 'text-obsidian/75 hover:text-maritime'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/creatives"
            className="btn-ember text-xs tracking-wider font-semibold py-2.5 px-5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Richson Creatives</span>
          </Link>
          <Link
            to="/contact"
            className="btn-navy text-xs tracking-wider font-semibold py-2.5 px-5"
          >
            <span>Inquire</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-obsidian hover:text-maritime focus:outline-none cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-linen/98 backdrop-blur-lg border-t border-border overflow-y-auto p-6 flex flex-col justify-between">
          <div className="space-y-6">
            <p className="eyebrow text-gold">Navigation</p>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-display text-xl text-obsidian hover:text-maritime"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-display text-xl text-obsidian hover:text-maritime"
              >
                About Us
              </Link>

              {/* Ecosystem submenu */}
              <div className="pt-2 pb-2 pl-3 border-l-2 border-gold/40 space-y-3">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-maritime">
                  Our Ecosystem
                </p>
                <Link
                  to="/ecosystem"
                  className="block text-sm text-obsidian/80 hover:text-maritime"
                >
                  Ecosystem Overview
                </Link>
                <Link
                  to="/creatives"
                  className="block text-sm text-obsidian/80 hover:text-maritime font-medium"
                >
                  Richson Creatives Studio
                </Link>
                <Link
                  to="/library-store"
                  className="block text-sm text-obsidian/80 hover:text-maritime"
                >
                  Personal Authorship & Store
                </Link>
                <Link
                  to="/ecosystem#wisefold"
                  className="block text-sm text-obsidian/80 hover:text-maritime"
                >
                  Wisefold Network
                </Link>
                <Link
                  to="/ministry"
                  className="block text-sm text-obsidian/80 hover:text-maritime"
                >
                  Pastoral Ministry
                </Link>
                <Link
                  to="/partnerships"
                  className="block text-sm text-obsidian/80 hover:text-maritime"
                >
                  Emerging Ventures & Partnerships
                </Link>
              </div>

              <Link
                to="/approach"
                className="font-display text-xl text-obsidian hover:text-maritime"
              >
                Our Approach
              </Link>
              <Link
                to="/insights"
                className="font-display text-xl text-obsidian hover:text-maritime"
              >
                Insights (Blog Nuggets)
              </Link>
              <Link
                to="/contact"
                className="font-display text-xl text-obsidian hover:text-maritime"
              >
                Contact & Inquiries
              </Link>
            </nav>
          </div>

          <div className="pt-8 border-t border-border space-y-3">
            <Link
              to="/creatives"
              className="btn-ember w-full text-center"
            >
              <Sparkles className="h-4 w-4" />
              <span>Richson Creatives Studio</span>
            </Link>
            <Link
              to="/contact"
              className="btn-navy w-full text-center"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
