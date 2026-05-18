import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { reviews } from "../data/content";

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? "fill-brand-gold text-brand-gold" : "text-zinc-600"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="bewertungen" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-elevated/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="Bewertungen"
          title="Was unsere Gäste sagen"
          subtitle="Über 2.000 zufriedene Kunden – 4.9★ im Durchschnitt."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.blockquote
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="relative p-6 rounded-3xl glass border border-white/5 hover:border-brand-gold/30 transition-colors duration-300"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-brand-orange/20" />
              <Stars rating={review.rating} />
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                „{review.text}"
              </p>
              <footer className="mt-6 pt-4 border-t border-white/5">
                <cite className="not-italic font-semibold text-white text-sm">
                  {review.name}
                </cite>
                <p className="text-xs text-zinc-600 mt-0.5">{review.date}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
