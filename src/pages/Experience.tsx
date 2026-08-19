import { SEOHead } from "@/lib/seo";
import { FadeIn } from "@/components/motion/FadeIn";

export function ExperiencePage() {
  return (
    <>
      <SEOHead
        title="La Experiencia LugoGolf | Golf Inclusive"
        description="Descubre el concepto Golf Inclusive. Golf, viajes y comunidad en experiencias diseñadas para disfrutar en pareja o con amigos."
      />

      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-forest-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/[0.03] rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
          <span className="label-lg text-gold-400 block mb-4">La experiencia</span>
          <h1 className="display-hero text-white">
            Golf para algunos.<br />
            <span className="text-gold-400">Un gran viaje para todos.</span>
          </h1>
        </div>
      </section>

      <section className="relative py-28 lg:py-36 bg-forest-950">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-6xl mx-auto px-5 lg:px-8 space-y-24">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="label-lg text-gold-400 block mb-4">Cómo funciona</span>
                <h2 className="display-md text-white mb-6">Un viaje completo</h2>
                <p className="text-white/50 body-xl">
                  Cada viaje LugoGolf combina campos de golf de clase mundial con experiencias
                  culturales, gastronómicas y de bienestar. Diseñamos programas
                  para que golfistas y acompañantes disfruten a su manera, siempre juntos.
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://lugogolf.com/wp-content/uploads/2025/09/Torneos_04_800x600.jpg"
                  alt="Torneo LugoGolf"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden">
                <img
                  src="https://lugogolf.com/wp-content/uploads/2025/09/Torneos_06_800x600.jpg"
                  alt="Premiación torneo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="label-lg text-gold-400 block mb-4">Torneos</span>
                <h2 className="display-md text-white mb-6">Competencia y camaradería</h2>
                <p className="text-white/50 body-xl">
                  Torneos en formato Stableford, adaptados a distintos niveles.
                  Premiación, camaradería y la emoción de competir en campos
                  extraordinarios.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="label-lg text-gold-400 block mb-4">Acompañamiento</span>
                <h2 className="display-md text-white mb-6">Todo resuelto</h2>
                <p className="text-white/50 body-xl">
                  Desde la planificación hasta el regreso, nuestro equipo se ocupa
                  de cada detalle. Traslados, hoteles, gastronomía, tours y
                  coordinación completa.
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://lugogolf.com/wp-content/uploads/2025/04/ellas_03.jpg"
                  alt="Experiencia cultural"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
