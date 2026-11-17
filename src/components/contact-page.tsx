import "./contact-map.css";
import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowUpRight, MapPin, Phone, Mail, Compass, Check, Navigation } from "lucide-react";
import { Nav, Footer, Tilt, tours } from "@/components/site";
import { ContactActions, contactPhone, contactEmail, callUrl, emailUrl, whatsappUrl, WhatsAppIcon } from "@/components/contact-actions";
import { agencyName, agencyAddress, agencyMapUrl, agencyDirectionsUrl as directionsUrl, agencyEmbedUrl, agencyEarthUrl } from "@/lib/business-details";
export { agencyAddress } from "@/lib/business-details";
export function ContactPage() {
  const [enquiry, setEnquiry] = useState("");
  const [error, setError] = useState("");
  const field = "itinerary-input w-full";
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) || "").trim();
    const phone = value("phone").replace(/[\s()+.-]/g, "");
    if (!value("name") || !/^\d{7,15}$/.test(phone) || (value("date") && value("date") < minDate) || !Number.isInteger(Number(value("guests"))) || Number(value("guests")) < 1) {
      setError("Enter your name, a valid phone number, at least one traveller and a travel date from today onwards if provided.");
      setEnquiry(""); return;
    }
    const message = `Hello Vizag Araku Tourism!\nName: ${value("name")}\nPhone: ${value("phone")}\nEnquiry: ${value("service")}\nTravel date: ${value("date") || "Not decided"}\nTravellers: ${value("guests")}\nPickup / starting city: ${value("pickup") || "To be discussed"}\nTravel plans: ${value("message") || "Please help me plan my trip."}\nPlease confirm availability, total price, inclusions and booking terms.`;
    setError(""); setEnquiry(`${whatsappUrl}?text=${encodeURIComponent(message)}`);
  }
  return <div className="pancharama-page itinerary-page overflow-x-hidden">
    <Nav />
    <main id="main-content">
      <section className="pancharama-hero relative overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[.25em] text-amber-200">Contact us · Vizag Araku Tourism</p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight text-white md:text-6xl">A great journey<br />starts with <span className="text-amber-200 italic">hello.</span></h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">From a family break in Araku to a group trip along the coast, tell us what you have in mind. Our Visakhapatnam team can help with tours, transport and stays.</p>
            <a href="#trip-enquiry" className="bg-gold mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 font-semibold text-primary-foreground">Share your plans <ArrowDown size={18} /></a>
          </div>
          <Tilt><div className="relative rounded-3xl border border-white/20 bg-white/10 p-7 shadow-2xl sm:p-9">
            <Compass size={36} className="text-amber-200" />
            <p className="mt-5 text-xs uppercase tracking-[.2em] text-amber-200">Your local travel team</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Let's plan it together.</h2>
            <a href={callUrl} className="mt-6 block text-3xl font-semibold text-white">{contactPhone}</a>
            <a href={emailUrl} className="mt-4 block break-words text-amber-200 underline underline-offset-4">{contactEmail}</a>
            <p className="mt-6 border-t border-white/20 pt-5 text-sm leading-7 text-slate-300">Share your dates, group size and places you would like to visit. We will discuss availability and a quote for your plans.</p>
          </div></Tilt>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16" aria-label="Ways to get in touch">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Phone, title: "Talk through your trip", copy: "Discuss routes, transport and the details that matter to your group.", href: callUrl, label: contactPhone },
            { icon: Mail, title: "Send the details", copy: "Share your itinerary, travel preferences or a detailed question by email.", href: emailUrl, label: "Email our team" },
            { icon: MapPin, title: "Meet us in Vizag", copy: "Find our agency in Arilova. Please call before visiting to arrange a meeting.", href: "#visit-us", label: "Address and directions" },
          ].map(item => <Tilt key={item.title}><article className="h-full rounded-3xl border border-border bg-card p-7 shadow-lg">
            <item.icon size={26} className="text-primary" /><h2 className="mt-5 text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.copy}</p><a href={item.href} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">{item.label}<ArrowUpRight size={16} /></a>
          </article></Tilt>)}
        </div>
      </section>
      <section id="trip-enquiry" className="mx-auto grid max-w-6xl scroll-mt-28 gap-12 px-6 pb-20 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[.25em] text-primary">Tell us your plans</p>
          <h2 className="mt-4 text-4xl font-semibold">Your trip.<br />Your kind of journey.</h2>
          <p className="mt-5 leading-8 text-muted-foreground">Ask about a tour package, cab, group bus or hotel stay. It is fine if your dates or destination are still taking shape.</p>
          <ul className="my-7 space-y-4 text-sm">{["Share your dates, group size and interests", "Discuss a route and the right travel options", "Review your quote and booking terms"].map(text => <li key={text} className="flex gap-3"><Check size={18} className="shrink-0 text-primary" />{text}</li>)}</ul>
          <ContactActions />
        </div>
        <form onSubmit={prepare} onChange={() => { setEnquiry(""); setError(""); }} className="glass grid gap-5 rounded-3xl border border-border p-6 sm:p-9" aria-label="Trip enquiry">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">Your name<input name="name" autoComplete="name" required maxLength={100} className={field} placeholder="Your full name" /></label>
            <label className="grid gap-2 text-sm font-semibold">Phone number<input name="phone" autoComplete="tel" type="tel" required maxLength={25} className={field} placeholder="Include country code" /></label>
          </div>
          <label className="grid gap-2 text-sm font-semibold">What can we help with?<select name="service" className={field} defaultValue="Help me plan a trip">
            <option>Help me plan a trip</option>{tours.map(t => <option key={t.title}>{t.title}</option>)}
            <option>Cab booking</option><option>Bus / Tempo Traveller booking</option><option>Hotel booking</option><option>Existing booking or other question</option>
          </select></label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">Travel date (optional)<input name="date" type="date" min={minDate} className={field} /></label>
            <label className="grid gap-2 text-sm font-semibold">Number of travellers<input name="guests" type="number" min="1" step="1" defaultValue="2" required className={field} /></label>
          </div>
          <label className="grid gap-2 text-sm font-semibold">Pickup or starting city (optional)<input name="pickup" maxLength={200} className={field} placeholder="City, airport, railway station or hotel" /></label>
          <label className="grid gap-2 text-sm font-semibold">Your travel plans (optional)<textarea name="message" rows={4} maxLength={2000} className={field} placeholder="Destinations, number of days, luggage and any special requests" /></label>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <button type="submit" className="bg-gold flex items-center justify-center gap-3 rounded-full px-6 py-4 font-semibold text-primary-foreground">Prepare my enquiry <ArrowUpRight size={18} /></button>
          <p className="text-xs leading-6 text-muted-foreground">Review your details, then send them on WhatsApp. Availability, fare and booking terms are confirmed by our team before a booking is made.</p>
          {enquiry && <div role="status" className="rounded-2xl border border-primary/30 bg-secondary p-5"><p className="font-semibold">Your enquiry is ready to send.</p><a href={enquiry} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#087f49] px-5 py-3 font-semibold text-white"><WhatsAppIcon />Send enquiry on WhatsApp</a></div>}
        </form>
      </section>
      <section id="visit-us" className="scroll-mt-28 border-y border-border bg-secondary/40 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs uppercase tracking-[.25em] text-primary">Find our agency</p><h2 className="mt-4 text-4xl font-semibold">Visit us in Visakhapatnam.</h2>
            <div className="mt-6 flex gap-3"><MapPin size={24} className="shrink-0 text-primary" /><address className="text-base not-italic leading-8"><strong>{agencyName}</strong><br />{agencyAddress}</address></div>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">Call before visiting so we can arrange a time to discuss your trip. For airport, railway station or hotel pickups, confirm the meeting point with our team.</p>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="bg-gold mt-6 inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground"><Navigation size={18} />Get directions</a>
          </div>
          <div className="contact-map-scene">


            <div className="contact-map-card overflow-hidden rounded-3xl border border-primary/20 bg-card">
              <div className="flex items-center justify-between gap-4 border-b border-border bg-secondary px-5 py-4">
                <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><MapPin size={22} /></span><div><p className="text-xs uppercase tracking-[.18em] text-primary">Satellite view</p><p className="mt-1 font-semibold">Arilova, Visakhapatnam</p></div></div>
                <Compass size={26} className="text-primary" aria-hidden="true" />
              </div>
              <iframe title="Map showing the Vizag Araku Tourism agency address" src={agencyEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[340px] w-full border-0 sm:h-[380px]" allowFullScreen />
              <div className="border-t border-border bg-secondary/50 px-5 py-5"><a href={agencyEarthUrl} target="_blank" rel="noopener noreferrer" className="bg-gold inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground"><Compass size={18} />Explore in Google Earth <ArrowUpRight size={16} /></a><p className="mt-3 text-xs leading-6 text-muted-foreground">Open the area in Google Earth and select 3D to explore the terrain. Detailed 3D imagery depends on local coverage.</p></div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-4"><span className="text-xs text-muted-foreground">Your journey starts in Vizag.</span><a href={agencyMapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">View our Google Maps listing <ArrowUpRight size={16} /></a></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-semibold">Before we start planning.</h2>
        <div className="mt-7 divide-y divide-border">{[
          ["What should I include in my enquiry?", "Share your dates, number of travellers, pickup location, destinations and any transport or accommodation preferences. If you are undecided, tell us what you would like from the trip."],
          ["Can you help with transport and hotels?", "Yes. Ask about cab services, Tempo Travellers, group buses and hotel options. Availability, amenities and prices will be confirmed for your dates."],
          ["Does sending an enquiry confirm a booking?", "No. Please review the written quote, availability, inclusions, payment requirements and cancellation terms with our team before confirming."],
        ].map(([q,a]) => <details key={q} className="py-5"><summary className="cursor-pointer text-lg font-semibold">{q}</summary><p className="mt-3 text-sm leading-8 text-muted-foreground">{a}</p></details>)}</div>
      </section>
    </main><Footer />
  </div>;
}