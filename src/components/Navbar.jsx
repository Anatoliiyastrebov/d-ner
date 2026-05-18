import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-2xl shadow-black/40 py-3"
            : "bg-transparent py-4"
        }`}
      >
        <motion.div className="flex items-center justify-between px-4 md:px-6">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-red to-brand-orange shadow-lg glow-orange">
              <Flame className="w-5 h-5 text-white" strokeWidth={2.5} />
            </span>
            <span className="font-display font-bold text-lg md:text-xl text-white tracking-tight">
              Döner<span className="text-brand-orange">&</span>Grill
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#menu"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl border border-white/15 hover:bg-white/5 transition-all"
            >
              Speisekarte
            </a>
            <a
              href="#lieferung"
              className="px-5 py-2.5 text-sm font-semibold text-brand-dark rounded-xl bg-gradient-to-r from-brand-orange to-brand-red hover:shadow-lg hover:shadow-brand-orange/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Jetzt bestellen
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-xl glass text-white"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-[min(100%,320px)] glass-strong p-8 pt-24"
            >
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-xl font-display font-semibold text-white hover:text-brand-orange transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#lieferung"
                onClick={() => setMobileOpen(false)}
                className="mt-10 block w-full text-center px-6 py-4 font-semibold text-brand-dark rounded-xl bg-gradient-to-r from-brand-orange to-brand-red"
              >
                Jetzt bestellen
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
