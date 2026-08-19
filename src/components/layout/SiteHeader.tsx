import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";
import { AnimatePresence, motion } from "framer-motion";
import logoImg from "@/assets/logo.png";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navItems = [
    ...site.navigation,
    { label: site.cta.label, href: site.cta.href },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-forest-950/95 backdrop-blur-xl py-3 shadow-2xl shadow-black/30"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between">
          <Link to="/" className="relative z-[60]" aria-label="LugoGolf - Inicio">
            <img src={logoImg} alt="LugoGolf" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {site.navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-widest uppercase transition-colors ${
                  location.pathname.startsWith(item.href)
                    ? "text-gold-400"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {location.pathname.startsWith(item.href) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-400"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to={site.cta.href}
              className="ml-6 px-7 py-2.5 bg-gold-500 text-forest-950 text-sm font-bold tracking-widest uppercase rounded-none hover:bg-gold-400 transition-all"
            >
              {site.cta.label}
            </Link>
          </nav>

          {/* Mobile: custom animated burger */}
          <button
            className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            <div className="relative w-6 h-4">
              {/* Top line */}
              <motion.span
                className="absolute left-0 top-0 w-full h-[2px] bg-white origin-center"
                animate={mobileOpen
                  ? { rotate: 45, y: 7, scaleX: 1.2 }
                  : { rotate: 0, y: 0, scaleX: 1 }
                }
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              />
              {/* Middle line — morphs into gold dot */}
              <motion.span
                className="absolute left-0 top-[7px] h-[2px] bg-gold-400 origin-left"
                animate={mobileOpen
                  ? { scaleX: 0, x: 0 }
                  : { scaleX: 1, width: "100%" }
                }
                transition={{ duration: 0.3 }}
              />
              {/* Bottom line */}
              <motion.span
                className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-center"
                animate={mobileOpen
                  ? { rotate: -45, y: -7, scaleX: 1.2 }
                  : { rotate: 0, y: 0, scaleX: 1 }
                }
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            />

            {/* Diagonal clip reveal panel */}
            <motion.div
              initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 z-50 bg-forest-950"
            >
              {/* Giant decorative number */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-[20rem] font-display font-black text-white/[0.02] leading-none select-none pointer-events-none">
                LG
              </div>

              {/* Gold accent line — top */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gold-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                style={{ transformOrigin: "left" }}
              />

              {/* Logo */}
              <div className="absolute top-5 left-5">
                <img src={logoImg} alt="LugoGolf" className="h-6 w-auto" />
              </div>

              {/* Navigation items */}
              <div className="h-full flex flex-col justify-center px-8 lg:px-12">
                <nav className="space-y-1" aria-label="Menú móvil">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 80 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + i * 0.08,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    >
                      <Link
                        to={item.href}
                        className="group flex items-center gap-4 py-4 border-b border-white/[0.04] last:border-b-0"
                      >
                        {/* Number */}
                        <span className="text-sm font-display font-bold text-white/10 group-hover:text-gold-500/40 transition-colors w-8">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Label */}
                        <span className={`display-md transition-colors duration-300 ${
                          i === navItems.length - 1
                            ? "text-gold-400 group-hover:text-gold-300"
                            : location.pathname.startsWith(item.href)
                              ? "text-gold-400"
                              : "text-white group-hover:text-gold-300"
                        }`}>
                          {item.label}
                        </span>

                        {/* Arrow */}
                        <motion.span
                          className="text-gold-500/0 group-hover:text-gold-500 ml-auto transition-all duration-300"
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom info */}
                <motion.div
                  className="mt-12 flex items-center gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-8 h-px bg-gold-500/30" />
                  <span className="label-sm text-white/20">Golf Inclusive · Tour 2026</span>
                </motion.div>
              </div>

              {/* Bottom decorative line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-500/40 via-gold-500/10 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
