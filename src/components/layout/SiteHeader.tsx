import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
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
          <Link to="/" className="relative z-10" aria-label="LugoGolf - Inicio">
            <img src={logoImg} alt="LugoGolf" className="h-10 w-auto" />
          </Link>

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

          <button
            className="lg:hidden relative z-10 text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-forest-950 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6" aria-label="Menú móvil">
              {site.navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                >
                  <Link
                    to={item.href}
                    className={`display-md text-white hover:text-gold-400 transition-colors flex items-center gap-3 ${
                      location.pathname.startsWith(item.href) ? "text-gold-400" : ""
                    }`}
                  >
                    <ChevronRight size={20} className="text-gold-500" />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + site.navigation.length * 0.07 }}
              >
                <Link
                  to={site.cta.href}
                  className="mt-6 px-10 py-4 bg-gold-500 text-forest-950 text-lg font-bold tracking-widest uppercase hover:bg-gold-400 transition-colors"
                >
                  {site.cta.label}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
