import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute(
  "/tours/visakapatanam-to-maredumilli-2-nights-3-days-tour",
)({
  head: () => ({
    meta: [
      {
        title: "Vizag to Maredumilli · 3 Days, 2 Nights | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore a proposed three-day Maredumilli forest itinerary with waterfalls and plantations. Confirm the second overnight stay, extended route, boating availability and current quote before booking.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="maredumilli" />,
});
