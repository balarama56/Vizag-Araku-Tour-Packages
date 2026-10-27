import { createFileRoute } from "@tanstack/react-router";
import { About } from "./about";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Meet your local travel team in Visakhapatnam and plan your next coast, valley or temple journey with Vizag Araku Tourism.",
      },
    ],
  }),
  component: About,
});
