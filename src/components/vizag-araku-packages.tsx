import { PackageCollection } from "@/components/package-collection";
import hero from "@/assets/hero.jpg";
const uploads = "https://www.vizagarakutourpackages.com/wp-content/uploads";
export const vizagArakuPackages = [
  {
    id: "va-3d",
    itineraryUrl: "/tours/visakhapatnam-araku-valley-tour-3-d-2-n/",
    title: "Visakhapatnam–Araku Valley",
    days: 3,
    nights: 2,
    price: 16900,
    label: "Coast meets valley",
    image: `${uploads}/2024/01/vizag2.jpg`,
    description: "A three-day escape bringing the city and valley together.",
    route: "Visakhapatnam · Araku Valley",
  },
  {
    id: "va-2d",
    itineraryUrl: "/tours/visakhapatnam-araku-valley-tour-2-d-1-n/",
    title: "Visakhapatnam–Araku Valley",
    days: 2,
    nights: 1,
    price: 11990,
    label: "A short escape",
    image: `${uploads}/2020/11/Araku-Train-View-720x606-1-720x520.jpg`,
    description: "Make room for a quick getaway from the coast to the hills.",
    route: "Visakhapatnam · Araku Valley",
  },
  {
    id: "va-4d",
    itineraryUrl: "/tours/visakhapatnam-araku-valley-tour-4-d-3-n/",
    title: "Visakhapatnam–Araku Valley",
    days: 4,
    nights: 3,
    price: 23500,
    label: "More time to explore",
    image: hero,
    description:
      "Choose a longer stay and discuss a pace that suits your group.",
    route: "Visakhapatnam · Araku Valley",
  },
  {
    id: "vaa-4d",
    itineraryUrl: "/tours/visakhapatnam-araku-annavaram-tour-4-d-3-n/",
    title: "Vizag, Araku & Annavaram",
    days: 4,
    nights: 3,
    price: 24500,
    label: "Nature & devotion",
    image: `${uploads}/2024/01/araku-annvaram-820x520.jpg`,
    description: "Bring a valley escape and a temple visit into one holiday.",
    route: "Visakhapatnam · Araku · Annavaram",
  },
  {
    id: "a-2d",
    itineraryUrl: "/tours/araku-valley-tour-2-d-1-n/",
    title: "Araku Valley Tour",
    days: 2,
    nights: 1,
    price: 10900,
    label: "Into the valley",
    image: hero,
    description:
      "A focused valley break for travellers drawn to the Eastern Ghats.",
    route: "Araku Valley",
  },
];

export function VizagArakuPackages() {
  return (
    <PackageCollection
      packages={vizagArakuPackages}
      title="Vizag Araku"
      tagline="Coastal mornings. Valley memories."
      description="Find your kind of escape. Compare five coast, valley and temple packages, then let’s shape the details around your group."
      range="2–4 day escapes"
      heading="Five journeys. Your choice."
    />
  );
}
