import { createFileRoute } from "@tanstack/react-router";
import { VizagHotels } from "@/components/vizag-hotels";
export const Route = createFileRoute("/hotel-booking")({
  head: () => ({
    meta: [
      { title: "Hotel Booking in Vizag | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Explore Hotel Lotus Park and enquire about Vizag hotel stays. Share check-in, check-out, guests and rooms for confirmed availability and a quote.",
      },
    ],
  }),
  component: VizagHotels,
});
