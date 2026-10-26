import { Phone, ChevronDown } from "lucide-react";
import { tourCategories, serviceCategories, hotelCategories } from "@/lib/booking-categories";
import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef, useId, type ReactNode } from "react";

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
  const filterId = `logo-depth-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <span className="brand-logo brand-logo-depth">
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -3 -3 -3 0 9" />
            <feDropShadow
              dx="1"
              dy="2"
              stdDeviation="0.7"
              floodColor="#006b82"
              floodOpacity="0.3"
            />
          </filter>
        </defs>
      </svg>
      <img
        src="/vizag-araku-logo.jpg"
        alt="Vizag Araku Tourism"
        width={959}
        height={560}
        style={{ filter: `url(#${filterId})` }}
      />
    </span>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const close = () => {
    setOpen(false);
    setDropdown(null);
  };
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setOpen(false);
        setDropdown(null);
      }
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);
  const groups = [
    {
      id: "tours",
      label: "Tour Packages",
      overview: "/tour-packages",
      route: "/tour-packages/$destination",
      items: tourCategories,
    },
    {
      id: "services",
      label: "Services",
      overview: "/services",
      route: "/services/$service",
      items: serviceCategories,
    },
    {
      id: "hotels",
      label: "Hotel booking",
      overview: "/hotel-booking",
      route: "/hotel-booking/$destination",
      items: hotelCategories,
    },
  ] as const;
  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(1320px,94%)]"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          const trigger =
            !open && dropdown
              ? document.getElementById(`${dropdown}-trigger`)
              : document.getElementById("mobile-menu-trigger");
          close();
          trigger?.focus();
        }
      }}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className="site-navigation relative rounded-2xl border border-white/20 bg-white p-3 text-slate-800 shadow-deep xl:flex xl:items-center xl:justify-between xl:px-5"
      >
        <div className="flex items-center justify-between gap-3">
          <Link to="/" onClick={close} aria-label="Vizag Araku Tourism home">
            <BrandLogo />
          </Link>
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={callUrl}
              aria-label={`Call us on ${contactPhone}`}
              className="bg-gold flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground"
            >
              <Phone size={19} aria-hidden="true" />
            </a>
            <button
              id="mobile-menu-trigger"
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
              aria-expanded={open}
              aria-controls="primary-menu"
              onClick={() => {
                setOpen(!open);
                setDropdown(null);
              }}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <div
          id="primary-menu"
          className={`${open ? "flex" : "hidden"} nav-menu mt-4 max-h-[calc(100svh-130px)] flex-col gap-1 overflow-y-auto text-sm font-semibold xl:mt-0 xl:flex xl:max-h-none xl:flex-row xl:items-center xl:overflow-visible`}
        >
          <Link
            to="/"
            onClick={close}
            activeOptions={{ exact: true }}
            activeProps={{ "aria-current": "page", className: "bg-sky-100 text-sky-900" }}
            className="rounded-lg px-3 py-2 hover:bg-sky-50"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={close}
            activeProps={{ "aria-current": "page", className: "bg-sky-100 text-sky-900" }}
            className="rounded-lg px-3 py-2 hover:bg-sky-50"
          >
            About us
          </Link>
          {groups.map((group) => (
            <div key={group.id} className="relative">
              <button
                id={`${group.id}-trigger`}
                type="button"
                className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 hover:bg-sky-50"
                aria-expanded={dropdown === group.id}
                aria-controls={`${group.id}-submenu`}
                onClick={() => setDropdown(dropdown === group.id ? null : group.id)}
              >
                {group.label}
                <ChevronDown
                  size={14}
                  aria-hidden="true"
                  className={`transition-transform ${dropdown === group.id ? "rotate-180" : ""}`}
                />
              </button>
              {dropdown === group.id && (
                <div
                  id={`${group.id}-submenu`}
                  className="my-1 grid gap-1 rounded-xl border border-sky-100 bg-sky-50 p-2 xl:absolute xl:left-0 xl:top-full xl:z-10 xl:my-2 xl:w-80 xl:max-w-[85vw] xl:bg-white xl:shadow-xl"
                >
                  <Link
                    to={group.overview}
                    onClick={close}
                    className="rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wide text-sky-800 hover:bg-sky-100"
                  >
                    View all {group.label.toLowerCase()} ↗
                  </Link>
                  {group.items.map((item) =>
                    group.id === "services" ? (
                      <Link
                        key={item.slug}
                        to="/services/$service"
                        params={{ service: item.slug }}
                        onClick={close}
                        className="rounded-lg px-3 py-2.5 text-sm hover:bg-sky-100"
                      >
                        {item.title}
                      </Link>
                    ) : group.id === "hotels" ? (
                      <Link
                        key={item.slug}
                        to="/hotel-booking/$destination"
                        params={{ destination: item.slug }}
                        onClick={close}
                        className="rounded-lg px-3 py-2.5 text-sm hover:bg-sky-100"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <Link
                        key={item.slug}
                        to="/tour-packages/$destination"
                        params={{ destination: item.slug }}
                        onClick={close}
                        className="rounded-lg px-3 py-2.5 text-sm hover:bg-sky-100"
                      >
                        {item.title}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/blog"
            onClick={close}
            activeProps={{ "aria-current": "page", className: "bg-sky-100 text-sky-900" }}
            className="rounded-lg px-3 py-2 hover:bg-sky-50"
          >
            Blog
          </Link>
          <div className="px-3 py-2 xl:px-1 xl:py-0">
            <ThemeToggle />
          </div>
          <Link
            to="/contact"
            onClick={close}
            className="bg-gold inline-flex items-center justify-center rounded-full px-4 py-3 text-primary-foreground shadow-glow"
          >
            Contact us ↗
          </Link>
          <a
            href={callUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-3 text-sky-900"
          >
            <Phone size={16} aria-hidden="true" />
            Call us
          </a>
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
            <Link to="/hotel-booking">Hotel booking</Link>
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
