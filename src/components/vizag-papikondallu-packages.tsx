import {
  PackageCollection,
  type TourPackage,
} from "@/components/package-collection";
const riverImage =
  "https://www.vizagarakutourpackages.com/wp-content/uploads/2020/11/papi-820x520.jpg";
export const vizagPapikondalluPackages: TourPackage[] = [
  {
    id: "vp-2d",
    itineraryUrl: "/tours/visakapatanam-to-papikondalu-tour-2-d-1-n/",
    title: "Visakhapatnam to Papikondalu",
    days: 2,
    nights: 1,
    price: 15900,
    label: "A Godavari river escape",
    image: riverImage,
    route: "Visakhapatnam · Papikondalu",
    description:
      "Trade the city rush for river views and green hills. Discuss boat arrangements, transfers and an overnight stay with our local team for a two-day Godavari getaway.",
  },
];
export function VizagPapikondalluPackages() {
  return (
    <PackageCollection
      packages={vizagPapikondalluPackages}
      title="Vizag Papikondallu"
      tagline="River views. Unhurried moments."
      description="Discover a different side of Andhra Pradesh. Explore a two-day Papikondalu escape from Vizag and plan the river journey around your group."
      range="2 days · 1 night"
      heading="Your river escape, at a glance."
      heroImage={riverImage}
      heroAlt="Green Papikondalu hills beside the Godavari River"
      bookingNote="Boat services depend on river conditions, permissions and availability. Confirm the operating route, boarding point, transfers from Vizag, accommodation, meals and final price basis with our team before booking. Your quote will confirm what is included."
    />
  );
}
