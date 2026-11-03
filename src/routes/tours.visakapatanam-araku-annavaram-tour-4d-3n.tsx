import { createFileRoute } from "@tanstack/react-router";
import { VizagArakuAnnavaramItinerary } from "@/components/vizag-araku-annavaram-itinerary";

export const Route = createFileRoute(
  "/tours/visakapatanam-araku-annavaram-tour-4d-3n",
)({
  head: () => ({
    meta: [
      {
        title:
          "Vizag, Araku & Annavaram · 4 Days / 3 Nights · Option 2 | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Discover Vizag beaches, Annavaram temples, Borra Caves and Araku Valley in four days. Two nights in Vizag, one in Araku; ₹20,500 reference couple rate and personalised WhatsApp enquiries.",
      },
    ],
  }),
  component: () => <VizagArakuAnnavaramItinerary option={2} />,
});
