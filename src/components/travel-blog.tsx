import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, BookOpen, Search } from "lucide-react";
import { Nav, Footer, Tilt } from "@/components/site";
import { planningGuides } from "@/lib/blog-guides";
import hero from "@/assets/hero.jpg";
const origin = "https://www.vizagarakutourpackages.com";
const uploads = `${origin}/wp-content/uploads`;
export const travelArticles = [
  {
    title: "Araku, Lambasingi & Vanjangi: a hill escape",
    topic: "Hill escapes",
    url: `${origin}/araku-lambasingi-vanjangi-tour-package/`,
    image: `${uploads}/2025/12/Araku-Lambasingi-Vanjangi-Tour-Package-768x768.png`,
    summary:
      "Find inspiration for a journey through the valleys and hills, then discuss the right route for your group.",
  },
  {
    title: "Build your Vizag sightseeing wish list",
    topic: "Vizag",
    url: `${origin}/10-attractions-to-include-in-your-vizag-tour-package/`,
    image: `${uploads}/2025/06/Vizag-Tour-Package-768x768.jpg`,
    summary:
      "Explore ideas for your city break and decide which sights deserve a place in your travel plans.",
  },
  {
    title: "Planning a two-day Vizag–Araku break",
    topic: "Planning",
    url: `${origin}/vizag-araku-tour-package-for-2-days-with-low-prices/`,
    image: hero,
    summary:
      "Start thinking about a short escape, your available time and the details to check when requesting a quote.",
  },
  {
    title: "Choosing help for your Araku holiday",
    topic: "Planning",
    url: `${origin}/best-travel-agency-for-araku-valley-tour-packages/`,
    image: `${uploads}/2024/02/Best-Travel-Agency-Araku-Valley-Tour-Packages-768x400.webp`,
    summary:
      "Consider what you need from a travel team before discussing transport, accommodation and your route.",
  },
  {
    title: "Make time for Vizag’s beaches",
    topic: "Vizag",
    url: `${origin}/amazing-beaches-in-vizag-to-visit/`,
    image: `${uploads}/2024/02/Amazing-Beaches-in-Vizag-to-Visit-768x400.webp`,
    summary:
      "Bring a little coastal time into your trip. Browse beach inspiration and plan the stops that suit your pace.",
  },
  {
    title: "Discover places for your Araku wish list",
    topic: "Hill escapes",
    url: `${origin}/what-are-the-best-tourist-places-to-visit-in-araku/`,
    image: `${uploads}/2024/02/Best-Tourist-places-to-visit-in-Araku-768x400.webp`,
    summary:
      "Look beyond a destination name and explore ideas for your next valley getaway with family or friends.",
  },
];
export function TravelBlog() {
  const [topic, setTopic] = useState("All articles");
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const visible = travelArticles.filter(
    (a) =>
      (topic === "All articles" || a.topic === topic) &&
      `${a.title} ${a.summary} ${a.topic}`.toLowerCase().includes(term),
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
            src={hero}
            alt="Araku Valley hills at sunrise"
            width={1920}
            height={1088}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="bg-fade absolute inset-0" />
          <Tilt className="relative z-10">
            <div className="px-6 py-24 text-center">
              <p className="glass mx-auto mb-6 w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                The travel journal
              </p>
              <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl md:text-8xl">
                A little inspiration.
                <br />
                <span className="text-gold italic">A better journey.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                Coastal escapes, valley discoveries and practical planning
                notes. Find a story for the trip you have in mind.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#articles"
                  className="bg-gold rounded-full px-8 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
                >
                  Explore the journal ↓
                </a>
                <Link
                  to="/tour-packages"
                  className="glass rounded-full px-8 py-4 font-semibold transition hover:scale-105"
                >
                  Find a tour
                </Link>
              </div>
            </div>
          </Tilt>
          <div className="glass animate-floaty absolute bottom-24 left-[8%] hidden rounded-2xl p-4 md:block">
            <p className="font-display text-2xl text-gold">Six travel reads</p>
            <p className="text-xs text-muted-foreground">Find your next idea</p>
          </div>
          <div
            className="glass animate-floaty absolute right-[5%] top-1/4 hidden rounded-2xl p-4 lg:block"
            style={{ animationDelay: "-3s" }}
          >
            <p className="font-display text-2xl text-gold">
              From coast to clouds
            </p>
            <p className="text-xs text-muted-foreground">
              Vizag & the Eastern Ghats
            </p>
          </div>
        </section>
        <section
          id="articles"
          aria-labelledby="articles-title"
          className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 md:py-28"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Stories worth a stop
          </p>
          <h2
            id="articles-title"
            className="mt-3 text-4xl font-semibold md:text-5xl"
          >
            Where will curiosity take you?
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
            Browse articles from our travel journal, then open the full story on
            our original website. For current prices and availability, speak
            with our team.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-y border-border py-5">
            <div
              role="group"
              aria-label="Filter articles by topic"
              className="flex flex-wrap gap-2"
            >
              {["All articles", "Hill escapes", "Vizag", "Planning"].map(
                (t) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={topic === t}
                    onClick={() => setTopic(t)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${topic === t ? "bg-gold border-transparent text-primary-foreground" : "border-border hover:border-primary"}`}
                  >
                    {t}
                  </button>
                ),
              )}
            </div>
            <label className="flex w-full items-center gap-3 rounded-full border border-border bg-card px-4 py-3 sm:w-72">
              <Search size={17} className="shrink-0 text-primary" />
              <span className="sr-only">Search travel articles</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the journal"
                className="w-full min-w-0 bg-transparent text-sm outline-none focus-visible:outline-2 focus-visible:outline-primary"
              />
            </label>
          </div>
          <p
            className="mt-6 text-sm text-muted-foreground"
            role="status"
            aria-live="polite"
          >
            Showing {visible.length} of {travelArticles.length} articles
          </p>
          {visible.length ? (
            <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((a) => (
                <Tilt key={a.url}>
                  <article className="glass flex h-full flex-col overflow-hidden rounded-3xl shadow-deep">
                    <div className="group relative h-56 shrink-0 overflow-hidden">
                      <img
                        src={a.image}
                        alt=""
                        width={768}
                        height={400}
                        loading="lazy"
                        onError={(e) => {
                          if (e.currentTarget.getAttribute("src") !== hero)
                            e.currentTarget.src = hero;
                        }}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800">
                        {a.topic}
                      </span>
                    </div>
                    <div
                      className="flex flex-1 flex-col p-6"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                        <BookOpen size={14} />
                        Travel journal
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold leading-tight">
                        {a.title}
                      </h3>
                      <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                        {a.summary}
                      </p>
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read full article: ${a.title}`}
                        className="mt-6 flex items-center justify-between border-t border-border pt-5 font-semibold text-primary"
                      >
                        Read full article <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </article>
                </Tilt>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-border bg-secondary p-8 text-center">
              <h3 className="text-2xl font-semibold">No stories found.</h3>
              <p className="mt-3 text-muted-foreground">
                Try another topic or search word.
              </p>
              <button
                type="button"
                onClick={() => {
                  setTopic("All articles");
                  setQuery("");
                }}
                className="bg-gold mt-6 rounded-full px-6 py-3 font-semibold text-primary-foreground"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
        <section className="border-y border-border bg-card/60 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">
              A few useful notes
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Make the planning part easier.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {planningGuides.map((g) => (
                <article
                  id={g.id}
                  key={g.id}
                  className="glass scroll-mt-28 rounded-3xl p-7"
                >
                  <h3 className="text-2xl font-semibold">{g.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {g.intro}
                  </p>
                  <details className="mt-5 border-t border-border pt-4">
                    <summary className="cursor-pointer font-semibold text-primary">
                      Read planning tips
                    </summary>
                    <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-muted-foreground">
                      {g.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="bg-gold rounded-[2.5rem] p-7 text-primary-foreground shadow-glow sm:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]">
              Turn inspiration into a plan
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold sm:text-5xl">
              Your next story
              <br />
              starts with a journey.
            </h2>
            <p className="mt-5 max-w-lg leading-7">
              Tell us your dates, group size and the places you’d love to see.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-primary-foreground px-7 py-4 font-semibold text-white transition hover:scale-105"
              >
                Plan my trip ↗
              </Link>
              <Link
                to="/tour-packages"
                className="rounded-full border border-current/30 px-7 py-4 font-semibold"
              >
                Browse tour packages
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
