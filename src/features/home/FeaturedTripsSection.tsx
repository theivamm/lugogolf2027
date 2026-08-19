import { Link } from "react-router-dom";
import { trips } from "@/data/trips";
import { TripStatusBadge } from "@/components/ui/TripStatusBadge";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const accentColors: Record<string, string> = {
  "panama-2026": "#14b8a6",
  "espana-2026": "#f59e0b",
  "portugal-2026": "#3b82f6",
  "republica-dominicana-2026": "#22c55e",
  "chile-2026": "#ef4444",
};

function CarouselCard({ trip, accent }: { trip: typeof trips[0]; accent: string }) {
  return (
    <Link
      to={`/viajes/${trip.slug}`}
      className="group block shrink-0 w-[320px] lg:w-[380px]"
    >
      <article
        className="relative h-[400px] lg:h-[440px] flex flex-col overflow-hidden border border-white/[0.04]"
        style={{ borderColor: undefined }}
      >
        {/* Image */}
        <div className="relative h-[55%] overflow-hidden">
          <img
            src={trip.hero.image}
            alt={trip.hero.alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Accent color top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: accent }}
          />

          {/* Status */}
          <div className="absolute top-4 right-4">
            <TripStatusBadge status={trip.status} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-forest-900 p-5 flex flex-col justify-between relative">
          {/* Accent dot */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: accent }}
              />
              <span className="label-sm text-white/40">{trip.country}</span>
            </div>

            <h3 className="display-sm text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">
              {trip.title}
            </h3>

            {trip.subtitle && (
              <p className="text-white/30 body-sm line-clamp-2">{trip.subtitle}</p>
            )}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 text-white/25 label-sm mt-4">
            {trip.region && (
              <span className="flex items-center gap-1.5">
                <MapPin size={11} style={{ color: accent }} />
                {trip.region}
              </span>
            )}
            {trip.durationLabel && (
              <span className="flex items-center gap-1.5">
                <Clock size={11} style={{ color: accent }} />
                {trip.durationLabel}
              </span>
            )}
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px]">
            <div
              className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out"
              style={{ backgroundColor: accent }}
            />
          </div>
        </div>
      </article>
    </Link>
  );
}

export function FeaturedTripsSection() {
  const featured = trips.filter((t) => t.featured);
  const doubled = [...featured, ...featured];

  return (
    <section className="relative py-28 lg:py-36 bg-forest-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative mb-14 lg:mb-18">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="label-lg text-gold-400 block mb-4">Próximas experiencias</span>
          <h2 className="display-lg text-white">
            Destinos que esperan<br />por ti.
          </h2>
        </motion.div>
      </div>

      {/* ── Infinite horizontal carousel ── */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-forest-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-forest-950 to-transparent z-10 pointer-events-none" />

        <div className="carousel-track flex gap-5 pl-5 lg:pl-8">
          {doubled.map((trip, i) => (
            <CarouselCard
              key={`${trip.id}-${i}`}
              trip={trip}
              accent={accentColors[trip.id] || "#d4a843"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
