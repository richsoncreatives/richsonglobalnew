import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowRight, Mail, MessageSquare } from 'lucide-react';
import { SITE_COORDINATES, CREATIVES_COORDINATES } from '../data/siteData';

interface PortalNoticeProps {
  heading: string;
  subtitle: string;
}

const PortalNotice: React.FC<PortalNoticeProps> = ({ heading, subtitle }) => {
  return (
    <div className="bg-linen min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
      <div className="w-full max-w-lg border border-border bg-card p-8 md:p-10 space-y-6">
        <div className="space-y-2">
          <div className="h-11 w-11 rounded-full bg-maritime/10 text-maritime flex items-center justify-center mb-3">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <p className="eyebrow text-gold">Standalone Migration Notice</p>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-obsidian">
            {heading}
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="border border-border bg-secondary/40 p-4 text-xs text-obsidian/80 leading-relaxed space-y-2">
          <p className="font-semibold text-obsidian">
            Authentication Backend Not Yet Connected
          </p>
          <p>
            Legacy Base44 authentication has been removed so this site operates independently on Cloudflare Pages without third-party lock-in. To protect user credentials, login and registration are intentionally disabled until a dedicated identity provider (such as Cloudflare Access, Auth0, or Firebase Authentication) is connected.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link to="/contact" className="btn-navy flex-1 py-3 px-5 text-xs justify-center whitespace-nowrap">
            <Mail className="h-4 w-4" />
            <span>Contact Executive Desk</span>
          </Link>
          <a
            href={CREATIVES_COORDINATES.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-gold flex-1 py-3 px-5 text-xs justify-center whitespace-nowrap"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Studio Support ({CREATIVES_COORDINATES.phoneDisplay})</span>
          </a>
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <Link to="/" className="text-maritime font-semibold hover:underline inline-flex items-center gap-1">
            <span>Return to Richson Global</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a href={`mailto:${SITE_COORDINATES.email}`} className="hover:text-maritime">
            {SITE_COORDINATES.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export const LoginPage: React.FC = () => (
  <PortalNotice
    heading="Client & Member Portal Sign In"
    subtitle="Client project tracking and private portal access require a configured server-side identity provider."
  />
);

export const RegisterPage: React.FC = () => (
  <PortalNotice
    heading="Portal Registration"
    subtitle="New member accounts are provisioned once an external authentication provider is enabled for this Cloudflare Pages deployment."
  />
);

export const ForgotPasswordPage: React.FC = () => (
  <PortalNotice
    heading="Password Recovery"
    subtitle="Password reset emails require an active authentication provider and transactional mail service."
  />
);

export const ResetPasswordPage: React.FC = () => (
  <PortalNotice
    heading="Set New Password"
    subtitle="Credential updates are disabled while standalone authentication is unconfigured."
  />
);
