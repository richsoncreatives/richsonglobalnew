import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, BookOpen, Check, Sparkles, Filter, ArrowRight, MessageSquare } from 'lucide-react';
import { ALL_BOOKS, Book, CLIENT_PUBLISHED_BOOKS, SITE_COORDINATES } from '../data/siteData';
import { BookModal } from '../components/BookModal';

const CATEGORIES = [
  'All',
  'Spiritual Formation',
  'Relational Intelligence',
  'Leadership & Discipline',
  'Co-Authored'
];

export const LibraryStorePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBook, setActiveBook] = useState<Book | null>(null);

  // Filter books
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
          <p className="eyebrow text-gold mb-3">Authorship & Digital Bookstore</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-obsidian leading-[1.1]">
            The Complete Authorship Archive
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Eighteen published titles by Eric Richson Darko (15 solo, 3 co-authored with Collins Angel Ross). Available as instantaneous digital downloads in ePub & PDF with direct Mobile Money or international card checkout.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-[73px] z-30 bg-linen/95 backdrop-blur-md border-b border-border py-4">
        <div className="container-arc flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-maritime text-linen shadow-xs'
                    : 'bg-secondary/60 text-obsidian/75 hover:bg-secondary hover:text-obsidian'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or topic..."
              className="w-full pl-9 pr-4 py-2 bg-secondary/40 border border-border text-xs text-obsidian focus:outline-none focus:border-maritime rounded-xs"
            />
          </div>
        </div>
      </section>

      {/* Book Grid */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container-arc">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Showing {filteredBooks.length} of {ALL_BOOKS.length} Published Titles
            </p>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-xs text-maritime hover:underline"
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
                  className="group cursor-pointer flex flex-col justify-between border border-border bg-card p-5 shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-obsidian/5 border border-border/80">
                      <img
                        src={book.coverUrl}
                        alt={book.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = SITE_COORDINATES.avatarUrl;
                        }}
                      />
                      {book.featured && (
                        <span className="absolute top-2 right-2 bg-maritime text-linen text-[0.55rem] font-bold uppercase tracking-wider px-2 py-0.5 shadow-md">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Metadata */}
                    <div className="mt-4">
                      <span className="eyebrow text-gold text-[0.62rem]">
                        {book.category}
                      </span>
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
                        <span className="font-display text-lg font-bold text-obsidian">
                          GHS {book.priceGhs}
                        </span>
                      ) : (
                        <span className="text-xs text-gold font-semibold uppercase">Inquire</span>
                      )}
                      <span className="text-[0.65rem] text-muted-foreground block">
                        {book.format || 'ePub & PDF'}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="btn-gold py-1.5 px-3.5 text-[0.68rem] font-semibold"
                    >
                      View & Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Author Publishing Services Section */}
      <section id="publishing" className="py-20 md:py-28 border-b border-border bg-secondary/30 scroll-mt-24">
        <div className="container-arc">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="eyebrow text-gold mb-3">Publishing Practice</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-obsidian leading-tight">
                Publishing & Editorial Services for Authors
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Beyond personal authorship, Eric Richson Darko coordinates full-spectrum publishing services for independent authors and corporate institutions through Richson Creatives:
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-obsidian">Book Cover Design & Art Direction</h4>
                    <p className="text-xs text-muted-foreground">High-impact, shelf-commanding cover typography, illustrations, and 3D mockups.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-obsidian">Interior Layout & Typesetting</h4>
                    <p className="text-xs text-muted-foreground">Typesetting conforming to international ISO print standards with drop caps, indices, and footnotes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-obsidian">Print-Ready File Production & Distribution</h4>
                    <p className="text-xs text-muted-foreground">Pre-flight press files, CMYK verification, ePub eBook conversion, and online store placement.</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Link to="/contact" className="btn-navy py-3 px-7 text-xs font-semibold">
                  <span>Inquire About Author Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Client Books Gallery Showcase */}
            <div className="border border-border bg-linen p-6 md:p-8">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Selected Works Produced for Clients ({CLIENT_PUBLISHED_BOOKS.length} Titles)
              </p>
              <div className="grid grid-cols-3 gap-3">
                {CLIENT_PUBLISHED_BOOKS.slice(0, 6).map((cb) => (
                  <div key={cb.id} className="group relative aspect-[3/4] overflow-hidden bg-obsidian border border-border">
                    <img
                      src={cb.coverUrl}
                      alt={cb.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = SITE_COORDINATES.avatarUrl;
                      }}
                    />
                    <div className="absolute inset-0 bg-obsidian/60 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end text-linen text-[0.62rem]">
                      <p className="font-bold line-clamp-1">{cb.title}</p>
                      <p className="text-gold text-[0.55rem]">{cb.author}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[0.68rem] text-muted-foreground italic text-center">
                Covers, typesetting, and production executed by Richson Creatives.
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
