import React from 'react';
import { X, BookOpen, Clock, Calendar, Share2, Check } from 'lucide-react';
import { InsightArticle, SITE_COORDINATES } from '../data/siteData';

interface InsightModalProps {
  article: InsightArticle | null;
  onClose: () => void;
}

export const InsightModal: React.FC<InsightModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-linen border border-border shadow-2xl p-6 md:p-12 my-8 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-border pb-6 shrink-0">
          <div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="eyebrow text-gold">{article.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readTime}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {article.date}
              </span>
            </div>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-obsidian leading-snug">
              {article.title}
            </h2>
            {article.book && (
              <p className="mt-2 text-xs font-semibold text-maritime uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                <span>From the treatise: {article.book}</span>
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 text-obsidian/60 hover:text-obsidian hover:bg-secondary transition-colors cursor-pointer shrink-0 ml-4"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="overflow-y-auto py-6 pr-2 space-y-5 text-obsidian/85 text-base leading-relaxed">
          {/* Excerpt callout */}
          <div className="border-l-2 border-gold pl-4 py-1 italic font-display text-lg text-maritime bg-gold/5">
            "{article.excerpt}"
          </div>

          {/* Paragraphs */}
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-sm md:text-base leading-relaxed text-obsidian/85">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="pt-6 border-t border-border flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <img
              src={SITE_COORDINATES.avatarUrl}
              alt={SITE_COORDINATES.founderName}
              className="h-9 w-9 rounded-full object-cover ring-1 ring-gold/40"
            />
            <div>
              <p className="text-xs font-semibold text-obsidian">{SITE_COORDINATES.founderName}</p>
              <p className="text-[0.62rem] uppercase tracking-wider text-muted-foreground">{SITE_COORDINATES.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="btn-outline py-2 px-3 text-xs"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-gold" /> : <Share2 className="h-3.5 w-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share Essay'}</span>
            </button>
            <button
              onClick={onClose}
              className="btn-navy py-2 px-4 text-xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
