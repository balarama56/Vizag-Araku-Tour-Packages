import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute(
  "/tours/visakhapatnam-araku-valley-tour-3-d-2-n",
)({
  head: () => ({
    meta: [
      {
        title:
          "Visakhapatnam–Araku Valley · 3 Days, 2 Nights | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore a three-day Vizag and Araku itinerary: coastal sights, Borra Caves and coffee country. Plan your dates and request a personalised quote.",
      },
    ],
  }),
  component: ArakuItinerary,
});
