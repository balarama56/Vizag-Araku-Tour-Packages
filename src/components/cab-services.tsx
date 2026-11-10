import { imageDimensions } from "@/lib/image-dimensions";
import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CarFront,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Luggage,
  MapPin,
  Navigation,
  Phone,
  Plane,
  Route,
  Users,
} from "lucide-react";
import { Nav, Footer, Tilt } from "@/components/site";
import {
  callUrl,
  whatsappUrl,
  WhatsAppIcon,
} from "@/components/contact-actions";

const photos = [
  {
    src: "/images/cab-services/sedan.jpg",
    alt: "Silver Toyota sedan on a hill road from the business Google Maps gallery",
    title: "A window to the journey.",
    caption: "Sedan · hill-road travel",
    credit: "Photo: shiva thadi · Google Maps",
  },
  {
    src: "/images/cab-services/traveller.jpg",
    alt: "Tempo traveller from the Vizag Araku Tour Packages Google Maps gallery",
    title: "Bring your favourite people.",
    caption: "Traveller · group journeys",
    credit: "Photo: Google Maps business gallery",
  },
  {
    src: "/images/cab-services/innova.jpg",
    alt: "White Toyota Innova Crysta — representative SUV / MUV photo",
    title: "More room for the journey.",
    caption: "SUV / MUV · Innova Crysta",
    credit:
      "Representative vehicle photo · Justdial. Exact vehicle confirmed with your quote.",
  },
];
const tripTypes = [
  {
    name: "Airport & station",
    icon: Plane,
    title: "Arrive. Breathe. Let’s go.",
    detail:
      "Share your flight or train details, arrival time and luggage. Agree on the meeting point and waiting allowance before you travel.",
    route: "Your arrival point → your next chapter",
    stops: ["Vizag Airport", "Railway station", "Hotel transfers"],
  },
  {
    name: "Local sightseeing",
    icon: MapPin,
    title: "A coastal day, at your pace.",
    detail:
      "Plan your own Vizag day with beach pauses, museums and hilltop views. Choose your stops and confirm the hours and distance covered in your quote.",
    route: "Vizag → coastal sights → your drop point",
    stops: ["RK Beach", "Rushikonda", "Kailasagiri"],
  },
  {
    name: "Outstation tours",
    icon: Compass,
    title: "Take the scenic way.",
    detail:
      "Make room for coffee-country roads or a misty morning in the hills. Share your itinerary, overnight plans and preferred breaks to build a practical driving schedule.",
    route: "Vizag → the hills → memories to take home",
    stops: ["Araku Valley", "Lambasingi", "Annavaram"],
  },
];
const vehicles = [
  {
    name: "Sedan",
    icon: CarFront,
    copy: "For a smaller party and city or outstation travel. Share luggage needs to confirm the right fit.",
  },
  {
    name: "SUV / MUV",
    icon: Luggage,
    copy: "Request more room for your family or luggage. The team confirms the model, passenger capacity and boot space.",
  },
  {
    name: "Tempo traveller",
    icon: Users,
    copy: "Keep your group together. Confirm the seating layout, luggage capacity and air-conditioning in your quote.",
  },
];
const routes = [
  {
    name: "Vizag → Araku",
    note: "Coffee country & Borra Caves",
    href: "/tour/vizag-araku-tour-packages",
    image: "/images/vizag-araku-annavaram/araku.jpg",
  },
  {
    name: "Vizag → Lambasingi",
    note: "Hill roads & early starts",
    href: "/tour/vizag-lambasinghi-tour-packages",
    image: "/images/vizag-araku-annavaram/araku.jpg",
  },
  {
    name: "Temple trails",
    note: "Plan meaningful pauses",
    href: "/tour/temple-tour-packages",
    image: "/images/vadapalli/annavaram.jpg",
  },
];

