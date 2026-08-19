import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const paragraphs = [
  {
    text: "Empieza a soñar con los viajes de golf más exclusivos del próximo año.",
    delay: 0.1,
  },
  {
    text: "Juega en campos de golf de clase mundial y alójate en prestigiosos hoteles en destinos paradisíacos.",
    delay: 0.2,
  },
  {
    text: "Mientras tú disfrutas del Golf, ella vive un programa Plus One con actividades pensadas para relajarse, divertirse y explorar lo mejor de cada destino.",
    delay: 0.3,
  },
  {
    text: "Una experiencia diseñada para disfrutar juntos a tu manera.",
    highlight: true,
    delay: 0.4,
  },
];

export function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-28 lg:py-40 bg-forest-950 overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Title */}
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="label-xl text-gold-400 block mb-6">LugoGolf Tour 2026</span>
          <h2 className="display-xl text-white text-glow-white">
            El mundo es nuestro<br />
            <span className="text-gold-400 text-glow-gold">próximo campo.</span>
          </h2>
        </motion.div>

        {/* Paragraphs — staggered reveal */}
        <div className="max-w-3xl space-y-6">
          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              className={`body-xl leading-relaxed ${
                para.highlight
                  ? "text-gold-400 font-medium text-glow-gold"
                  : "text-white/45"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: para.delay,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {para.text}
            </motion.p>
          ))}
        </div>

        {/* Animated gold line */}
        <div className="mt-16 lg:mt-20">
          <motion.div
            className="h-[3px] bg-gold-500 origin-left"
            style={{ width: lineWidth }}
          />
        </div>

        {/* Bottom stats */}
        <motion.div
          className="mt-16 flex flex-wrap gap-12 lg:gap-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { num: "7+", label: "destinos" },
            { num: "500+", label: "golfistas" },
            { num: "8", label: "países" },
          ].map((stat, i) => (
            <div key={i} className="flex items-baseline gap-3">
              <span className="display-sm text-gold-400">{stat.num}</span>
              <span className="label-md text-white/25">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
