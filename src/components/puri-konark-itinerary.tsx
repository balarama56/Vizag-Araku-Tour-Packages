import { imageDimensions } from "@/lib/image-dimensions";
import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Compass,
  MapPin,
  Moon,
  Phone,
  Route,
  Sparkles,
  Sunrise,
  Users,
} from "lucide-react";
import { Nav, Footer, Tilt } from "@/components/site";
import {
  callUrl,
  whatsappUrl,
  WhatsAppIcon,
} from "@/components/contact-actions";

const images = {
  heritage: "/images/puri-konark/heritage.jpg",
  puri: "/images/puri-konark/puri1.jpg",
  konark: "/images/puri-konark/konark.jpg",
  lingaraj: "/images/puri-konark/lingaraj.jpg",
  chilika: "/images/puri-konark/chilika.jpg",
};
const temples = [
  {
    name: "Puri",
    place: "Jagannath Temple",
    image: images.puri,
    alt: "Jagannath Temple complex in Puri",
    caption: "A journey with meaning",
    detail:
      "A spiritual pause beside the coast. Share your visiting preferences and access needs with the team before departure.",
    source:
      "https://www.vizagarakutourpackages.com/tours/visakapatanam-puri-konark-3d-2n/",
    credit: "Vizag Araku Tour Packages · Puri photograph",
  },
  {
    name: "Konark",
    place: "Sun Temple",
    image: images.heritage,
    alt: "Konark Sun Temple surrounded by gardens",
    caption: "Stories written in stone",
    detail:
      "Look closely, linger a little. Let the carved facades and changing light become the focus of your visit.",
    source:
      "https://www.vizagarakutourpackages.com/tours/visakapatanam-puri-konark-3d-2n/",
    credit: "Vizag Araku Tour Packages · Konark photograph",
  },
  {
    name: "Bhubaneswar",
    place: "Lingaraj Temple",
    image: images.lingaraj,
    alt: "Lingaraj Temple architecture in Bhubaneswar",
    caption: "A moment for reflection",
    detail:
      "Plan time for the temple setting and discuss access arrangements with your local team before you travel.",
    source: "https://apps.odishatourism.gov.in/temples-monuments",
    credit: "Odisha Tourism · Lingaraj photograph",
  },
  {
    name: "Chilika Lake",
    place: "Odisha lagoon",
    image: images.chilika,
    alt: "Chilika Lake waters and island shrine",
    caption: "Trade the rush for open water",
    detail:
      "A change of pace on the water. Confirm the embarkation point, boat arrangements and charges in your written quote.",
    source: "https://apps.odishatourism.gov.in/lakes-waterfalls",
    credit: "Odisha Tourism · Chilika photograph",
  },
];
const commonNight = "stay in Bhubaneswar";
const classicDays = [
  {
    title: "Begin with devotion. End by the sea.",
    label: "Puri & the city",
    route: "Vizag → Puri → Bhubaneswar",
    night: "Night 1 · " + commonNight,
    image: images.puri,
    alt: "Jagannath Temple complex in Puri",
    stops: ["Puri Jagannath Temple", "Puri Beach", "Lingaraj Temple"],
    plan: [
      [
        "Departure · Begin in Vizag",
        "Meet at your agreed pickup point. Confirm an early departure and rest breaks for the long transfer.",
      ],
      [
        "Discover · Puri & Bhubaneswar",
        "Visit Jagannath Temple, Puri Beach and Lingaraj Temple as the agreed arrival schedule allows.",
      ],
      [
        "Evening · Check in & unwind",
        "Settle into your Bhubaneswar hotel. Keep the first day flexible around travel and temple access.",
      ],
    ],
  },
  {
    title: "Follow the light to Konark.",
    label: "Stone & sea",
    route: "Bhubaneswar → Konark → Bhubaneswar",
    night: "Night 2 · " + commonNight,
    image: images.heritage,
    alt: "Konark Sun Temple and gardens",
    stops: ["Konark Sun Temple", "Konark Beach"],
    plan: [
      [
        "Morning · A fresh start",
        "Leave after freshening up; agree on a comfortable start with your driver.",
      ],
      [
        "Discover · Konark & the coast",
        "Explore the Sun Temple and Konark Beach. Leave time for photographs and a relaxed pause.",
      ],
      [
        "Evening · Return to your hotel",
        "Return to Bhubaneswar for your second overnight stay.",
      ],
    ],
  },
  {
    title: "Open water. Memories to carry.",
    label: "Lake & home",
    route: "Bhubaneswar → Chilika Lake → Vizag",
    night: "Day 3 · Vizag station or airport drop",
    image: images.chilika,
    alt: "Chilika Lake waters and island shrine",
    stops: ["Hotel checkout", "Chilika boating", "Vizag drop"],
    plan: [
      [
        "Morning · Check out",
        "Pack for the return journey and confirm your onward train or flight details.",
      ],
      [
        "Discover · Chilika Lake",
        "Visit the lake for the listed boating stop, subject to weather and local arrangements.",
      ],
      [
        "Return · Back to Vizag",
        "Continue to your station or airport drop. Confirm the arrival time before booking onward travel.",
      ],
    ],
  },
];
const extendedDays = [
  {
    ...classicDays[0],
    title: "An early start. A wider horizon.",
    label: "Temples & lagoon",
    route: "Vizag → Srikurmam → Arasavilli → Chilika → Bhubaneswar",
    image: images.chilika,
    alt: "Chilika Lake waters and island shrine",
    stops: ["5 AM Vizag pickup", "Srikurmam", "Arasavilli", "Chilika boating"],
    plan: [
      [
        "5 AM · Depart Vizag",
        "Meet your driver for the published early start; reconfirm reporting time and pickup point.",
      ],
      [
        "Discover · Temples & Chilika",
        "Follow the listed Srikurmam, Arasavilli and Chilika boating route. This is a full travel day; agree on realistic time at each stop.",
      ],
      [
        "Evening · Arrive in Bhubaneswar",
        "Check in for your first overnight stay, with meal and rest stops coordinated along the way.",
      ],
    ],
  },
  {
    ...classicDays[1],
    title: "Puri to Konark. A day to remember.",
    label: "Puri & Konark",
    route: "Bhubaneswar → Puri → Konark → Bhubaneswar",
    stops: ["Puri Jagannath Temple", "Puri Beach", "Konark Sun Temple"],
    plan: [
      [
        "8 AM · Start after freshening up",
        "Prepare for a day of temple visits and coastal scenery.",
      ],
      [
        "Discover · Puri & Konark",
        "Visit Jagannath Temple, Puri Beach and the Sun Temple, with access and visiting order confirmed locally.",
      ],
      [
        "Evening · Back to Bhubaneswar",
        "Return to your hotel for the second night.",
      ],
    ],
  },
  {
    ...classicDays[2],
    title: "One more chapter before home.",
    label: "City & caves",
    route: "Bhubaneswar → Lingaraj → Udayagiri & Khandagiri → Vizag",
    image: images.lingaraj,
    alt: "Lingaraj Temple in Bhubaneswar",
    stops: [
      "8 AM checkout",
      "Lingaraj Temple",
      "Udayagiri & Khandagiri",
      "Vizag drop",
    ],
    plan: [
      ["8 AM · Check out", "Leave with your luggage after freshening up."],
      [
        "Discover · Temple & cave heritage",
        "Visit Lingaraj Temple and the Udayagiri and Khandagiri caves before the return transfer.",
      ],
      [
        "Return · Vizag station or airport",
        "Agree on your final drop timing and allow a buffer for onward travel.",
      ],
    ],
  },
];
export function PuriKonarkItinerary({ option = 2 }: { option?: 1 | 2 }) {
  const price = option === 1 ? 26600 : 30000;
  const reference =
    "https://www.vizagarakutourpackages.com/tours/visakapatanam-puri-konark-3d-2n" +
    (option === 1 ? "-2/" : "/");
  const days = option === 1 ? extendedDays : classicDays;
  const faqs = [
    [
      "Where do we stay?",
      "Both overnights are in Bhubaneswar. Ask for the hotel name, room category and check-in arrangements in your quote.",
    ],
    [
      "Is this the final price for our group?",
      "This is the published reference couple rate. Your group total depends on dates, availability and agreed arrangements; confirm it in writing.",
    ],
    [
      "What should we confirm before booking?",
      "Confirm temple access, vehicle, hotel, meals, entry fees, boating charges and cancellation terms. A preferred date is an enquiry, not a confirmed booking.",
    ],
    [
      "How should we plan onward travel?",
      "Share train or flight details before booking. The route involves substantial driving; the team should confirm feasible visiting and drop times.",
    ],
  ];
  const [temple, setTemple] = useState(0);
  const [day, setDay] = useState(0);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [notes, setNotes] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [error, setError] = useState("");
  const selected = temples[temple];
  const money = (price: number) => `₹${price.toLocaleString("en-IN")}`;
  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    if (
      !name.trim() ||
      !date ||
      date < today ||
      !Number.isInteger(Number(guests)) ||
      Number(guests) < 1
    ) {
      setError(
        "Enter your name, a travel date from today onwards and at least one guest.",
      );
      setEnquiry("");
      return;
    }
    setError("");
    setEnquiry(
      `${whatsappUrl}?text=${encodeURIComponent(`Hello! I am ${name.trim()}. Please quote the Vizag, Puri & Konark tour (Option ${option}), 3 days / 2 nights. Travel date: ${date}. Guests: ${guests}. Reference couple rate: ${money(price)}; please confirm the final group total. Please confirm the day-by-day route, two nights in Bhubaneswar, pickup and return timing, hotel, room category, vehicle, meals, entry fees, temple access, Chilika boating charges and cancellation terms. ${notes.trim() ? `Preferences: ${notes.trim()}.` : ""}`)}`,
    );
  }
  return (
    <div className="pancharama-page itinerary-page overflow-x-hidden">
      <Nav />
      <main id="main-content">
        <section className="pancharama-hero relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <img {...imageDimensions(images.heritage)}
            src={images.heritage}
            alt="Konark Sun Temple and surrounding gardens in Odisha"
            className="pancharama-backdrop absolute inset-0 -z-20 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/65" />
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10">
              <a
                href="/tour/puri-konark-tour-packages"
                className="text-sm text-white/70 transition hover:text-white"
              >
                ← Puri & Konark packages
              </a>
              <p className="mt-9 flex items-center gap-3 text-xs uppercase tracking-[.26em] text-amber-200">
                <span className="h-px w-8 bg-amber-300" /> Stone-carved stories.
                Open horizons.
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.06] text-white sm:text-6xl xl:text-7xl">
                Puri. Konark.
                <br />
                <span className="text-amber-200 italic">
                  A coastal
                  <br className="hidden xl:block" /> chapter.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                Follow Odisha’s coastline through temple courtyards, sculpted
                stone and open water. A three-day journey with space for
                discovery and moments to remember.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="pancharama-pill">
                  <CalendarDays size={16} /> 3 days / 2 nights
                </span>
                <span className="pancharama-pill">
                  <MapPin size={16} /> Vizag round trip
                </span>
                <span className="pancharama-pill">
                  <Compass size={16} /> Temples · coast · lagoon
                </span>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#itinerary"
                  className="bg-gold inline-flex items-center gap-3 rounded-full px-7 py-4 font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-1"
                >
                  Explore the itinerary <ArrowDown size={18} />
                </a>
                <a
                  href="#trip-enquiry"
                  className="rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Plan my escape ↗
                </a>
              </div>
              <p className="mt-6 text-xs leading-6 text-slate-400">
                From {money(price)} per couple · reference rate · request your
                final quote
              </p>
            </div>
            <div
              className="pancharama-scene relative mx-auto w-full max-w-md py-12"
              aria-label="Odisha heritage travel postcards"
            >
              <div className="pancharama-halo" aria-hidden="true" />
              <div className="pancharama-orbit" aria-hidden="true" />
              <Tilt>
                <div className="pancharama-postcard relative rounded-[1.8rem] border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                  <img
                    src={images.heritage}
                    alt="Konark Sun Temple surrounded by gardens"
                    width={800}
                    height={650}
                    className="h-72 w-full rounded-2xl object-cover sm:h-80"
                  />
                  <div className="flex items-center justify-between px-3 py-5 text-white">
                    <div>
                      <p className="text-xs uppercase tracking-[.2em] text-amber-200">
                        Puri · Konark · Bhubaneswar
                      </p>
                      <p className="mt-2 font-display text-2xl">
                        Three worlds. One journey.
                      </p>
                    </div>
                    <Compass size={32} className="text-amber-200" />
                  </div>
                </div>
              </Tilt>
              <div className="pancharama-mini absolute -bottom-2 -left-2 w-40 rounded-2xl border border-white/30 bg-slate-900/95 p-2 shadow-2xl sm:-left-8 sm:w-44">
                <img
                  src={images.chilika}
                  alt="Chilika Lake waters and island shrine"
                  width={250}
                  height={180}
                  className="h-24 w-full rounded-xl object-cover"
                />
                <p className="px-2 py-3 text-xs text-white">
                  03 / Chilika · open horizons
                </p>
              </div>
              <div className="pancharama-token absolute -right-2 top-2 rounded-full border border-amber-200/40 bg-slate-950/90 px-5 py-4 text-center shadow-xl">
                <Sparkles className="mx-auto text-amber-200" size={20} />
                <p className="mt-1 text-sm text-white">
                  Three days.
                  <br />
                  <span className="text-amber-200">Lasting memories.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card/70 px-6 py-7">
          <div className="mx-auto grid max-w-6xl gap-5 text-sm sm:grid-cols-3">
            {[
              [
                Route,
                "Three days of discoveries",
                "Stone, sea and spiritual heritage",
              ],
              [Moon, "Two nights to unwind", "Both in Bhubaneswar"],
              [
                Users,
                "Local planning support",
                "Share your group's requirements",
              ],
            ].map(([Icon, title, detail]) => {
              const ItemIcon = Icon as typeof Route;
              return (
                <div key={String(title)} className="flex items-center gap-4">
                  <ItemIcon size={24} className="shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold">{String(title)}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {String(detail)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="temple-trail"
          className="mx-auto max-w-6xl px-6 py-20 md:py-28"
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[.25em] text-primary">
                Stone. Stillness. Sea air.
              </p>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Three worlds. One memorable journey.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              Explore the highlights, then follow the three-day plan below.
              Local access and your arrival time help shape the final
              sightseeing order.
            </p>
          </div>
          <div
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            aria-label="Explore Puri, Konark, Bhubaneswar and Chilika"
          >
            {temples.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-pressed={temple === index}
                onClick={() => setTemple(index)}
                className={`pancharama-stop rounded-2xl border p-5 text-left transition ${temple === index ? "border-primary bg-primary text-primary-foreground shadow-glow" : "border-border bg-card hover:border-primary/60"}`}
              >
                <span className="text-xs opacity-70">
                  0{index + 1} <span aria-hidden="true">────</span>
                </span>
                <span className="mt-4 block font-display text-lg">
                  {item.name}
                </span>
                <span className="mt-1 block text-xs opacity-75">
                  {item.place}
                </span>
              </button>
            ))}
          </div>
          <div
            className="glass mt-6 grid overflow-hidden rounded-3xl md:grid-cols-2"
            aria-live="polite"
          >
            <img
              key={selected.image}
              src={selected.image}
              alt={selected.alt}
              width={800}
              height={500}
              loading="lazy"
              className="pancharama-reveal h-72 w-full bg-secondary object-cover md:h-80"
            />
            <div
              key={selected.name}
              className="pancharama-reveal flex flex-col justify-center p-8 md:p-10"
            >
              <p className="text-xs uppercase tracking-[.22em] text-primary">
                {selected.caption}
              </p>
              <h3 className="mt-4 text-3xl font-semibold">{selected.name}</h3>
              <p className="mt-3 text-xs text-muted-foreground">
                Photo:{" "}
                <a
                  href={selected.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  {selected.credit}
                </a>
              </p>
              <p className="mt-4 leading-8 text-muted-foreground">
                {selected.detail}
              </p>
              <p className="mt-5 flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-primary" />
                {selected.place}, Odisha
              </p>
            </div>
          </div>
        </section>

        <section
          id="itinerary"
          className="border-y border-border bg-secondary/40 px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-xs uppercase tracking-[.25em] text-primary">
              Your days, thoughtfully planned
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Three days. A different view each morning.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
              Follow the published three-day route, with sightseeing coordinated
              around access, darshan queues and your pickup and onward journey.
            </p>
            <div
              className="mt-10 flex flex-wrap gap-3"
              aria-label="Itinerary day selection"
            >
              {days.map((item, index) => (
                <button
                  type="button"
                  key={item.title}
                  aria-pressed={day === index}
                  onClick={() => setDay(index)}
                  className={`itinerary-day-button flex items-center gap-3 rounded-full border px-6 py-4 font-semibold ${day === index ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}
                >
                  {index === 0 ? <Sunrise size={18} /> : <Compass size={18} />}
                  Day {index + 1}
                  <span className="hidden text-xs font-normal sm:inline">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
            <div
              key={day}
              className="pancharama-reveal mt-6 grid gap-8 lg:grid-cols-[.85fr_1.15fr]"
            >
              <div>
                <Tilt>
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={days[day].image}
                      alt={days[day].alt}
                      loading="lazy"
                      width={800}
                      height={700}
                      className="h-80 w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent px-7 pb-7 pt-20 text-white">
                      <p className="text-xs uppercase tracking-[.25em] text-amber-200">
                        DAY 0{day + 1}
                      </p>
                      <p className="mt-2 font-display text-3xl">
                        {days[day].title}
                      </p>
                    </div>
                  </div>
                </Tilt>
                <p className="mt-5 flex items-center gap-3 text-sm text-primary">
                  <Moon size={17} />
                  {days[day].night}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {days[day].stops.map((stop) => (
                    <span
                      key={stop}
                      className="rounded-full border border-border px-3 py-2 text-xs"
                    >
                      {stop}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass rounded-3xl p-7 md:p-9">
                <p className="flex items-start gap-3 text-sm leading-6 text-primary">
                  <Route size={18} className="mt-1 shrink-0" />
                  {days[day].route}
                </p>
                <ol className="mt-8 space-y-8">
                  {days[day].plan.map(([title, body], index) => (
                    <li key={title} className="relative pl-10">
                      <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section
          id="trip-enquiry"
          className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_.9fr] md:py-28"
        >
          <div>
            <p className="text-xs uppercase tracking-[.25em] text-primary">
              Make the journey yours
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Your group.
              <br />
              <span className="text-gold italic">Your way to travel.</span>
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              Share your dates, group and preferred travel pace. We’ll help
              confirm hotels, transport and a route that fits your arrival and
              departure.
            </p>
            <div className="glass mt-8 overflow-hidden rounded-3xl">
              <div className="border-b border-border bg-secondary/60 p-6">
                <p className="text-xs uppercase tracking-[.2em] text-primary">
                  Published couple rate · Option {option}
                </p>
                <p className="mt-3 font-display text-5xl text-primary">
                  {money(price)}
                  <span className="ml-2 font-sans text-sm text-muted-foreground">
                    / couple
                  </span>
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  A reference for planning, with the final group total confirmed
                  for your dates.
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-semibold">Your overnight plan</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Nights 1 & 2 · Bhubaneswar",

                    "Day 3 · station or airport drop in Vizag",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check size={17} className="shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-6 font-semibold">
                  The details that make it yours
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Confirm hotel names and room category, vehicle, meals, entry
                  tickets, darshan arrangements, taxes and cancellation terms.
                  Prices vary by season and group.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-secondary/50 p-5 text-sm leading-7 text-muted-foreground">
              <p className="font-semibold text-foreground">Know your route.</p>
              <p className="mt-2">
                Allow for a long drive from Vizag. Agree on realistic
                sightseeing times and rest breaks before departure. Temple
                access and lake boating depend on local arrangements; confirm
                eligibility, charges and weather conditions.
              </p>
            </div>
            <a
              href={reference}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block text-xs text-primary underline underline-offset-4"
            >
              View the original itinerary & reference rates ↗
            </a>
          </div>
          <aside className="self-start lg:sticky lg:top-28">
            <form
              onSubmit={prepareEnquiry}
              onChange={() => {
                setEnquiry("");
                setError("");
              }}
              className="glass rounded-3xl p-7 shadow-deep sm:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[.2em] text-primary">
                    A little planning. A better journey.
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold">
                    Plan my three-day escape.
                  </h3>
                </div>
                <Compass size={30} className="shrink-0 text-primary" />
              </div>
              <div className="mt-6 rounded-2xl bg-secondary p-4">
                <p className="text-sm font-semibold">
                  {money(price)} · reference couple rate
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Group and seasonal prices confirmed in your quote
                </p>
              </div>
              <label className="mt-6 block text-sm font-semibold">
                Your name
                <input
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  className="itinerary-input"
                  placeholder="How should we address you?"
                />
              </label>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Travel date
                  <input
                    required
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onInput={(e) => setDate(e.currentTarget.value)}
                    className="itinerary-input"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Guests
                  <input
                    required
                    type="number"
                    min="1"
                    step="1"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="itinerary-input"
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm font-semibold">
                Preferences (optional)
                <textarea
                  rows={3}
                  maxLength={1000}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="itinerary-input"
                  placeholder="Pickup point, children's ages, room or accessibility needs"
                />
              </label>
              {error && (
                <p role="alert" className="mt-4 text-sm text-destructive">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="bg-gold mt-6 flex w-full items-center justify-between gap-3 rounded-full px-6 py-4 font-semibold text-primary-foreground transition hover:scale-[1.02]"
              >
                Prepare my trip enquiry <ArrowUpRight size={18} />
              </button>
              <p className="mt-4 text-xs leading-6 text-muted-foreground">
                Prepare your details, then choose to send them on WhatsApp. This
                requests a quote; it does not confirm a booking.
              </p>
              {enquiry && (
                <div
                  role="status"
                  className="mt-5 rounded-2xl border border-primary/30 bg-secondary p-5"
                >
                  <p className="font-semibold">
                    Your three-day trip enquiry is ready.
                  </p>
                  <a
                    href={enquiry}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#087f49] px-5 py-3 text-sm font-semibold text-white"
                  >
                    <WhatsAppIcon />
                    Send enquiry on WhatsApp
                  </a>
                </div>
              )}
              <a
                href={callUrl}
                className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-primary"
              >
                <Phone size={16} />
                Prefer to talk? Call our team
              </a>
            </form>
          </aside>
        </section>

        <section className="border-t border-border bg-card/60 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-xs uppercase tracking-[.25em] text-primary">
              Good to know before you go
            </p>
            <h2 className="mt-4 text-center text-4xl font-semibold">
              A clearer journey.
            </h2>
            <div className="mt-10 divide-y divide-border">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold">
                    {question}
                    <ChevronDown
                      size={20}
                      className="shrink-0 text-primary transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-4 pr-6 text-sm leading-8 text-muted-foreground">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
            <a
              href="#trip-enquiry"
              className="bg-gold mx-auto mt-10 flex w-fit items-center gap-3 rounded-full px-7 py-4 font-semibold text-primary-foreground"
            >
              Let’s plan your Odisha journey <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
