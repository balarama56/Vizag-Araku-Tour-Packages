import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute(
  "/tours/visakhapatnam-deomali-duduma-1-day-tour",
)({
  head: () => ({
    meta: [
      { title: "Vizag, Deomali & Duduma · 1 Day Tour | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Explore a proposed one-day Deomali and Duduma trip from Vizag, without an overnight stay. Confirm the route, viewpoint access, pickup, return time and current couple price with your quote.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="deomali" />,
});
