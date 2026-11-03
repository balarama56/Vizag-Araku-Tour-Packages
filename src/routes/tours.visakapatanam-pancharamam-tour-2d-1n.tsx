import { createFileRoute } from "@tanstack/react-router";
import { PancharamaItinerary } from "@/components/pancharama-itinerary";

export const Route = createFileRoute(
  "/tours/visakapatanam-pancharamam-tour-2d-1n",
)({
  head: () => ({
    meta: [
      {
        title:
          "Vizag–Pancharamam Itinerary · 2 Days / 1 Night | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore five Pancharama temples on a suggested two-day pilgrimage from Visakhapatnam. Compare six vehicle options and request a personalised itinerary and quote.",
      },
    ],
  }),
  component: PancharamaItinerary,
});
