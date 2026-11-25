import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, X, Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { SITE_COORDINATES, CREATIVES_COORDINATES } from '../data/siteData';

/**
 * Persistent "Enquire With Us" floating action button anchored at the bottom-left corner of every page.
 * Opens a compact direct-routing panel for Executive Desk, Richson Creatives, WhatsApp, and Contact Form.
 */
export const EnquireWidget: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start">
      {open && (
        <div
          role="dialog"
          aria-label="Enquire With Us"
          className="mb-3 w-[calc(100vw-2.5rem)] max-w-xs border border-linen/15 bg-obsidian text-linen shadow-2xl p-5 space-y-4"
        >
          <div className="flex items-start justify-between gap-3 border-b border-linen/10 pb-3">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold">
                Direct Routing
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-linen">
                Enquire With Us
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close enquiry panel"
              className="p-1.5 text-linen/60 hover:text-linen transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-2.5 text-xs">
            <a
              href={SITE_COORDINATES.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between border border-linen/15 bg-linen/5 px-3.5 py-2.5 text-linen hover:border-gold hover:text-gold transition-colors"
            >
              <span className="flex items-center gap-2 font-medium">
                <MessageSquare className="h-3.5 w-3.5 text-gold shrink-0" />
                <span>Richson Global WhatsApp</span>
              </span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </a>

            <a
              href={CREATIVES_COORDINATES.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between border border-ember/40 bg-ember/15 px-3.5 py-2.5 text-linen hover:border-ember-bright transition-colors"
            >
              <span className="flex items-center gap-2 font-medium">
                <Sparkles className="h-3.5 w-3.5 text-gold shrink-0" />
                <span>Richson Creatives ({CREATIVES_COORDINATES.phoneDisplay})</span>
              </span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </a>

            <a
              href={`mailto:${SITE_COORDINATES.email}`}
              className="flex items-center justify-between border border-linen/15 bg-linen/5 px-3.5 py-2.5 text-linen/85 hover:border-gold hover:text-gold transition-colors"
            >
              <span className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-gold shrink-0" />
                <span>{SITE_COORDINATES.email}</span>
              </span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </a>

            <a
              href={`tel:${CREATIVES_COORDINATES.phoneRaw}`}
              className="flex items-center justify-between border border-linen/15 bg-linen/5 px-3.5 py-2.5 text-linen/85 hover:border-gold hover:text-gold transition-colors"
            >
              <span className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
                <span>Studio Line: {CREATIVES_COORDINATES.phoneDisplay}</span>
              </span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </a>
          </div>

          <div className="pt-2 border-t border-linen/10 flex items-center gap-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-ember flex-1 py-2.5 px-4 text-[0.7rem] whitespace-nowrap"
            >
              <span>Full Enquiry Form</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Enquire With Us"
        className="btn-ember py-3 px-5 text-xs font-semibold tracking-[0.16em] whitespace-nowrap shadow-2xl"
      >
        {open ? (
          <>
            <X className="h-4 w-4 shrink-0" />
            <span>Close</span>
          </>
        ) : (
          <>
            <MessageSquare className="h-4 w-4 shrink-0" />
            <span>Enquire With Us</span>
          </>
        )}
      </button>
    </div>
  );
};
