import { createFileRoute } from "@tanstack/react-router";
import { PuriKonarkItinerary } from "@/components/puri-konark-itinerary";
export const Route = createFileRoute("/tours/visakapatanam-puri-konark-3d-2n")({
  head: () => ({
    meta: [
      {
        title:
          "Puri & Konark · 3 Days / 2 Nights · Option 2 | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore Odisha from Vizag with an interactive Puri and Konark itinerary, two nights in Bhubaneswar and WhatsApp trip planning. Reference couple rate ₹30,000.",
      },
    ],
  }),
  component: () => <PuriKonarkItinerary option={2} />,
});
