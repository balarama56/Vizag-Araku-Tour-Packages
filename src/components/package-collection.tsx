import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  SlidersHorizontal,
} from "lucide-react";
import { Nav, Footer, Tilt } from "@/components/site";
import { TrustBar } from "@/components/home/planning-sections";
import { ContactActions, whatsappUrl } from "@/components/contact-actions";
import hero from "@/assets/hero.jpg";

export type TourPackage = {
  id: string;
  title: string;
  days: number;
  nights: number;
  price: number;
  label: string;
  image: string;
  description: string;
  route: string;
};
export function PackageCollection({
  packages,
  title,
  tagline,
  description,
  range,
  heading,
  heroImage = hero,
  heroAlt = "Green Eastern Ghats hills at sunrise",
  bookingNote,
}: {
  packages: TourPackage[];
  title: string;
  tagline: string;
  description: string;
  range: string;
  heading: string;
  heroImage?: string;
  heroAlt?: string;
  bookingNote?: string;
}) {
  const [duration, setDuration] = useState(0);
  const [sort, setSort] = useState("recommended");
  const visible = packages.filter((p) => !duration || p.days === duration);
  if (sort !== "recommended")
    visible.sort((a, b) =>
      sort === "price-low" ? a.price - b.price : b.price - a.price,
    );
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <main id="main-content">
        <section
          className="image-surface relative flex min-h-[760px] h-[100svh] items-center justify-center overflow-hidden"
          style={{ perspective: 1200 }}
        >
          <img
            src={heroImage}
            alt={heroAlt}
            onError={(e) => {
              if (e.currentTarget.getAttribute("src") !== hero)
                e.currentTarget.src = hero;
            }}
            width={1920}
            height={1088}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="bg-fade absolute inset-0" />
          <Tilt className="relative z-10">
            <div className="px-6 py-24 text-center">
              <p className="glass mx-auto mb-6 w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {tagline}
              </p>
              <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl md:text-8xl">
                {title}
                <br />
                <span className="text-gold italic">Tour Packages.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                {description}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#packages"
                  className="bg-gold rounded-full px-8 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
                >
                  Explore packages ↓
                </a>
                <Link
                  to="/contact"
                  className="glass rounded-full px-8 py-4 font-semibold transition hover:scale-105"
                >
                  Plan my trip
                </Link>
              </div>
            </div>
          </Tilt>
          <div className="glass animate-floaty absolute bottom-24 left-[8%] hidden rounded-2xl p-4 md:block">
            <p className="text-2xl font-display text-gold">{range}</p>
            <p className="text-xs text-muted-foreground">
              Choose the time that suits you
            </p>
          </div>
          <div
            className="glass animate-floaty absolute right-[5%] top-1/4 hidden rounded-2xl p-4 lg:block"
            style={{ animationDelay: "-3s" }}
          >
            <p className="text-2xl font-display text-gold">
              From ₹
              {Math.min(...packages.map((p) => p.price)).toLocaleString(
                "en-IN",
              )}
            </p>
            <p className="text-xs text-muted-foreground">
              Final quote confirmed for your group
            </p>
          </div>
        </section>
        <TrustBar />
        <section
          id="packages"
          aria-labelledby="packages-title"
          className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 md:py-28"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Choose your escape
          </p>
          <h2
            id="packages-title"
            className="mt-3 text-4xl font-semibold md:text-5xl"
          >
            {heading}
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
            Compare the essentials at a glance. Choose a package and send your
            dates and group size for a personalised quote.
          </p>
          {packages.length > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-y border-border py-5">
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter packages by duration"
              >
                {[
                  { value: 0, label: "All packages" },
                  ...Array.from(new Set(packages.map((p) => p.days)))
                    .sort((a, b) => a - b)
                    .map((days) => ({ value: days, label: `${days} days` })),
                ].map((f) => (
                  <button
                    key={f.value}
                    type="button"
                    aria-pressed={duration === f.value}
                    onClick={() => setDuration(f.value)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${duration === f.value ? "bg-gold border-transparent text-primary-foreground" : "border-border hover:border-primary"}`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2 text-sm">
                <SlidersHorizontal size={16} className="text-primary" />
                <span className="sr-only">Sort packages</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded-xl border border-border bg-card px-3 py-2 text-foreground"
                >
                  <option value="recommended">Featured order</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                </select>
              </label>
            </div>
          )}
          <p
            role="status"
            aria-live="polite"
            className="mt-6 text-sm text-muted-foreground"
          >
            Showing {visible.length} of {packages.length}{" "}
            {packages.length === 1 ? "package" : "packages"}
          </p>
          <div
            className={`mt-6 grid gap-8 ${packages.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}
          >
            {visible.map((p) => (
              <Tilt key={p.id}>
                <article
                  className={`glass h-full overflow-hidden rounded-3xl shadow-deep ${packages.length === 1 ? "grid md:grid-cols-2" : "flex flex-col"}`}
                >
                  <div
                    className={`image-surface group relative overflow-hidden ${packages.length === 1 ? "min-h-72 md:h-full" : "h-56"}`}
                  >
                    <img
                      src={p.image}
                      alt={p.route}
                      loading="lazy"
                      width={820}
                      height={520}
                      onError={(e) => {
                        if (e.currentTarget.getAttribute("src") !== hero)
                          e.currentTarget.src = hero;
                      }}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1.5 text-xs font-semibold text-foreground">
                      {p.label}
                    </span>
                  </div>
                  <div
                    className="flex flex-1 flex-col p-6"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                      <CalendarDays size={14} />
                      {p.days} days / {p.nights}{" "}
                      {p.nights === 1 ? "night" : "nights"}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex items-start gap-2 text-xs leading-6 text-muted-foreground">
                      <MapPin
                        size={14}
                        className="mt-1 shrink-0 text-primary"
                      />
                      {p.route}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="mt-6 border-t border-border pt-5">
                      <p className="text-xs text-muted-foreground">
                        Starting from
                      </p>
                      <p className="mt-1 font-display text-3xl text-gold">
                        ₹{p.price.toLocaleString("en-IN")}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Request pricing for your dates and group.
                      </p>
                      <a
                        href={`${whatsappUrl}?text=${encodeURIComponent(`Hello! I’m interested in ${p.title} (${p.days} days / ${p.nights} ${p.nights === 1 ? "night" : "nights"}), listed from ₹${p.price.toLocaleString("en-IN")}. Please confirm availability, price basis and inclusions. My dates: My group size:`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enquire about ${p.title}, ${p.days} days, from ₹${p.price.toLocaleString("en-IN")}`}
                        className="bg-gold mt-5 flex items-center justify-between rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
                      >
                        Enquire about this package <ArrowUpRight size={17} />
                      </a>
                    </div>
                  </div>
                </article>
              </Tilt>
            ))}
          </div>
          {bookingNote && (
            <aside className="mt-8 rounded-2xl border border-primary/20 bg-secondary p-6">
              <h3 className="text-lg font-semibold">Before you book</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {bookingNote}
              </p>
            </aside>
          )}
          <p className="mt-8 max-w-3xl text-sm leading-7 text-muted-foreground">
            Starting prices are taken from the published package listings.
            Confirm whether the quote is per person or per group, along with
            accommodation, transport, meals, tickets and booking terms before
            paying.
          </p>
        </section>
        <section className="border-y border-border bg-card/60 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">
              Make it your journey
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              A clear plan starts with a conversation.
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                [
                  "01",
                  "Your dates & group",
                  "Tell us when you want to travel, your pickup point and how many people are joining.",
                ],
                [
                  "02",
                  "Your kind of holiday",
                  "Discuss your preferred pace, stays and sightseeing with our Visakhapatnam team.",
                ],
                [
                  "03",
                  "Your confirmed quote",
                  "Review availability, price, inclusions and cancellation terms before booking.",
                ],
              ].map(([n, title, text]) => (
                <article key={n} className="border-t border-primary/30 pt-6">
                  <span className="text-sm text-primary">{n}</span>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="bg-gold rounded-[2.5rem] p-7 text-primary-foreground shadow-glow sm:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]">
              Let’s plan your escape
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold sm:text-5xl">
              Your next memory
              <br />
              starts in Vizag.
            </h2>
            <p className="mb-7 mt-5 max-w-lg leading-7">
              Need help choosing? Share your dates, budget and group size. We’ll
              help you find the right fit.
            </p>
            <ContactActions />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
