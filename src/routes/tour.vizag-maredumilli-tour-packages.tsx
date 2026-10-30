import { createFileRoute } from "@tanstack/react-router";
import { VizagMaredumilliPackages } from "@/components/vizag-maredumilli-packages";
export const Route = createFileRoute("/tour/vizag-maredumilli-tour-packages")({
  head: () => ({
    meta: [
      { title: "Vizag Maredumilli Tour Packages | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Explore a 3-day, 2-night Maredumilli tour from Visakhapatnam, listed from ₹21,000. View the package and enquire for your dates and group.",
      },
    ],
  }),
  component: VizagMaredumilliPackages,
});
