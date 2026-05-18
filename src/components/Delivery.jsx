import { motion } from "framer-motion";
import { Bike, Utensils, Zap, Truck, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { deliveryPartners } from "../data/content";

const iconMap = {
  bike: Bike,
  utensils: Utensils,
  zap: Zap,
  truck: Truck,
};

export default function Delivery() {
  return (
    <section id="lieferung" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-orange/10 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="Lieferdienst"
          title="Schnell zu dir nach Hause"
          subtitle="Bestelle über deine Lieblings-App oder unsere eigene Lieferung."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 md:p-8 rounded-3xl glass-strong glow-orange max-w-xl mx-auto"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {deliveryPartners.map((partner, index) => {
            const Icon = iconMap[partner.icon];
            return (
              <motion.a
                key={partner.name}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group flex flex-col items-center p-8 rounded-3xl glass border border-white/5 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {partner.name}
                </h3>
                <span className="mt-2 text-sm text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity">
                  Jetzt bestellen →
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
