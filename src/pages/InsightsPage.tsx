import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Clock, ArrowRight, Copy, Check, X } from 'lucide-react';
import { ALL_INSIGHTS, DAILY_CAPSULES, InsightArticle } from '../data/siteData';
import { InsightModal } from '../components/InsightModal';
import { Marquee } from '../components/Marquee';

interface InsightCategoryMeta {
  id: string;
  label: string;
  treatise?: string;
  description: string;
  kind: 'all' | 'category' | 'capsules';
}

const INSIGHT_CATEGORIES: InsightCategoryMeta[] = [
  {
    id: 'All',
    label: 'All Essays',
    description: 'The complete archive of 183 long-form essays across all five thematic pillars.',
    kind: 'all'
  },
  {
    id: 'Tech, Systems & Professional Boundaries',
    label: 'Tech, Systems & Professional Boundaries',
    treatise: 'Skills Boundaries',
    description: 'Systems architecture, operational uptime, creative pricing, and disciplined professional boundaries.',
    kind: 'category'
  },
  {
    id: 'Emotional Stewardship & Mental Clarity',
    label: 'Emotional Stewardship & Mental Clarity',
    treatise: 'Deleazo',
    description: 'Emotional self-governance, overcoming distraction, inner composure, and sustained clarity.',
    kind: 'category'
  },
  {
    id: 'Spoken Declarations & Destiny',
    label: 'Spoken Declarations & Destiny',
    treatise: 'Word Your World',
    description: 'Intentional speech, prayer discipline, prophetic vision, and aligning words with calling.',
    kind: 'category'
  },
  {
    id: 'Covenant & Relationship Wisdom',
    label: 'Covenant & Relationship Wisdom',
    treatise: 'Love Capsules',
    description: 'Covenant commitment, emotional fidelity, marital stewardship, and relational maturity.',
    kind: 'category'
  },
  {
    id: 'Singleness & Readiness',
    label: 'Singleness & Readiness',
    treatise: "Don't Marry",
    description: 'Discernment before commitment, character preparation, and building wholeness in singleness.',
    kind: 'category'
  },
  {
    id: 'Daily Insight Capsules',
    label: 'Daily Insight Capsules',
    description: 'Fifty concise declarations and daily principles distilled from the five treatises.',
    kind: 'capsules'
  }
];

