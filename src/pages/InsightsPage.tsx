import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { ALL_INSIGHTS, CAPACITY_QUOTES, InsightArticle } from '../data/siteData';
import { InsightModal } from '../components/InsightModal';
import { Marquee } from '../components/Marquee';

const INSIGHT_CATEGORIES = [
  'All',
  'Tech, Systems & Professional Boundaries',
  'Relational Intelligence & Marriage',
  'Leadership, Governance & Capacity',
  'Faith, Devotion & Stewardship',
  'Creative Agency, Branding & Publishing'
];

export const InsightsPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('All');
  const [search, setSearch] = useState('');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const filteredArticles = useMemo(() => {
    return ALL_INSIGHTS.filter((art) => {
      const matchCat = selectedCat === 'All' || art.category === selectedCat;
      const matchSearch =
        !search ||
        art.title.toLowerCase().includes(search.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        (art.book && art.book.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCat, search]);

  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Header */}
      <section className="container-arc py-12 md:py-20 border-b border-border">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold mb-3">Blog Nuggets & Treatises</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1]">
            Insights & Perspectives
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            A comprehensive archive of reflections on enterprise, relational intelligence, technology systems, publishing, personal growth, and faith. Over 180 essays and diagnostic principles.
          </p>
        </div>
      </section>

      {/* Marquee Quotes */}
      <Marquee quotes={CAPACITY_QUOTES.slice(8, 16)} />

      {/* Category Tabs & Search Bar */}
      <section className="sticky top-[73px] z-30 bg-linen/95 backdrop-blur-md border-b border-border py-4">
        <div className="container-arc flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
            {INSIGHT_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedCat(c)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCat === c
                    ? 'bg-maritime text-linen shadow-xs'
                    : 'bg-secondary/60 text-obsidian/75 hover:bg-secondary'
                }`}
              >
                {c === 'All' ? 'All Essays' : c.split('&')[0]}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search essays by keyword..."
              className="w-full pl-9 pr-4 py-2 bg-secondary/40 border border-border text-xs text-obsidian focus:outline-none focus:border-maritime rounded-xs"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container-arc">
          <div className="flex items-center justify-between mb-8 text-xs text-muted-foreground">
            <p className="uppercase tracking-wider font-semibold">
              Displaying {filteredArticles.length} of {ALL_INSIGHTS.length} Articles
            </p>
            {selectedCat !== 'All' && (
              <button
                onClick={() => setSelectedCat('All')}
                className="text-maritime hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 border border-border bg-card p-12">
              <p className="font-display text-xl text-obsidian">No articles matched your search.</p>
              <button
                onClick={() => { setSelectedCat('All'); setSearch(''); }}
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
                  onClick={() => setActiveArticle(article)}
                  className="group cursor-pointer flex flex-col justify-between border border-border bg-card p-6 md:p-8 shadow-xs hover:shadow-xl hover:border-gold transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="eyebrow text-gold text-[0.62rem] line-clamp-1">{article.category}</span>
                      <span className="flex items-center gap-1 text-[0.68rem] shrink-0">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-obsidian leading-snug group-hover:text-maritime transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {article.book && (
                      <p className="text-[0.68rem] font-semibold text-maritime uppercase tracking-wider flex items-center gap-1.5 pt-1">
                        <BookOpen className="h-3 w-3" />
                        <span className="line-clamp-1">{article.book}</span>
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-maritime font-semibold uppercase tracking-wider group-hover:text-gold transition-colors">
                    <span>Read Full Essay</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
