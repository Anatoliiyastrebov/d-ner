import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Delivery() {
  return (
    <section id="lieferung" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-orange/10 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="Lieferdienst"
          title="Schnell zu dir nach Hause"
          subtitle="Frisch zubereitet und schnell geliefert."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 md:p-8 rounded-3xl glass-strong glow-orange max-w-xl mx-auto"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-red">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-display text-2xl md:text-3xl font-bold text-white">
              Lieferung in 20–35 Minuten
            </p>
            <p className="text-zinc-400 mt-1">Heiß, frisch und direkt an deine Tür</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
