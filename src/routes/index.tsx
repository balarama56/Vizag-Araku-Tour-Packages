import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero from "@/assets/hero.jpg";
import { Nav, Footer, Tilt, useReveal, destinations, tours } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vizag Araku Tour Packages — Premium Eastern Ghats Journeys" },
      { name: "description", content: "Handcrafted Araku Valley, Papikondalu, Lambasingi and temple tours from Visakhapatnam." },
      { property: "og:title", content: "Vizag Araku Tour Packages" },
      { property: "og:description", content: "Handcrafted Araku Valley, Papikondalu and temple tours from Vizag." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  const [y, setY] = useState(0);
  const [m, setM] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const s = () => setY(window.scrollY);
    const mv = (e: MouseEvent) => setM({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    window.addEventListener("scroll", s, { passive: true });
    window.addEventListener("mousemove", mv);
    return () => { window.removeEventListener("scroll", s); window.removeEventListener("mousemove", mv); };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Nav />
      <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden" style={{ perspective: 1200 }}>
        <img src={hero} alt="Araku Valley at sunrise" width={1920} height={1088}
          className="absolute inset-0 h-[120%] w-full object-cover"
          style={{ transform: `translateY(${y * 0.35}px) scale(1.1) translate(${m.x * -20}px, ${m.y * -20}px)` }} />
        <div className="bg-fade absolute inset-0" />
        <div className="relative z-10 px-6 text-center preserve-3d"
          style={{ transform: `rotateY(${m.x * 8}deg) rotateX(${-m.y * 8}deg) translateY(${y * -0.2}px)`, opacity: 1 - y / 700 }}>
          <p className="glass mx-auto mb-6 w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">Your journey starts here</p>
          <h1 className="text-6xl font-bold leading-[0.95] md:text-8xl">Into the <span className="text-gold italic">misty</span><br />Eastern Ghats</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Araku Valley, Papikondalu, Lambasingi and sacred temples — curated, guided and beautifully paced.</p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#tours" className="bg-gold rounded-full px-8 py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-105">Explore tours</a>
            <Link to="/contact" className="glass rounded-full px-8 py-4 font-semibold transition hover:scale-105">Plan my trip</Link>
          </div>
        </div>
        <div className="glass animate-floaty absolute bottom-24 left-[8%] hidden rounded-2xl p-4 md:block"><p className="text-3xl font-display text-gold">117k+</p><p className="text-xs text-muted-foreground">Happy travellers</p></div>
        <div className="glass animate-floaty absolute right-[8%] top-1/3 hidden rounded-2xl p-4 md:block" style={{ animationDelay: "-3s" }}><p className="text-3xl font-display text-gold">2,100</p><p className="text-xs text-muted-foreground">Tours completed</p></div>
      </section>

      <div className="overflow-hidden border-y border-border py-5">
        <div className="animate-marquee flex w-max gap-12 font-display text-2xl text-muted-foreground">
          {[...Array(2)].flatMap((_, k) => ["Araku Valley", "Borra Caves", "Papikondalu", "Lambasingi", "Maredumilli", "Puri", "Konark", "Annavaram", "Jagdalpur", "Deomali"].map((t) => <span key={k + t}>✦ {t}</span>))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <p className="reveal text-sm uppercase tracking-[0.3em] text-primary">Places to go</p>
        <h2 className="reveal mt-3 text-5xl font-semibold">Perfect destinations</h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <Tilt key={d.name} className="reveal" >
              <div className="group relative h-96 overflow-hidden rounded-3xl shadow-deep" style={{ transitionDelay: `${i * 80}ms` }}>
                <img src={d.img} alt={d.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="bg-fade absolute inset-0" />
                <div className="absolute bottom-0 p-6" style={{ transform: "translateZ(50px)" }}>
                  <h3 className="text-2xl font-semibold">{d.name}</h3>
                  <p className="text-sm text-primary">{d.tours} tours</p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      <section id="tours" className="mx-auto max-w-6xl px-6 pb-28">
        <p className="reveal text-sm uppercase tracking-[0.3em] text-primary">Most popular</p>
        <h2 className="reveal mt-3 text-5xl font-semibold">Signature tour packages</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((t) => (
            <Tilt key={t.title} className="reveal">
              <article className="glass h-full overflow-hidden rounded-3xl shadow-deep">
                <div className="relative h-56 overflow-hidden">
                  <img src={t.img} alt={t.title} loading="lazy" className="h-full w-full object-cover" />
                  {t.featured && <span className="bg-gold absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-primary-foreground">Featured</span>}
                </div>
                <div className="p-6" style={{ transform: "translateZ(30px)" }}>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.dur}</p>
                  <h3 className="mt-2 text-xl font-semibold">{t.title}</h3>
                  <div className="mt-6 flex items-end justify-between">
                    <p className="text-sm text-muted-foreground">From <span className="block font-display text-2xl text-gold">₹{t.price.toLocaleString("en-IN")}</span></p>
                    <Link to="/contact" className="rounded-full border border-border px-4 py-2 text-sm transition hover:bg-primary hover:text-primary-foreground">Enquire</Link>
                  </div>
                </div>
              </article>
            </Tilt>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-28 grid max-w-6xl gap-6 px-6 md:grid-cols-4">
        {[["100", "Destinations"], ["2,100", "Amazing tours"], ["7", "Tour types"], ["117,200", "Happy customers"]].map(([n, l]) => (
          <div key={l} className="reveal glass rounded-3xl p-8 text-center">
            <p className="font-display text-5xl text-gold">{n}</p>
            <p className="mt-2 text-sm text-muted-foreground">{l}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mb-28 max-w-6xl px-6">
        <div className="reveal bg-gold relative overflow-hidden rounded-[2.5rem] p-14 text-primary-foreground shadow-glow">
          <h2 className="max-w-xl text-5xl font-semibold">Let's design your perfect escape.</h2>
          <p className="mt-4 max-w-md opacity-80">Tell us your dates and group size — we'll handle stays, transport and guides.</p>
          <Link to="/contact" className="mt-8 inline-block rounded-full bg-primary-foreground px-8 py-4 font-semibold text-primary transition hover:scale-105">Talk to a travel expert</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
