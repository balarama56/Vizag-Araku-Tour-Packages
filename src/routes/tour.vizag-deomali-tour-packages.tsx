import { createFileRoute } from "@tanstack/react-router";
import { VizagDeomaliPackages } from "@/components/vizag-deomali-packages";
export const Route = createFileRoute("/tour/vizag-deomali-tour-packages")({
  head: () => ({
    meta: [
      { title: "Vizag Deomali Tour Packages | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Explore a one-day Vizag, Deomali and Duduma escape. View the package at a glance and enquire for current couple or group pricing.",
      },
    ],
  }),
  component: VizagDeomaliPackages,
});
