import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav, Footer, tours } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Plan Your Trip — Vizag Araku Tour Packages" },
      { name: "description", content: "Send an enquiry for Araku, Papikondalu and temple tour packages." },
      { property: "og:title", content: "Plan Your Trip — Vizag Araku Tour Packages" },
      { property: "og:description", content: "Send an enquiry for your next Eastern Ghats journey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-xl border border-input bg-secondary px-4 py-3 outline-none focus:border-primary";
  return (
    <div>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-36">
        <h1 className="text-5xl font-semibold">Plan your <span className="text-gold italic">journey</span></h1>
        <p className="mt-4 text-muted-foreground">Share a few details and our team will get back within a day.</p>
        {sent ? (
          <div className="glass mt-10 rounded-3xl p-10 text-center text-lg">Thank you! We'll be in touch shortly.</div>
        ) : (
          <form className="glass mt-10 grid gap-4 rounded-3xl p-8" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Your name" className={field} />
            <input required type="tel" placeholder="Phone number" className={field} />
            <select className={field}>{tours.map((t) => <option key={t.title}>{t.title} · {t.dur}</option>)}</select>
            <textarea rows={4} placeholder="Travel dates, group size, special requests" className={field} />
            <button className="bg-gold rounded-full py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">Send enquiry</button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}
