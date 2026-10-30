import { createFileRoute } from "@tanstack/react-router";
import { PancharamaPackages } from "@/components/pancharama-packages";
export const Route = createFileRoute("/tour/pancharama-tour-packages")({
  head: () => ({
    meta: [
      { title: "Pancharama Tour Packages from Vizag | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Compare six vehicle options for a two-day Pancharamam pilgrimage from Vizag, listed from ₹22,000. Enquire for your dates, group and arrangements.",
      },
    ],
  }),
  component: PancharamaPackages,
});
