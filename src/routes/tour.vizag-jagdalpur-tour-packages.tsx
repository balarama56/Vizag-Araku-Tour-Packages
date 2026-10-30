import { createFileRoute } from "@tanstack/react-router";
import { VizagJagdalpurPackages } from "@/components/vizag-jagdalpur-packages";
export const Route = createFileRoute("/tour/vizag-jagdalpur-tour-packages")({
  head: () => ({
    meta: [
      { title: "Vizag Jagdalpur Tour Packages | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Compare two 5-day, 4-night Vizag, Araku and Jagdalpur packages. Browse starting prices and enquire for your dates and group.",
      },
    ],
  }),
  component: VizagJagdalpurPackages,
});
