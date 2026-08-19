import { useParams, Link } from "react-router-dom";
import { SEOHead } from "@/lib/seo";
import { trips } from "@/data/trips";
import { TripStatusBadge } from "@/components/ui/TripStatusBadge";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowLeft, MapPin, Clock } from "lucide-react";

export function TripDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const trip = trips.find((t) => t.slug === slug);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-forest-950">
        <div className="text-center">
          <p className="display-hero text-white/[0.04] mb-0 select-none">404</p>
          <h1 className="display-md text-white -mt-4 mb-6">Viaje no encontrado</h1>
          <Link to="/viajes" className="label-lg text-gold-400 hover:text-gold-300 transition-colors">
            Volver a viajes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={trip.seo.title} description={trip.seo.description} ogImage={trip.hero.image} />

      <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
        <img src={trip.hero.image} alt={trip.hero.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        <div className="absolute bottom-0 left-0 right-0 pb-14 lg:pb-20 px-5 lg:px-8 max-w-7xl mx-auto">
          <Link
            to="/viajes"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors label-sm"
          >
            <ArrowLeft size={14} />
            Todos los viajes
          </Link>

          <TripStatusBadge status={trip.status} className="mb-5" />

          <h1 className="display-hero text-white mb-3">{trip.title}</h1>

          {trip.subtitle && (
            <p className="text-white/50 body-xl">{trip.subtitle}</p>
          )}

          <div className="flex flex-wrap items-center gap-6 mt-8 text-white/40 label-sm">
            {trip.region && (
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-gold-500" /> {trip.region}
              </span>
            )}
            {trip.durationLabel && (
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" /> {trip.durationLabel}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 bg-forest-950">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <FadeIn>
            <span className="label-lg text-gold-400 block mb-4">Resumen</span>
            <p className="text-white/60 body-xl">{trip.summary}</p>
          </FadeIn>

          {trip.highlights.length > 0 && (
            <FadeIn delay={0.1}>
              <div className="mt-14">
                <h3 className="text-lg font-black text-white mb-5 font-display uppercase tracking-wider">
                  Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trip.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/[0.03] border border-white/5 p-4">
                      <span className="mt-1.5 w-2 h-2 bg-gold-500 shrink-0" />
                      <span className="text-white/60 body-md">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <section className="relative py-20 bg-forest-950 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gold-500/[0.03] rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-8">
          <FadeIn>
            <p className="text-white/35 body-lg mb-8">
              Información detallada del itinerario, hoteles, campos y experiencias disponible próximamente.
            </p>
            <Link
              to="/cotizar"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold-500 text-forest-950 font-black tracking-widest uppercase text-sm hover:bg-gold-400 transition-all"
            >
              Cotizar este viaje
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
