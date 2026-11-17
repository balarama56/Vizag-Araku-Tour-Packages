import { useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Camera, Film, X } from "lucide-react";
import { Nav, Footer, Tilt } from "@/components/site";
import "./testimonials.css";

const photos = [
  { slug: "group-memories", title: "Good company. Great memories.", alt: "A group of customers posing together outdoors among trees", width: 1200, height: 900 },
  { slug: "beach-day", title: "A day by the waves.", alt: "Customers and their family posing on rocks beside the sea", width: 1200, height: 539 },
  { slug: "journey-together", title: "The journey starts together.", alt: "A family group standing in front of their Tempo Traveller", width: 1200, height: 539 },
  { slug: "shared-meal", title: "A pause worth sharing.", alt: "Customers enjoying a meal together in a restaurant", width: 1200, height: 1600 },
  { slug: "coastal-view", title: "Views to take home.", alt: "A family group at a scenic viewpoint overlooking the sea", width: 1200, height: 539 },
  { slug: "seaside-smiles", title: "More reasons to smile.", alt: "Customers posing together with the coastline in the background", width: 1200, height: 539 },
];
const videos = [
  { slug: "customer-review", title: "A customer's review" },
  { slug: "customer-view", title: "Through our customers' eyes" },
  { slug: "beach-memories", title: "Beach memories" },
  { slug: "tribal-dance", title: "Dance and shared moments" },
  { slug: "customer-enjoyment", title: "The joy of being there" },
  { slug: "customer-moments", title: "Moments from the journey" },
];
const image = (slug: string, size = 1200) => `/images/testimonials/${slug}-${size}.jpg`;
export function Testimonials() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(photos[0]);
  function openPhoto(photo: typeof photos[number]) {
    setSelected(photo);
    dialog.current?.showModal();
  }
  return (
    <div className="testimonials-page pancharama-page overflow-x-hidden">
      <Nav />
      <main id="main-content">
        <section className="pancharama-hero relative overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[.25em] text-amber-200">Testimonials · customer memories</p>
              <h1 className="mt-6 text-5xl font-semibold leading-tight text-white md:text-6xl">The places stay with you.<br /><span className="text-amber-200 italic">So do the people.</span></h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">A collection of customer photos, video reviews and moments from the road. Get a glimpse of the journeys shared with Vizag Araku Tourism.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#customer-photos" className="bg-gold inline-flex items-center gap-2 rounded-full px-6 py-4 font-semibold text-primary-foreground">Explore the memories <ArrowDown size={18} /></a>
                <a href="#customer-videos" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-4 text-white"><Film size={18} /> Watch the stories</a>
              </div>
            </div>
            <div className="testimonial-scene relative mx-auto w-full max-w-lg py-8">
              <div className="pancharama-halo" aria-hidden="true" />
              <div className="testimonial-float rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl">
                <img src={image("group-memories")} srcSet={`${image("group-memories",480)} 480w, ${image("group-memories")} 1200w`} sizes="(min-width: 1024px) 500px, 90vw" width={1200} height={900} fetchPriority="high" alt={photos[0].alt} className="aspect-[4/3] w-full rounded-2xl object-cover" />
                <p className="px-3 pb-2 pt-4 text-sm text-white">Little moments. Lasting memories.</p>
              </div>
              <span className="testimonial-token absolute -bottom-1 right-2 rounded-2xl border border-white/20 bg-slate-900 px-5 py-4 text-sm text-amber-200 shadow-xl"><Camera className="mr-2 inline" size={18} /> Together is a wonderful place.</span>
            </div>
          </div>
        </section>
        <section id="customer-photos" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
          <p className="text-xs uppercase tracking-[.25em] text-primary">The photo album</p>
          <h2 className="mt-4 text-4xl font-semibold">Real people. Shared adventures.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">Family days by the sea, group outings and time spent together. Select a photo to see the full picture.</p>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => <Tilt key={photo.slug}>
              <button type="button" onClick={() => openPhoto(photo)} aria-label={`View photo: ${photo.title}`} className="testimonial-card block h-full w-full overflow-hidden rounded-3xl border border-border bg-card text-left shadow-lg">
                <img src={image(photo.slug)} srcSet={`${image(photo.slug,480)} 480w, ${image(photo.slug)} 1200w`} sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw" width={photo.width} height={photo.height} loading="lazy" decoding="async" alt={photo.alt} className="aspect-[4/3] w-full object-cover" />
                <span className="flex items-center justify-between gap-4 p-6 font-semibold">{photo.title}<ArrowUpRight size={18} className="shrink-0 text-primary" /></span>
              </button>
            </Tilt>)}
          </div>
        </section>
        <section id="customer-videos" className="scroll-mt-28 border-y border-border bg-secondary/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs uppercase tracking-[.25em] text-primary">In their own moments</p>
            <h2 className="mt-4 text-4xl font-semibold">Press play on the memories.</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Customer reviews and glimpses of the trip, from beach days to shared celebrations.</p>
            <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => <figure key={video.slug} className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
                <video controls playsInline preload="none" poster={`/images/testimonials/${video.slug}-poster.jpg`} aria-label={video.title} className="aspect-[4/3] w-full bg-slate-950 object-contain" onPlay={(event) => { const current = event.currentTarget; current.closest("section")?.querySelectorAll("video").forEach((other) => { if (other !== current) other.pause(); }); }}>
                  <source src={`/images/testimonials/${video.slug}.mp4`} type="video/mp4" />
                  Your browser does not support video. <a href={`/images/testimonials/${video.slug}.mp4`}>Download this video</a>.
                </video>
                <figcaption className="flex items-center gap-3 p-6 font-semibold"><Film size={18} className="text-primary" />{video.title}</figcaption>
              </figure>)}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[.25em] text-primary">Your next chapter</p>
          <h2 className="mt-4 text-4xl font-semibold">Make a few memories of your own.</h2>
          <p className="mt-5 leading-8 text-muted-foreground">Tell us where you would like to go and who is coming along. We will help you plan the journey.</p>
          <a href="/contact" className="bg-gold mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 font-semibold text-primary-foreground">Plan your trip <ArrowUpRight size={18} /></a>
        </section>
      </main>
      <Footer />
      <dialog ref={dialog} aria-label={selected.title} className="testimonial-dialog rounded-2xl border border-border bg-card p-4 text-foreground" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className="mb-3 flex items-center justify-between gap-6"><p className="font-semibold">{selected.title}</p><button type="button" onClick={() => dialog.current?.close()} aria-label="Close photo" className="rounded-full border border-border p-2"><X size={20} /></button></div>
        <img src={image(selected.slug)} width={selected.width} height={selected.height} alt={selected.alt} className="max-h-[75svh] w-full object-contain" />
      </dialog>
    </div>
  );
}