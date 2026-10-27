import {
  PackageCollection,
  type TourPackage,
} from "@/components/package-collection";
import hero from "@/assets/hero.jpg";
const uploads = "https://www.vizagarakutourpackages.com/wp-content/uploads";
export const vizagLambasingiPackages: TourPackage[] = [
  {
    id: "val-3d",
    title: "Vizag, Araku & Lambasingi",
    days: 3,
    nights: 2,
    price: 19500,
    label: "Coast to cloud country",
    image: `${uploads}/2024/01/vizag2.jpg`,
    route: "Visakhapatnam · Araku · Lambasingi",
    description:
      "Bring a coastal escape and two hill destinations together in a three-day break.",
  },
  {
    id: "al-3d",
    title: "Araku & Lambasingi",
    days: 3,
    nights: 2,
    price: 23500,
    label: "A hill-country escape",
    image: hero,
    route: "Araku Valley · Lambasingi",
    description:
      "Choose a valley-focused holiday with time for mountain views and quiet mornings.",
  },
  {
    id: "val-4d",
    title: "Vizag, Araku & Lambasingi",
    days: 4,
    nights: 3,
    price: 25500,
    label: "More room to unwind",
    image: `${uploads}/2020/11/Araku-Train-View-720x606-1-720x520.jpg`,
    route: "Visakhapatnam · Araku · Lambasingi",
    description:
      "Give your group an extra day to explore the coast and hills at a comfortable pace.",
  },
  // The category listing shows an inconsistent ₹33; the linked package detail confirms ₹32,500.
  {
    id: "valv-5d",
    title: "Vizag, Araku, Lambasingi & Vanjangi",
    days: 5,
    nights: 4,
    price: 32500,
    label: "The extended escape",
    image: hero,
    route: "Visakhapatnam · Araku · Lambasingi · Vanjangi",
    description:
      "Connect four destinations in a longer getaway through the Eastern Ghats.",
  },
];
export function VizagLambasingiPackages() {
  return (
    <PackageCollection
      packages={vizagLambasingiPackages}
      title="Vizag Lambasingi"
      tagline="Misty mornings. Mountain memories."
      description="Discover your next hill-country escape. Compare four packages connecting Vizag, Araku, Lambasingi and Vanjangi, and plan the details with our local team."
      range="3–5 day escapes"
      heading="Four escapes. A fresh perspective."
    />
  );
}
