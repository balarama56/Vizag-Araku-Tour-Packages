import { createFileRoute } from "@tanstack/react-router";
import { TwoDayVizagGuide } from "@/components/two-day-vizag-guide";
import { shortBreakSlug, shortBreakTitle, shortBreakDescription } from "@/lib/two-day-vizag-guide";
const origin = "https://www.vizagarakutourpackages.com";
const url = `${origin}/${shortBreakSlug}`;
export const Route = createFileRoute("/vizag-araku-tour-package-for-2-days-with-low-prices")({
  head: () => ({
    meta: [
      { title: "Vizag Araku Tour Package for 2 Days: Price & Itinerary" },
      { name: "description", content: shortBreakDescription },
      { property: "og:type", content: "article" },
      { property: "og:title", content: shortBreakTitle },
      { property: "og:description", content: shortBreakDescription },
      { property: "og:url", content: url },
      { property: "og:image", content: `${origin}/images/vizag-araku-annavaram/araku.jpg` },
      { property: "og:image:alt", content: "Green valley scenery in Araku, Andhra Pradesh" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: shortBreakTitle },
      { name: "twitter:description", content: shortBreakDescription },
      { name: "twitter:image", content: `${origin}/images/vizag-araku-annavaram/araku.jpg` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@graph": [
        { "@type": "BlogPosting", "@id": `${url}#article`, headline: shortBreakTitle, description: shortBreakDescription, mainEntityOfPage: url, url, image: `${origin}/images/vizag-araku-annavaram/araku.jpg`, inLanguage: "en-IN", author: { "@type": "Organization", name: "Vizag Araku Tourism", url: `${origin}/about` }, publisher: { "@type": "Organization", name: "Vizag Araku Tourism", url: origin } },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Travel journal", item: `${origin}/blog` },
          { "@type": "ListItem", position: 3, name: shortBreakTitle, item: url },
        ] },
      ],
    }) }],
  }),
  component: TwoDayVizagGuide,
});