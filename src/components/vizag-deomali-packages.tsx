import {
  PackageCollection,
  type TourPackage,
} from "@/components/package-collection";
const deomaliImage =
  "https://www.vizagarakutourpackages.com/wp-content/uploads/2020/11/Vizag-araku-2d-1n-720x500-1.jpg";
export const vizagDeomaliPackages: TourPackage[] = [
  {
    id: "vdd-1d",
    itineraryUrl: "/tours/visakhapatnam-deomali-duduma-1-day-tour/",
    title: "Vizag, Deomali & Duduma",
    days: 1,
    nights: 0,
    price: 10869,
    priceBasis: "Per couple · subject to confirmation",
    label: "One day. A fresh perspective.",
    image: deomaliImage,
    route: "Visakhapatnam · Deomali · Duduma",
    description:
      "Make a day of the hills and waterfall country. Discuss pickup, travel time and sightseeing with our local team for a Deomali and Duduma escape from Vizag.",
  },
];
export function VizagDeomaliPackages() {
  return (
    <PackageCollection
      packages={vizagDeomaliPackages}
      title="Vizag Deomali"
      tagline="A change of scenery. A day to remember."
      description="Take a break from the everyday. Explore a one-day Deomali and Duduma tour from Visakhapatnam, with the details planned around your group."
      range="1 day · no overnight stay"
      heading="Your mountain escape, at a glance."
      heroImage={deomaliImage}
      heroAlt="Scenic landscape on the Vizag and Eastern Ghats route"
      bookingNote="Starting prices vary with your travel date, group size and arrangements. Ask our team to confirm the current quote, pickup time, route, vehicle, entry fees and meal arrangements before booking. This is a day tour without an overnight stay; local access and views depend on conditions."
    />
  );
}
