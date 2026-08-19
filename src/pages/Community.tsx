import { SEOHead } from "@/lib/seo";
import { site } from "@/data/site";
import { FadeIn } from "@/components/motion/FadeIn";

export function CommunityPage() {
  return (
    <>
      <SEOHead
        title="Comunidad LugoGolf | Golfistas que viajan juntos"
        description="Conoce a la comunidad LugoGolf. Más de 500 golfistas de 8 países que viajan juntos y forman amistades que perduran."
      />

      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-forest-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/[0.03] rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
          <span className="label-lg text-gold-400 block mb-4">Comunidad</span>
          <h1 className="display-hero text-white">
            Llegas como viajero.<br />
            <span className="text-gold-400">Regresas como amigo.</span>
          </h1>
        </div>
      </section>

      <section className="relative py-28 lg:py-36 bg-forest-950">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <FadeIn>
            <p className="text-white/50 body-xl max-w-3xl leading-relaxed">
              La mejor parte de cada destino no siempre aparece en el
              itinerario: son las personas con las que lo compartes.
              LugoGolf reúne a golfistas y acompañantes de distintos países
              que viajan juntos, comparten experiencias y vuelven a
              encontrarse en nuevos destinos.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-3 gap-8 max-w-lg mt-16">
              {[
                { value: `${site.stats.trips}+`, label: "Viajes" },
                { value: `${site.stats.golfists}+`, label: "Golfistas" },
                { value: `${site.stats.countries}`, label: "Países" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="display-md text-gold-400">{stat.value}</p>
                  <p className="label-md text-white/25 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
