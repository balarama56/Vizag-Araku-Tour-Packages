import { Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { tours } from "@/components/site";

export function BookingDetail({
  title,
  description,
  kind,
  checklist,
  match = [],
}: {
  title: string;
  description: string;
  kind: string;
  checklist?: string[];
  match?: string[];
}) {
  const related = tours.filter((tour) => match.some((word) => tour.title.includes(word)));
  return (
    <ContentPage eyebrow={kind} title={title} description={description}>
      <section className="rounded-3xl border border-primary/20 bg-card p-7 sm:p-10">
        <h2 className="text-2xl font-semibold">What to share with us</h2>
        <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
          {(
            checklist ?? [
              "Your travel dates and pickup point",
              "Group size and preferred trip length",
              "Places you want to visit and your budget",
              "Transport, accommodation and any special requirements",
            ]
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-7 text-muted-foreground">
          Availability and prices are confirmed in your quote. Review the inclusions and booking
          terms before making a payment.
        </p>
        <Link
          to="/contact"
          className="bg-gold mt-6 inline-block rounded-full px-6 py-3 font-semibold text-primary-foreground"
        >
          Send a booking enquiry ↗
        </Link>
      </section>
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Related tour options</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {related.map((tour) => (
              <article className="rounded-2xl border border-border bg-card p-6" key={tour.title}>
                <p className="text-sm text-primary">{tour.dur}</p>
                <h3 className="mt-2 text-xl font-semibold">{tour.title}</h3>
                <p className="mt-3 text-muted-foreground">
                  Starting from ₹{tour.price.toLocaleString("en-IN")}
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4"
                >
                  Ask for an itinerary
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-muted-foreground">
            Confirm whether starting prices apply per person or per group.
          </p>
        </section>
      )}
    </ContentPage>
  );
}
