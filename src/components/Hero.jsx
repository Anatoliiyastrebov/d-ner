import { motion } from "framer-motion";
import { ArrowRight, UtensilsCrossed, Sparkles } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=85&auto=format&fit=crop";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={HERO_IMAGE}
          alt="Frisch gegrillter Döner und Grill-Spezialitäten"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/60" />
      </motion.div>

      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-red/20 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-brand-orange/15 blur-[120px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass"
            >
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-sm font-medium text-zinc-300">
                Premium Street Food seit 2018
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight"
            >
              Der beste{" "}
              <span className="text-gradient-gold">Döner</span>
              <br />
              in deiner Stadt
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed"
            >
              Frisch gegrillt • Schnell geliefert • Unglaublich lecker
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#lieferung"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-brand-dark rounded-2xl bg-gradient-to-r from-brand-orange via-brand-amber to-brand-gold hover:shadow-xl hover:shadow-brand-orange/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Jetzt bestellen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white rounded-2xl glass hover:bg-white/10 transition-all"
              >
                <UtensilsCrossed className="w-5 h-5" />
                Speisekarte ansehen
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {[
                { value: "4.9", label: "Google Rating" },
                { value: "20–35", label: "Min. Lieferzeit" },
                { value: "50+", label: "Gerichte" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl glow-orange">
              <img
                src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80&auto=format&fit=crop"
                alt="Döner Kebab Nahaufnahme"
                className="w-full aspect-[4/5] object-cover"
                loading="eager"
              />
              <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-4">
                <p className="text-sm text-zinc-400">Heute beliebt</p>
                <p className="font-display font-bold text-white text-lg">
                  Classic Döner XL
                </p>
                <p className="text-brand-gold font-semibold">ab 7,50 €</p>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-brand-red text-white text-sm font-bold shadow-lg"
            >
              🔥 Frisch vom Grill
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-brand-orange" />
        </motion.div>
      </motion.div>
    </section>
  );
}