export const InsightsPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);
  const [copiedCapsuleIdx, setCopiedCapsuleIdx] = useState<number | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: ALL_INSIGHTS.length,
      'Daily Insight Capsules': DAILY_CAPSULES.length
    };
    for (const art of ALL_INSIGHTS) {
      counts[art.category] = (counts[art.category] || 0) + 1;
    }
    return counts;
  }, []);

  const activeCategoryMeta = useMemo(() => {
    return INSIGHT_CATEGORIES.find((c) => c.id === selectedCat) || INSIGHT_CATEGORIES[0];
  }, [selectedCat]);

  const normalizedQuery = search.trim().toLowerCase();

  const filteredArticles = useMemo(() => {
    if (activeCategoryMeta.kind === 'capsules') return [];
    return ALL_INSIGHTS.filter((art) => {
      const matchCat = selectedCat === 'All' || art.category === selectedCat;
      const matchSearch =
        !normalizedQuery ||
        art.title.toLowerCase().includes(normalizedQuery) ||
        art.excerpt.toLowerCase().includes(normalizedQuery) ||
        art.category.toLowerCase().includes(normalizedQuery) ||
        (art.book && art.book.toLowerCase().includes(normalizedQuery));
      return matchCat && matchSearch;
    });
  }, [selectedCat, normalizedQuery, activeCategoryMeta.kind]);

  const filteredCapsules = useMemo(() => {
    if (activeCategoryMeta.kind !== 'capsules') return [];
    return DAILY_CAPSULES.map((text, index) => ({ text, number: index + 1 })).filter((item) => {
      if (!normalizedQuery) return true;
      return item.text.toLowerCase().includes(normalizedQuery);
    });
  }, [activeCategoryMeta.kind, normalizedQuery]);

  const handleCopyCapsule = (text: string, num: number) => {
    navigator.clipboard.writeText(`"${text}" — Eric Richson Darko`);
    setCopiedCapsuleIdx(num);
    setTimeout(() => setCopiedCapsuleIdx(null), 1800);
  };

  const handleCardKeyDown = (e: React.KeyboardEvent, article: InsightArticle) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveArticle(article);
    }
  };

  const totalForActiveCategory = categoryCounts[selectedCat] || 0;
  const displayedCount =
    activeCategoryMeta.kind === 'capsules' ? filteredCapsules.length : filteredArticles.length;

  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Header */}
      <section className="container-arc py-12 md:py-20 border-b border-border">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold mb-3">The Insights Archive</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1] text-balance">
            Insights &amp; Perspectives
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            An editorial archive of {ALL_INSIGHTS.length} long-form essays and {DAILY_CAPSULES.length} daily insight capsules drawn from five foundational treatises—spanning systems thinking, professional boundaries, emotional stewardship, spoken declarations, covenant wisdom, and readiness.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground tabular-nums">
            <span className="font-semibold text-obsidian">{ALL_INSIGHTS.length} Essays</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-obsidian">5 Thematic Pillars</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-obsidian">{DAILY_CAPSULES.length} Daily Insight Capsules</span>
          </div>
        </div>
      </section>

      {/* Marquee Quotes */}
      <Marquee quotes={DAILY_CAPSULES.slice(0, 10)} />

      {/* Category Filter & Search Controls */}
      <section className="bg-linen/95 border-b border-border py-5">
        <div className="container-arc space-y-4">
          {/* Row 1: Search & Active Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={
                  activeCategoryMeta.kind === 'capsules'
                    ? 'Search daily insight capsules...'
                    : 'Search essays by keyword, title, or treatise...'
                }
                aria-label="Search insights archive"
                className="w-full pl-10 pr-9 py-2.5 bg-card border border-border text-xs sm:text-sm text-obsidian placeholder:text-muted-foreground focus:outline-none focus:border-maritime rounded-xs transition-colors"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-obsidian cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground tabular-nums">
              <span>
                Showing <strong className="text-obsidian">{displayedCount}</strong> of{' '}
                <strong className="text-obsidian">{totalForActiveCategory}</strong>{' '}
                {activeCategoryMeta.kind === 'capsules' ? 'capsules' : 'essays'}
              </span>
              {(selectedCat !== 'All' || search) && (
                <>
                  <span aria-hidden="true">·</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCat('All');
                      setSearch('');
                    }}
                    className="text-maritime font-semibold hover:text-gold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Reset Filters
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Row 2: Distinct Category Tabs */}
          <div
            role="tablist"
            aria-label="Insight categories"
            className="flex items-center gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0"
          >
            {INSIGHT_CATEGORIES.map((cat) => {
              const isSelected = selectedCat === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold tracking-wide rounded-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-maritime text-linen border-maritime'
                      : 'bg-card text-obsidian/80 border-border hover:border-maritime hover:text-obsidian'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[0.68rem] tabular-nums ${
                      isSelected ? 'text-gold' : 'text-muted-foreground'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Category Context & Grid */}
      <section className="py-14 md:py-20 border-b border-border">
        <div className="container-arc">
          {/* Active Section Header */}
          <div className="mb-10 pb-6 border-b border-border flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
                <span className="eyebrow text-gold">
                  {activeCategoryMeta.kind === 'all'
                    ? 'Complete Collection'
                    : activeCategoryMeta.kind === 'capsules'
                      ? '50 Short Declarations'
                      : 'Category Archive'}
                </span>
                {activeCategoryMeta.treatise && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-maritime">
                      Treatise: {activeCategoryMeta.treatise}
                    </span>
                  </>
                )}
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-obsidian">
                {activeCategoryMeta.label}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {activeCategoryMeta.description}
              </p>
            </div>

            {activeCategoryMeta.kind !== 'capsules' && (
              <button
                type="button"
                onClick={() => setSelectedCat('Daily Insight Capsules')}
                className="text-xs font-semibold uppercase tracking-wider text-maritime hover:text-gold transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start md:self-auto"
              >
                Explore 50 Daily Capsules →
              </button>
            )}
          </div>

          {/* Daily Insight Capsules Grid */}
          {activeCategoryMeta.kind === 'capsules' ? (
            filteredCapsules.length === 0 ? (
              <div className="text-center py-20 border border-border bg-card p-12">
                <p className="font-display text-xl text-obsidian">
                  No daily capsules matched your search.
                </p>
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="btn-navy mt-4 py-2 px-5 text-xs"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {filteredCapsules.map((capsule) => {
                  const isCopied = copiedCapsuleIdx === capsule.number;
                  return (
                    <div
                      key={capsule.number}
                      className="flex flex-col justify-between border border-border bg-card p-6 md:p-7 transition-colors hover:border-gold"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <span className="eyebrow text-gold tabular-nums">
                            Capsule {String(capsule.number).padStart(2, '0')}
                          </span>
                          <span className="text-[0.68rem]">Daily Principle</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl text-obsidian leading-snug">
                          “{capsule.text}”
                        </blockquote>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                        <span>Eric Richson Darko</span>
                        <button
                          type="button"
                          onClick={() => handleCopyCapsule(capsule.text, capsule.number)}
                          className="inline-flex items-center gap-1.5 font-semibold text-maritime hover:text-gold transition-colors cursor-pointer"
                        >
                          {isCopied ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-gold" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-20 border border-border bg-card p-12">
              <p className="font-display text-xl text-obsidian">
                No essays matched your search.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCat('All');
                  setSearch('');
                }}
                className="btn-navy mt-4 py-2 px-5 text-xs"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveArticle(article)}
                  onKeyDown={(e) => handleCardKeyDown(e, article)}
                  className="group cursor-pointer flex flex-col justify-between border border-border bg-card p-6 md:p-8 transition-all duration-200 hover:border-gold hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maritime"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                      <span className="eyebrow text-gold text-[0.62rem] truncate">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-[0.68rem] shrink-0 tabular-nums">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-obsidian leading-snug group-hover:text-maritime transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {article.book && (
                      <p className="text-[0.7rem] font-semibold text-maritime uppercase tracking-wider flex items-center gap-1.5 pt-1">
                        <BookOpen className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{article.book}</span>
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-maritime font-semibold uppercase tracking-wider group-hover:text-gold transition-colors">
                    <span>Read Full Essay</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Reading Modal */}
      {activeArticle && (
        <InsightModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}
    </div>
  );
};
