import { createFileRoute } from "@tanstack/react-router";
import { VizagArakuPackages } from "@/components/vizag-araku-packages";
export const Route = createFileRoute("/tour/vizag-araku-tour-packages")({
  head: () => ({
    meta: [
      { title: "Vizag Araku Tour Packages | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Compare five Vizag and Araku tour packages, from 2 to 4 days. Browse starting prices and enquire for your group’s travel dates.",
      },
    ],
  }),
  component: VizagArakuPackages,
});
