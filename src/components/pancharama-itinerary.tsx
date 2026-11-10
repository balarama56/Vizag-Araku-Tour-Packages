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

const reference =
  "https://www.vizagarakutourpackages.com/tours/visakapatanam-pancharamam-tour-2d-1n/";
const images = {
  amararama: "/images/pancharama/amararama.jpg",
  ksheerarama: "/images/pancharama/ksheerarama.jpg",
  somarama: "/images/pancharama/somarama.jpg",
  draksharama: "/images/pancharama/draksharama.jpg",
  kumararama: "/images/pancharama/kumararama.jpg",
};
const temples = [
  {
    name: "Amararama",
    place: "Amaravati",
    detail:
      "Begin with the Amareswara temple in Amaravati. Leave space in the day for darshan, a meal break and the onward drive.",
    image: images.amararama,
    alt: "Amareswara temple at Amaravati",
    caption: "Amararama · Amaravati",
  },
  {
    name: "Ksheerarama",
    place: "Palakollu",
    detail:
      "Discover the temple architecture of Ksheerarama in Palakollu. Confirm the visiting window before setting the day's departure time.",
    image: images.ksheerarama,
    alt: "Ksheerarama temple tower in Palakollu",
    caption: "Ksheerarama · Palakollu",
  },
  {
    name: "Somarama",
    place: "Bhimavaram",
    detail:
      "Make time for Somarama in Bhimavaram. Your driver will coordinate the visit with the remaining temples and your group's preferred pace.",
    image: images.somarama,
    alt: "Somarama temple in Bhimavaram",
    caption: "Somarama · Bhimavaram",
  },
  {
    name: "Draksharama",
    place: "Draksharamam",
    detail:
      "Continue the pilgrimage to Draksharama. Plan around temple access and darshan queues, with time to take in the surroundings.",
    image: images.draksharama,
    alt: "Draksharama temple main entrance and gopuram",
    caption: "Draksharama · Draksharamam",
  },
  {
    name: "Kumararama",
    place: "Samarlakota",
    detail:
      "Complete the five-temple circuit at Kumararama in Samarlakota, then begin your return to Visakhapatnam at the time agreed with the team.",
    image: images.kumararama,
    alt: "Kumararama temple courtyard in Samarlakota",
    caption: "Kumararama · Samarlakota",
  },
];
export const pancharamaVehicles = [
  { name: "4-seater", price: 22000 },
  { name: "Ertiga", price: 24600 },
  { name: "Innova", price: 27000 },
  { name: "12-seater", price: 40000 },
  { name: "17-seater", price: 47000 },
  { name: "24-seater", price: 71000 },
];
const days = [
  {
    title: "A journey of devotion begins.",
    route: "Vizag → Amaravati → Palakollu",
    night: "Overnight base to be confirmed",
    image: images.amararama,
    alt: "Amararama temple architecture",
    stops: ["Amararama", "Ksheerarama"],
    plan: [
      [
        "Early departure · Meet in Vizag",
        "Agree an early pickup and travel towards Amaravati. This is a substantial road journey: plan breakfast, rest stops and your first darshan window with the team.",
      ],
      [
        "Temple visits · Amaravati & Palakollu",
        "Visit Amararama, then travel towards Ksheerarama in Palakollu. The second visit depends on opening hours, road conditions and your arrival time; the team may adjust the temple order.",
      ],
      [
        "Evening · Pause for the night",
        "Travel to the overnight base agreed in your quote. Confirm the hotel, room type, check-in arrangements and meals before booking. Rest before the next day's temple circuit.",
      ],
    ],
  },
  {
    title: "Three more temples. A full heart.",
    route: "Bhimavaram → Draksharamam → Samarlakota → Vizag",
    night: "Return to Visakhapatnam",
    image: images.somarama,
    alt: "Somarama temple in Bhimavaram",
    stops: ["Somarama", "Draksharama", "Kumararama"],
    plan: [
      [
        "Morning · Bhimavaram darshan",
        "Check out and visit Somarama in Bhimavaram. Arrange breakfast and allow time for darshan before continuing through the Godavari region.",
      ],
      [
        "Daytime · Draksharama & Kumararama",
        "Continue to Draksharama and Kumararama in Samarlakota. Build in a lunch break and confirm the visiting windows; the final order is coordinated by your operator.",
      ],
      [
        "Evening · The road back to Vizag",
        "Return to your agreed Vizag drop point. Confirm the expected arrival before arranging an onward train or flight; the reference gives conflicting return times, so a fixed arrival is not promised.",
      ],
    ],
  },
];
const faqs = [
  [
    "Is this the final day-by-day schedule?",
    "This is a suggested two-day outline based on the five temples listed in the reference. The operator confirms the final order, departure time, overnight base and return timing for your dates. It is a long road circuit; share any mobility needs and preferred rest breaks.",
  ],
  [
    "Is the displayed rate per person or per vehicle?",
    "The reference lists six vehicle rates and also describes ₹22,000 as a couple rate elsewhere. The amount shown here is a published reference rate for the selected option. Ask for the current total, its price basis, taxes and a written breakdown before booking.",
  ],
  [
    "Are accommodation, meals and darshan included?",
    "Confirm each inclusion in your written quote: hotel and room category, meals, fuel, tolls, parking, driver charges, entry or darshan charges and taxes. Special darshan and a particular hotel category are included only when explicitly agreed.",
  ],
  [
    "What should we bring?",
    "Carry photo ID, water, comfortable footwear and clothing suitable for temple visits. Check current temple dress requirements and leave time for queues. Let the team know if children or older travellers need a slower pace.",
  ],
];

