import { Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  BedDouble,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";
import { Nav, Footer, Tilt } from "@/components/site";
import { TrustBar } from "@/components/home/planning-sections";
import { ContactActions, whatsappUrl } from "@/components/contact-actions";
import hero from "@/assets/hero.jpg";
export type HotelOption = {
  name: string;
  image: string;
  imageAlt: string;
  description: string;
  imageCaption?: string;
};
export function HotelCollection({
  region,
  hotels,
  heroImage,
  heroAlt,
  intro,
}: {
  region: "Vizag" | "Araku";
  hotels: HotelOption[];
  heroImage: string;
  heroAlt: string;
  intro: string;
}) {
  const [hotel, setHotel] = useState(hotels[0]!.name);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [rooms, setRooms] = useState("1");
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [today, setToday] = useState("");
  const [error, setError] = useState("");
  const [enquiry, setEnquiry] = useState("");
  useEffect(() => {
    const d = new Date();
    setToday(
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`,
    );
  }, []);
  const nights =
    checkIn && checkOut
      ? Math.round((Date.parse(checkOut) - Date.parse(checkIn)) / 86400000)
      : 0;
  function prepareEnquiry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnquiry("");
    if (
      !checkIn ||
      !checkOut ||
      checkOut <= checkIn ||
      (today && checkIn < today)
    ) {
      setError(
        "Choose a check-in date from today onwards and a check-out date after check-in.",
      );
      return;
    }
    if (
      !Number.isInteger(Number(guests)) ||
      !Number.isInteger(Number(rooms)) ||
      Number(guests) < 1 ||
      Number(rooms) < 1 ||
      Number(rooms) > Number(guests)
    ) {
      setError(
        "Enter at least one guest and one room, with no more rooms than guests.",
      );
      return;
    }
    setError("");
    const text = `Hello! Please check availability for ${hotel} in ${region}. Check-in: ${checkIn}. Check-out: ${checkOut} (${nights} ${nights === 1 ? "night" : "nights"}). Guests: ${guests}. Rooms: ${rooms}. ${budget ? `Budget per room per night: ${budget}. ` : ""}${notes ? `Preferences: ${notes}. ` : ""}Please confirm the hotel, room type, total price including taxes, meals, availability and cancellation terms. This is an enquiry.`;
    setEnquiry(`${whatsappUrl}?text=${encodeURIComponent(text)}`);
  }
  const fieldClass =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
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
            width={1024}
            height={768}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="bg-fade absolute inset-0" />
          <Tilt className="relative z-10">
            <div className="px-6 py-24 text-center">
              <p className="glass mx-auto mb-6 w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                A good journey deserves a good stay.
              </p>
              <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl md:text-8xl">
                Stay in {region}.
                <br />
                <span className="text-gold italic">Feel at home.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                {intro}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#hotels"
                  className="bg-gold rounded-full px-8 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
                >
                  Explore hotels ↓
                </a>
                <a
                  href="#stay-enquiry"
                  className="glass rounded-full px-8 py-4 font-semibold transition hover:scale-105"
                >
                  Plan my stay
                </a>
              </div>
            </div>
          </Tilt>
          <div className="glass animate-floaty absolute bottom-24 left-[8%] hidden rounded-2xl p-4 md:block">
            <p className="font-display text-2xl text-gold">
              Your dates. Your pace.
            </p>
            <p className="text-xs text-muted-foreground">
              Stays planned around your journey
            </p>
          </div>
          <div
            className="glass animate-floaty absolute right-[5%] top-1/4 hidden rounded-2xl p-4 lg:block"
            style={{ animationDelay: "-3s" }}
          >
            <p className="font-display text-2xl text-gold">
              Local help for your stay
            </p>
            <p className="text-xs text-muted-foreground">
              Room details confirmed before booking
            </p>
          </div>
        </section>
        <TrustBar />
        <section
          id="hotels"
          className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 md:py-28"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Rest well. Explore more.
          </p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
            Your {region} stay, at a glance.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
            Explore our listed hotels, or ask our team for options suited to
            your dates, budget and group. Room types, amenities and rates are
            confirmed with your quote.
          </p>
          <div
            className={`mt-12 grid gap-8 ${hotels.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}
          >
            {hotels.map((option) => (
              <Tilt key={option.name}>
                <article
                  className={`glass h-full overflow-hidden rounded-3xl shadow-deep ${hotels.length === 1 ? "grid md:grid-cols-2" : "flex flex-col"}`}
                >
                  <div
                    className={`relative overflow-hidden ${hotels.length === 1 ? "min-h-72" : "h-56 shrink-0"}`}
                  >
                    <img
                      src={option.image}
                      alt={option.imageAlt}
                      width={1024}
                      height={768}
                      loading="lazy"
                      onError={(e) => {
                        if (e.currentTarget.getAttribute("src") !== hero)
                          e.currentTarget.src = hero;
                      }}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800">
                      {option.name === hotels[0]!.name
                        ? "Featured hotel"
                        : "Stay option"}
                    </span>
                    {option.imageCaption && (
                      <p className="absolute bottom-0 inset-x-0 bg-slate-900/85 px-4 py-2 text-xs text-white">
                        {option.imageCaption}
                      </p>
                    )}
                  </div>
                  <div
                    className="flex flex-1 flex-col p-7 sm:p-10"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                      <MapPin size={15} />
                      {region === "Vizag" ? "Visakhapatnam" : "Araku Valley"}
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold">
                      {option.name}
                    </h3>
                    <p className="mt-5 flex-1 leading-8 text-muted-foreground">
                      {option.description}
                    </p>
                    <div className="mt-6 grid gap-3 border-y border-border py-5 text-sm text-muted-foreground">
                      <p className="flex items-center gap-3">
                        <BedDouble size={18} className="text-primary" />
                        Room type confirmed with your quote
                      </p>
                      <p className="flex items-center gap-3">
                        <CalendarDays size={18} className="text-primary" />
                        Availability checked for your dates
                      </p>
                      <p className="flex items-center gap-3">
                        <Users size={18} className="text-primary" />
                        Share your guest and room requirements
                      </p>
                    </div>
                    <p className="mt-6 font-display text-2xl text-gold">
                      Request a stay quote
                    </p>
                    <p className="mt-2 text-xs leading-6 text-muted-foreground">
                      Confirm the total price, taxes, inclusions and booking
                      terms.
                    </p>
                    <a
                      href="#stay-enquiry"
                      aria-label={`Enquire about ${option.name}`}
                      onClick={() => {
                        setHotel(option.name);
                        setEnquiry("");
                      }}
                      className="bg-gold mt-6 flex items-center justify-between rounded-full px-6 py-3 font-semibold text-primary-foreground transition hover:scale-[1.02]"
                    >
                      Enquire about this hotel <ArrowUpRight size={18} />
                    </a>
                  </div>
                </article>
              </Tilt>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-border bg-secondary p-6">
            <div>
              <h3 className="text-lg font-semibold">
                {region === "Vizag"
                  ? "Continuing to the valley?"
                  : "Spending time on the coast?"}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Discuss accommodation for the next part of your journey too.
              </p>
            </div>
            <Link
              to="/hotel-booking/$destination"
              params={{
                destination:
                  region === "Vizag" ? "araku-hotels" : "vizag-hotels",
              }}
              className="font-semibold text-primary"
            >
              Explore {region === "Vizag" ? "Araku" : "Vizag"} stays ↗
            </Link>
          </div>
        </section>
        <section
          id="stay-enquiry"
          aria-labelledby="stay-enquiry-title"
          className="border-y border-border bg-card/60 px-6 py-20 scroll-mt-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary">
                Let’s find your stay
              </p>
              <h2
                id="stay-enquiry-title"
                className="mt-4 text-4xl font-semibold md:text-5xl"
              >
                A few details.
                <br />A better fit.
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                Tell us when you’re visiting, who’s coming and what matters to
                you. Prepare your enquiry, then send it to our team on WhatsApp.
              </p>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                This requests availability and a quote. Your stay is booked only
                after the hotel, price and terms are confirmed with you.
              </p>
            </div>
            <form
              onSubmit={prepareEnquiry}
              onChange={() => {
                setEnquiry("");
                setError("");
              }}
              className="glass rounded-3xl p-6 sm:p-8"
            >
              <label className="block text-sm font-semibold">
                Hotel preference
                <select
                  value={hotel}
                  onChange={(e) => setHotel(e.target.value)}
                  className={fieldClass}
                >
                  {hotels.map((option) => (
                    <option key={option.name}>{option.name}</option>
                  ))}
                  <option>
                    Help me choose {region === "Araku" ? "an" : "a"} {region}{" "}
                    hotel
                  </option>
                </select>
              </label>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Check-in
                  <input
                    type="date"
                    required
                    value={checkIn}
                    min={today || undefined}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className={fieldClass}
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Check-out
                  <input
                    type="date"
                    required
                    value={checkOut}
                    min={checkIn || today || undefined}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className={fieldClass}
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Guests
                  <input
                    type="number"
                    min="1"
                    step="1"
                    required
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className={fieldClass}
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Rooms
                  <input
                    type="number"
                    min="1"
                    step="1"
                    required
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className={fieldClass}
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm font-semibold">
                Budget per room per night (optional)
                <input
                  type="text"
                  value={budget}
                  maxLength={100}
                  placeholder="e.g. ₹2,500–₹4,000"
                  onChange={(e) => setBudget(e.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="mt-5 block text-sm font-semibold">
                Stay preferences (optional)
                <textarea
                  value={notes}
                  maxLength={1000}
                  rows={3}
                  placeholder="Bed preference, children’s ages, accessibility needs or preferred area"
                  onChange={(e) => setNotes(e.target.value)}
                  className={fieldClass}
                />
              </label>
              {nights > 0 && (
                <p className="mt-4 text-sm text-primary" role="status">
                  {nights} {nights === 1 ? "night" : "nights"} · {guests}{" "}
                  {guests === "1" ? "guest" : "guests"} · {rooms}{" "}
                  {rooms === "1" ? "room" : "rooms"}
                </p>
              )}
              {error && (
                <p role="alert" className="mt-5 text-sm text-destructive">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="bg-gold mt-6 w-full rounded-full px-6 py-3 font-semibold text-primary-foreground transition hover:scale-[1.02]"
              >
                Prepare my stay enquiry
              </button>
              {enquiry && (
                <div
                  className="mt-5 rounded-2xl border border-primary/30 bg-secondary p-5"
                  role="status"
                >
                  <p className="font-semibold">Your enquiry is ready.</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Review your dates and preferences, then send them to our
                    team.
                  </p>
                  <a
                    href={enquiry}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-primary"
                  >
                    Send enquiry on WhatsApp <ArrowUpRight size={17} />
                  </a>
                </div>
              )}
            </form>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Clear details. Comfortable planning.
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Know your stay before you go.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              [
                "01",
                "Share your plans",
                "Tell us your dates, rooms, guests and preferred area. Include any accessibility or family requirements.",
              ],
              [
                "02",
                "Review the options",
                "Check the hotel, room category, bed setup, meals, total price and cancellation conditions in your quote.",
              ],
              [
                "03",
                "Confirm your booking",
                "Review availability and payment terms with our team before confirming your stay.",
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
        </section>
        <section className="mx-auto mb-20 max-w-6xl px-6">
          <div className="bg-gold rounded-[2.5rem] p-7 text-primary-foreground shadow-glow sm:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]">
              Your stay starts with a conversation
            </p>
            <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
              A room for your plans.
            </h2>
            <p className="mb-7 mt-5 max-w-lg leading-7">
              Prefer to talk? Share your dates and room needs with our team.
            </p>
            <ContactActions />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
