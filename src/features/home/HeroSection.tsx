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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "100dvh", minHeight: "100dvh" }}
    >
      {/* ── VIDEO: fills entire viewport, no gaps ── */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <iframe
          src="https://www.youtube.com/embed/zO26cP_TzAo?autoplay=1&mute=1&loop=1&playlist=zO26cP_TzAo&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          allow="autoplay; encrypted-media"
          title="LugoGolf experiencia"
          style={{ border: 0, objectFit: "cover" }}
        />
      </motion.div>

      {/* ── OVERLAYS ── */}
      <motion.div
        className="absolute inset-0 bg-black/35"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      <div className="absolute inset-0 grain" />

      {/* ── CONTENT: anchored to bottom, navbar-safe on mobile ── */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-end px-5 lg:px-8 max-w-7xl mx-auto"
        style={{ y: textY, paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        {/* Spacer that pushes content below navbar on mobile */}
        <div className="flex-1 min-h-[140px] lg:min-h-0" />

        <div className="pb-20 lg:pb-10 max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="w-10 h-[2px] bg-gold-400" />
            <span className="label-xl text-gold-400">Golf Inclusive · Tour 2026</span>
          </motion.div>

          {/* H1 */}
          <div className="mb-5">
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
            className="text-white/80 body-sm lg:body-lg tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.76, 0, 0.24, 1] }}
          >
            Viajes, golf, amigos y diversión
          </motion.p>

          {/* Description — hidden on small mobile, visible on lg+ */}
          <motion.p
            className="hidden sm:block text-white/45 body-lg max-w-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            Un viaje único que combina lo mejor del golf, los viajes y la amistad
            en un programa exclusivo, diseñado para que jugadores y sus parejas
            disfruten de unas vacaciones inolvidables.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <Link
              to="/viajes"
              className="group inline-flex items-center gap-3 px-8 py-4 lg:px-10 lg:py-5 bg-gold-500 text-forest-950 font-black tracking-widest uppercase text-xs lg:text-sm hover:bg-gold-400 transition-all"
            >
              Explorar viajes
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/experiencia"
              className="group inline-flex items-center gap-3 px-8 py-4 lg:px-10 lg:py-5 border border-white/25 text-white font-bold tracking-widest uppercase text-xs lg:text-sm hover:border-gold-400 hover:text-gold-400 transition-all"
            >
              La experiencia
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — hidden on mobile */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-white/25 label-sm tracking-[0.3em]">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-gold-400/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
