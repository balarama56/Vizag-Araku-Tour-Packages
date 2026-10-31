import { createFileRoute } from "@tanstack/react-router";
import { ArakuItinerary } from "@/components/araku-itinerary";

export const Route = createFileRoute("/tours/araku-valley-tour-2-d-1-n")({
  head: () => ({
    meta: [
      { title: "Araku Valley Tour · 2 Days, 1 Night | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Escape to Araku Valley for two days with a Vizag pickup, Borra Caves, coffee plantations and one valley overnight stay. View the daily plan and enquire from ₹10,900 per couple.",
      },
    ],
  }),
  component: () => <ArakuItinerary variant="araku-only" />,
});
