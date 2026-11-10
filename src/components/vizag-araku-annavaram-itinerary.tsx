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
  "https://www.vizagarakutourpackages.com/tours/visakhapatnam-araku-annavaram-tour-4-d-3-n-2/";
const images = {
  vizag: "/images/vizag-araku-annavaram/vizag.jpg",
  araku: "/images/vizag-araku-annavaram/araku.jpg",
  borra: "/images/vizag-araku-annavaram/borra.jpg",
  annavaram: "/images/vadapalli/annavaram.jpg",
};
const temples = [
  {
    name: "Visakhapatnam",
    place: "Visakhapatnam",
    detail:
      "A first day beside the Bay of Bengal: coastal drives, beach pauses, city museums and hilltop views. Prioritise the sights you enjoy around your pickup time.",
    image: images.vizag,
    alt: "Visakhapatnam coastline and beach road",
    caption: "Sea air. A slower beginning.",
    source: reference,
    credit: "Vizag Araku Tour Packages · coastal photograph",
  },
  {
    name: "Annavaram",
    place: "Ratnagiri Hill",
    detail:
      "Make a temple circuit from Vizag to Annavaram, Talupulamma Lova and Simhachalam. Darshan times and the visiting order are coordinated for your travel date.",
    image: images.annavaram,
    alt: "Annavaram temple complex on Ratnagiri Hill",
    caption: "A day for reflection.",
    source:
      "https://templeslocatesinindia.blogspot.com/2017/12/annavaramandhra-pradesh.html",
    credit: "Temples of India · Annavaram photograph",
  },
  {
    name: "Borra Caves",
    place: "Ananthagiri Hills",
    detail:
      "Step into the limestone chambers before continuing towards Araku. Allow time for stairs and uneven ground, then pause at the viewpoints along the hill road.",
    image: images.borra,
    alt: "Illuminated limestone formations and walkways inside Borra Caves",
    caption: "Another world beneath the hills.",
    source: "https://aicta.lendi.edu.in/travel.php",
    credit: "Lendi travel guide · Borra Caves photograph",
  },
  {
    name: "Araku Valley",
    place: "Eastern Ghats",
    detail:
      "Finish among coffee-growing hills, gardens and local heritage. Enjoy your Araku overnight before visiting Padmapuram Gardens, the Tribal Museum and Coffee House on the return day.",
    image: images.araku,
    alt: "Green Araku Valley hills and winding railway",
    caption: "Coffee country. Room to breathe.",
    source: reference,
    credit: "Vizag Araku Tour Packages · Araku photograph",
  },
];
const baseDays = [
  {
    title: "Hello, coastal living.",
    label: "The coast",
    route: "Vizag pickup → city & coastal sights → Vizag hotel",
    night: "Night 1 · stay in Vizag",
    image: images.vizag,
    alt: "Visakhapatnam coastline",
    stops: ["Bheemili & Rushikonda", "Kailasagiri", "RK Beach", "City museums"],
    plan: [
      [
        "Arrival · A welcome by the sea",
        "Meet at your agreed Vizag pickup point and begin the city tour. Explore the Bheemili and Rushikonda coast, with Ramanaidu Studio on the planned route.",
      ],
      [
        "Daytime · Hills, wildlife & city stories",
        "Continue with the Zoo Park and Kailasagiri, then make time for Visakha Museum. Your driver will coordinate the order with attraction access and your arrival time.",
      ],
      [
        "Evening · Beachfront discoveries",
        "Visit RK Beach and the submarine and aircraft museums as time and opening hours allow. Finish at your confirmed Vizag hotel for the first overnight stay.",
      ],
    ],
  },
  {
    title: "Make a little room for reflection.",
    label: "The temples",
    route: "Vizag → Annavaram → Talupulamma Lova → Simhachalam → Vizag",
    night: "Night 2 · stay in Vizag",
    image: images.annavaram,
    alt: "Annavaram temple architecture",
    stops: ["Annavaram", "Talupulamma Lova", "Simhachalam", "Return to Vizag"],
    plan: [
      [
        "Morning · Annavaram temple visit",
        "Set out for Annavaram Sri Satyanarayana Swamy Temple. Agree a suitable departure time and allow for breakfast, the drive and darshan queues.",
      ],
      [
        "Daytime · Talupulamma Lova",
        "Continue to Talupulamma Lova Temple with time for a meal break. Special pujas, priority entry and ritual arrangements should be requested and confirmed separately.",
      ],
      [
        "Return · Simhachalam & a Vizag evening",
        "Visit Simhachalam on the return circuit, with the order adjusted around temple access. Return to your Vizag hotel for the second night.",
      ],
    ],
  },
  {
    title: "Take the winding road into the hills.",
    label: "The journey",
    route: "Vizag → Tyda → Borra Caves → Ananthagiri → Araku",
    night: "Night 3 · stay in Araku",
    image: images.borra,
    alt: "Borra Caves limestone chamber",
    stops: [
      "Damuku & Tyda",
      "Borra Caves",
      "Galikonda viewpoint",
      "Coffee plantations",
    ],
    plan: [
      [
        "Morning · Check out & leave for Araku",
        "Check out of your Vizag hotel and travel towards the Eastern Ghats. The route includes Damuku/Borra viewpoints and the Tyda area; stops depend on road conditions and the day's pace.",
      ],
      [
        "Daytime · Borra Caves & hilltop views",
        "Explore Borra Caves, allowing time for steps and uneven surfaces. Continue to Galikonda viewpoint and the Ananthagiri coffee-growing area, with a lunch break along the way.",
      ],
      [
        "Evening · Arrive in Araku",
        "Continue past the Sunkarimetta area and check in at your confirmed Araku stay. Katiki waterfall is excluded from the standard vehicle itinerary; discuss any separate excursion with the operator.",
      ],
    ],
  },
  {
    title: "A valley morning to take home.",
    label: "The memories",
    route: "Araku → Padmapuram Gardens → Tribal Museum → Coffee House → Vizag",
    night: "Day 4 · drop at Vizag station or airport",
    image: images.araku,
    alt: "Lush green Araku Valley landscape",
    stops: [
      "Padmapuram Gardens",
      "Tribal Museum",
      "Coffee House",
      "Vizag drop-off",
    ],
    plan: [
      [
        "Morning · Check out & explore",
        "Check out of your Araku accommodation and visit Padmapuram Gardens. Keep the morning relaxed while allowing enough time for the return drive.",
      ],
      [
        "Daytime · Local heritage & coffee",
        "Visit the Tribal Museum and stop at Coffee House before leaving the valley. Confirm meal arrangements and adjust sightseeing around your onward travel time.",
      ],
      [
        "Return · Station or airport drop",
        "Drive back to Vizag for the agreed station or airport drop. The reference suggests about 8:30 PM, but the actual schedule must fit your train or flight; share those details before booking.",
      ],
    ],
  },
];
const baseFaqs = [
  [
    "Where are the three overnight stays?",
    "This version of the itinerary has two nights in Vizag, followed by one night in Araku. Ask for the hotel names, room category, occupancy, check-in times and meal plan in the written quote.",
  ],
  [
    "Is ₹25,500 the total for our group?",
    "The reference overview describes ₹25,500 per couple, and notes that group and seasonal prices vary. The booking calendar uses generic ticket labels. Treat this as a reference couple rate; request the final total and price basis for your actual travellers.",
  ],
  [
    "Are Katiki waterfall and a train ride included?",
    "Katiki waterfall is excluded from the standard package and your tour vehicle does not follow that access route. Day 3 is shown here as a road journey. Train tickets or a separate waterfall excursion need explicit arrangements and are not promised on this page.",
  ],
  [
    "What should we confirm before booking?",
    "Confirm pickup and drop timing, the three hotel nights, vehicle, meals, attraction tickets, temple arrangements, tolls, parking, taxes and cancellation terms. Carry photo ID and share mobility needs; cave steps and temple queues may affect the pace.",
  ],
];

