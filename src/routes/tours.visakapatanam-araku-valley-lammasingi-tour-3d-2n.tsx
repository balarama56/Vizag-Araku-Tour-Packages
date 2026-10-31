import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute(
  "/tours/visakapatanam-araku-valley-lammasingi-tour-3d-2n",
)({
  head: () => ({
    meta: [
      {
        title:
          "Vizag, Araku & Lambasingi · 3 Days, 2 Nights | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore the Vizag, Araku and Lambasingi three-day tour outline with coastal sights, a scenic valley journey and a proposed Lambasingi day. Confirm the full route and overnight stays with the operator.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="lambasingi" />,
});
