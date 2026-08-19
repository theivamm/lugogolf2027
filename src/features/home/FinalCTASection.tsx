import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleX = useTransform(scrollYProgress, [0.1, 0.5], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative bg-forest-950 overflow-hidden">

      {/* ── Diagonal image strip ── */}
      <div className="relative h-[45vh] lg:h-[55vh] overflow-hidden clip-diagonal">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="https://lugogolf.com/wp-content/uploads/2025/08/Malaga_01_800x600.jpg"
            alt=""
            className="w-full h-full object-cover scale-110 opacity-40"
            aria-hidden="true"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/70 to-forest-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-transparent to-forest-950/60" />

        {/* Floating orbs */}
        <div className="orb w-[400px] h-[400px] bg-gold-500/5 top-0 right-[20%]" />
        <div className="orb w-[250px] h-[250px] bg-forest-600/10 bottom-20 left-[10%]" style={{ animationDelay: "-6s" }} />

        {/* Giant watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[10rem] lg:text-[18rem] font-display font-black text-white/[0.015] leading-none select-none tracking-tighter">
            HOLA
          </span>
        </div>

        {/* Scanlines */}
        <div className="absolute inset-0 scanlines" />
      </div>

      {/* ── Content: asymmetric layout ── */}
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 -mt-20 lg:-mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left: giant "CTA" text as decoration */}
          <div className="lg:col-span-5 flex items-end pb-8 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              <span className="label-xl text-gold-400 block mb-4">Comienza tu historia</span>
              <div className="flex items-baseline gap-2">
                <span className="text-[6rem] lg:text-[10rem] font-display font-black text-gold-500/10 leading-none select-none">
                  →
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: actual content */}
          <motion.div
            className="lg:col-span-7 py-12 lg:py-20 lg:pl-12 border-l border-white/[0.04]"
            style={{ x: titleX, opacity: titleOpacity }}
          >
            <h2 className="display-xl text-white mb-4 text-glow-white">
              Tu próximo gran viaje
            </h2>
            <h2 className="display-xl text-gold-400 mb-8 text-glow-gold">
              puede comenzar aquí.
            </h2>

            <p className="text-white/35 body-xl mb-12 max-w-lg">
              Cuéntanos cómo te gusta viajar y encontremos juntos tu próxima
              experiencia LugoGolf.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                to="/cotizar"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gold-500 text-forest-950 font-black tracking-widest uppercase text-sm hover:bg-gold-400 transition-all"
              >
                Cotizar mi viaje
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 border border-white/15 text-white font-bold tracking-widest uppercase text-sm hover:border-gold-400/40 hover:text-gold-400 transition-all"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom spacer with animated gradient ── */}
      <div className="h-20 lg:h-32 bg-gradient-to-b from-forest-950 to-forest-950 relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>
    </section>
  );
}
