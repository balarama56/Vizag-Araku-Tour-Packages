import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute(
  "/tours/visakhapatnam-araku-jagdalpur-tour-5-d-4-n",
)({
  head: () => ({
    meta: [
      {
        title:
          "Vizag, Araku & Jagdalpur · 5 Days, 4 Nights | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore a proposed five-day Vizag, Araku and Jagdalpur itinerary. Confirm the full route, four overnight stays, transport, current price and return arrangements with the operator.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="vizag-jagdalpur" />,
});
