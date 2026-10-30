import {
  PackageCollection,
  type TourPackage,
} from "@/components/package-collection";
const templeImage =
  "https://www.vizagarakutourpackages.com/wp-content/uploads/2024/11/Ksheerarama-Palakollu-820x520.jpg";
const vehicleOptions = [
  { id: "4-seater", name: "4-seater", price: 22000 },
  { id: "ertiga", name: "Ertiga", price: 24600 },
  { id: "innova", name: "Innova", price: 27000 },
  { id: "12-seater", name: "12-seater", price: 40000 },
  { id: "17-seater", name: "17-seater", price: 47000 },
  { id: "24-seater", name: "24-seater", price: 71000 },
];
export const pancharamaPackages: TourPackage[] = vehicleOptions.map((v) => ({
  id: `pancharama-${v.id}`,
  title: `Vizag to Pancharamam · ${v.name}`,
  days: 2,
  nights: 1,
  price: v.price,
  priceBasis: "Vehicle option · confirm final quote",
  label: `${v.name} option`,
  image: templeImage,
  route: "Visakhapatnam · Pancharama temples",
  description: `Explore the two-day pilgrimage with the listed ${v.name} option. Discuss your group size, travel pace, overnight arrangements and inclusions before booking.`,
}));
export function PancharamaPackages() {
  return (
    <PackageCollection
      packages={pancharamaPackages}
      title="Pancharama"
      tagline="Five sacred places. A journey together."
      description="Plan your Pancharamam pilgrimage from Vizag. Compare six vehicle options for the two-day journey, then discuss the visiting route, stays and arrangements with our local team."
      range="2 days · 1 night"
      heading="One pilgrimage. Six ways to travel."
      heroImage={templeImage}
      heroAlt="Ksheerarama temple architecture in Palakollu"
      bookingNote="The listed amounts correspond to the vehicle options. Confirm whether your quote applies to the vehicle, couple or group, plus seating, luggage space, pickup, overnight stay, meals, tolls, entry fees and darshan arrangements. Share any mobility needs and preferred pace. Temple visiting times, vehicle availability and the final route are confirmed for your dates; special darshan is included only when expressly stated."
    />
  );
}
