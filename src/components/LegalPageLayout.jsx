import { Link } from "react-router-dom";
import { ArrowLeft, Flame } from "lucide-react";

export default function LegalPageLayout({ title, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-white/5 bg-brand-card/50">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-white hover:text-brand-orange transition-colors"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-brand-red to-brand-orange">
              <Flame className="w-4 h-4 text-white" />
            </span>
            <span className="font-display font-bold text-lg hidden sm:inline">
              Döner & Grill
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zur Startseite
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16">
        <article className="max-w-3xl mx-auto px-4 md:px-6">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
            {title}
          </h1>
          <div className="space-y-5 text-sm text-zinc-400 leading-relaxed">
            {children}
          </div>
        </article>
      </main>

      <footer className="border-t border-white/5 bg-brand-card/50 py-8">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center space-y-4">
          <nav
            aria-label="Rechtliche Hinweise"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
          >
            <Link
              to="/impressum"
              className="text-zinc-400 hover:text-brand-orange transition-colors font-medium"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-zinc-400 hover:text-brand-orange transition-colors font-medium"
            >
              Datenschutz
            </Link>
          </nav>
          <p className="text-xs text-zinc-600">
            Demo-Webseite · Projekt zu Demonstrationszwecken.
          </p>
        </div>
      </footer>
    </div>
  );
}
