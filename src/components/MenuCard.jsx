import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function MenuCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl overflow-hidden bg-brand-card border border-white/5 hover:border-brand-orange/40 transition-colors duration-500"
    >
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-brand-orange/20 via-transparent to-transparent pointer-events-none z-10" />

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
        <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass text-sm font-bold text-brand-gold">
          {item.price}
        </span>
      </div>

      <div className="relative p-6 z-20">
        <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-amber transition-colors">
          {item.name}
        </h3>
        <p className="mt-2 text-sm text-zinc-500 leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl bg-white/5 border border-white/10 group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:to-brand-red group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-brand-orange/20 transition-all duration-300"
        >
          <ShoppingBag className="w-4 h-4" />
          Bestellen
        </motion.button>
      </div>

      <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-brand-orange/30 group-hover:glow-orange" />
    </motion.article>
  );
}
