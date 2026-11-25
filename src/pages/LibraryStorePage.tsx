import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Check, ArrowRight } from 'lucide-react';
import { ALL_BOOKS, Book, CLIENT_PUBLISHED_BOOKS, SITE_COORDINATES, CREATIVES_COORDINATES } from '../data/siteData';
import { BookModal } from '../components/BookModal';

const CATEGORIES = [
  'All',
  'Spiritual Formation',
  'Relational Intelligence',
  'Leadership & Discipline',
  'Daily Love Capsules',
  'Co-Authored'
];

export const LibraryStorePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBook, setActiveBook] = useState<Book | null>(null);

  const filteredBooks = useMemo(() => {
    return ALL_BOOKS.filter((b) => {
      const matchCat = selectedCategory === 'All' || b.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (b.subtitle && b.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        b.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-linen min-h-screen pt-24 md:pt-28">
      {/* Page Header */}
      <section className="container-arc py-12 md:py-20 border-b border-border">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold mb-3">Personal Authorship · Eric Richson Darko</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1]">
            The Complete Authorship Archive
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Eighteen published titles authored by Eric Richson Darko (15 solo works and 3 co-authored with Collins Angel Ross). Order digital editions (ePub &amp; PDF) directly via Selar, Mobile Money ({SITE_COORDINATES.momo}), or WhatsApp.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-[69px] z-30 bg-linen/95 backdrop-blur-md border-b border-border py-4">
        <div className="container-arc flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-maritime text-linen'
                    : 'bg-secondary/60 text-obsidian/75 hover:bg-secondary hover:text-obsidian'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or topic..."
              className="w-full pl-9 pr-4 py-2 bg-secondary/40 border border-border text-xs text-obsidian focus:outline-none focus:border-maritime"
            />
          </div>
        </div>
      </section>

      {/* Book Grid */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container-arc">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold tabular-nums">
              Showing {filteredBooks.length} of {ALL_BOOKS.length} Authored Titles
            </p>
            {selectedCategory !== 'All' && (
              <button
                type="button"
                onClick={() => setSelectedCategory('All')}
                className="text-xs text-maritime hover:underline cursor-pointer"
              >
                Reset Filter
              </button>
            )}
          </div>

          {filteredBooks.length === 0 ? (
            <div className="text-center py-20 border border-border bg-card p-12">
              <p className="font-display text-xl text-obsidian">No books matched your criteria.</p>
              <p className="mt-2 text-sm text-muted-foreground">Try clearing your search query or selecting "All".</p>
              <button
                type="button"
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="btn-navy mt-6 py-2 px-5 text-xs"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  onClick={() => setActiveBook(book)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveBook(book);
                    }
                  }}
                  className="group cursor-pointer flex flex-col justify-between border border-border bg-card p-5 transition-colors duration-200 hover:border-gold"
                >
                  <div>
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-obsidian/5 border border-border/80">
                      <img
                        src={book.coverUrl || SITE_COORDINATES.logoUrl}
                        alt={book.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = SITE_COORDINATES.logoUrl;
                        }}
                      />
                    </div>

                    <div className="mt-4">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold">
                        {book.category}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-semibold text-obsidian leading-snug group-hover:text-maritime transition-colors">
                        {book.title}
                      </h3>
                      {book.subtitle && (
                        <p className="mt-1 text-xs text-muted-foreground line-clamp-1 italic">
                          {book.subtitle}
                        </p>
                      )}
                      <p className="mt-2.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {book.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border flex items-center justify-between">
                    <div>
                      {book.priceGhs ? (
                        <span className="font-display text-lg font-bold text-obsidian tabular-nums">
                          GHS {book.priceGhs}
                        </span>
                      ) : (
                        <span className="text-xs text-gold font-semibold uppercase">Inquire</span>
                      )}
                      <span className="text-[0.65rem] text-muted-foreground block">
                        {book.format || 'ePub & PDF'}
                      </span>
                    </div>

                    <span className="btn-gold py-1.5 px-3.5 text-[0.68rem] font-semibold whitespace-nowrap">
                      View &amp; Order
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Client Book Design, Formatting & Publishing Services — Explicitly Under Richson Creatives */}
      <section id="publishing" className="py-20 md:py-28 border-b border-border bg-secondary/30 scroll-mt-24">
        <div className="container-arc">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="eyebrow text-gold mb-3">Delivered by Richson Creatives · {CREATIVES_COORDINATES.phoneDisplay}</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-obsidian leading-tight">
                Client Book Design, Formatting &amp; Publishing Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Separate from Eric Richson Darko's personal authorship above, all commercial book design, typesetting, and publishing production for external authors and institutions is executed by <strong className="text-obsidian">Richson Creatives</strong>:
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-obsidian">Book Cover Design &amp; Art Direction</h4>
                    <p className="text-xs text-muted-foreground">High-impact, shelf-commanding cover typography, illustrations, and 3D mockups.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-obsidian">Interior Layout &amp; Typesetting</h4>
                    <p className="text-xs text-muted-foreground">Clean book interior formatting, drop caps, indices, and press-ready pagination.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-obsidian">Print-Ready Production &amp; Digital Publishing</h4>
                    <p className="text-xs text-muted-foreground">Pre-flight CMYK press files, print coordination, ePub/PDF conversion, and store setup.</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 flex flex-wrap gap-4">
                <Link to="/creatives#start" className="btn-ember py-3 px-7 text-xs font-semibold whitespace-nowrap">
                  <span>Commission Richson Creatives</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/creatives#client-books" className="btn-outline py-3 px-7 text-xs font-semibold whitespace-nowrap">
                  <span>View All {CLIENT_PUBLISHED_BOOKS.length} Client Books</span>
                </Link>
              </div>
            </div>

            <div className="border border-border bg-linen p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Selected Client Books by Richson Creatives ({CLIENT_PUBLISHED_BOOKS.length} Titles)
              </p>
              <div className="grid grid-cols-3 gap-3">
                {CLIENT_PUBLISHED_BOOKS.slice(0, 6).map((cb) => (
                  <div key={cb.id} className="group relative aspect-[3/4] overflow-hidden bg-obsidian border border-border">
                    <img
                      src={cb.coverUrl}
                      alt={cb.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = SITE_COORDINATES.logoUrl;
                      }}
                    />
                    <div className="absolute inset-0 bg-obsidian/70 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end text-linen text-[0.62rem]">
                      <p className="font-bold line-clamp-1">{cb.title}</p>
                      <p className="text-gold text-[0.55rem]">{cb.author}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic text-center">
                Client book covers, formatting, and print production delivered by Richson Creatives ({CREATIVES_COORDINATES.phoneDisplay}).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Detail Modal */}
      {activeBook && (
        <BookModal
          book={activeBook}
          onClose={() => setActiveBook(null)}
        />
      )}
    </div>
  );
};
