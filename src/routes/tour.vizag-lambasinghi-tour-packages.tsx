import { createFileRoute } from "@tanstack/react-router";
import { VizagLambasingiPackages } from "@/components/vizag-lambasingi-packages";
export const Route = createFileRoute("/tour/vizag-lambasinghi-tour-packages")({
  head: () => ({
    meta: [
      { title: "Vizag Lambasingi Tour Packages | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Compare four Vizag Lambasingi tour packages, from 3 to 5 days. Explore Araku and Vanjangi combinations, starting prices and group enquiries.",
      },
    ],
  }),
  component: VizagLambasingiPackages,
});
