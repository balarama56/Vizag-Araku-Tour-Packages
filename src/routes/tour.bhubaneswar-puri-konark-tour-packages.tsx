import { createFileRoute } from "@tanstack/react-router";
import { BhubaneswarPuriKonarkPackages } from "@/components/bhubaneswar-puri-konark-packages";
export const Route = createFileRoute(
  "/tour/bhubaneswar-puri-konark-tour-packages",
)({
  head: () => ({
    meta: [
      { title: "Bhubaneswar Puri Konark Tour Packages | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Explore a 3-day, 2-night Bhubaneswar, Puri and Konark journey from Vizag, listed from ₹30,000 per couple. View the package and enquire for your dates.",
      },
    ],
  }),
  component: BhubaneswarPuriKonarkPackages,
});
