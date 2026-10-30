import { createFileRoute } from "@tanstack/react-router";
import { ArakuHotels } from "@/components/araku-hotels";
export const Route = createFileRoute("/araku-hotels")({
  head: () => ({
    meta: [
      {
        title:
          "Araku Hotels & Akshaya Inn Stay Enquiries | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore Akshaya Inn, Hotel Rajadhani Grand and Apple Resort for your Araku stay. Share dates, guests and rooms to request availability and pricing.",
      },
    ],
  }),
  component: ArakuHotels,
});
