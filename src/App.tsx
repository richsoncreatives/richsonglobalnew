/**
 * Richson Global — Eric Richson Darko
 * Single Page Application Router & Layout Architecture
 */

import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { SeoHead } from './components/SeoHead';
import { EnquireWidget } from './components/EnquireWidget';
import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const EcosystemPage = lazy(() => import('./pages/EcosystemPage').then((m) => ({ default: m.EcosystemPage })));
const ApproachPage = lazy(() => import('./pages/ApproachPage').then((m) => ({ default: m.ApproachPage })));
const PartnershipsPage = lazy(() => import('./pages/PartnershipsPage').then((m) => ({ default: m.PartnershipsPage })));
const MinistryPage = lazy(() => import('./pages/MinistryPage').then((m) => ({ default: m.MinistryPage })));
const WisefoldPage = lazy(() => import('./pages/WisefoldPage').then((m) => ({ default: m.WisefoldPage })));
const LibraryStorePage = lazy(() => import('./pages/LibraryStorePage').then((m) => ({ default: m.LibraryStorePage })));
const CreativesPage = lazy(() => import('./pages/CreativesPage').then((m) => ({ default: m.CreativesPage })));
const InsightsPage = lazy(() => import('./pages/InsightsPage').then((m) => ({ default: m.InsightsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const LoginPage = lazy(() => import('./pages/AuthPages').then((m) => ({ default: m.LoginPage })));
const RegisterPage = lazy(() => import('./pages/AuthPages').then((m) => ({ default: m.RegisterPage })));
const ForgotPasswordPage = lazy(() => import('./pages/AuthPages').then((m) => ({ default: m.ForgotPasswordPage })));
const ResetPasswordPage = lazy(() => import('./pages/AuthPages').then((m) => ({ default: m.ResetPasswordPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function PageFallback() {
  return (
    <div className="min-h-screen bg-linen flex items-center justify-center pt-24">
      <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
        Loading…
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SeoHead />
      <ScrollHandler />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          {/* Main Layout Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/ministry" element={<MinistryPage />} />
            <Route path="/wisefold" element={<WisefoldPage />} />
            <Route path="/library-store" element={<LibraryStorePage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Canonical Aliases & Legacy .html Redirects */}
            <Route path="/publishing-services" element={<Navigate to="/creatives/portfolio#client-books" replace />} />
            <Route path="/leadership" element={<Navigate to="/about#affiliations" replace />} />
            <Route path="/agency-portfolio" element={<Navigate to="/creatives/portfolio" replace />} />
            <Route path="/blog-nuggets" element={<Navigate to="/insights" replace />} />
            <Route path="/about.html" element={<Navigate to="/about" replace />} />
            <Route path="/ministry.html" element={<Navigate to="/ministry" replace />} />
            <Route path="/wisefold.html" element={<Navigate to="/wisefold" replace />} />
            <Route path="/library.html" element={<Navigate to="/library-store" replace />} />
            <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
            <Route path="/blognugget.html" element={<Navigate to="/insights" replace />} />
            <Route path="/ecosystem.html" element={<Navigate to="/ecosystem" replace />} />
            <Route path="/creatives.html" element={<Navigate to="/creatives" replace />} />
            <Route path="/portfolio.html" element={<Navigate to="/creatives/portfolio" replace />} />
            <Route path="/approach.html" element={<Navigate to="/approach" replace />} />
            <Route path="/partnerships.html" element={<Navigate to="/partnerships" replace />} />
            <Route path="/insights.html" element={<Navigate to="/insights" replace />} />

            {/* Portal Auth Information Pages */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* Standalone Dark Luxury Studio Portal (Both /creatives and /creatives/portfolio) */}
          <Route path="/creatives" element={<CreativesPage />} />
          <Route path="/creatives/portfolio" element={<CreativesPage />} />
        </Routes>
      </Suspense>
      <EnquireWidget />
    </BrowserRouter>
  );
}
