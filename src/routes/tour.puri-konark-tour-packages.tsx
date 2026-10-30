import { createFileRoute } from "@tanstack/react-router";
import { PuriKonarkPackages } from "@/components/puri-konark-packages";
export const Route = createFileRoute("/tour/puri-konark-tour-packages")({
  head: () => ({
    meta: [
      { title: "Puri Konark Tour Packages from Vizag | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Compare two 3-day, 2-night Puri and Konark packages from Vizag, listed from ₹26,600 per couple. View prices and enquire for your dates.",
      },
    ],
  }),
  component: PuriKonarkPackages,
});
