import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  { label: "Golf", desc: "Campos de clase mundial" },
  { label: "Cultura", desc: "Destinos que enamoran" },
  { label: "Gastronomía", desc: "Sabores únicos" },
  { label: "Comunidad", desc: "Amistades que perduran" },
];

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="relative bg-forest-950 overflow-hidden">

      {/* ── Full-width YouTube video strip ── */}
      <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
          <iframe
            src="https://www.youtube.com/embed/C7N9UAcMtyE?autoplay=1&mute=1&loop=1&playlist=C7N9UAcMtyE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3"
            className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            allow="autoplay; encrypted-media"
            title="LugoGolf experiencia"
            style={{ border: 0 }}
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-transparent to-forest-950" />
        <div className="absolute inset-0 scanlines" />

        {/* Floating orbs */}
        <div className="orb w-[300px] h-[300px] bg-gold-500/10 top-10 left-[15%]" />
        <div className="orb w-[200px] h-[200px] bg-forest-600/15 bottom-10 right-[10%]" style={{ animationDelay: "-4s" }} />

        {/* Giant background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[12rem] lg:text-[20rem] font-display font-black text-white/[0.02] leading-none select-none tracking-tighter">
            360°
          </span>
        </div>

        {/* Top-left badge */}
        <motion.div
          className="absolute top-8 left-8 lg:top-12 lg:left-12 z-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="border border-white/10 px-5 py-3 bg-black/30 backdrop-blur-sm">
            <span className="label-xl text-gold-400">360°</span>
            <span className="block label-sm text-white/30 mt-1">Experiencia completa</span>
          </div>
        </motion.div>
      </div>

      {/* ── Content: asymmetric split ── */}
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left: big typography block */}
          <motion.div
            className="lg:col-span-7 py-16 lg:py-24 lg:pr-16"
            style={{ x: textX, opacity: textOpacity }}
          >
            <span className="label-lg text-gold-400 block mb-6">La experiencia</span>

            <h2 className="display-xl text-white mb-4 text-glow-white">
              Golf para algunos.
            </h2>
            <h2 className="display-xl text-gold-400 mb-10 text-glow-gold">
              Un gran viaje para todos.
            </h2>

            <p className="text-white/45 body-xl max-w-lg mb-12 leading-relaxed">
              Cada programa combina rondas y torneos con gastronomía,
              cultura, bienestar y tiempo compartido. Juntos en el viaje,
              libres para disfrutarlo a su manera.
            </p>

            <Link
              to="/experiencia"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-gold-500 text-forest-950 font-black tracking-widest uppercase text-sm hover:bg-gold-400 transition-all"
            >
              Conocer la experiencia
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: feature list — vertical staggered */}
          <div className="lg:col-span-5 relative">
            {/* Vertical gold line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden lg:block" />

            <div className="py-16 lg:py-24 space-y-0">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  className="group relative lg:pl-10 py-6 border-b border-white/[0.04] last:border-b-0"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-forest-950 border border-gold-500/40 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-500 hidden lg:block" />

                  <div className="flex items-baseline gap-4">
                    <span className="text-[3.5rem] lg:text-[4rem] font-display font-black text-white/[0.05] group-hover:text-gold-500/15 transition-colors duration-700 leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="display-xs text-white group-hover:text-gold-300 transition-colors duration-300">
                        {feat.label}
                      </h3>
                      <p className="text-white/25 body-sm mt-1 group-hover:text-white/40 transition-colors duration-500">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
