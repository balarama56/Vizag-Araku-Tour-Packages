import { createFileRoute } from "@tanstack/react-router";
import { LambasingiHotels } from "@/components/lambasingi-hotels";
export const Route = createFileRoute("/lambasingi-hotels")({
  head: () => ({
    meta: [
      {
        title:
          "Lambasingi Hotels & Resort Stay Enquiries | Vizag Araku Tourism",
      },
      {
        name: "description",
        content:
          "Explore Horizon, Brundavanam, RRR and Raghu resorts in Lambasingi. Compare room options and enquire on WhatsApp for your travel dates.",
      },
    ],
  }),
  component: LambasingiHotels,
});
