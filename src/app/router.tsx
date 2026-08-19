import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/Home";
import { TripsPage } from "@/pages/Trips";
import { TripDetailPage } from "@/pages/TripDetail";
import { ExperiencePage } from "@/pages/Experience";
import { CommunityPage } from "@/pages/Community";
import { AboutPage } from "@/pages/About";
import { QuotePage } from "@/pages/Quote";
import { NotFoundPage } from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "viajes", element: <TripsPage /> },
      { path: "viajes/:slug", element: <TripDetailPage /> },
      { path: "experiencia", element: <ExperiencePage /> },
      { path: "comunidad", element: <CommunityPage /> },
      { path: "nosotros", element: <AboutPage /> },
      { path: "cotizar", element: <QuotePage /> },
      { path: "gracias", element: <QuotePage /> },
      { path: "legal/privacidad", element: <NotFoundPage /> },
      { path: "legal/terminos", element: <NotFoundPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
