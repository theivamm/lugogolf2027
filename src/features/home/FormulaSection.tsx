import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, MapPin, Heart, Users } from "lucide-react";

const pillars = [
  {
    icon: <Award size={20} strokeWidth={2.5} />,
    num: "01",
    title: "Golf",
    subtitle: "extraordinario",
    description: "Campos seleccionados en los mejores destinos del mundo. Torneos para todos los niveles.",
  },
  {
    icon: <MapPin size={20} strokeWidth={2.5} />,
    num: "02",
    title: "Viajes",
    subtitle: "sin fricción",
    description: "Hoteles premium, traslados, gastronomía y coordinación completa.",
  },
  {
    icon: <Heart size={20} strokeWidth={2.5} />,
    num: "03",
    title: "Experiencias",
    subtitle: "compartidas",
    description: "Cultura, gastronomía, bienestar y tiempo de calidad en pareja o grupo.",
  },
  {
    icon: <Users size={20} strokeWidth={2.5} />,
    num: "04",
    title: "Comunidad",
    subtitle: "real",
    description: "Amistades que continúan en el siguiente destino. Más que viajeros, somos amigos.",
  },
];

export function FormulaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={ref} className="relative bg-forest-950 overflow-hidden">

      {/* ── Giant scrolling text watermark ── */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        <motion.div
          className="whitespace-nowrap flex gap-8 lg:gap-16"
          style={{ x: marqueeX }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="display-hero text-white/[0.025] select-none pointer-events-none"
            >
              LA FÓRMULA LUGOGOLF
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">

        {/* ── Header: stacked brutalist typography ── */}
        <div className="mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="label-xl text-gold-400 block mb-6">La fórmula</span>
          </motion.div>

          <div className="relative">
            {/* "No" as giant background word */}
            <motion.div
              className="absolute -top-8 lg:-top-14 -left-2 lg:-left-4 text-[6rem] lg:text-[10rem] font-display font-black text-white/[0.03] leading-none select-none pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            >
              No
            </motion.div>

            <motion.h2
              className="relative display-lg text-white"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
            >
              No organizamos paquetes.
            </motion.h2>

            <motion.h2
              className="relative display-lg text-gold-400 mt-1"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            >
              Diseñamos historias.
            </motion.h2>
          </div>
        </div>

        {/* ── Pillars: oversized number + word + micro text ── */}
        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              className="group relative border-t border-white/[0.06] py-10 lg:py-14"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0">
                {/* Left: giant number + icon */}
                <div className="flex items-center gap-4 lg:w-[200px] shrink-0">
                  <span className="text-[4rem] lg:text-[5rem] font-display font-black text-white/[0.06] leading-none select-none group-hover:text-gold-500/20 transition-colors duration-700">
                    {pillar.num}
                  </span>
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-forest-950 transition-all duration-500">
                    {pillar.icon}
                  </div>
                </div>

                {/* Center: BIG title word + subtitle */}
                <div className="flex-1 lg:pl-12">
                  <div className="flex items-baseline gap-3 lg:gap-4 flex-wrap">
                    <motion.span
                      className="display-xl text-white group-hover:text-gold-300 transition-colors duration-500"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {pillar.title}
                    </motion.span>
                    <span className="display-md text-gold-500/40 group-hover:text-gold-400/70 transition-colors duration-500">
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>

                {/* Right: description — appears on hover (desktop) */}
                <div className="lg:w-[320px] shrink-0 lg:pl-8">
                  <p className="text-white/0 group-hover:text-white/35 body-md transition-all duration-700 lg:text-right">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Gold line sweep on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gold-500 transition-all duration-[1s] ease-out" />
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* ── Bottom: pull quote ── */}
        <motion.div
          className="mt-20 lg:mt-28 flex items-start gap-6 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-[3px] h-16 bg-gold-500 shrink-0 mt-1" />
          <div>
            <p className="text-white/50 body-xl italic">
              "Cada viaje es una historia que se cuenta entre amigos. Nosotros solo escribimos el primer capítulo."
            </p>
            <span className="label-sm text-white/20 mt-3 block">— LugoGolf</span>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom spacer with gold line ── */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        <motion.div
          className="whitespace-nowrap flex gap-8 lg:gap-16"
          style={{ x: marqueeX }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="display-hero text-white/[0.025] select-none pointer-events-none"
            >
              LA FÓRMULA LUGOGOLF
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
