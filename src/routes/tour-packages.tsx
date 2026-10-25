import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { tours } from "@/components/site";

export const Route = createFileRoute("/tour-packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Compare Vizag, Araku, Papikondalu and temple tour packages, durations and starting prices.",
      },
    ],
  }),
  component: Packages,
});
function Packages() {
  return (
    <ContentPage
      eyebrow="Tour packages"
      title="Find a trip that suits you."
      description="Compare our routes, trip lengths and starting prices. Contact us for an itinerary and a quote for your group."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <article
            key={tour.title}
            className="overflow-hidden rounded-3xl border border-border bg-card"
          >
            <img
              src={tour.img}
              alt={tour.title}
              loading="lazy"
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-primary">{tour.dur}</p>
              <h2 className="mt-3 text-2xl font-semibold">{tour.title}</h2>
              <p className="mt-5 text-sm text-muted-foreground">
                Starting from{" "}
                <strong className="text-xl text-foreground">
                  ₹{tour.price.toLocaleString("en-IN")}
                </strong>
              </p>
              <Link
                to="/contact"
                className="bg-gold mt-6 inline-block rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Enquire about this trip ↗
              </Link>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-muted-foreground">
        Starting prices are indicative. Confirm the price per person or group, travel dates,
        accommodation, transport, meals and tickets in your written quote.
      </p>
    </ContentPage>
  );
}
