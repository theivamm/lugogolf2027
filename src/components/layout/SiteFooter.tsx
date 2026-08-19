import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logoImg from "@/assets/logo.png";

export function SiteFooter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <footer ref={ref} className="bg-black relative overflow-hidden">

      {/* ── Top: giant scrolling brand name ── */}
      <div className="pt-16 lg:pt-24 pb-8 overflow-hidden border-b border-white/[0.04]">
        <motion.div
          className="whitespace-nowrap flex gap-8"
          style={{ x: marqueeX }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className="text-[8rem] lg:text-[14rem] font-display font-black text-white/[0.03] leading-none select-none tracking-tighter"
            >
              LUGOGOLF
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Main footer content ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 py-16 lg:py-24">

          {/* Left: logo + tagline — BIG */}
          <div className="lg:col-span-7 lg:pr-16 border-b lg:border-b-0 lg:border-r border-white/[0.04] pb-12 lg:pb-0">
            <Link to="/" className="inline-block mb-8" aria-label="LugoGolf - Inicio">
              <img src={logoImg} alt="LugoGolf" className="h-12 w-auto" />
            </Link>

            <p className="text-white/30 body-lg max-w-sm mb-10">
              {site.tagline}
            </p>

            {/* Social links — inline, brutalist */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {[
                { label: "WhatsApp", href: `https://wa.me/${site.whatsapp}` },
                { label: "Email", href: `mailto:${site.email}` },
                { label: "Instagram", href: site.instagram },
                { label: "YouTube", href: site.youtube },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="label-sm text-white/25 hover:text-gold-400 transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gold-500 transition-all duration-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: links in vertical stacks */}
          <div className="lg:col-span-5 lg:pl-12">
            <div className="grid grid-cols-2 gap-12">
              {/* Destinations */}
              <div>
                <h3 className="label-lg text-gold-500 mb-6 relative">
                  Destinos
                  <span className="absolute -right-4 top-0 text-[2rem] font-display font-black text-white/[0.04] leading-none">→</span>
                </h3>
                <ul className="space-y-3">
                  {site.footer.destinations.map((dest) => (
                    <li key={dest.href}>
                      <Link to={dest.href} className="text-sm text-white/35 hover:text-gold-400 transition-colors duration-300 relative group inline-block">
                        {dest.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-gold-500/50 transition-all duration-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="label-lg text-gold-500 mb-6 relative">
                  Navegación
                  <span className="absolute -right-4 top-0 text-[2rem] font-display font-black text-white/[0.04] leading-none">→</span>
                </h3>
                <ul className="space-y-3">
                  {site.navigation.map((item) => (
                    <li key={item.href}>
                      <Link to={item.href} className="text-sm text-white/35 hover:text-gold-400 transition-colors duration-300 relative group inline-block">
                        {item.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-gold-500/50 transition-all duration-400" />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to={site.cta.href} className="text-sm text-white/35 hover:text-gold-400 transition-colors duration-300 relative group inline-block">
                      {site.cta.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-gold-500/50 transition-all duration-400" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar: minimal, clean ── */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/15 tracking-wider">
            © {new Date().getFullYear()} LugoGolf. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {site.footer.secondary.map((item) => (
              <Link key={item.href} to={item.href} className="text-xs text-white/15 hover:text-gold-500 transition-colors tracking-wider">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Ambient bottom glow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}
