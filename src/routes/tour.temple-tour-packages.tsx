import { createFileRoute } from "@tanstack/react-router";
import { TempleTourPackages } from "@/components/temple-tour-packages";
export const Route = createFileRoute("/tour/temple-tour-packages")({
  head: () => ({
    meta: [
      { title: "Temple Tour Packages from Vizag | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Compare six temple tour packages from Vizag, including Vadapalli, Pancharamam, Annavaram, Puri and Konark. Browse durations, starting prices and group enquiries.",
      },
    ],
  }),
  component: TempleTourPackages,
});
