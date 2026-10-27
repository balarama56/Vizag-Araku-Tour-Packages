import { createFileRoute } from "@tanstack/react-router";
import { VizagPapikondalluPackages } from "@/components/vizag-papikondallu-packages";
export const Route = createFileRoute("/tour/vizag-papikondallu-tour-packages")({
  head: () => ({
    meta: [
      { title: "Vizag Papikondallu Tour Packages | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Explore a 2-day, 1-night Papikondalu tour from Vizag, listed from ₹15,900. Discover the Godavari river escape and enquire for dates and group pricing.",
      },
    ],
  }),
  component: VizagPapikondalluPackages,
});
