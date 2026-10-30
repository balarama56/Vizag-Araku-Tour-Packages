import {
  PackageCollection,
  type TourPackage,
} from "@/components/package-collection";
import hero from "@/assets/hero.jpg";
const waterfallImage =
  "https://www.vizagarakutourpackages.com/wp-content/uploads/2020/11/Jagdalpur-Waterfallss-720x606-2-720x520.jpg";
export const vizagJagdalpurPackages: TourPackage[] = [
  {
    id: "aj-5d",
    title: "Araku Valley & Jagdalpur",
    days: 5,
    nights: 4,
    price: 37050,
    label: "Valleys meet waterfalls",
    image: hero,
    route: "Araku Valley · Jagdalpur",
    description:
      "Connect a valley getaway with a Jagdalpur escape. Share your preferred sights and pace for a five-day holiday shaped around your group.",
  },
  {
    id: "vaj-5d",
    title: "Vizag, Araku & Jagdalpur",
    days: 5,
    nights: 4,
    price: 36800,
    label: "Coast, hills & beyond",
    image: waterfallImage,
    route: "Visakhapatnam · Araku · Jagdalpur",
    description:
      "Bring the coast, green valleys and waterfall country into one holiday. Discuss transport, stays and sightseeing with our Visakhapatnam team.",
  },
];
export function VizagJagdalpurPackages() {
  return (
    <PackageCollection
      packages={vizagJagdalpurPackages}
      title="Vizag Jagdalpur"
      tagline="Green valleys. Waterfall wonders."
      description="Go a little further. Compare two five-day escapes connecting Vizag, Araku Valley and Jagdalpur, then shape your holiday with our local travel team."
      range="5 days · 4 nights"
      heading="Two journeys. A wider horizon."
      heroImage={waterfallImage}
      heroAlt="Waterfalls in the Jagdalpur region"
      bookingNote="Tell us your travel dates, group size and preferred pickup point. Confirm the sightseeing stops, transfer arrangements, hotel names, meal plan and final price basis in your written quote. Waterfall views and local access can vary with conditions."
    />
  );
}
