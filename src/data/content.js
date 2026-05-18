export const menuItems = [
  {
    id: "classic-doner",
    name: "Classic Döner",
    description: "Saftiges Kalbfleisch, frisches Gemüse, hausgemachte Soße im knusprigen Fladenbrot.",
    price: "7,50 €",
    image:
      "https://images.unsplash.com/photo-1529006557810-274b9b7747f3?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "chicken-kebab",
    name: "Chicken Kebab",
    description: "Zart mariniertes Hähnchen vom Spieß mit Knoblauch-Joghurt und Salat.",
    price: "8,00 €",
    image:
      "https://images.unsplash.com/photo-1633327891109-7b4c37a88fb3?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "durum-wrap",
    name: "Dürüm Wrap",
    description: "Gerollter Wrap mit Premium-Fleisch, Gurke, Tomate und scharfer Soße.",
    price: "8,50 €",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "pommes-spezial",
    name: "Pommes Spezial",
    description: "Knusprige Pommes mit Käsesoße, Zwiebeln und unserem Signature-Topping.",
    price: "5,50 €",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "grill-teller",
    name: "Grill Teller",
    description: "Gemischter Grillteller mit Fleisch, Reis, Salat und zwei hausgemachten Saucen.",
    price: "12,90 €",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "falafel-box",
    name: "Falafel Box",
    description: "Knusprige Falafel mit Hummus, Tahini und frischem Tabouleh – vegetarisch.",
    price: "7,90 €",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80&auto=format&fit=crop",
  },
];

export const deliveryPartners = [
  {
    name: "Lieferando",
    icon: "bike",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Uber Eats",
    icon: "utensils",
    color: "from-emerald-500 to-green-700",
  },
  {
    name: "Wolt",
    icon: "zap",
    color: "from-cyan-400 to-blue-600",
  },
  {
    name: "Eigene Lieferung",
    icon: "truck",
    color: "from-brand-gold to-brand-orange",
  },
];

export const offers = [
  {
    title: "2 Döner + Cola",
    price: "12€",
    badge: "Bestseller",
    gradient: "from-brand-red to-brand-orange",
  },
  {
    title: "Gratis Getränk",
    subtitle: "ab 25€ Bestellwert",
    badge: "Deal",
    gradient: "from-brand-orange to-brand-gold",
  },
  {
    title: "Mittagsmenü Rabatt",
    subtitle: "Mo–Fr 11:00–14:00",
    badge: "-20%",
    gradient: "from-brand-gold to-amber-400",
  },
];

export const reviews = [
  {
    name: "Marco S.",
    rating: 5,
    text: "Bester Döner in der Stadt! Fleisch super saftig, Soße perfekt abgestimmt. Komme jede Woche.",
    date: "vor 2 Tagen",
  },
  {
    name: "Lisa K.",
    rating: 5,
    text: "Lieferung war in 25 Minuten da – noch heiß und frisch. Der Dürüm ist ein Traum!",
    date: "vor 1 Woche",
  },
  {
    name: "Thomas M.",
    rating: 5,
    text: "Grill Teller ist riesig und fair bepreist. Freundliches Team, top Qualität.",
    date: "vor 2 Wochen",
  },
  {
    name: "Aylin Y.",
    rating: 4,
    text: "Falafel Box überzeugt auch Vegetarier. Moderne Location, sehr sauber.",
    date: "vor 3 Wochen",
  },
];

export const openingHours = [
  { day: "Montag – Donnerstag", hours: "11:00 – 22:00" },
  { day: "Freitag – Samstag", hours: "11:00 – 23:30" },
  { day: "Sonntag", hours: "12:00 – 22:00" },
];

export const navLinks = [
  { href: "#menu", label: "Menü" },
  { href: "#lieferung", label: "Lieferung" },
  { href: "#angebote", label: "Angebote" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];
