import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute("/tours/araku-lambasingi-tour-3-d-2-n")({
  head: () => ({
    meta: [
      { title: "Araku & Lambasingi · 3 Days, 2 Nights | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Plan three days in Araku and Lambasingi with two Araku overnight stays, an early viewpoint excursion, caves, coffee country and waterfalls. Explore the daily plan and request your quote.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="araku-lambasingi" />,
});
