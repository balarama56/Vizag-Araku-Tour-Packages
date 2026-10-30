import { createFileRoute } from "@tanstack/react-router";
import { VizagAnnavaramPackages } from "@/components/vizag-annavaram-packages";
export const Route = createFileRoute("/tour/vizag-annavaram-tour-packages")({
  head: () => ({
    meta: [
      { title: "Vizag Annavaram Tour Packages | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Compare three listed temple tour options, including Vizag, Araku and Annavaram combinations. View durations, starting prices and group enquiries.",
      },
    ],
  }),
  component: VizagAnnavaramPackages,
});
