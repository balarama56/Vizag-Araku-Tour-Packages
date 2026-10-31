import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute(
  "/tours/visakhapatnam-araku-annavaram-tour-4-d-3-n",
)({
  head: () => ({
    meta: [
      {
        title:
          "Vizag, Araku & Annavaram · 4 Days, 3 Nights | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Plan four days of coastal sights, Annavaram temple visits and Araku Valley. Explore the daily itinerary, overnight stays and request a personalised travel quote.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="annavaram" />,
});
