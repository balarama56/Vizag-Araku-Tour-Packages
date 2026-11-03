import { createFileRoute } from "@tanstack/react-router";
import { VizagArakuAnnavaramItinerary } from "@/components/vizag-araku-annavaram-itinerary";
export const Route = createFileRoute(
  "/tours/visakhapatnam-araku-annavaram-tour-4-d-3-n-2",
)({
  head: () => ({
    meta: [
      {
        title:
          "Vizag, Araku & Annavaram · 4 Days / 3 Nights · Option 1 | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Four days of Vizag coastal sights, Annavaram temple visits, Borra Caves and Araku Valley. Two nights in Vizag, one in Araku; reference couple rate ₹25,500 and personalised WhatsApp enquiries.",
      },
    ],
  }),
  component: VizagArakuAnnavaramItinerary,
});
