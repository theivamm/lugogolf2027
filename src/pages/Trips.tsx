import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import { SEOHead } from "@/lib/seo";
import { trips } from "@/data/trips";
import { TripStatusBadge } from "@/components/ui/TripStatusBadge";
import { FadeIn } from "@/components/motion/FadeIn";

export function TripsPage() {
  return (
    <>
      <SEOHead
        title="Viajes de Golf 2026 | LugoGolf"
        description="Descubre nuestros destinos de golf 2026. Panamá, España, Portugal, República Dominicana y Chile."
      />

      <section className="relative pt-36 pb-12 lg:pt-44 lg:pb-16 bg-forest-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/[0.03] rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
          <span className="label-lg text-gold-400 block mb-4">Destinos 2026</span>
          <h1 className="display-hero text-white">
            El mundo es nuestro<br />
            <span className="text-gold-400">próximo campo.</span>
          </h1>
        </div>
      </section>

      <section className="relative pb-28 lg:pb-36 bg-forest-950">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trips.map((trip, i) => (
              <FadeIn key={trip.id} delay={i * 0.08}>
                <Link to={`/viajes/${trip.slug}`} className="group block h-full">
                  <motion.article
                    className="relative h-full min-h-[420px] lg:min-h-[480px] flex flex-col overflow-hidden bg-forest-900 border border-white/[0.04]"
                    whileHover={{ y: -8, borderColor: "rgba(212, 168, 67, 0.2)" }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={trip.hero.image}
                        alt={trip.hero.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                        loading={i < 3 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                    </div>

                    <div className="absolute top-4 right-5 text-[7rem] lg:text-[8rem] font-display font-black text-white/[0.04] leading-none select-none pointer-events-none group-hover:text-white/[0.08] transition-colors duration-700">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="relative z-10 p-5 pb-0">
                      <TripStatusBadge status={trip.status} />
                    </div>

                    <div className="flex-1" />

                    <div className="relative z-10 p-5 pt-0">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                        <span className="label-sm text-white/40">{trip.country}</span>
                      </div>

                      <h3 className="display-sm text-white mb-3 group-hover:text-gold-300 transition-colors duration-300">
                        {trip.title}
                      </h3>

                      {trip.subtitle && (
                        <p className="text-white/35 body-sm mb-4 line-clamp-2">
                          {trip.subtitle}
                        </p>
                      )}

                      <div className="flex items-center gap-4 text-white/30 label-sm mb-5">
                        {trip.region && (
                          <span className="flex items-center gap-1.5">
                            <MapPin size={11} className="text-gold-500/60" />
                            {trip.region}
                          </span>
                        )}
                        {trip.durationLabel && (
                          <span className="flex items-center gap-1.5">
                            <Clock size={11} className="text-gold-500/60" />
                            {trip.durationLabel}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="label-md text-gold-400/60 group-hover:text-gold-400 transition-colors duration-300">
                          {trip.status === "available" ? "Reservar" :
                           trip.status === "sold_out" ? "Agotado" :
                           trip.status === "completed" ? "Finalizado" :
                           trip.status === "last_places" ? "Últimos lugares" :
                           trip.status === "waitlist" ? "Lista de espera" :
                           "Próximamente"}
                        </span>
                        <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-forest-950 text-white/30 transition-all duration-300">
                          <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-[2px]">
                      <div className="h-full w-0 group-hover:w-full bg-gold-500 transition-all duration-700 ease-out" />
                    </div>
                  </motion.article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
