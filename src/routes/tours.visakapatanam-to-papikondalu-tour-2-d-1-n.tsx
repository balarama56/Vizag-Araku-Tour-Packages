import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute(
  "/tours/visakapatanam-to-papikondalu-tour-2-d-1-n",
)({
  head: () => ({
    meta: [
      { title: "Vizag to Papikondalu · 2 Days, 1 Night | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Explore a two-day Papikondalu river cruise and overnight camp outline. Confirm the current boat route, camp availability, meals and Vizag–Rajahmundry transfers with your quote.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="papikondalu" />,
});
