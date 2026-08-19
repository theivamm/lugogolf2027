export const site = {
  name: "LugoGolf",
  tagline: "Viajes que empiezan en el golf y terminan en amistad.",
  promise: "Todo está organizado para que tú solo tengas que disfrutar.",
  concept: "Golf Inclusive",
  whatsapp: "+5491100000000",
  email: "info@lugogolf.com",
  instagram: "https://instagram.com/lugogolf",
  facebook: "https://facebook.com/lugogolf",
  linkedin: "https://linkedin.com/company/lugogolf",
  youtube: "https://youtube.com/@lugogolf",
  founded: 2020,
  stats: {
    trips: 20,
    golfists: 500,
    countries: 8,
  },
  navigation: [
    { label: "Viajes", href: "/viajes" },
    { label: "La Experiencia", href: "/experiencia" },
    { label: "Comunidad", href: "/comunidad" },
    { label: "Nosotros", href: "/nosotros" },
  ],
  cta: {
    label: "Cotizar viaje",
    href: "/cotizar",
  },
  footer: {
    destinations: [
      { label: "Panamá 2026", href: "/viajes/panama-2026" },
      { label: "España 2026", href: "/viajes/espana-2026" },
      { label: "Portugal 2026", href: "/viajes/portugal-2026" },
      { label: "República Dominicana 2026", href: "/viajes/republica-dominicana-2026" },
      { label: "Chile 2026", href: "/viajes/chile-2026" },
    ],
    secondary: [
      { label: "Política de Privacidad", href: "/legal/privacidad" },
      { label: "Términos y Condiciones", href: "/legal/terminos" },
    ],
  },
} as const;
