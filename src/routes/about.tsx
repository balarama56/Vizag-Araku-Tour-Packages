import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Get to know Vizag Araku Tourism and explore trips around Vizag, Araku and the Eastern Ghats.",
      },
    ],
  }),
  component: About,
});
function About() {
  return (
    <ContentPage
      eyebrow="About us"
      title="Your trip starts in Vizag."
      description="Vizag Araku Tourism is a travel agency based in Visakhapatnam. Explore our tour packages and talk to us about a trip that suits your plans."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-3xl font-semibold">Coast, hills and temple trips</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            Our listed routes cover Vizag, Araku Valley, Papikondalu, Lambasingi and temple
            destinations. We specialise in group packages for 10 or more travellers, with 4–40
            seater vehicle options. Ask us to confirm the right vehicle, stays and availability for
            your dates.
          </p>
          <Link
            to="/tour-packages"
            className="mt-6 inline-block font-semibold text-primary underline underline-offset-4"
          >
            View tour packages ↗
          </Link>
        </section>
        <section className="rounded-3xl border border-border bg-card p-7">
          <h2 className="text-2xl font-semibold">A clear plan before you travel</h2>
          <ul className="mt-5 list-disc space-y-4 pl-5 leading-7 text-muted-foreground">
            <li>Share your dates, group size and budget.</li>
            <li>Discuss your route, stays and transport.</li>
            <li>Check the final price, inclusions and booking terms.</li>
            <li>Confirm availability before making a payment.</li>
          </ul>
        </section>
      </div>
    </ContentPage>
  );
}