export function VizagArakuAnnavaramItinerary({
  option = 1,
}: {
  option?: 1 | 2;
}) {
  const price = option === 2 ? 20500 : 25500;
  const reference =
    option === 2
      ? "https://www.vizagarakutourpackages.com/tours/visakapatanam-araku-annavaram-tour-4d-3n/"
      : "https://www.vizagarakutourpackages.com/tours/visakhapatnam-araku-annavaram-tour-4-d-3-n-2/";
  const days =
    option === 2
      ? [
          {
            ...baseDays[0],
            route: "Vizag pickup → hotel → coastal sights → Vizag hotel",
            stops: [
              "Bheemili & Thotlakonda",
              "Rushikonda & Kailasagiri",
              "RK Beach & museums",
              "Fishing Harbour",
            ],
            plan: [
              [
                "Arrival · Settle into Vizag",
                "Meet your driver at the agreed arrival point and transfer to your hotel or resort. Freshen up before sightseeing, subject to the property's check-in time.",
              ],
              [
                "Daytime · Coastline & hilltop views",
                "Explore Bheemili Beach, the Thotlakonda Buddha viewpoint, Ramanaidu Studio, Rushikonda and Kailasagiri. Coordinate the order and time at each stop around your arrival.",
              ],
              [
                "Evening · Museums & the harbour",
                "Continue to RK Beach, Fishing Harbour, Visakha Museum, the submarine museum and aircraft museum as opening hours allow. Return to your Vizag hotel for the night.",
              ],
            ],
          },
          ...baseDays.slice(1),
        ]
      : baseDays;
  const faqs =
    option === 2
      ? baseFaqs.map((faq, index) =>
          index === 1
            ? [
                "Is ₹20,500 the total for our group?",
                "The published overview lists ₹20,500 per couple. Prices vary with group size, travel dates and availability. Request a written quote confirming your final group total, accommodation and inclusions before booking.",
              ]
            : faq,
        )
      : baseFaqs;
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
      `${whatsappUrl}?text=${encodeURIComponent(`Hello! I am ${name.trim()}. Please quote the Visakhapatnam, Araku & Annavaram tour (Option ${option}), 4 days / 3 nights. Travel date: ${date}. Guests: ${guests}. Reference couple rate: ${money(price)}; please confirm the final group total and price basis. Please confirm two nights in Vizag and one night in Araku, Annavaram, Talupulamma Lova and Simhachalam visits, Borra Caves and Araku sightseeing, station or airport drop timing, hotels, room category, vehicle, meals, tickets, taxes and cancellation terms. I understand Katiki waterfall is excluded and train tickets are not promised. ${notes.trim() ? `Preferences: ${notes.trim()}.` : ""}`)}`,
    );
  }
  return (
    <div className="pancharama-page itinerary-page overflow-x-hidden">
      <Nav />
      <main id="main-content">
        <section className="pancharama-hero relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <img title="Visakhapatnam coastline and beach road" {...imageDimensions(images.vizag)}
            src={images.vizag}
            alt="Visakhapatnam coastline and beach road"
            className="pancharama-backdrop absolute inset-0 -z-20 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/65" />
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10">
              <a
                href="/tour/vizag-annavaram-tour-packages"
                className="text-sm text-white/70 transition hover:text-white"
              >
                ← Vizag Annavaram packages
              </a>
              <p className="mt-9 flex items-center gap-3 text-xs uppercase tracking-[.26em] text-amber-200">
                <span className="h-px w-8 bg-amber-300" /> From the coast to
                coffee country
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.06] text-white sm:text-6xl xl:text-7xl">
                Coast. Hills.
                <br />
                <span className="text-amber-200 italic">
                  A moment
                  <br className="hidden xl:block" /> within.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                Four days of coastal discoveries, spiritual pauses and winding
                valley roads. Experience Vizag, Annavaram and Araku in one
                thoughtful journey.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="pancharama-pill">
                  <CalendarDays size={16} /> 4 days / 3 nights
                </span>
                <span className="pancharama-pill">
                  <MapPin size={16} /> Vizag round trip
                </span>
                <span className="pancharama-pill">
                  <Compass size={16} /> Coast · temples · valley
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
              aria-label="Coast and valley travel postcards"
            >
              <div className="pancharama-halo" aria-hidden="true" />
              <div className="pancharama-orbit" aria-hidden="true" />
              <Tilt>
                <div className="pancharama-postcard relative rounded-[1.8rem] border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                  <img title="Visakhapatnam coastline and beach road"
                    src={images.vizag}
                    alt="Visakhapatnam coastline and beach road"
                    width={800}
                    height={650}
                    className="h-72 w-full rounded-2xl object-cover sm:h-80"
                  />
                  <div className="flex items-center justify-between px-3 py-5 text-white">
                    <div>
                      <p className="text-xs uppercase tracking-[.2em] text-amber-200">
                        Vizag · Annavaram · Araku
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
                <img title="Araku Valley hills and railway"
                  src={images.araku}
                  alt="Araku Valley hills and railway"
                  width={250}
                  height={180}
                  className="h-24 w-full rounded-xl object-cover"
                />
                <p className="px-2 py-3 text-xs text-white">
                  03 / Araku Valley · the hills
                </p>
              </div>
              <div className="pancharama-token absolute -right-2 top-2 rounded-full border border-amber-200/40 bg-slate-950/90 px-5 py-4 text-center shadow-xl">
                <Sparkles className="mx-auto text-amber-200" size={20} />
                <p className="mt-1 text-sm text-white">
                  Four days.
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
                "Four days of discoveries",
                "Coast, temples and the Eastern Ghats",
              ],
              [Moon, "Three nights to unwind", "2 in Vizag · 1 in Araku"],
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
                Coast. Culture. Coffee country.
              </p>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Three worlds. One memorable journey.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              Explore the highlights, then follow the four-day plan below. Local
              access and your arrival time help shape the final sightseeing
              order.
            </p>
          </div>
          <div
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            aria-label="Explore the coast, temples, caves and valley"
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
            <img title={selected.alt}
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
              Four days. A different view each morning.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
              Follow the published four-day route, with sightseeing coordinated
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
                    "Nights 1 & 2 · Visakhapatnam",
                    "Night 3 · Araku Valley",
                    "Day 4 · station or airport drop in Vizag",
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
                Katiki waterfall is excluded from the standard package. The
                Araku transfer is shown by road; a train journey requires
                separate ticket confirmation.
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
                    Plan my four-day escape.
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
                    Your four-day trip enquiry is ready.
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
              Let’s plan your coast-to-valley journey <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
