import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { GolfTrip } from "@/types/trip";
import { TripStatusBadge } from "./TripStatusBadge";

interface TripCardProps {
  trip: GolfTrip;
  priority?: boolean;
}

export function TripCard({ trip, priority = false }: TripCardProps) {
  return (
    <Link to={`/viajes/${trip.slug}`} className="group block">
      <motion.article
        className="relative overflow-hidden bg-forest-900 border border-white/5 hover:border-gold-500/20 transition-all duration-500"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div className={`relative overflow-hidden ${priority ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
          <img
            src={trip.hero.image}
            alt={trip.hero.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading={priority ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Status badge */}
          <div className="absolute top-4 right-4">
            <TripStatusBadge status={trip.status} />
          </div>

          {/* Bottom info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="display-sm text-white mb-2">{trip.title}</h3>
            <div className="flex items-center gap-4 text-white/50 label-sm">
              {trip.region && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-gold-400" />
                  {trip.region}
                </span>
              )}
              {trip.durationLabel && <span>{trip.durationLabel}</span>}
            </div>
          </div>
        </div>

        {/* Gold bottom line on hover */}
        <div className="h-[2px] w-0 group-hover:w-full bg-gold-500 transition-all duration-700" />
      </motion.article>
    </Link>
  );
}
