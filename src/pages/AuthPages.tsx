import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, User, Key, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SITE_COORDINATES } from '../data/siteData';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (email && password) {
        localStorage.setItem('richson_user', JSON.stringify({ email, name: email.split('@')[0], loggedIn: true }));
        setLoading(false);
        navigate('/');
      } else {
        setLoading(false);
        setError('Please enter a valid email and password.');
      }
    }, 500);
  };

  return (
    <div className="bg-linen min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-border bg-card p-8 md:p-10 shadow-lg space-y-6">
        <div className="text-center space-y-2">
          <div className="h-12 w-12 rounded-full bg-maritime/10 text-maritime flex items-center justify-center mx-auto mb-3">
            <Lock className="h-5 w-5" />
          </div>
          <h2 className="font-display text-2xl font-bold text-obsidian">
            Executive Portal Login
          </h2>
          <p className="text-xs text-muted-foreground">
            Access client projects, manuscript drafts, and member updates
          </p>
        </div>

        {error && (
          <div className="p-3 text-xs bg-destructive/10 text-destructive border border-destructive/20 rounded-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="eyebrow block mb-1.5" htmlFor="log-email">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="log-email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-9 pr-3 py-2.5 bg-secondary/30 border border-border text-xs text-obsidian focus:outline-none focus:border-maritime"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="eyebrow" htmlFor="log-pass">Password</label>
              <Link to="/forgot-password" className="text-[0.68rem] text-maritime hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="log-pass"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2.5 bg-secondary/30 border border-border text-xs text-obsidian focus:outline-none focus:border-maritime"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-navy w-full py-3 text-xs font-semibold justify-center"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-border text-center text-xs text-muted-foreground">
          Don't have an account?{' '}
          <Link to="/register" className="text-maritime font-semibold hover:underline">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('richson_user', JSON.stringify({ email, name, loggedIn: true }));
    setSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="bg-linen min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-border bg-card p-8 md:p-10 shadow-lg space-y-6">
        <div className="text-center space-y-2">
          <div className="h-12 w-12 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto mb-3">
            <User className="h-5 w-5" />
          </div>
          <h2 className="font-display text-2xl font-bold text-obsidian">
            Create Portal Account
          </h2>
          <p className="text-xs text-muted-foreground">
            Join the Richson Global readership & client network
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="h-10 w-10 text-gold mx-auto" />
            <p className="font-display text-lg text-obsidian font-semibold">Account Initialised</p>
            <p className="text-xs text-muted-foreground">Redirecting to your dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="eyebrow block mb-1.5" htmlFor="reg-name">Full Name</label>
              <input
                id="reg-name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Eric Darko"
                className="w-full px-3 py-2.5 bg-secondary/30 border border-border text-xs text-obsidian focus:outline-none focus:border-maritime"
              />
            </div>

            <div>
              <label className="eyebrow block mb-1.5" htmlFor="reg-email">Email Address</label>
              <input
                id="reg-email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3 py-2.5 bg-secondary/30 border border-border text-xs text-obsidian focus:outline-none focus:border-maritime"
              />
            </div>

            <div>
              <label className="eyebrow block mb-1.5" htmlFor="reg-pass">Password</label>
              <input
                id="reg-pass"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2.5 bg-secondary/30 border border-border text-xs text-obsidian focus:outline-none focus:border-maritime"
              />
            </div>

            <button
              type="submit"
              className="btn-navy w-full py-3 text-xs font-semibold justify-center"
            >
              <span>Create Account</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}

        <div className="pt-4 border-t border-border text-center text-xs text-muted-foreground">
          Already registered?{' '}
          <Link to="/login" className="text-maritime font-semibold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-linen min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-border bg-card p-8 md:p-10 shadow-lg space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-display text-2xl font-bold text-obsidian">
            Reset Password
          </h2>
          <p className="text-xs text-muted-foreground">
            Enter your email to receive recovery instructions
          </p>
        </div>

        {sent ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="h-8 w-8 text-gold mx-auto" />
            <p className="text-xs text-muted-foreground">
              If an account is associated with {email}, you will receive a reset link shortly.
            </p>
            <Link to="/login" className="btn-navy inline-flex py-2 px-5 text-xs mt-2">
              Back to Login
            </Link>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="eyebrow block mb-1.5" htmlFor="fp-email">Email Address</label>
              <input
                id="fp-email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3 py-2.5 bg-secondary/30 border border-border text-xs text-obsidian focus:outline-none focus:border-maritime"
              />
            </div>

            <button
              type="submit"
              className="btn-navy w-full py-3 text-xs font-semibold justify-center"
            >
              <span>Transmit Reset Instructions</span>
            </button>
          </form>
        )}

        <div className="pt-4 border-t border-border text-center text-xs text-muted-foreground">
          <Link to="/login" className="text-maritime font-semibold hover:underline">
            ← Return to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [done, setDone] = useState(false);

  return (
    <div className="bg-linen min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-border bg-card p-8 md:p-10 shadow-lg space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-display text-2xl font-bold text-obsidian">
            Set New Password
          </h2>
          <p className="text-xs text-muted-foreground">
            Enter your updated security credentials
          </p>
        </div>

        {done ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="h-8 w-8 text-gold mx-auto" />
            <p className="text-xs text-muted-foreground">Password updated successfully.</p>
            <Link to="/login" className="btn-navy inline-flex py-2 px-5 text-xs mt-2">
              Proceed to Login
            </Link>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="eyebrow block mb-1.5" htmlFor="np-pass">New Password</label>
              <input
                id="np-pass"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2.5 bg-secondary/30 border border-border text-xs text-obsidian focus:outline-none focus:border-maritime"
              />
            </div>

            <button
              type="submit"
              className="btn-navy w-full py-3 text-xs font-semibold justify-center"
            >
              <span>Save New Password</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
