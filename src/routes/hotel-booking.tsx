import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { hotelCategories } from "@/lib/booking-categories";
export const Route = createFileRoute("/hotel-booking")({
  head: () => ({
    meta: [
      { title: "Hotel Booking | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Enquire about hotels in Vizag and Araku. Share dates, room requirements and your budget.",
      },
    ],
  }),
  component: Hotels,
});
function Hotels() {
  return (
    <ContentPage
      eyebrow="Hotel booking"
      title="Find a stay for your trip."
      description="Enquire about hotel options in Vizag and Araku. Availability, room details and prices are confirmed before booking."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {hotelCategories.map((hotel) => (
          <article key={hotel.slug} className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-2xl font-semibold">{hotel.title}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{hotel.description}</p>
            <Link
              to="/hotel-booking/$destination"
              params={{ destination: hotel.slug }}
              className="bg-gold mt-6 inline-block rounded-full px-6 py-3 font-semibold text-primary-foreground"
            >
              Explore stay options ↗
            </Link>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
