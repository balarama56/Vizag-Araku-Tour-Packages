import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute(
  "/tours/araku-valley-jagadalpur-tour-5-d-4-n",
)({
  head: () => ({
    meta: [
      {
        title:
          "Araku Valley & Jagdalpur · 5 Days, 4 Nights | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore five days of Araku hills, Jagdalpur temples, caves and waterfalls, with three Jagdalpur nights and one Araku night. Review the daily itinerary and request a personalised quote.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="jagdalpur" />,
});
