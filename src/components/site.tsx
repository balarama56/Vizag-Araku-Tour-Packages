import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef, type ReactNode } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { ContactActions, contactPhone, callUrl } from "@/components/contact-actions";

const U = "https://www.vizagarakutourpackages.com/wp-content/uploads";
export const destinations = [
  { name: "Vizag Araku", tours: 5, img: `${U}/2024/01/vizag2.jpg` },
  { name: "Papikondalu", tours: 1, img: `${U}/2024/01/papikondalu.jpg` },
  { name: "Maredumilli", tours: 1, img: `${U}/2024/01/maredu.jpg` },
  { name: "Temple Tours", tours: 4, img: `${U}/2024/01/temple.jpg` },
];
export const tours = [
  {
    title: "Visakhapatnam to Papikondalu",
    dur: "2D / 1N",
    price: 15900,
    img: `${U}/2020/11/papi-820x520.jpg`,
  },
  {
    title: "Araku · Lambasingi · Vanjangi",
    dur: "5D / 4N",
    price: 32500,
    img: `${U}/2020/11/Sunset-Beach-720x571-1-720x520.jpg`,
    featured: true,
  },
  {
    title: "Araku Valley Tour",
    dur: "2D / 1N",
    price: 10900,
    img: `${U}/2020/11/Araku-Train-View-720x606-1-720x520.jpg`,
  },
  {
    title: "Visakhapatnam · Puri · Konark",
    dur: "3D / 2N",
    price: 26600,
    img: `${U}/2020/11/Vizag-araku-2d-1n-720x500-1.jpg`,
  },
  {
    title: "Araku & Annavaram",
    dur: "4D / 3N",
    price: 24500,
    img: `${U}/2024/01/araku-annvaram-820x520.jpg`,
  },
];

export function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(
        "#about-home > div:first-child, #why-us article, #reviews figure, #travel-guide article, #best-time article, #how-it-works > div, #faq details, #plan-your-trip > div",
      ),
    );
    const targets = Array.from(
      new Set([
        ...cards,
        ...document.querySelectorAll<HTMLElement>(
          "#about-home h2, #why-us h2, #reviews h2, #travel-guide h2, #best-time h2, #faq h2",
        ),
      ]),
    );
    const animations = new Set<Animation>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || reduced.matches) return;
          const element = entry.target as HTMLElement;
          const siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
          const animation = element.animate(
            [
              { opacity: 0.2, transform: "perspective(1000px) translateY(28px) rotateX(5deg)" },
              { opacity: 1, transform: "perspective(1000px) translateY(0) rotateX(0)" },
            ],
            {
              duration: 700,
              delay: Math.min(siblings.indexOf(element) * 60, 180),
              easing: "cubic-bezier(.2,.7,.2,1)",
            },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          io.unobserve(element);
        });
      },
      { threshold: 0.08 },
    );
    targets.forEach((element) => io.observe(element));
    const cleanups = cards.map((element) => {
      element.classList.add("motion-card");
      let frame = 0;
      function reset() {
        cancelAnimationFrame(frame);
        element.style.removeProperty("transform");
      }
      function move(event: PointerEvent) {
        if (reduced.matches || event.pointerType !== "mouse") return;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          element.style.transform = `perspective(1200px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
        });
      }
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", reset);
      element.addEventListener("pointercancel", reset);
      return () => {
        reset();
        element.classList.remove("motion-card");
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", reset);
        element.removeEventListener("pointercancel", reset);
      };
    });
    function respectMotionPreference() {
      if (!reduced.matches) return;
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      cards.forEach((element) => element.style.removeProperty("transform"));
    }
    reduced.addEventListener("change", respectMotionPreference);
    return () => {
      io.disconnect();
      animations.forEach((animation) => animation.cancel());
      cleanups.forEach((cleanup) => cleanup());
      reduced.removeEventListener("change", respectMotionPreference);
    };
  }, []);
}

export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div style={{ perspective: 1000 }} className={className}>
      <div
        ref={ref}
        className="preserve-3d h-full transition-transform duration-300 ease-out will-change-transform"
        onMouseMove={(e) => {
          if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches)
            return;
          const r = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          e.currentTarget.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.02)`;
        }}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
      >
        {children}
      </div>
    </div>
  );
}

export function BrandLogo() {
  return (
    <span className="brand-logo">
      <img src="/vizag-araku-logo.jpg" alt="Vizag Araku Tourism" width={959} height={560} />
    </span>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(1100px,94%)]">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className="relative rounded-2xl border border-white/20 bg-white p-3 text-slate-800 shadow-deep lg:flex lg:items-center lg:justify-between lg:px-5"
      >
        <div className="flex items-center justify-between gap-3">
          <Link to="/" aria-label="Vizag Araku Tourism home">
            <BrandLogo />
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm lg:hidden"
              aria-expanded={open}
              aria-controls="primary-menu"
              onClick={() => setOpen(!open)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <div
          id="primary-menu"
          className={`${open ? "flex" : "hidden"} mt-4 flex-col gap-1 text-sm font-semibold lg:mt-0 lg:flex lg:flex-row lg:items-center lg:gap-1`}
        >
          {(
            [
              ["/", "Home"],
              ["/about", "About us"],
              ["/tour-packages", "Tour Packages"],
              ["/services", "Services"],
              ["/blog", "Blog"],
            ] as const
          ).map(([to, label]) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              activeProps={{ "aria-current": "page", className: "bg-sky-100 text-sky-900" }}
              className="rounded-lg px-3 py-2 hover:bg-sky-50"
            >
              {label}
            </Link>
          ))}
          <div className="px-3 py-2 lg:px-1 lg:py-0">
            <ThemeToggle />
          </div>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            activeOptions={{ exact: true }}
            activeProps={{ "aria-current": "page" }}
            className="bg-gold inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold text-primary-foreground shadow-glow transition hover:brightness-95"
          >
            Contact us ↗
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 pt-14 pb-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link
            to="/"
            aria-label="Vizag Araku Tourism home"
            className="inline-block rounded-xl bg-white p-3"
          >
            <BrandLogo />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
            From the shores of Vizag to the hills of Araku. Find a journey that brings you closer to
            the Eastern Ghats.
          </p>
          <a href={callUrl} className="mt-4 inline-block font-semibold text-primary">
            {contactPhone}
          </a>
          <div className="mt-4">
            <ContactActions />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Explore</h2>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <Link to="/about">About us</Link>
            <Link to="/tour-packages">Tour Packages</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <a href="/#destinations">Destinations</a>
            <a href="/#tours">Tour packages</a>
            <a href="/#travel-guide">Travel planning</a>
            <a href="/#best-time">Best time to visit</a>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Plan a journey</h2>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <Link to="/contact">Trip enquiry</Link>
            <a href="/#why-us">Why choose us</a>
            <a href="/#reviews">Customer reviews</a>
            <a href="/#how-it-works">How it works</a>
            <a href="/#faq">Frequently asked questions</a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vizag Araku Tourism. Crafted journeys across the Eastern Ghats.
      </p>
    </footer>
  );
}
