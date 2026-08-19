import type { TripStatus } from "@/types/trip";

const statusConfig: Record<TripStatus, { label: string; className: string }> = {
  available: {
    label: "Disponible",
    className: "bg-forest-600 text-white",
  },
  last_places: {
    label: "Últimos lugares",
    className: "bg-gold-500 text-forest-950",
  },
  waitlist: {
    label: "Lista de espera",
    className: "bg-forest-700 text-white",
  },
  sold_out: {
    label: "Agotado",
    className: "bg-white/10 text-white/60",
  },
  completed: {
    label: "Finalizado",
    className: "bg-white/5 text-white/30",
  },
  coming_soon: {
    label: "Próximamente",
    className: "bg-gold-500/20 text-gold-400",
  },
};

interface TripStatusBadgeProps {
  status: TripStatus;
  className?: string;
}

export function TripStatusBadge({ status, className = "" }: TripStatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.available;

  return (
    <span className={`inline-block px-3 py-1 label-sm ${config.className} ${className}`}>
      {config.label}
    </span>
  );
}
