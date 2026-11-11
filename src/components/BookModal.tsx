import React, { useState } from 'react';
import { X, Check, ShoppingBag, MessageSquare, CreditCard, ExternalLink, Sparkles } from 'lucide-react';
import { Book, SITE_COORDINATES } from '../data/siteData';

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
}

export const BookModal: React.FC<BookModalProps> = ({ book, onClose }) => {
  const [copiedMomo, setCopiedMomo] = useState(false);

  if (!book) return null;

  const handleCopyMomo = () => {
    navigator.clipboard.writeText(SITE_COORDINATES.momo);
    setCopiedMomo(true);
    setTimeout(() => setCopiedMomo(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Eric, I would like to purchase the digital book: "${book.title}" (${book.subtitle || ''}). Please share download delivery details.`
  );
  const whatsappUrl = `https://wa.me/${SITE_COORDINATES.phoneRaw}?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-linen border border-border shadow-2xl p-6 md:p-10 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-obsidian/60 hover:text-obsidian hover:bg-secondary transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid gap-8 md:grid-cols-[260px_1fr] items-start">
          {/* Book Cover */}
          <div className="relative aspect-[3/4] w-full max-w-[260px] mx-auto overflow-hidden shadow-lg bg-obsidian/5 border border-border/80">
            <img
              src={book.coverUrl}
              alt={book.title}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = SITE_COORDINATES.avatarUrl;
              }}
            />
          </div>

          {/* Book Details */}
          <div className="flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="eyebrow text-gold">{book.category}</span>
                {book.featured && (
                  <span className="text-[0.58rem] uppercase tracking-wider font-semibold bg-maritime/10 text-maritime px-2 py-0.5 rounded-xs">
                    Featured Work
                  </span>
                )}
              </div>

              <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-obsidian leading-tight">
                {book.title}
              </h2>

              {book.subtitle && (
                <p className="mt-1 text-sm font-medium text-maritime italic">
                  {book.subtitle}
                </p>
              )}

              {/* Price & Format */}
              <div className="mt-4 flex items-baseline gap-4 border-y border-border py-3">
                {book.priceGhs && (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs text-muted-foreground uppercase font-semibold">GHS</span>
                    <span className="font-display text-2xl font-bold text-obsidian">{book.priceGhs}</span>
                  </div>
                )}
                {book.priceUsd && (
                  <div className="flex items-baseline gap-1 text-sm text-muted-foreground">
                    <span>/ ${book.priceUsd} USD</span>
                  </div>
                )}
                <div className="ml-auto text-xs font-semibold uppercase tracking-wider text-gold">
                  {book.format || 'ePub & PDF'}
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {book.synopsis || book.description}
              </p>

              {/* Focus Points */}
              {book.focusPoints && book.focusPoints.length > 0 && (
                <div className="mt-4 space-y-1.5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-obsidian">
                    Core Architectural Focus:
                  </p>
                  <ul className="grid gap-1">
                    {book.focusPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Purchase Options */}
            <div className="pt-4 border-t border-border space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Selar Checkout */}
                <a
                  href={SITE_COORDINATES.selar}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ember py-2.5 text-xs text-center justify-center"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span>Buy on Selar</span>
                </a>

                {/* WhatsApp Order */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-navy py-2.5 text-xs text-center justify-center"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              {/* Mobile Money Direct Pay */}
              <div className="p-3 bg-secondary/50 border border-border flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-obsidian">MTN Mobile Money: </span>
                  <span className="font-mono text-maritime font-bold">{SITE_COORDINATES.momo}</span>
                  <span className="text-[0.68rem] text-muted-foreground block">Eric Richson Darko</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyMomo}
                  className="btn-gold py-1.5 px-3 text-[0.68rem] font-semibold"
                >
                  {copiedMomo ? 'Copied!' : 'Copy MoMo'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
