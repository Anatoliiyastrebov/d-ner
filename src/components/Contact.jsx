import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { openingHours } from "../data/content";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="Kontakt"
          title="Besuche uns"
          subtitle="Mitten in der Stadt – frisch vom Grill, jeden Tag für dich da."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-3xl glass flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white">Adresse</h3>
                <p className="mt-1 text-zinc-400">
                  Hauptstraße 42
                  <br />
                  10115 Berlin, Deutschland
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-red/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white">Telefon</h3>
                <a
                  href="tel:+493012345678"
                  className="mt-1 block text-brand-orange hover:text-brand-amber transition-colors"
                >
                  +49 30 123 456 78
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass">
              <div className="flex gap-4 mb-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-display font-bold text-white">Öffnungszeiten</h3>
              </div>
              <ul className="space-y-3">
                {openingHours.map((row) => (
                  <li
                    key={row.day}
                    className="flex justify-between text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-zinc-500">{row.day}</span>
                    <span className="font-medium text-white">{row.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-white/10 min-h-[400px] glass"
          >
            <iframe
              title="Standort Döner & Grill Haus auf Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.409742294!2d13.3888!3d52.5200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBerlin!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
