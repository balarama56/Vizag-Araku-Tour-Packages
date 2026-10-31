import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Compass,
  MapPin,
  Mountain,
  Users,
  Waves,
} from "lucide-react";
import { Tilt } from "@/components/site";
import { vizagArakuPackages } from "@/components/vizag-araku-packages";
import { vizagLambasingiPackages } from "@/components/vizag-lambasingi-packages";
import { vizagPapikondalluPackages } from "@/components/vizag-papikondallu-packages";
import hero from "@/assets/hero.jpg";

const heroPackages = [
  {
    id: "araku",
    label: "Araku Valley",
    icon: Mountain,
    trip: vizagArakuPackages.find((p) => p.id === "a-2d")!,
    to: "/tour/vizag-araku-tour-packages" as const,
    image: hero,
    note: "Your valley getaway",
    atmosphere: "Hills & coffee country",
  },
  {
    id: "lambasingi",
    label: "Lambasingi",
    icon: Compass,
    trip: vizagLambasingiPackages[0]!,
    to: "/tour/vizag-lambasinghi-tour-packages" as const,
    image: hero,
    note: "A little closer to the clouds",
    atmosphere: "Vizag, Araku & Lambasingi",
  },
  {
    id: "papikondalu",
    label: "Papikondalu",
    icon: Waves,
    trip: vizagPapikondalluPackages[0]!,
    to: "/tour/vizag-papikondallu-tour-packages" as const,
    image: vizagPapikondalluPackages[0]!.image,
    note: "Follow the river",
    atmosphere: "A Godavari escape",
  },
];

export function HomeHero() {
  const [active, setActive] = useState("araku");
  const selected = heroPackages.find((p) => p.id === active)!;
  const trip = selected.trip;
  return (
    <section
      aria-labelledby="home-hero-title"
      className="home-hero image-surface relative isolate overflow-hidden"
    >
      <img
        src={hero}
        alt="Green Araku Valley hills at sunrise"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="home-hero-shade absolute inset-0 -z-10" />
      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-36 sm:pt-44 lg:pb-10 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div className="home-hero-intro">
            <p className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.2em] text-white/85 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Local journeys. Lasting memories.
            </p>
            <h1
              id="home-hero-title"
              className="mt-7 text-[clamp(3.2rem,5.4vw,5.8rem)] font-semibold leading-[1.04] tracking-tight text-white"
            >
              From the coast.
              <br />
              Into the <span className="text-gold italic">clouds.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/80 sm:text-lg">
              Discover Vizag’s shores, Araku’s valleys and the quiet beyond.
              Choose your escape; we’ll help with the details.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#tours"
                className="bg-gold inline-flex items-center gap-5 rounded-full px-7 py-4 font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Explore tour packages <ArrowUpRight size={19} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Plan my trip
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/75 sm:text-sm">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-cyan-300" />
                Based in Visakhapatnam
              </p>
              <p className="flex items-center gap-2">
                <Users size={16} className="text-cyan-300" />
                Groups & family escapes
              </p>
            </div>
          </div>
          <div className="home-hero-spotlight min-w-0">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/70">
                Find your kind of escape
              </p>
              <span className="text-xs text-white/50">
                {String(
                  heroPackages.findIndex((p) => p.id === active) + 1,
                ).padStart(2, "0")}{" "}
                / 03
              </span>
            </div>
            <div
              role="group"
              aria-label="Choose a featured destination"
              className="mb-4 grid grid-cols-3 gap-2"
            >
              {heroPackages.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active === id}
                  onClick={() => setActive(id)}
                  className={`flex items-center justify-center gap-2 rounded-full border px-2 py-3 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:text-sm ${active === id ? "border-cyan-200/70 bg-cyan-200 text-slate-900 shadow-glow" : "border-white/20 bg-white/5 text-white/80 hover:bg-white/15"}`}
                >
                  <Icon size={15} className="hidden sm:block" />
                  {label}
                </button>
              ))}
            </div>
            <Tilt>
              <article
                aria-label="Featured package details"
                className="overflow-hidden rounded-[1.75rem] border border-white/30 bg-white text-slate-900 shadow-[0_25px_75px_-25px_oklch(0.1_0.03_220_/_80%)]"
              >
                <div className="relative h-48 overflow-hidden sm:h-56 lg:h-44">
                  <img
                    key={selected.id}
                    src={selected.image}
                    alt={selected.atmosphere}
                    width={820}
                    height={520}
                    onError={(e) => {
                      if (e.currentTarget.getAttribute("src") !== hero)
                        e.currentTarget.src = hero;
                    }}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-slate-950/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                    Package spotlight
                  </span>
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-[10px] uppercase tracking-[.2em] text-white/75">
                      {selected.atmosphere}
                    </p>
                    <p className="mt-1 font-display text-2xl font-medium text-white">
                      {selected.note}
                    </p>
                  </div>
                </div>
                <div className="p-6" aria-live="polite" aria-atomic="true">
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-sky-700" />
                      {trip.days} days / {trip.nights}{" "}
                      {trip.nights === 1 ? "night" : "nights"}
                    </span>
                    <span
                      className="h-1 w-1 rounded-full bg-slate-300"
                      aria-hidden="true"
                    />
                    <span>From Vizag</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900">
                    {trip.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {trip.description}
                  </p>
                  {(selected.id === "araku" ||
                    selected.id === "lambasingi" ||
                    selected.id === "papikondalu") && (
                    <a
                      href={
                        selected.id === "araku"
                          ? "/tours/araku-valley-tour-2-d-1-n/"
                          : selected.id === "papikondalu"
                            ? "/tours/visakapatanam-to-papikondalu-tour-2-d-1-n/"
                            : "/tours/visakapatanam-araku-valley-lammasingi-tour-3d-2n/"
                      }
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-800 underline underline-offset-4"
                    >
                      View {selected.label} itinerary <ArrowUpRight size={16} />
                    </a>
                  )}
                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-slate-200 pt-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500">
                        Listed starting price
                      </p>
                      <p className="mt-1 font-display text-3xl font-semibold text-sky-800">
                        ₹{trip.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <Link
                      to={selected.to}
                      aria-label={`View ${selected.label} packages`}
                      className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-5 py-3 text-xs font-semibold text-white transition hover:bg-sky-900"
                    >
                      View packages <ArrowUpRight size={17} />
                    </Link>
                  </div>
                  <p className="mt-3 text-[10px] leading-5 text-slate-500">
                    Final price, price basis and inclusions confirmed for your
                    dates and group.
                  </p>
                </div>
              </article>
            </Tilt>
          </div>
        </div>
        <div className="mt-10 grid gap-5 border-t border-white/20 pt-6 sm:grid-cols-[1fr_auto]">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-white/70">
            <span className="uppercase tracking-[.18em] text-white/45">
              Made for your plans
            </span>
            <span>2–5 day journeys</span>
            <span>4–40 seater options</span>
            <Link
              to="/hotel-booking"
              className="underline decoration-white/30 underline-offset-4 hover:text-white"
            >
              Stay enquiries ↗
            </Link>
          </div>
          <a
            href="#destinations"
            className="flex items-center gap-2 text-xs font-semibold text-white/80"
          >
            A world beyond the city <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
