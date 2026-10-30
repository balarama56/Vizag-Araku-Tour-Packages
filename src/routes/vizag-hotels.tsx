import { createFileRoute } from "@tanstack/react-router";
import { VizagHotels } from "@/components/vizag-hotels";
export const Route = createFileRoute("/vizag-hotels")({
  head: () => ({
    meta: [
      { title: "Vizag Hotels & Stay Enquiries | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Plan your Vizag stay with our local team. Explore Hotel Lotus Park and request hotel availability and pricing for your dates, guests and rooms.",
      },
    ],
  }),
  component: VizagHotels,
});
