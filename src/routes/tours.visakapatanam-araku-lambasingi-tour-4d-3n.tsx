import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute(
  "/tours/visakapatanam-araku-lambasingi-tour-4d-3n",
)({
  head: () => ({
    meta: [
      {
        title:
          "Vizag, Araku & Lambasingi · 4 Days, 3 Nights | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore the four-day Vizag, Araku and Lambasingi tour outline, with proposed final days, overnight arrangements to confirm and a personalised enquiry from ₹25,500.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="lambasingi-four-day" />,
});
