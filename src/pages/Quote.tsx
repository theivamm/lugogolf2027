import { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/lib/seo";
import { trips } from "@/data/trips";
import { FadeIn } from "@/components/motion/FadeIn";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

interface FormData {
  trip: string;
  travelerType: string;
  people: string;
  name: string;
  lastName: string;
  country: string;
  city: string;
  whatsapp: string;
  email: string;
  comments: string;
  consent: boolean;
}

const steps = [
  { title: "El viaje", description: "Cuéntanos qué destino te interesa" },
  { title: "Tu perfil", description: "Datos de contacto" },
  { title: "Preferencias", description: "Detalles adicionales" },
];

export function QuotePage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    trip: "", travelerType: "", people: "2",
    name: "", lastName: "", country: "", city: "",
    whatsapp: "", email: "", comments: "", consent: false,
  });

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <SEOHead title="Gracias por tu consulta | LugoGolf" description="Hemos recibido tu solicitud." />
        <section className="min-h-screen flex items-center justify-center bg-forest-950">
          <div className="text-center px-5 max-w-lg">
            <FadeIn>
              <div className="w-20 h-20 bg-gold-500 text-forest-950 flex items-center justify-center mx-auto mb-8">
                <Check size={36} strokeWidth={3} />
              </div>
              <h1 className="display-md text-white mb-4">¡Gracias, {form.name}!</h1>
              <p className="text-white/40 body-xl mb-10">
                Hemos recibido tu consulta. Nuestro equipo te contactará en las próximas 24 horas hábiles.
              </p>
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

  return (
    <>
      <SEOHead title="Cotizar Viaje | LugoGolf" description="Cuéntanos dónde quieres ir y te diseñamos tu experiencia." />

      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 bg-forest-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/[0.03] rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
          <span className="label-lg text-gold-400 block mb-4">Cotización</span>
          <h1 className="display-lg text-white">Cuéntanos cómo viajas.</h1>
        </div>
      </section>

      <section className="relative py-14 lg:py-24 bg-forest-950">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-2xl mx-auto px-5 lg:px-8">
          {/* Step indicators */}
          <div className="flex items-center gap-0 mb-12">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 flex items-center justify-center text-sm font-bold transition-all ${
                    i < step ? "bg-gold-500 text-forest-950" :
                    i === step ? "bg-gold-500/20 text-gold-400 border border-gold-500/40" :
                    "bg-white/5 text-white/20 border border-white/10"
                  }`}>
                    {i < step ? <Check size={16} strokeWidth={3} /> : i + 1}
                  </div>
                  <span className="label-sm text-white/30 mt-2 hidden sm:block">{s.title}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-px flex-1 -mt-6 ${i < step ? "bg-gold-500" : "bg-white/10"}`} />
                )}
              </div>
            ))}
          </div>

          <p className="text-white/30 body-md mb-8">{steps[step].description}</p>

          <form onSubmit={handleSubmit}>
            {step === 0 && (
              <FadeIn className="space-y-6">
                <div>
                  <label className="block label-md text-white/40 mb-2">Destino de interés</label>
                  <select value={form.trip} onChange={(e) => update("trip", e.target.value)} className="input-dark">
                    <option value="">Seleccionar destino</option>
                    <option value="asesoramiento">Quiero asesoramiento</option>
                    {trips.filter((t) => t.status === "available").map((t) => (
                      <option key={t.id} value={t.id}>{t.title} — {t.country}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block label-md text-white/40 mb-2">Viajas como</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Golfista", "Acompañante", "Grupo"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => update("travelerType", type.toLowerCase())}
                        className={`px-4 py-3.5 text-sm font-bold tracking-wider uppercase transition-all ${
                          form.travelerType === type.toLowerCase()
                            ? "bg-gold-500 text-forest-950"
                            : "bg-white/5 border border-white/10 text-white/40 hover:border-gold-500/30 hover:text-white/60"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block label-md text-white/40 mb-2">Cantidad de personas</label>
                  <input type="number" min={1} max={20} value={form.people} onChange={(e) => update("people", e.target.value)} className="input-dark" />
                </div>
              </FadeIn>
            )}

            {step === 1 && (
              <FadeIn className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block label-md text-white/40 mb-2">Nombre</label><input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className="input-dark" /></div>
                  <div><label className="block label-md text-white/40 mb-2">Apellido</label><input type="text" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className="input-dark" /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block label-md text-white/40 mb-2">País</label><input type="text" value={form.country} onChange={(e) => update("country", e.target.value)} className="input-dark" /></div>
                  <div><label className="block label-md text-white/40 mb-2">Ciudad</label><input type="text" value={form.city} onChange={(e) => update("city", e.target.value)} className="input-dark" /></div>
                </div>
                <div><label className="block label-md text-white/40 mb-2">WhatsApp con código internacional</label><input type="tel" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="+54 11 0000 0000" className="input-dark" /></div>
                <div><label className="block label-md text-white/40 mb-2">Email</label><input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input-dark" /></div>
              </FadeIn>
            )}

            {step === 2 && (
              <FadeIn className="space-y-6">
                <div>
                  <label className="block label-md text-white/40 mb-2">Comentarios adicionales</label>
                  <textarea value={form.comments} onChange={(e) => update("comments", e.target.value)} rows={4} className="input-dark resize-none" placeholder="Cuéntanos sobre tus preferencias, fechas, nivel de juego..." />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1 w-4 h-4 border-white/20 bg-white/5 text-gold-500 focus:ring-gold-500" />
                  <span className="text-sm text-white/30">
                    Acepto la política de privacidad y autorizo el tratamiento de mis datos para recibir información sobre experiencias LugoGolf.
                  </span>
                </label>
              </FadeIn>
            )}

            <div className="flex items-center justify-between mt-12">
              {step > 0 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors label-sm">
                  <ArrowLeft size={14} /> Atrás
                </button>
              ) : <div />}

              {step < steps.length - 1 ? (
                <button type="button" onClick={() => setStep(step + 1)} className="flex items-center gap-3 px-8 py-3.5 bg-white/10 text-white font-bold tracking-widest uppercase text-sm hover:bg-white/15 transition-colors">
                  Siguiente <ArrowRight size={14} />
                </button>
              ) : (
                <button type="submit" className="flex items-center gap-3 px-8 py-3.5 bg-gold-500 text-forest-950 font-black tracking-widest uppercase text-sm hover:bg-gold-400 transition-colors">
                  Enviar consulta <ArrowRight size={14} />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
