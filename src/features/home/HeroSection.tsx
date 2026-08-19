import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden bg-black">
      {/* YouTube Video Background */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <iframe
          src="https://www.youtube.com/embed/zO26cP_TzAo?autoplay=1&mute=1&loop=1&playlist=zO26cP_TzAo&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3"
          className="absolute top-1/2 left-1/2 w-[130%] h-[130%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          allow="autoplay; encrypted-media"
          title="LugoGolf experiencia"
          style={{ border: 0 }}
        />
      </motion.div>

      {/* Light overlays — video must be clearly visible */}
      <motion.div className="absolute inset-0 bg-black/40" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20" />

      {/* Film grain */}
      <div className="absolute inset-0 grain" />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 px-5 lg:px-8 max-w-7xl mx-auto"
        style={{ y: textY }}
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="w-12 h-[2px] bg-gold-400" />
            <span className="label-xl text-gold-400">Golf Inclusive &middot; Tour 2026</span>
          </motion.div>

          {/* H1 — line-by-line clip reveal */}
          <div className="mb-6">
            <div className="overflow-hidden">
              <motion.h1
                className="display-hero text-white"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              >
                Vive la experiencia
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="display-hero text-gold-400 text-glow-gold"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.1, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
              >
                Golf Inclusive.
              </motion.h1>
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-white/80 body-lg tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.76, 0, 0.24, 1] }}
          >
            Viajes, golf, amigos y diversión
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-white/50 body-xl max-w-xl mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15, ease: [0.76, 0, 0.24, 1] }}
          >
            Un viaje único que combina lo mejor del golf, los viajes y la amistad
            en un programa exclusivo, diseñado para que jugadores y sus parejas
            disfruten de unas vacaciones inolvidables.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <Link
              to="/viajes"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gold-500 text-forest-950 font-black tracking-widest uppercase text-sm hover:bg-gold-400 transition-all"
            >
              Explorar viajes
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/experiencia"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white/30 text-white font-bold tracking-widest uppercase text-sm hover:border-gold-400 hover:text-gold-400 transition-all"
            >
              La experiencia
            </Link>
          </motion.div>

          {/* Bottom micro text */}
          <motion.p
            className="text-white/35 body-sm mt-10 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            Todo incluido menos las preocupaciones.
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-white/30 label-sm tracking-[0.3em]">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold-400/60 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Side decoration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold-500/40" />
        <span className="label-sm text-white/25 [writing-mode:vertical-lr] tracking-[0.3em]">LUGOGOLF</span>
        <div className="w-px h-16 bg-gradient-to-b from-gold-500/40 to-transparent" />
      </div>
    </section>
  );
}
