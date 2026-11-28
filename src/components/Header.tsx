import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { SITE_COORDINATES, NAV_LINKS } from '../data/siteData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ecosystemDropdownOpen, setEcosystemDropdownOpen] = useState(false);
  const [mobileEcosystemOpen, setMobileEcosystemOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setEcosystemDropdownOpen(false);
    setMobileEcosystemOpen(false);
  }, [location.pathname]);

  const isHomeTop = location.pathname === '/' && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isHomeTop
          ? 'bg-obsidian/95 border-linen/15 py-4 text-linen'
          : 'bg-linen/95 backdrop-blur-md border-border py-3.5 text-obsidian shadow-xs'
      }`}
    >
      <div className="container-arc flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo & Single-Line Wordmark */}
        <Link
          to="/"
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Richson Global — Home"
        >
          <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-border/70 flex items-center justify-center">
            <img
              src={SITE_COORDINATES.logoUrl}
              alt="Richson Global Logo"
              className="h-full w-full object-contain p-0.5"
              referrerPolicy="no-referrer"
            />
          </span>
          <span
            className={`font-display text-lg font-semibold tracking-tight whitespace-nowrap transition-colors ${
              isHomeTop
                ? 'text-linen group-hover:text-gold'
                : 'text-obsidian group-hover:text-maritime'
            }`}
          >
            {SITE_COORDINATES.founderName}
          </span>
        </Link>

        {/* Zone 2: Clean Inline Single-Line Navigation */}
        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            if (link.children) {
              const isEcosystemActive =
                location.pathname.startsWith('/ecosystem') ||
                location.pathname.startsWith('/creatives') ||
                location.pathname.startsWith('/wisefold') ||
                location.pathname === '/library-store' ||
                location.pathname === '/ministry' ||
                location.pathname === '/partnerships';

              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setEcosystemDropdownOpen(true)}
                  onMouseLeave={() => setEcosystemDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setEcosystemDropdownOpen((prev) => !prev)}
                    aria-expanded={ecosystemDropdownOpen}
                    className={`flex items-center gap-1 text-xs font-medium uppercase tracking-[0.16em] py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      isEcosystemActive
                        ? isHomeTop
                          ? 'text-gold border-b border-gold font-semibold'
                          : 'text-maritime border-b border-gold font-semibold'
                        : isHomeTop
                        ? 'text-linen/80 hover:text-gold'
                        : 'text-obsidian/75 hover:text-maritime'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Panel */}
                  <div
                    className={`absolute top-full left-0 w-60 pt-2 transition-all duration-200 ${
                      ecosystemDropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="bg-linen border border-border shadow-xl p-1.5 text-obsidian">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className={`block px-3.5 py-2.5 text-xs tracking-wide whitespace-nowrap transition-colors ${
                            location.pathname === child.path
                              ? 'bg-maritime text-linen font-medium'
                              : 'text-obsidian/80 hover:bg-secondary hover:text-maritime'
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
                className={`text-xs font-medium uppercase tracking-[0.16em] py-1.5 whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? isHomeTop
                      ? 'text-gold font-semibold border-b-2 border-gold'
                      : 'text-maritime font-semibold border-b-2 border-gold'
                    : isHomeTop
                    ? 'text-linen/80 hover:text-gold'
                    : 'text-obsidian/75 hover:text-maritime'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            to="/contact"
            className="btn-ember py-2.5 px-5 text-xs font-semibold tracking-[0.16em] whitespace-nowrap shrink-0"
          >
            <span>Book Us</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className={`lg:hidden p-2 transition-colors focus:outline-none cursor-pointer ${
            isHomeTop ? 'text-linen hover:text-gold' : 'text-obsidian hover:text-maritime'
          }`}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[69px] bottom-0 bg-linen text-obsidian border-t border-border overflow-y-auto p-6 flex flex-col justify-between z-50">
          <div className="space-y-6">
            <p className="eyebrow text-gold">Navigation</p>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-display text-xl text-obsidian hover:text-maritime">
                Home
              </Link>
              <Link to="/about" className="font-display text-xl text-obsidian hover:text-maritime">
                About Us
              </Link>

              <div className="border-t border-b border-border py-2">
                <button
                  type="button"
                  onClick={() => setMobileEcosystemOpen((prev) => !prev)}
                  aria-expanded={mobileEcosystemOpen}
                  aria-controls="mobile-ecosystem-submenu"
                  className="w-full flex items-center justify-between py-1 font-display text-xl text-obsidian hover:text-maritime transition-colors cursor-pointer"
                >
                  <span>Our Ecosystem</span>
                  <ChevronDown
                    className={`h-5 w-5 text-maritime transition-transform duration-200 ${
                      mobileEcosystemOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobileEcosystemOpen && (
                  <div
                    id="mobile-ecosystem-submenu"
                    className="mt-3 pl-4 space-y-3 pb-2"
                  >
                    <Link to="/ecosystem" className="block text-sm text-obsidian/80 hover:text-maritime">
                      Ecosystem Overview
                    </Link>
                    <Link to="/creatives" className="block text-sm text-obsidian/90 hover:text-maritime font-medium">
                      Richson Creatives
                    </Link>
                    <Link to="/library-store" className="block text-sm text-obsidian/80 hover:text-maritime">
                      Personal Authorship &amp; Store
                    </Link>
                    <Link to="/wisefold" className="block text-sm text-obsidian/80 hover:text-maritime">
                      Wisefold Network
                    </Link>
                    <Link to="/ministry" className="block text-sm text-obsidian/80 hover:text-maritime">
                      Pastoral Ministry
                    </Link>
                    <Link to="/partnerships" className="block text-sm text-obsidian/80 hover:text-maritime">
                      Emerging Ventures &amp; Partnerships
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/approach" className="font-display text-xl text-obsidian hover:text-maritime">
                Our Approach
              </Link>
              <Link to="/insights" className="font-display text-xl text-obsidian hover:text-maritime">
                Insights
              </Link>
              <Link to="/contact" className="font-display text-xl text-obsidian hover:text-maritime">
                Contact
              </Link>
            </nav>
          </div>

          <div className="pt-8 border-t border-border space-y-3">
            <Link to="/contact" className="btn-ember w-full text-center">
              <span>Book Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/creatives" className="btn-navy w-full text-center">
              <span>Richson Creatives Studio</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
