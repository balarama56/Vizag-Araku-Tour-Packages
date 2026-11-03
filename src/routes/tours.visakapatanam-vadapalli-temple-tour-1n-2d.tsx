import { createFileRoute } from "@tanstack/react-router";
import { VadapalliItinerary } from "@/components/vadapalli-itinerary";
export const Route = createFileRoute(
  "/tours/visakapatanam-vadapalli-temple-tour-1n-2d",
)({
  head: () => ({
    meta: [
      {
        title:
          "Vizag–Vadapalli Temple Tour · 1 Night / 2 Days | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore a proposed Vadapalli, Draksharamam, Pithapuram and Annavaram temple itinerary from Vizag. Overnight departure, fare breakdown and personalised WhatsApp enquiries.",
      },
    ],
  }),
  component: VadapalliItinerary,
});