export function PancharamaItinerary() {
  const [temple, setTemple] = useState(0);
  const [day, setDay] = useState(0);
  const [vehicle, setVehicle] = useState(0);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [notes, setNotes] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [error, setError] = useState("");
  const selected = temples[temple];
  const selectedVehicle = pancharamaVehicles[vehicle];
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
      `${whatsappUrl}?text=${encodeURIComponent(`Hello! I am ${name.trim()}. Please quote the Visakhapatnam–Pancharamam tour, 2 days / 1 night. Travel date: ${date}. Guests: ${guests}. Vehicle preference: ${selectedVehicle.name}. Published reference rate: ${money(selectedVehicle.price)}; please confirm the price basis and final total. Please confirm all five temples, final daily route, overnight hotel, meals, darshan arrangements, tolls, parking, taxes, cancellation terms and return timing. ${notes.trim() ? `Preferences: ${notes.trim()}.` : ""}`)}`,
    );
  }
  return (
    <div className="pancharama-page itinerary-page overflow-x-hidden">
      <Nav />
      <main id="main-content">
        <section className="pancharama-hero relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <img title="Ksheerarama temple tower in Palakollu" {...imageDimensions(images.ksheerarama)}
            src={images.ksheerarama}
            alt="Ksheerarama temple tower in Palakollu"
            className="pancharama-backdrop absolute inset-0 -z-20 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/65" />
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10">
              <a
                href="/tour/pancharama-tour-packages"
                className="text-sm text-white/70 transition hover:text-white"
              >
                ← Pancharama tour packages
              </a>
              <p className="mt-9 flex items-center gap-3 text-xs uppercase tracking-[.26em] text-amber-200">
                <span className="h-px w-8 bg-amber-300" /> A spiritual journey
                through Andhra
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.06] text-white sm:text-6xl xl:text-7xl">
                Five temples.
                <br />
                <span className="text-amber-200 italic">
                  One spiritual
                  <br className="hidden xl:block" /> journey.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                Visakhapatnam to Pancharamam. Two days of temple architecture,
                shared moments and a journey shaped around your group.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="pancharama-pill">
                  <CalendarDays size={16} /> 2 days / 1 night
                </span>
                <span className="pancharama-pill">
                  <MapPin size={16} /> Vizag round trip
                </span>
                <span className="pancharama-pill">
                  <Compass size={16} /> 5 spiritual stops
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
                  Plan my pilgrimage ↗
                </a>
              </div>
              <p className="mt-6 text-xs leading-6 text-slate-400">
                From ₹22,000 · reference rate · final price basis confirmed in
                your quote
              </p>
            </div>
            <div
              className="pancharama-scene relative mx-auto w-full max-w-md py-12"
              aria-label="Temple travel postcards"
            >
              <div className="pancharama-halo" aria-hidden="true" />
              <div className="pancharama-orbit" aria-hidden="true" />
              <Tilt>
                <div className="pancharama-postcard relative rounded-[1.8rem] border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                  <img title="Amareswara temple at Amaravati"
                    src={images.amararama}
                    alt="Amareswara temple at Amaravati"
                    width={800}
                    height={650}
                    className="h-72 w-full rounded-2xl object-cover sm:h-80"
                  />
                  <div className="flex items-center justify-between px-3 py-5 text-white">
                    <div>
                      <p className="text-xs uppercase tracking-[.2em] text-amber-200">
                        The Pancharama trail
                      </p>
                      <p className="mt-2 font-display text-2xl">
                        A moment for reflection.
                      </p>
                    </div>
                    <Compass size={32} className="text-amber-200" />
                  </div>
                </div>
              </Tilt>
              <div className="pancharama-mini absolute -bottom-2 -left-2 w-40 rounded-2xl border border-white/30 bg-slate-900/95 p-2 shadow-2xl sm:-left-8 sm:w-44">
                <img title="Somarama temple, Bhimavaram"
                  src={images.somarama}
                  alt="Somarama temple, Bhimavaram"
                  width={250}
                  height={180}
                  className="h-24 w-full rounded-xl object-cover"
                />
                <p className="px-2 py-3 text-xs text-white">
                  03 / Somarama · Bhimavaram
                </p>
              </div>
              <div className="pancharama-token absolute -right-2 top-2 rounded-full border border-amber-200/40 bg-slate-950/90 px-5 py-4 text-center shadow-xl">
                <Sparkles className="mx-auto text-amber-200" size={20} />
                <p className="mt-1 text-sm text-white">
                  2 days.
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
              [Route, "A private road journey", "Choose your vehicle and pace"],
              [
                Moon,
                "One overnight pause",
                "Hotel and location confirmed in quote",
              ],
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
                Discover the five
              </p>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Follow the spiritual trail.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              Select a temple to explore the stops. This is a journey overview;
              the final driving order is confirmed for your dates.
            </p>
          </div>
          <div
            className="mt-10 grid gap-3 sm:grid-cols-5"
            aria-label="Explore the five Pancharama temples"
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
            {selected.image ? (
              <img title={selected.alt}
                key={selected.image}
                src={selected.image}
                alt={selected.alt}
                width={800}
                height={500}
                loading="lazy"
                className={`pancharama-reveal h-72 w-full bg-secondary md:h-80 ${temple === 3 ? "object-contain" : "object-cover"}`}
              />
            ) : (
              <div className="pancharama-sanctum relative flex h-72 flex-col items-center justify-center gap-4 overflow-hidden text-amber-100 md:h-80">
                <div className="pancharama-sanctum-ring" aria-hidden="true" />
                <Compass size={60} strokeWidth={1} className="relative" />
                <span className="relative text-xs uppercase tracking-[.3em]">
                  Pancharama · 0{temple + 1}
                </span>
                <span className="relative font-display text-3xl">
                  {selected.name}
                </span>
              </div>
            )}
            <div
              key={selected.name}
              className="pancharama-reveal flex flex-col justify-center p-8 md:p-10"
            >
              <p className="text-xs uppercase tracking-[.22em] text-primary">
                {selected.caption}
              </p>
              <h3 className="mt-4 text-3xl font-semibold">{selected.name}</h3>
              {temple === 3 && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Photo:{" "}
                  <a
                    className="underline underline-offset-2"
                    href="https://commons.wikimedia.org/wiki/File:Draksharama_temple_-_Main_entrance.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twooars / Wikimedia Commons
                  </a>{" "}
                  · Public domain
                </p>
              )}
              {temple === 4 && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Photo:{" "}
                  <a
                    className="underline underline-offset-2"
                    href="https://commons.wikimedia.org/wiki/File:Kumararama,_Samarlakota.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aditya Gopal / Wikimedia Commons
                  </a>{" "}
                  ·{" "}
                  <a
                    className="underline underline-offset-2"
                    href="https://creativecommons.org/licenses/by-sa/3.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CC BY-SA 3.0
                  </a>{" "}
                  · Display cropped to fit
                </p>
              )}
              <p className="mt-4 leading-8 text-muted-foreground">
                {selected.detail}
              </p>
              <p className="mt-5 flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-primary" />
                {selected.place}, Andhra Pradesh
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
              Two days. Five meaningful stops.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
              A suggested outline for an intensive road pilgrimage. Departure
              time, temple sequence and overnight location are agreed with your
              operator before booking.
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
                    {index === 0
                      ? "Begin the pilgrimage"
                      : "Complete the circuit"}
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
                    <img title={days[day].alt}
                      src={days[day].image}
                      alt={days[day].alt}
                      loading="lazy"
                      width={800}
                      height={700}
                      className="h-80 w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent px-7 pb-7 pt-20 text-white">
                      <p className="text-xs uppercase tracking-[.25em] text-amber-200">
                        Day 0{day + 1}
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
              Compare the reference vehicle options, then request a personalised
              quote. We’ll help align the route, room arrangements and travel
              pace.
            </p>
            <fieldset className="mt-8">
              <legend className="text-sm font-semibold">
                Choose a vehicle preference
              </legend>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {pancharamaVehicles.map((item, index) => (
                  <label
                    key={item.name}
                    className={`cursor-pointer rounded-2xl border p-4 transition ${vehicle === index ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/50"}`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold">{item.name}</span>
                      <input
                        type="radio"
                        name="vehicle"
                        value={item.name}
                        checked={vehicle === index}
                        onChange={() => {
                          setVehicle(index);
                          setEnquiry("");
                        }}
                        className="accent-primary"
                      />
                    </span>
                    <span className="mt-3 block font-display text-2xl text-primary">
                      {money(item.price)}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="mt-6 rounded-2xl border border-border bg-secondary/60 p-5 text-sm leading-7 text-muted-foreground">
              <p className="font-semibold text-foreground">
                Reference rates · confirm the price basis
              </p>
              <p className="mt-2">
                The source lists these vehicle amounts but also labels ₹22,000
                as a couple rate. Your quote confirms the final total, who it
                covers and exactly what is included.
              </p>
            </div>
            <h3 className="mt-8 text-lg font-semibold">Before you confirm</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Final temple order, pickup and return timing",
                "Hotel, room category and overnight location",
                "Meals, tolls, parking, driver charges and taxes",
                "Darshan arrangements and cancellation terms",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={17} className="mt-1 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
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
                    Plan my pilgrimage.
                  </h3>
                </div>
                <Compass size={30} className="shrink-0 text-primary" />
              </div>
              <div className="mt-6 rounded-2xl bg-secondary p-4">
                <p className="text-sm font-semibold">
                  {selectedVehicle.name} · {money(selectedVehicle.price)}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Published reference · request final total
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
                    Your pilgrimage enquiry is ready.
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
              Let’s plan your spiritual journey <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
