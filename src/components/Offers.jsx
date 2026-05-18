import { motion } from "framer-motion";
import { Tag } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { offers } from "../data/content";

export default function Offers() {
  return (
    <section id="angebote" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="Angebote & Aktionen"
          title="Spare bei jeder Bestellung"
          subtitle="Exklusive Deals – nur für kurze Zeit."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.title}
              initial={{ opacity: 0, y: 40, rotate: index === 1 ? 0 : index === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`relative overflow-hidden rounded-3xl p-8 md:p-10 bg-gradient-to-br ${offer.gradient} min-h-[220px] flex flex-col justify-between shadow-2xl`}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute bottom-4 right-4 opacity-20"
              >
                <Tag className="w-24 h-24 text-white" />
              </motion.div>

              <span className="relative inline-flex self-start px-3 py-1 rounded-full bg-black/20 text-white text-xs font-bold uppercase tracking-wider">
                {offer.badge}
              </span>

              <div className="relative mt-auto">
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  {offer.title}
                </h3>
                {offer.price && (
                  <p className="mt-2 font-display text-4xl font-black text-white/95">
                    {offer.price}
                  </p>
                )}
                {offer.subtitle && (
                  <p className="mt-2 text-white/90 font-medium">{offer.subtitle}</p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
