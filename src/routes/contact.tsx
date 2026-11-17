import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/contact-page";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us | Vizag Araku Tourism" },
    { name: "description", content: "Contact Vizag Araku Tourism in Arilova, Visakhapatnam for tour packages, cab and bus booking, and hotel enquiries. Find our address and plan your trip." },
    { property: "og:title", content: "Contact Us | Vizag Araku Tourism" },
    { property: "og:description", content: "Talk to our Visakhapatnam team about tours, transport and stays. Find our address and send your travel enquiry." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ContactPage,
});