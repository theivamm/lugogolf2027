import { site } from "@/data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  { src: "https://lugogolf.com/wp-content/uploads/2025/04/ellas_02.jpg", alt: "Comunidad LugoGolf" },
  { src: "https://lugogolf.com/wp-content/uploads/2025/04/ellas_03.jpg", alt: "Momento compartido" },
  { src: "https://lugogolf.com/wp-content/uploads/2025/09/Torneos_01_800x600.jpg", alt: "Torneo LugoGolf" },
];

const stats = [
  { value: `${site.stats.trips}+`, label: "viajes realizados", big: "20" },
  { value: `${site.stats.golfists}+`, label: "golfistas reunidos", big: "500" },
  { value: `${site.stats.countries}`, label: "países recorridos", big: "8" },
];

export function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const img1Y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [60, -20]);
  const img3Y = useTransform(scrollYProgress, [0, 1], [20, -60]);

  return (
    <section ref={ref} className="relative py-28 lg:py-40 bg-forest-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Floating orbs */}
      <div className="orb w-[350px] h-[350px] bg-gold-500/[0.04] top-20 right-[5%]" />
      <div className="orb w-[200px] h-[200px] bg-forest-600/10 bottom-32 left-[15%]" style={{ animationDelay: "-8s" }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* ── Header: stacked massive typography ── */}
        <div className="mb-16 lg:mb-24 relative">
          <motion.span
            className="label-lg text-gold-400 block mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Comunidad
          </motion.span>

          <div className="relative">
            {/* Ghost word behind */}
            <div className="absolute -top-6 lg:-top-10 -left-1 lg:-left-3 text-[5rem] lg:text-[9rem] font-display font-black text-white/[0.02] leading-none select-none pointer-events-none">
              AMIGOS
            </div>

            <motion.h2
              className="relative display-xl text-white text-glow-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            >
              Llegas como viajero.
            </motion.h2>
            <motion.h2
              className="relative display-xl text-gold-400 text-glow-gold mt-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
            >
              Regresas como amigo.
            </motion.h2>
          </div>

          <motion.p
            className="text-white/35 body-xl max-w-xl mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            La mejor parte de cada destino no siempre aparece en el itinerario:
            son las personas con las que lo compartes.
          </motion.p>
        </div>

        {/* ── Photo grid: asymmetric mosaic ── */}
        <div className="grid grid-cols-12 gap-3 lg:gap-4 mb-24">
          {/* Image 1 — tall, left */}
          <motion.div
            className="col-span-5 relative overflow-hidden aspect-[3/5]"
            style={{ y: img1Y }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 label-sm text-white/30">{images[0].alt}</div>
          </motion.div>

          {/* Image 2 — square, center-top */}
          <motion.div
            className="col-span-4 relative overflow-hidden aspect-square"
            style={{ y: img2Y }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 label-sm text-white/30">{images[1].alt}</div>
          </motion.div>

          {/* Image 3 — tall right, offset down */}
          <motion.div
            className="col-span-3 relative overflow-hidden aspect-[2/4] mt-12 lg:mt-20"
            style={{ y: img3Y }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 label-sm text-white/30">{images[2].alt}</div>
          </motion.div>
        </div>

        {/* ── Stats: huge numbers with vertical lines ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="group relative py-10 lg:py-14 text-center border-b md:border-b-0 md:border-r border-white/[0.04] last:border-r-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              {/* Giant background number */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[8rem] lg:text-[12rem] font-display font-black text-white/[0.02] leading-none select-none group-hover:text-gold-500/[0.04] transition-colors duration-700">
                  {stat.big}
                </span>
              </div>

              <div className="relative">
                <p className="display-md text-gold-400 text-glow-gold">{stat.value}</p>
                <p className="label-md text-white/20 mt-3">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
