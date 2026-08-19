import { Link } from "react-router-dom";
import { SEOHead } from "@/lib/seo";
import { FadeIn } from "@/components/motion/FadeIn";

export function NotFoundPage() {
  return (
    <>
      <SEOHead title="Página no encontrada | LugoGolf" description="La página que buscas no existe." />
      <section className="min-h-screen flex items-center justify-center bg-forest-950">
        <div className="text-center px-5">
          <FadeIn>
            <p className="display-hero text-white/[0.04] mb-0 select-none">404</p>
            <h1 className="display-md text-white -mt-4 mb-8">Esta página no existe</h1>
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-forest-950 font-black tracking-widest uppercase text-sm hover:bg-gold-400 transition-colors"
            >
              Volver al inicio
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
