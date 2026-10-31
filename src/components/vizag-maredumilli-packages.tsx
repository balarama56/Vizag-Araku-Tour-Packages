import {
  PackageCollection,
  type TourPackage,
} from "@/components/package-collection";
const forestImage =
  "https://www.vizagarakutourpackages.com/wp-content/uploads/2024/01/maredu.jpg";
export const vizagMaredumilliPackages: TourPackage[] = [
  {
    id: "vm-3d",
    itineraryUrl: "/tours/visakapatanam-to-maredumilli-2-nights-3-days-tour/",
    title: "Visakhapatnam to Maredumilli",
    days: 3,
    nights: 2,
    price: 21000,
    label: "A little closer to nature",
    image: forestImage,
    route: "Visakhapatnam · Maredumilli",
    description:
      "Leave the city behind for a forest-country break. Discuss waterfalls, plantation stops and time to unwind, with transport and stays planned around your group.",
  },
];
export function VizagMaredumilliPackages() {
  return (
    <PackageCollection
      packages={vizagMaredumilliPackages}
      title="Vizag Maredumilli"
      tagline="Forest roads. Fresh perspectives."
      description="Find room to slow down. Explore a three-day Maredumilli escape from Visakhapatnam, then plan the stays, transport and sightseeing with our local team."
      range="3 days · 2 nights"
      heading="Your forest escape, at a glance."
      heroImage={forestImage}
      heroAlt="Green forest scenery in Maredumilli"
      bookingNote="Share your dates, group size and preferred pickup point. Confirm the final duration, accommodation, transport, meals, entry fees and price basis in your written quote. Waterfall access and any boating arrangements depend on local conditions and availability."
    />
  );
}
