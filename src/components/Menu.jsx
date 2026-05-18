import SectionHeading from "./SectionHeading";
import MenuCard from "./MenuCard";
import { menuItems } from "../data/content";

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-elevated/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="Unsere Spezialitäten"
          title="Menü"
          subtitle="Handgemacht, frisch zubereitet – jeden Tag vom Grill direkt auf deinen Teller."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
