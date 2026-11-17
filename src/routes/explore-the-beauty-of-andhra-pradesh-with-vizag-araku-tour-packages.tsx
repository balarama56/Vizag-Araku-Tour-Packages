import { createFileRoute } from "@tanstack/react-router";
import { AndhraTravelArticle } from "@/components/andhra-travel-article";
import { andhraSlug, andhraTitle, andhraDescription } from "@/lib/andhra-travel-guide";
const origin = "https://www.vizagarakutourpackages.com";
const url = `${origin}/${andhraSlug}`;
export const Route = createFileRoute("/explore-the-beauty-of-andhra-pradesh-with-vizag-araku-tour-packages")({
  head: () => ({
    meta: [
      { title: "Explore Andhra Pradesh: Vizag & Araku Travel Guide" },
      { name: "description", content: andhraDescription },
      { property: "og:type", content: "article" },
      { property: "og:title", content: andhraTitle },
      { property: "og:description", content: andhraDescription },
      { property: "og:url", content: url },
      { property: "og:image", content: `${origin}/images/vizag-araku-annavaram/araku.jpg` },
      { property: "og:image:alt", content: "Green valley scenery in Araku, Andhra Pradesh" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: andhraTitle },
      { name: "twitter:description", content: andhraDescription },
      { name: "twitter:image", content: `${origin}/images/vizag-araku-annavaram/araku.jpg` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@graph": [
        { "@type": "BlogPosting", "@id": `${url}#article`, headline: andhraTitle, description: andhraDescription, mainEntityOfPage: url, url, image: `${origin}/images/vizag-araku-annavaram/araku.jpg`, inLanguage: "en-IN", author: { "@type": "Organization", name: "Vizag Araku Tourism", url: `${origin}/about` }, publisher: { "@type": "Organization", name: "Vizag Araku Tourism", url: origin } },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Travel journal", item: `${origin}/blog` },
          { "@type": "ListItem", position: 3, name: andhraTitle, item: url },
        ] },
      ],
    }) }],
  }),
  component: AndhraTravelArticle,
});