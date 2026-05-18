import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function FloatingOrderButton() {
  return (
    <motion.a
      href="#lieferung"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-4 rounded-full bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold shadow-2xl shadow-brand-orange/40 glow-orange md:bottom-8 md:right-8"
      aria-label="Jetzt bestellen"
    >
      <ShoppingCart className="w-5 h-5" />
      <span className="hidden sm:inline">Bestellen</span>
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-gold border-2 border-brand-dark"
      />
    </motion.a>
  );
}
