import React from 'react';
import { Sparkles } from 'lucide-react';
import { MARQUEE_QUOTES } from '../data/siteData';

interface MarqueeProps {
  quotes?: string[];
  className?: string;
  speed?: 'normal' | 'slow';
}

export const Marquee: React.FC<MarqueeProps> = ({
  quotes = MARQUEE_QUOTES,
  className = '',
  speed = 'normal'
}) => {
  // Duplicate array so marquee loops seamlessly
  const items = [...quotes, ...quotes];

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-border bg-obsidian py-3.5 text-linen marquee-paused ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max items-center gap-10 animate-marquee select-none">
        {items.map((quote, idx) => (
          <div key={idx} className="flex items-center gap-6 shrink-0">
            <span className="font-display text-sm font-medium tracking-wide text-linen/90 whitespace-nowrap">
              {quote}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
