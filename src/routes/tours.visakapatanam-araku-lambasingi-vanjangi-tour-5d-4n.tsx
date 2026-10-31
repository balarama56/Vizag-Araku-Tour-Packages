import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute(
  "/tours/visakapatanam-araku-lambasingi-vanjangi-tour-5d-4n",
)({
  head: () => ({
    meta: [
      {
        title:
          "Vizag, Araku, Lambasingi & Vanjangi · 5 Days, 4 Nights | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore a five-day Vizag, Araku, Vanjangi and Lambasingi itinerary with four overnight stays, early viewpoint visits, coffee country and a personalised enquiry from ₹32,500 per couple.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="vanjangi-five-day" />,
});
