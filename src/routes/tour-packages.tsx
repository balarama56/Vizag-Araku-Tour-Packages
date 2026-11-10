import { imageAlt } from "@/lib/image-alt";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { tourCategories } from "@/lib/booking-categories";
import { tours } from "@/components/site";
import { itineraryPackages } from "@/lib/itinerary-packages";
import { packageDuration } from "@/components/package-collection";

const overviewImages: Record<string, string> = {
  "val-3d": "/images/lambasingi-hotels/brundavanam-0.jpg",
  "al-3d": "/images/lambasingi-hotels/rrr-0.jpg",
  "val-4d": "/images/lambasingi-hotels/raghu-0.jpg",
  "valv-5d": "/images/lambasingi-hotels/horizon-0.jpg",
  "aj-5d": "/images/araku-hotels/0-0.jpg",
};

const packageCards = [
  ...itineraryPackages.map((tour) => ({
    title: tour.title,
    dur: packageDuration(tour),
    price: tour.price,
    img: overviewImages[tour.id] ?? tour.image,
    itineraryUrl: tour.itineraryUrl,
  })),
  ...tours.filter((tour) => !tour.itineraryUrl),
];

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
      <section aria-label="Browse tours by destination" className="mb-12">
        <h2 className="text-2xl font-semibold">Browse by destination</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tourCategories.map((category) => (
            <Link
              key={category.slug}
              to={category.path}
              className="rounded-xl border border-primary/20 bg-secondary px-5 py-4 text-sm font-semibold hover:border-primary"
            >
              {category.title} ↗
            </Link>
          ))}
        </div>
      </section>
      <h2 className="mb-6 text-2xl font-semibold">Explore tour packages</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packageCards.map((tour) => (
          <article
            key={`${tour.title}-${tour.dur}`}
            className="overflow-hidden rounded-3xl border border-border bg-card"
          >
            <img
              src={tour.img}
              alt={imageAlt(tour.img, tour.title)}
              loading="lazy"
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-primary">{tour.dur}</p>
              <h2 className="mt-3 text-2xl font-semibold">
                {tour.itineraryUrl ? (
                  <a
                    href={tour.itineraryUrl}
                    className="hover:text-primary focus-visible:underline"
                  >
                    {tour.title}
                  </a>
                ) : (
                  tour.title
                )}
              </h2>
              <p className="mt-5 text-sm text-muted-foreground">
                Starting from{" "}
                <strong className="text-xl text-foreground">
                  ₹{tour.price.toLocaleString("en-IN")}
                </strong>
              </p>
              {tour.itineraryUrl && (
                <a
                  href={tour.itineraryUrl}
                  aria-label={`View itinerary for ${tour.title}, ${tour.dur}`}
                  className="mt-5 flex items-center justify-between gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-secondary"
                >
                  View day-by-day itinerary ↗
                </a>
              )}
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
        Starting prices are indicative. Confirm the price per person or group,
        travel dates, accommodation, transport, meals and tickets in your
        written quote.
      </p>
    </ContentPage>
  );
}
