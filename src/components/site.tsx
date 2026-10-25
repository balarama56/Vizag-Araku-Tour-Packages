import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

const U = "https://www.vizagarakutourpackages.com/wp-content/uploads";
export const destinations = [
  { name: "Vizag Araku", tours: 5, img: `${U}/2024/01/vizag2.jpg` },
  { name: "Papikondalu", tours: 1, img: `${U}/2024/01/papikondalu.jpg` },
  { name: "Maredumilli", tours: 1, img: `${U}/2024/01/maredu.jpg` },
  { name: "Temple Tours", tours: 4, img: `${U}/2024/01/temple.jpg` },
];
export const tours = [
  { title: "Visakhapatnam to Papikondalu", dur: "2D / 1N", price: 15900, img: `${U}/2020/11/papi-820x520.jpg` },
  { title: "Araku · Lambasingi · Vanjangi", dur: "5D / 4N", price: 32500, img: `${U}/2020/11/Sunset-Beach-720x571-1-720x520.jpg`, featured: true },
  { title: "Araku Valley Tour", dur: "2D / 1N", price: 10900, img: `${U}/2020/11/Araku-Train-View-720x606-1-720x520.jpg` },
  { title: "Visakhapatnam · Puri · Konark", dur: "3D / 2N", price: 26600, img: `${U}/2020/11/Vizag-araku-2d-1n-720x500-1.jpg` },
  { title: "Araku & Annavaram", dur: "4D / 3N", price: 24500, img: `${U}/2024/01/araku-annvaram-820x520.jpg` },
];

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
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

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(1100px,92%)]">
      <nav className="glass flex items-center justify-between rounded-full px-6 py-3">
        <Link to="/" className="font-display text-lg font-semibold">
          Vizag<span className="text-gold">Araku</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
          <Link to="/contact" className="bg-gold rounded-full px-4 py-2 font-semibold text-primary-foreground shadow-glow">
            Book now
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Vizag Araku Tour Packages · Crafted journeys across the Eastern Ghats
    </footer>
  );
}
