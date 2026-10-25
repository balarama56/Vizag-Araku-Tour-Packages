import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { TrustBar, CustomerReviews, BestTimeToVisit } from "@/components/home/planning-sections";
import hero from "@/assets/hero.jpg";
import { Nav, Footer, Tilt, useReveal, destinations, tours } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vizag Araku Tour Packages — Premium Eastern Ghats Journeys" },
      {
        name: "description",
        content:
          "Handcrafted Araku Valley, Papikondalu, Lambasingi and temple tours from Visakhapatnam.",
      },
      { property: "og:title", content: "Vizag Araku Tour Packages" },
      {
        property: "og:description",
        content: "Handcrafted Araku Valley, Papikondalu and temple tours from Vizag.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  const [y, setY] = useState(0);
  const [m, setM] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    const s = () => setY(window.scrollY);
    const mv = (e: MouseEvent) =>
      setM({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    window.addEventListener("scroll", s, { passive: true });
    window.addEventListener("mousemove", mv);
    return () => {
      window.removeEventListener("scroll", s);
      window.removeEventListener("mousemove", mv);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Nav />
      <main id="main-content">
        <section
          className="image-surface relative flex min-h-[760px] h-[100svh] items-center justify-center overflow-hidden"
          style={{ perspective: 1200 }}
        >
          <img
            src={hero}
            alt="Araku Valley at sunrise"
            width={1920}
            height={1088}
            className="absolute inset-0 h-[120%] w-full object-cover"
            style={{
              transform: `translateY(${y * 0.35}px) scale(1.1) translate(${m.x * -20}px, ${m.y * -20}px)`,
            }}
          />
          <div className="bg-fade absolute inset-0" />
          <div
            className="relative z-10 px-6 py-24 text-center preserve-3d"
            style={{
              transform: `rotateY(${m.x * 8}deg) rotateX(${-m.y * 8}deg) translateY(${y * -0.2}px)`,
              opacity: 1 - y / 700,
            }}
          >
            <p className="glass mx-auto mb-6 w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Vizag Araku Tourism
            </p>
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl md:text-8xl">
              Explore Vizag
              <br />& <span className="text-gold italic">Araku Valley.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Choose a tour, share your dates and plan your trip with us. Explore beaches, hills,
              rivers and temples.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#tours"
                className="bg-gold rounded-full px-8 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
              >
                Explore tours
              </a>
              <Link
                to="/contact"
                className="glass rounded-full px-8 py-4 font-semibold transition hover:scale-105"
              >
                Plan my trip
              </Link>
            </div>
          </div>
          <div className="glass animate-floaty absolute bottom-24 left-[8%] hidden rounded-2xl p-4 md:block">
            <p className="text-2xl font-display text-gold">Group trip specialists</p>
            <p className="text-xs text-muted-foreground">Packages for 10+ travellers</p>
          </div>
          <div
            className="glass animate-floaty absolute right-[8%] top-1/3 hidden rounded-2xl p-4 md:block"
            style={{ animationDelay: "-3s" }}
          >
            <p className="text-2xl font-display text-gold">15+ years experience</p>
            <p className="text-xs text-muted-foreground">Helping you plan memorable trips</p>
          </div>
        </section>

        <TrustBar />

        <div className="overflow-hidden border-y border-border py-5">
          <div className="animate-marquee flex w-max gap-12 font-display text-2xl text-muted-foreground">
            {[...Array(2)].flatMap((_, k) =>
              [
                "Araku Valley",
                "Borra Caves",
                "Papikondalu",
                "Lambasingi",
                "Maredumilli",
                "Puri",
                "Konark",
                "Annavaram",
                "Jagdalpur",
                "Deomali",
              ].map((t) => <span key={k + t}>✦ {t}</span>),
            )}
          </div>
        </div>

        <section
          id="about-home"
          aria-labelledby="about-home-title"
          className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-28"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={hero}
              alt="Green hills and valleys near Araku"
              width={1920}
              height={1088}
              loading="lazy"
              className="h-80 w-full object-cover md:h-[420px]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 text-slate-800">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-800">
                Based in Visakhapatnam
              </p>
              <p className="mt-2 font-display text-xl font-semibold">
                Local journeys. Shared memories.
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              About Vizag Araku Tourism
            </p>
            <h2 id="about-home-title" className="mt-4 text-3xl font-semibold md:text-4xl">
              Travel together.
              <br />
              We’ll help with the details.
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              We are a Visakhapatnam travel agency helping you plan transport and stays for Vizag,
              Araku, Lambasingi, Papikondalu and the Godavari region.
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-lg font-semibold">Group packages</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Specialising in trips for groups of 10 or more travellers.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-lg font-semibold">Vehicle options</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Ask about 4–40 seater vehicles. Availability is confirmed with your quote.
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-7 inline-block font-semibold text-primary underline underline-offset-4"
            >
              More about us ↗
            </Link>
          </div>
        </section>

        <section id="destinations" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-primary">Places to go</p>
          <h2 className="reveal mt-3 text-5xl font-semibold">Places to visit</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d, i) => (
              <Tilt key={d.name} className="reveal">
                <div
                  className="image-surface group relative h-96 overflow-hidden rounded-3xl shadow-deep"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="bg-fade absolute inset-0" />
                  <div className="absolute bottom-0 p-6" style={{ transform: "translateZ(50px)" }}>
                    <h3 className="text-2xl font-semibold">{d.name}</h3>
                    <p className="text-sm text-primary">{d.tours} tours</p>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </section>

        <section id="tours" className="mx-auto max-w-6xl px-6 pb-28">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-primary">Most popular</p>
          <h2 className="reveal mt-3 text-5xl font-semibold">Popular tour packages</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((t) => (
              <Tilt key={t.title} className="reveal">
                <article className="glass h-full overflow-hidden rounded-3xl shadow-deep">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={t.img}
                      alt={t.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    {t.featured && (
                      <span className="bg-gold absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-primary-foreground">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-6" style={{ transform: "translateZ(30px)" }}>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {t.dur}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{t.title}</h3>
                    <div className="mt-6 flex items-end justify-between">
                      <p className="text-sm text-muted-foreground">
                        From{" "}
                        <span className="block font-display text-2xl text-gold">
                          ₹{t.price.toLocaleString("en-IN")}
                        </span>
                      </p>
                      <Link
                        to="/contact"
                        className="rounded-full border border-border px-4 py-2 text-sm transition hover:bg-primary hover:text-primary-foreground"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </article>
              </Tilt>
            ))}
          </div>
        </section>

        <section id="why-us" className="border-y border-border bg-card/60 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Why choose us</p>
            <div className="mt-4 grid gap-6 md:grid-cols-2 md:items-end">
              <h2 className="text-4xl font-semibold md:text-5xl">
                Why choose
                <br />
                Vizag Araku Tourism?
              </h2>
              <p className="max-w-md leading-7 text-muted-foreground">
                Choose the places you want to see. Tell us your dates, group size and budget.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "01",
                  "Flexible routes",
                  "Choose a short Araku getaway or connect the coast, hills and temples over several days.",
                ],
                [
                  "02",
                  "Family and group trips",
                  "Share your group size and the needs of children or older travellers when planning.",
                ],
                [
                  "03",
                  "Clear trip details",
                  "Ask for a clear itinerary, transport details and accommodation options before confirming.",
                ],
                [
                  "04",
                  "Trips for your interests",
                  "Nature, photography, a relaxed break or a pilgrimage — tell us what you want to make time for.",
                ],
              ].map(([n, title, copy]) => (
                <article key={n} className="border-t border-primary/30 pt-6">
                  <span className="text-sm text-primary">{n}</span>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CustomerReviews />

        <section id="travel-guide" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Find your kind of escape
          </p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Choose your type of trip</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "The slow escape",
                "Beaches & valley views",
                "Pair time on the Visakhapatnam coast with the landscapes of Araku Valley. Leave room in your itinerary for unhurried stops.",
                "Vizag · Araku · Borra Caves",
              ],
              [
                "The nature trail",
                "Mist, forests & rivers",
                "Explore the tour options for Lambasingi, Vanjangi, Maredumilli and Papikondalu. Confirm weather and access before travel.",
                "Lambasingi · Maredumilli · Papikondalu",
              ],
              [
                "The cultural journey",
                "Temples & heritage",
                "Make space for temple visits and heritage stops, with travel times and visiting arrangements discussed in advance.",
                "Annavaram · Puri · Konark",
              ],
            ].map(([tag, title, copy, places]) => (
              <article key={title} className="glass flex flex-col rounded-3xl p-7">
                <p className="text-xs uppercase tracking-widest text-primary">{tag}</p>
                <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{copy}</p>
                <p className="mt-6 border-t border-border pt-5 text-xs leading-6 text-primary">
                  {places}
                </p>
                <a href="#tours" className="mt-5 text-sm font-semibold">
                  Explore packages <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <BestTimeToVisit />

        <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 rounded-3xl border border-primary/20 bg-card p-7 md:grid-cols-[1fr_1.2fr] md:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary">How it works</p>
              <h2 className="mt-4 text-4xl font-semibold">
                Plan your trip
                <br />
                in three steps.
              </h2>
              <Link
                to="/contact"
                className="bg-gold mt-7 inline-block rounded-full px-6 py-3 font-semibold text-primary-foreground"
              >
                Start planning ↗
              </Link>
            </div>
            <ol className="grid gap-7">
              {[
                [
                  "Tell us your plans",
                  "Choose a package and share your preferred dates, group size, pickup point and interests.",
                ],
                [
                  "Shape the details",
                  "Discuss your route, stays, transport, inclusions and a quote suited to your group.",
                ],
                [
                  "Confirm, then explore",
                  "Review availability, payment terms and cancellation conditions before confirming your journey.",
                ],
              ].map(([title, copy], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 md:grid-cols-[1fr_1.5fr] md:pb-28"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary">FAQs · Before you go</p>
            <h2 className="mt-3 text-4xl font-semibold">Frequently asked questions.</h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Every group is different. Bring your questions when discussing your travel plans.
            </p>
          </div>
          <div className="divide-y divide-border">
            {[
              [
                "Which tour should I choose?",
                "Start with your available days and interests. The listed packages range from short Araku breaks to longer routes combining hills, beaches and temples. Ask about travel time between stops before choosing.",
              ],
              [
                "Can I request a customised itinerary?",
                "Use the trip enquiry page to share your dates, group size and preferred destinations. Describe any changes you would like to discuss rather than assuming the listed route is fixed.",
              ],
              [
                "What is included in the displayed price?",
                "The cards show starting prices. Confirm whether your quote is per person or per group, and request details of accommodation, transport, meals, tickets and any additional charges before booking.",
              ],
              [
                "Are train tickets and river trips guaranteed?",
                "Do not assume they are included or available. Confirm train reservations, boat operations, permits and weather-related restrictions for your particular travel dates.",
              ],
              [
                "What should I share when planning a family trip?",
                "Include the number of adults and children, any mobility needs, your pickup location, preferred room arrangements and the pace of travel that suits your group.",
              ],
              [
                "Where can I check payment and cancellation terms?",
                "Request the applicable payment schedule, cancellation charges and refund conditions with your written quote before making a payment.",
              ],
            ].map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="cursor-pointer text-base font-semibold leading-7 marker:text-primary">
                  {question}
                </summary>
                <p className="mt-3 pl-4 text-sm leading-7 text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="plan-your-trip"
          aria-labelledby="cta-title"
          className="mx-auto mb-20 max-w-6xl px-6 md:mb-28"
        >
          <div className="reveal bg-gold relative overflow-hidden rounded-[2.5rem] p-7 sm:p-14 text-primary-foreground shadow-glow">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em]">Contact us</p>
            <h2 id="cta-title" className="max-w-2xl text-4xl font-semibold sm:text-5xl">
              Ready to plan
              <br />
              your trip?
            </h2>
            <p className="mt-4 max-w-md opacity-80">
              Tell us your dates and group size. We’ll help you choose a tour.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-block rounded-full bg-primary-foreground px-7 py-4 font-semibold text-white transition hover:scale-105"
              >
                Plan my Vizag & Araku trip ↗
              </Link>
              <a
                href="#tours"
                className="rounded-full border border-current/30 px-7 py-4 font-semibold"
              >
                Browse tour packages
              </a>
            </div>
            <p className="mt-6 text-sm">Call or WhatsApp us to get started</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
