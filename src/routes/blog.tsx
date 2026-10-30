import { createFileRoute } from "@tanstack/react-router";
import { TravelBlog } from "@/components/travel-blog";
export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Travel Blog & Planning Guides | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Explore travel stories about Vizag, Araku, Lambasingi and Vanjangi. Browse beach inspiration, valley escapes and practical trip-planning guides.",
      },
    ],
  }),
  component: TravelBlog,
});
