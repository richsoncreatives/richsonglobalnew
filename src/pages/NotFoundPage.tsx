import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, BookOpen, Sparkles } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-linen min-h-screen pt-36 pb-20 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-6 border border-border bg-card p-10 shadow-lg">
        <p className="font-display text-7xl font-bold text-gold">404</p>
        <h1 className="font-display text-3xl font-semibold text-obsidian">
          Page Not Found
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The requested route or resource does not exist in the Richson Global archive.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-navy py-2.5 px-5 text-xs">
            <Home className="h-4 w-4" />
            <span>Return Home</span>
          </Link>
          <Link to="/library-store" className="btn-outline py-2.5 px-5 text-xs">
            <BookOpen className="h-4 w-4" />
            <span>Digital Library</span>
          </Link>
          <Link to="/creatives" className="btn-ember py-2.5 px-5 text-xs">
            <Sparkles className="h-4 w-4" />
            <span>Creatives Studio</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
