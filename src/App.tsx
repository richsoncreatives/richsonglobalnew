/**
 * Eric Richson Darko: Executive & Creative Archive
 * Single Page Application Router & Layout Architecture
 * Completely independent of Base44 signatures.
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { ApproachPage } from './pages/ApproachPage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { MinistryPage } from './pages/MinistryPage';
import { LibraryStorePage } from './pages/LibraryStorePage';
import { CreativesPage } from './pages/CreativesPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage } from './pages/AuthPages';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change or hash navigation
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

// Main Site Layout (Header + Page + Footer)
function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-linen selection:bg-gold/30 selection:text-maritime">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/ministry" element={<MinistryPage />} />
          <Route path="/library-store" element={<LibraryStorePage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Canonical Aliases & Redirects */}
          <Route path="/publishing-services" element={<Navigate to="/library-store#publishing" replace />} />
          <Route path="/leadership" element={<Navigate to="/about#affiliations" replace />} />
          <Route path="/creatives/portfolio" element={<Navigate to="/creatives#work" replace />} />
          <Route path="/agency-portfolio" element={<Navigate to="/creatives#work" replace />} />
          <Route path="/blog-nuggets" element={<Navigate to="/insights" replace />} />

          {/* Auth Pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Standalone Dark Luxury Agency Portal */}
        <Route path="/creatives" element={<CreativesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
