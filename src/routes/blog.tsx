import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Travel Blog & Planning Guides | Vizag Araku Tourism" },
      {
        name: "description",
        content:
          "Simple travel planning guides: choose a tour, compare quotes and prepare for a family trip.",
      },
    ],
  }),
  component: Blog,
});
const guides = [
  {
    id: "choose-a-tour",
    title: "How to choose your tour package",
    intro: "Start with the time you have, then choose the places you want to see.",
    points: [
      "List your arrival and departure times before choosing a trip length.",
      "Pick your main interest: the coast, hills, nature or temple visits.",
      "Ask how much driving is planned each day and allow time to rest.",
      "Check tickets and activities for your dates before confirming.",
    ],
  },
  {
    id: "compare-quotes",
    title: "What to check in a tour quote",
    intro: "A starting price is useful, but the full quote tells you what you are paying for.",
    points: [
      "Check whether the price is per person, per couple or for the whole group.",
      "Request hotel names, room types and transport details.",
      "Confirm meals, entrance tickets, parking and any extra charges.",
      "Read the payment schedule, cancellation charges and refund terms.",
    ],
  },
  {
    id: "family-travel",
    title: "A simple checklist for family trips",
    intro: "A few details shared early can help you plan a more comfortable journey.",
    points: [
      "Share the number of adults and children, including children’s ages.",
      "Mention mobility needs and the amount of walking that suits your group.",
      "Discuss room arrangements and any food preferences.",
      "Keep your itinerary, contact number and booking details easy to find.",
    ],
  },
];
function Blog() {
  return (
    <ContentPage
      eyebrow="Blog"
      title="Simple tips for a better trip."
      description="Short planning guides to help you choose a package and know what to ask before booking."
    >
      <nav aria-label="Travel guides" className="grid gap-4 md:grid-cols-3">
        {guides.map((guide) => (
          <a
            href={`#${guide.id}`}
            key={guide.id}
            className="rounded-2xl border border-primary/20 bg-secondary p-5 font-semibold"
          >
            {guide.title} ↓
          </a>
        ))}
      </nav>
      <div className="mt-10 grid gap-8">
        {guides.map((guide) => (
          <article
            id={guide.id}
            key={guide.id}
            className="rounded-3xl border border-border bg-card p-7 sm:p-10"
          >
            <h2 className="text-2xl font-semibold sm:text-3xl">{guide.title}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{guide.intro}</p>
            <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              {guide.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
