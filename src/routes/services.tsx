import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Travel Services | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Discuss tour planning, transport, accommodation and family travel arrangements with Vizag Araku Tourism.",
      },
    ],
  }),
  component: Services,
});
function Services() {
  return (
    <ContentPage
      eyebrow="Services"
      title="Let’s plan the details."
      description="Tell us what you need for your trip. We’ll discuss the options and confirm what is included in your quote."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {[
          [
            "Tour planning",
            "Choose a listed package or discuss changes to your route, stops and trip length.",
          ],
          [
            "Transport planning",
            "Share your pickup point, arrival time and group size to discuss a suitable vehicle and route.",
          ],
          [
            "Stay preferences",
            "Tell us your room requirements and budget. Check the hotel details and availability before booking.",
          ],
          [
            "Family and group trips",
            "Share children’s ages, mobility needs and preferred travel pace so these can be considered in your plan.",
          ],
        ].map(([title, copy]) => (
          <section key={title} className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>
          </section>
        ))}
      </div>
      <Link
        to="/contact"
        className="mt-8 inline-block font-semibold text-primary underline underline-offset-4"
      >
        Discuss your requirements ↗
      </Link>
    </ContentPage>
  );
}
