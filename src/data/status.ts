import type { TripStatus } from "@/types/trip";

export const statusLabels: Record<TripStatus, string> = {
  available: "Disponible",
  last_places: "Últimos lugares",
  waitlist: "Lista de espera",
  sold_out: "Agotado",
  completed: "Finalizado",
  coming_soon: "Próximamente",
};

export const statusColors: Record<TripStatus, string> = {
  available: "bg-emerald-600",
  last_places: "bg-amber-500",
  waitlist: "bg-sky-500",
  sold_out: "bg-stone-500",
  completed: "bg-stone-400",
  coming_soon: "bg-gold-500",
};
