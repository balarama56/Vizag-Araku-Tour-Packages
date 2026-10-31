import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute(
  "/tours/visakhapatnam-araku-valley-tour-2-d-1-n",
)({
  head: () => ({
    meta: [
      {
        title:
          "Visakhapatnam–Araku Valley · 2 Days, 1 Night | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Plan a two-day Vizag and Araku escape with a city overnight stay, scenic train journey subject to availability, Borra Caves and a valley drive. Request your couple quote from ₹11,990.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="two-day" />,
});
