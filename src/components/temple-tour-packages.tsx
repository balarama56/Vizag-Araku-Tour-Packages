import {
  PackageCollection,
  type TourPackage,
} from "@/components/package-collection";
const uploads = "https://www.vizagarakutourpackages.com/wp-content/uploads";
const templeImage = `${uploads}/2024/11/Ksheerarama-Palakollu-820x520.jpg`;
const annavaramImage = `${uploads}/2024/01/araku-annvaram-820x520.jpg`;
const puriImage = `${uploads}/2024/01/temple.jpg`;
export const templeTourPackages: TourPackage[] = [
  {
    id: "vadapalli-2d",
    title: "Vizag to Vadapalli Temple",
    days: 2,
    nights: 1,
    price: 1600,
    priceBasis: "Per person · subject to confirmation",
    label: "A devotional short break",
    image: templeImage,
    route: "Visakhapatnam · Vadapalli",
    description:
      "Plan a short temple journey with your family or group. Confirm the visiting route, transport and any additional charges before booking.",
  },
  {
    id: "pancharamam-2d",
    title: "Vizag to Pancharamam",
    days: 2,
    nights: 1,
    price: 22000,
    label: "A pilgrimage together",
    image: templeImage,
    route: "Visakhapatnam · Pancharamam",
    description:
      "Explore a two-day pilgrimage option and discuss temple visits, travel pace and overnight arrangements with our local team.",
  },
  {
    id: "annavaram-4d-a",
    title: "Vizag, Araku & Annavaram · Option 1",
    days: 4,
    nights: 3,
    price: 25500,
    label: "Valley views & temple visits",
    image: annavaramImage,
    route: "Visakhapatnam · Araku · Annavaram",
    description:
      "Pair a valley escape with a temple visit. Ask our team to explain this option’s accommodation, transport and inclusions.",
  },
  {
    id: "puri-3d-a",
    title: "Vizag, Puri & Konark · Option 1",
    days: 3,
    nights: 2,
    price: 26600,
    label: "A coastal heritage journey",
    image: puriImage,
    route: "Visakhapatnam · Puri · Konark",
    description:
      "Make time for a temple and heritage break. Discuss visiting arrangements, travel times and stays for your group.",
  },
  {
    id: "puri-3d-b",
    title: "Vizag, Puri & Konark · Option 2",
    days: 3,
    nights: 2,
    price: 30000,
    label: "Another way to explore",
    image: puriImage,
    route: "Visakhapatnam · Puri · Konark",
    description:
      "Compare this Puri and Konark option with our team. Confirm the differences in stays, transport and final inclusions before choosing.",
  },
  {
    id: "annavaram-4d-b",
    title: "Vizag, Araku & Annavaram · Option 2",
    days: 4,
    nights: 3,
    price: 20500,
    label: "Nature meets devotion",
    image: annavaramImage,
    route: "Visakhapatnam · Araku · Annavaram",
    description:
      "Consider another coast, valley and temple combination. Request a written quote to compare the arrangements for your travel dates.",
  },
];
export function TempleTourPackages() {
  return (
    <PackageCollection
      packages={templeTourPackages}
      title="Temple"
      tagline="Meaningful journeys. Shared moments."
      description="Make space for a journey that matters. Compare six temple and heritage packages from Vizag, and plan the details with our local travel team."
      range="2–4 day pilgrimages"
      heading="Six journeys. Time for what matters."
      heroImage={templeImage}
      heroAlt="Traditional temple architecture at Ksheerarama in Palakollu"
      bookingNote="Tell us about your group’s mobility needs and preferred pace. Confirm temple visiting hours, darshan arrangements, dress requirements, stays, transport and price basis before booking. Options with the same destinations may have different inclusions; ask for a written comparison. Special darshan or priority entry is only included if expressly confirmed in your quote."
    />
  );
}
