import { createFileRoute } from "@tanstack/react-router";
import {
  ContactActions,
  contactPhone,
  callUrl,
  whatsappUrl,
  WhatsAppIcon,
} from "@/components/contact-actions";
import { Nav, Footer, tours } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Plan Your Trip — Vizag Araku Tour Packages" },
      {
        name: "description",
        content: "Send an enquiry for Araku, Papikondalu and temple tour packages.",
      },
      { property: "og:title", content: "Plan Your Trip — Vizag Araku Tour Packages" },
      {
        property: "og:description",
        content: "Send an enquiry for your next Eastern Ghats journey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const field =
    "w-full rounded-xl border border-input bg-secondary px-4 py-3 outline-none focus:border-primary";
  return (
    <div>
      <Nav />
      <main id="main-content" className="mx-auto max-w-2xl px-6 pb-24 pt-36">
        <h1 className="text-5xl font-semibold">
          Plan your <span className="text-gold italic">journey</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Call us or chat on WhatsApp to discuss your dates, group size and preferred destinations.
        </p>
        <section
          aria-label="Contact Vizag Araku Tourism"
          className="mt-8 rounded-3xl border border-primary/20 bg-card p-6 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Let’s plan your getaway
          </p>
          <a href={callUrl} className="mt-3 block font-display text-3xl font-semibold">
            {contactPhone}
          </a>
          <p className="mt-3 mb-6 text-sm leading-7 text-muted-foreground">
            Speak with us directly or send your travel plans on WhatsApp.
          </p>
          <ContactActions />
        </section>
        <h2 className="mt-10 text-2xl font-semibold">Prefer to share your plans first?</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Complete the details below to open WhatsApp with your enquiry ready to send.
        </p>
        <form
          className="glass mt-10 grid gap-4 rounded-3xl p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const message = `Hello Vizag Araku Tourism!\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nTour: ${data.get("package")}\nTravel plans: ${data.get("message") || "I would like to discuss my trip."}`;
            window.location.assign(`${whatsappUrl}?text=${encodeURIComponent(message)}`);
          }}
        >
          <label className="grid gap-2 text-sm">
            Your name
            <input
              name="name"
              autoComplete="name"
              required
              placeholder="Your name"
              className={field}
            />
          </label>
          <label className="grid gap-2 text-sm">
            Phone number
            <input
              name="phone"
              autoComplete="tel"
              required
              type="tel"
              placeholder="Phone number"
              className={field}
            />
          </label>
          <label className="grid gap-2 text-sm">
            Tour package
            <select name="package" className={field}>
              {tours.map((t) => (
                <option key={t.title}>
                  {t.title} · {t.dur}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm">
            Your travel plans
            <textarea
              name="message"
              rows={4}
              placeholder="Travel dates, group size, special requests"
              className={field}
            />
          </label>
          <button className="bg-gold rounded-full py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
            <span className="inline-flex items-center gap-2">
              <WhatsAppIcon />
              Continue on WhatsApp
            </span>
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
