import { createFileRoute } from "@tanstack/react-router";
import { PancharamaGuide } from "@/components/pancharama-guide";
import { pancharamaGuideSlug, pancharamaGuideTitle, pancharamaGuideDescription } from "@/lib/pancharama-guide";
const origin = "https://www.vizagarakutourpackages.com";
const url = `${origin}/${pancharamaGuideSlug}`;
export const Route = createFileRoute("/complete-guide-on-the-pancharama-kshetras-in-andhra-pradesh")({
  head: () => ({
    meta: [
      { title: "Pancharama Kshetras Guide: 5 Temples, Locations & Route" },
      { name: "description", content: pancharamaGuideDescription },
      { property: "og:type", content: "article" },
      { property: "og:title", content: pancharamaGuideTitle },
      { property: "og:description", content: pancharamaGuideDescription },
      { property: "og:url", content: url },
      { property: "og:image", content: `${origin}/images/pancharama/ksheerarama.jpg` },
      { property: "og:image:alt", content: "Ksheerarama temple tower in Palakollu, Andhra Pradesh" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pancharamaGuideTitle },
      { name: "twitter:description", content: pancharamaGuideDescription },
      { name: "twitter:image", content: `${origin}/images/pancharama/ksheerarama.jpg` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@graph": [
        { "@type": "BlogPosting", "@id": `${url}#article`, headline: pancharamaGuideTitle, description: pancharamaGuideDescription, mainEntityOfPage: url, url, image: `${origin}/images/pancharama/ksheerarama.jpg`, inLanguage: "en-IN", author: { "@type": "Organization", name: "Vizag Araku Tourism", url: `${origin}/about` }, publisher: { "@type": "Organization", name: "Vizag Araku Tourism", url: origin } },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Travel journal", item: `${origin}/blog` },
          { "@type": "ListItem", position: 3, name: pancharamaGuideTitle, item: url },
        ] },
      ],
    }) }],
  }),
  component: PancharamaGuide,
});