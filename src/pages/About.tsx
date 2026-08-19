import { SEOHead } from "@/lib/seo";
import { FadeIn } from "@/components/motion/FadeIn";

export function AboutPage() {
  return (
    <>
      <SEOHead
        title="Nosotros | LugoGolf — Golf Inclusive"
        description="Conoce LugoGolf. Diseñamos experiencias internacionales de golf para parejas y amigos."
      />

      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-forest-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/[0.03] rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
          <span className="label-lg text-gold-400 block mb-4">Nosotros</span>
          <h1 className="display-hero text-white">
            Golf, mundo<br />
            <span className="text-gold-400">y amistad.</span>
          </h1>
        </div>
      </section>

      <section className="relative py-28 lg:py-36 bg-forest-950">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-5xl mx-auto px-5 lg:px-8 space-y-24">
          <FadeIn>
            <div className="max-w-3xl">
              <span className="label-lg text-gold-400 block mb-4">Nuestra propuesta</span>
              <p className="text-white/50 body-xl">
                LugoGolf nació con la convicción de que los mejores viajes se
                disfrutan en compañía. Diseñamos experiencias internacionales
                de golf para parejas y amigos que buscan descubrir destinos
                extraordinarios sin preocuparse por la organización.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-3xl">
              <span className="label-lg text-gold-400 block mb-4">El diferencial</span>
              <p className="text-white/50 body-xl">
                No somos una agencia de viajes tradicional. Somos un club de
                experiencias internacionales donde el golf conecta personas,
                culturas y destinos. Todo está resuelto para que tú solo tengas
                que disfrutar.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
