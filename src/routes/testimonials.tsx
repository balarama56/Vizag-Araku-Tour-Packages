import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/testimonials";
export const Route = createFileRoute("/testimonials")({
  head: () => ({ meta: [
    { title: "Customer Testimonials & Travel Memories | Vizag Araku Tourism" },
    { name: "description", content: "Explore customer photos, video reviews and shared travel memories from journeys with Vizag Araku Tourism." },
  ] }),
  component: Testimonials,
});