export function CabServices() {
  const [trip, setTrip] = useState(0);
  const [photo, setPhoto] = useState(0);
  const [vehicle, setVehicle] = useState("Sedan");
  const vehiclePhoto = photos[vehicle === "SUV / MUV" ? 2 : vehicle === "Tempo traveller" ? 1 : 0];
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [passengers, setPassengers] = useState("2");
  const [notes, setNotes] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [error, setError] = useState("");
  function resetQuote() {
    setEnquiry("");
    setError("");
  }
  function chooseTrip(index: number) {
    setTrip(index);
    resetQuote();
  }
  function chooseVehicle(value: string) {
    setVehicle(value);
    if (value === "Sedan") setPhoto(0);
    if (value === "Tempo traveller") setPhoto(1);
    if (value === "SUV / MUV") setPhoto(2);
    resetQuote();
  }
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    if (
      !name.trim() ||
      !pickup.trim() ||
      !drop.trim() ||
      !date ||
      date < today ||
      !/^\d{2}:\d{2}$/.test(time) ||
      !Number.isInteger(Number(passengers)) ||
      Number(passengers) < 1
    ) {
      setError(
        "Enter your name, pickup and drop locations, a date from today onwards, pickup time and at least one passenger.",
      );
      setEnquiry("");
      return;
    }
    setError("");
    setEnquiry(
      `${whatsappUrl}?text=${encodeURIComponent(`Hello! I am ${name.trim()}. Please quote a cab for ${tripTypes[trip].name.toLowerCase()}. Date: ${date}. Pickup time: ${time}. Pickup: ${pickup.trim()}. Drop / route: ${drop.trim()}. Passengers: ${passengers}. Preferred vehicle: ${vehicle}. ${notes.trim() ? `Luggage and preferences: ${notes.trim()}. ` : ""}Please confirm vehicle model and capacity, availability, total fare, included hours and kilometres, extra charges, driver allowance, tolls, parking, waiting time, taxes and cancellation terms. This is an enquiry, not a confirmed booking.`)}`,
    );
  }
  return (
    <div className="pancharama-page itinerary-page overflow-x-hidden">
      <Nav />
      <main id="main-content">
        <section className="pancharama-hero relative isolate overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <img title="Green hills and valley scenery in Araku Valley" {...imageDimensions("/images/vizag-araku-annavaram/araku.jpg")}
            src="/images/vizag-araku-annavaram/araku.jpg"
            alt="Green hills and valley scenery in Araku Valley"
            className="pancharama-backdrop absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/65" />
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1fr]">
            <div className="relative z-10">
              <a
                href="/services"
                className="text-sm text-white/70 hover:text-white"
              >
                ← Travel services
              </a>
              <p className="mt-9 flex items-center gap-3 text-xs uppercase tracking-[.24em] text-amber-200">
                <span className="h-px w-8 bg-amber-300" /> Cab journeys from
                Vizag
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.06] text-white sm:text-6xl xl:text-7xl">
                Your ride.
                <br />
                <span className="text-amber-200 italic">
                  Your kind
                  <br className="hidden xl:block" /> of journey.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                From your first airport hello to the winding roads of Araku.
                Plan a cab around your people, your stops and your pace.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="pancharama-pill">
                  <Plane size={16} /> Transfers
                </span>
                <span className="pancharama-pill">
                  <MapPin size={16} /> Vizag sightseeing
                </span>
                <span className="pancharama-pill">
                  <Compass size={16} /> Outstation
                </span>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#cab-enquiry"
                  className="bg-gold inline-flex items-center gap-3 rounded-full px-7 py-4 font-semibold text-primary-foreground shadow-glow"
                >
                  Plan my ride <ArrowUpRight size={18} />
                </a>
                <a
                  href="#your-journey"
                  className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-4 font-semibold text-white hover:bg-white/10"
                >
                  Explore the options <ArrowDown size={18} />
                </a>
              </div>
            </div>
            <div
              className="pancharama-scene relative mx-auto w-full max-w-md py-10"
              aria-label="Cab journey postcard"
            >
              <div className="pancharama-halo" aria-hidden="true" />
              <div className="pancharama-orbit" aria-hidden="true" />
              <Tilt>
                <div className="pancharama-postcard rounded-[1.8rem] border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                  <img title={vehiclePhoto.alt}
                    src={vehiclePhoto.src}
                    alt={vehiclePhoto.alt}
                    width={1000}
                    height={750}
                    fetchPriority="high"
                    className="h-72 w-full rounded-2xl object-cover sm:h-80"
                  />
                  <div className="px-3 pb-5 pt-4 text-white">
                    <p className="text-xs uppercase tracking-[.18em] text-amber-200">
                      Pick a place. We’ll plan the way.
                    </p>
                    <p className="mt-3 font-display text-2xl">
                      The road is part of the memory.
                    </p>
                  </div>
                </div>
              </Tilt>
              <div className="pancharama-mini absolute -bottom-5 left-0 right-0 mx-auto max-w-xs rounded-2xl border border-white/25 bg-slate-900 p-5 text-white shadow-2xl">
                <p className="text-[10px] uppercase tracking-[.2em] text-slate-400">
                  Your route, thoughtfully planned
                </p>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    Vizag
                  </span>
                  <span className="cab-road mx-3 flex-1" aria-hidden="true" />
                  <Navigation className="mr-2 text-amber-200" size={16} />
                  <span>Somewhere new</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-border bg-card/70 px-6 py-7">
          <div className="mx-auto grid max-w-6xl gap-6 text-sm sm:grid-cols-3">
            {[
              [Route, "A route that fits", "Choose your stops and travel pace"],
              [
                Users,
                "Room for your people",
                "Match the vehicle to your group",
              ],
              [
                Phone,
                "A real conversation",
                "Confirm every detail with our team",
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
          id="your-journey"
          className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 md:py-28"
        >
          <p className="text-xs uppercase tracking-[.25em] text-primary">
            Where are we taking you?
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Three ways to make it yours.
          </h2>
          <div
            role="group"
            aria-label="Trip type"
            className="mt-9 grid gap-3 sm:grid-cols-3"
          >
            {tripTypes.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-pressed={trip === index}
                onClick={() => chooseTrip(index)}
                className={`pancharama-stop flex items-center gap-4 rounded-2xl border p-5 text-left font-semibold transition ${trip === index ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/60"}`}
              >
                <item.icon size={24} />
                {item.name}
              </button>
            ))}
          </div>
          <div
            key={trip}
            className="pancharama-reveal glass mt-6 grid gap-8 rounded-3xl p-7 sm:p-10 md:grid-cols-[1fr_.8fr]"
            aria-live="polite"
          >
            <div>
              <p className="text-xs uppercase tracking-[.2em] text-primary">
                {tripTypes[trip].name}
              </p>
              <h3 className="mt-4 text-3xl font-semibold">
                {tripTypes[trip].title}
              </h3>
              <p className="mt-4 leading-8 text-muted-foreground">
                {tripTypes[trip].detail}
              </p>
              <a
                href="#cab-enquiry"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-primary"
              >
                Plan this journey <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-secondary p-6">
              <Route size={28} className="text-primary" />
              <p className="mt-4 font-display text-xl">
                {tripTypes[trip].route}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tripTypes[trip].stops.map((stop) => (
                  <span
                    key={stop}
                    className="rounded-full border border-border bg-card px-3 py-2 text-xs"
                  >
                    {stop}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-border bg-secondary/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[.25em] text-primary">
                  A glimpse of the journey
                </p>
                <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                  Real roads. Real travel.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                Sedan and traveller photos from our Google Maps listing, plus a
                representative Innova image. Confirm the vehicle, model and
                condition for your travel dates.
              </p>
            </div>
            <div className="mt-9 grid gap-7 lg:grid-cols-[1.2fr_.8fr]">
              <div
                role="region"
                aria-label="Cab photo gallery"
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowLeft")
                    e.preventDefault();
                  if (e.key === "ArrowRight")
                    setPhoto((photo + 1) % photos.length);
                  if (e.key === "ArrowLeft")
                    setPhoto((photo + photos.length - 1) % photos.length);
                }}
                tabIndex={0}
                className="overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative">
                  <img title={photos[photo].alt}
                    key={photo}
                    src={photos[photo].src}
                    alt={photos[photo].alt}
                    width={1000}
                    height={750}
                    loading="lazy"
                    className="pancharama-reveal h-72 w-full bg-secondary object-contain sm:h-96"
                  />
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-slate-950/90 p-2 text-white">
                    <button
                      type="button"
                      onClick={() =>
                        setPhoto((photo + photos.length - 1) % photos.length)
                      }
                      aria-label="Previous cab photo"
                      className="rounded-full p-2 hover:bg-white/20"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <span className="px-2 text-xs" aria-live="polite">
                      {photo + 1} / {photos.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPhoto((photo + 1) % photos.length)}
                      aria-label="Next cab photo"
                      className="rounded-full p-2 hover:bg-white/20"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-6" aria-live="polite">
                  <p className="text-xs uppercase tracking-[.2em] text-primary">
                    {photos[photo].caption}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    {photos[photo].title}
                  </h3>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {photos[photo].credit}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Choose your preferred vehicle
                </p>
                <div
                  role="group"
                  aria-label="Preferred vehicle"
                  className="mt-4 space-y-3"
                >
                  {vehicles.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      aria-pressed={vehicle === item.name}
                      onClick={() => chooseVehicle(item.name)}
                      className={`w-full rounded-2xl border p-5 text-left transition ${vehicle === item.name ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/60"}`}
                    >
                      <span className="flex items-center justify-between gap-4">
                        <span className="flex items-center gap-3 font-semibold">
                          <item.icon size={22} className="text-primary" />
                          {item.name}
                        </span>
                        {vehicle === item.name && (
                          <Check size={20} className="text-primary" />
                        )}
                      </span>
                      <span className="mt-3 block text-sm leading-7 text-muted-foreground">
                        {item.copy}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-6 text-muted-foreground">
                  A vehicle preference is a request. Seating, luggage space and
                  availability are confirmed by our team.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="cab-enquiry"
          className="mx-auto grid max-w-6xl scroll-mt-28 gap-12 px-6 py-20 md:py-28 lg:grid-cols-[.85fr_1fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[.25em] text-primary">
              Good journeys start with the details
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              A few details.
              <br />
              <span className="text-gold italic">A smoother ride.</span>
            </h2>
            <p className="mt-6 leading-8 text-muted-foreground">
              Tell us where you’re heading. We’ll help match the route and
              vehicle to your plans, then confirm availability and a clear
              quote.
            </p>
            <div className="glass mt-8 rounded-3xl p-7">
              <h3 className="text-xl font-semibold">
                Know your fare before you go.
              </h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                {[
                  "Total fare, vehicle model and passenger capacity",
                  "Included hours and kilometres; additional usage rates",
                  "Driver allowance, tolls, parking, waiting and taxes",
                  "Pickup details, payment and cancellation terms",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check size={18} className="mt-1 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 flex items-start gap-3 text-sm leading-7 text-muted-foreground">
              <Clock3 size={20} className="mt-1 shrink-0 text-primary" />
              Early flight or hill-station sunrise? Share the reporting time and
              discuss the driving schedule in advance.
            </p>
            <a
              href={callUrl}
              className="mt-7 inline-flex items-center gap-3 font-semibold text-primary"
            >
              <Phone size={18} />
              Prefer a conversation? Call our team
            </a>
          </div>
          <aside className="self-start lg:sticky lg:top-28">
            <form
              onSubmit={prepare}
              onChange={resetQuote}
              className="glass rounded-3xl p-6 shadow-deep sm:p-9"
            >
              <p className="text-xs uppercase tracking-[.2em] text-primary">
                Your next journey
              </p>
              <h3 className="mt-3 text-3xl font-semibold">
                Let’s plan your ride.
              </h3>
              <p className="mt-4 rounded-2xl bg-secondary p-4 text-sm">
                <span className="font-semibold">{tripTypes[trip].name}</span> ·{" "}
                {vehicle}
              </p>
              <label className="mt-5 block text-sm font-semibold">
                Journey type
                <select
                  className="itinerary-input"
                  value={trip}
                  onChange={(e) => chooseTrip(Number(e.target.value))}
                >
                  {tripTypes.map((item, index) => (
                    <option key={item.name} value={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-6 block text-sm font-semibold">
                Your name
                <input
                  className="itinerary-input"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="How should we address you?"
                />
              </label>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Travel date
                  <input
                    className="itinerary-input"
                    required
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onInput={(e) => setDate(e.currentTarget.value)}
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Pickup time
                  <input
                    className="itinerary-input"
                    required
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    onInput={(e) => setTime(e.currentTarget.value)}
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm font-semibold">
                Pickup location
                <input
                  className="itinerary-input"
                  required
                  maxLength={200}
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Airport, station, hotel or address"
                />
              </label>
              <label className="mt-5 block text-sm font-semibold">
                Drop location or route
                <input
                  className="itinerary-input"
                  required
                  maxLength={300}
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  placeholder="Destination and any planned stops"
                />
              </label>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Passengers
                  <input
                    className="itinerary-input"
                    required
                    type="number"
                    min="1"
                    step="1"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Vehicle preference
                  <select
                    className="itinerary-input"
                    value={vehicle}
                    onChange={(e) => chooseVehicle(e.target.value)}
                  >
                    {vehicles.map((item) => (
                      <option key={item.name}>{item.name}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="mt-5 block text-sm font-semibold">
                Luggage & special requests (optional)
                <textarea
                  rows={3}
                  maxLength={1000}
                  className="itinerary-input"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Bags, children’s ages, flight number or accessibility needs"
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
                Prepare my cab enquiry <ArrowUpRight size={18} />
              </button>
              <p className="mt-4 text-xs leading-6 text-muted-foreground">
                Prepare your details, then choose to send them on WhatsApp. Your
                cab is booked only after availability, fare and terms are
                confirmed.
              </p>
              {enquiry && (
                <div
                  role="status"
                  className="mt-5 rounded-2xl border border-primary/30 bg-secondary p-5"
                >
                  <p className="font-semibold">Your cab enquiry is ready.</p>
                  <a
                    href={enquiry}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#087f49] px-5 py-3 text-sm font-semibold text-white"
                  >
                    <WhatsAppIcon />
                    Send cab enquiry on WhatsApp
                  </a>
                </div>
              )}
            </form>
          </aside>
        </section>
        <section className="border-y border-border bg-secondary/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs uppercase tracking-[.25em] text-primary">
              Need a little inspiration?
            </p>
            <h2 className="mt-4 text-4xl font-semibold">
              The road is calling.
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {routes.map((item) => (
                <Tilt key={item.name}>
                  <a
                    href={item.href}
                    className="group block h-full overflow-hidden rounded-3xl border border-border bg-card"
                  >
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      width={600}
                      height={400}
                      className="h-44 w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                    />
                    <div className="p-6">
                      <p className="text-xs text-muted-foreground">
                        {item.note}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold">
                        {item.name}
                      </h3>
                      <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                        Explore tour options <ArrowUpRight size={16} />
                      </p>
                    </div>
                  </a>
                </Tilt>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-center text-xs uppercase tracking-[.25em] text-primary">
            Before you set off
          </p>
          <h2 className="mt-4 text-center text-4xl font-semibold">
            A clearer journey.
          </h2>
          <div className="mt-8 divide-y divide-border">
            {[
              [
                "Can I book an airport or railway station pickup?",
                "Yes, send an enquiry with your arrival details, luggage and destination. Our team confirms availability, the meeting point, waiting charges and final fare.",
              ],
              [
                "Can I customise the stops on an outstation trip?",
                "Share your preferred stops and overnight plans. The team will discuss a practical route and confirm driving hours, distance limits and extra charges.",
              ],
              [
                "Is the photographed vehicle guaranteed?",
                "The gallery includes Google Maps photographs and a representative Innova image. Request your preferred category; the exact vehicle, seating, condition and availability must be confirmed for your travel date.",
              ],
              [
                "Does sending an enquiry confirm my cab?",
                "No. Review the written fare, vehicle details, availability and payment and cancellation terms with the team before confirming your booking.",
              ],
            ].map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold">
                  {question}
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-primary transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 text-sm leading-8 text-muted-foreground">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
