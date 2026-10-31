import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute(
  "/tours/visakhapatnam-araku-valley-tour-4-d-3-n",
)({
  head: () => ({
    meta: [
      {
        title:
          "Visakhapatnam–Araku Valley · 4 Days, 3 Nights | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore a four-day Vizag and Araku itinerary with two city nights, one valley night, coastal sights, coffee country and Borra Caves. Request your personalised quote.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="four-day" />,
});
