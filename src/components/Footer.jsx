import { Link } from "react-router-dom";
import { Flame } from "lucide-react";
import { navLinks } from "../data/content";

const legalLinks = [
  { to: "/impressum", label: "Impressum" },
  { to: "/datenschutz", label: "Datenschutz" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-card/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-red to-brand-orange">
                <Flame className="w-5 h-5 text-white" />
              </span>
              <span className="font-display font-bold text-xl text-white">
                Döner & Grill Haus
              </span>
            </Link>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs leading-relaxed">
              Premium Döner, Grill & Street Food – frisch, schnell und unvergesslich lecker.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Kontakt</h4>
            <p className="text-sm text-zinc-500">Hauptstraße 42, 10115 Berlin</p>
            <p className="text-sm text-zinc-500 mt-1">
              <a
                href="tel:+493012345678"
                className="hover:text-brand-orange transition-colors"
              >
                +49 30 123 456 78
              </a>
            </p>
            <p className="text-sm text-zinc-500 mt-1">
              <a
                href="mailto:kontakt@demo-doener-grill.de"
                className="hover:text-brand-orange transition-colors"
              >
                kontakt@demo-doener-grill.de
              </a>
            </p>
          </div>
        </div>

        <nav
          aria-label="Rechtliche Hinweise"
          className="mt-10 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-4"
        >
          {legalLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-5 py-2.5 text-sm font-semibold text-zinc-300 rounded-xl glass border border-white/10 hover:border-brand-orange/40 hover:text-brand-orange transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 text-center space-y-3">
          <p className="text-sm md:text-base font-medium text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Dies ist nur eine Demo-Webseite und kein echtes Restaurant.
          </p>
          <p className="text-xs text-zinc-600">
            Projekt zu Demonstrationszwecken.
          </p>
          <p className="text-xs text-zinc-700 pt-2">
            © {new Date().getFullYear()} Döner & Grill Haus. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
