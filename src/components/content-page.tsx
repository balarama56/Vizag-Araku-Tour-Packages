import type { ReactNode } from "react";
import { Nav, Footer } from "@/components/site";
import { ContactActions } from "@/components/contact-actions";

export function ContentPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main id="main-content" className="mx-auto max-w-6xl px-6 pb-20 pt-36">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
        </header>
        <div className="mt-12">{children}</div>
        <section className="mt-16 rounded-3xl border border-primary/20 bg-secondary p-7 sm:p-10">
          <h2 className="text-2xl font-semibold">Need help planning?</h2>
          <p className="mt-3 mb-6 text-muted-foreground">
            Tell us your travel dates, group size and the places you want to visit.
          </p>
          <ContactActions />
        </section>
      </main>
      <Footer />
    </>
  );
}
