import {
  PackageCollection,
  type TourPackage,
} from "@/components/package-collection";
const heritageImage =
  "https://www.vizagarakutourpackages.com/wp-content/uploads/2020/11/Bhubaneswar-Puri-Konark-small2.jpg";
export const bhubaneswarPuriKonarkPackages: TourPackage[] = [
  {
    id: "bpk-3d",
    title: "Vizag to Bhubaneswar, Puri & Konark",
    days: 3,
    nights: 2,
    price: 30000,
    priceBasis: "Per couple · subject to confirmation",
    label: "Temples, coast & heritage",
    image: heritageImage,
    route: "Visakhapatnam · Bhubaneswar · Puri · Konark",
    description:
      "Bring Odisha’s temple cities and coast together in a three-day escape from Vizag. Discuss your visiting arrangements, travel pace and two-night stay with our local team.",
  },
];
export function BhubaneswarPuriKonarkPackages() {
  return (
    <PackageCollection
      packages={bhubaneswarPuriKonarkPackages}
      title="Bhubaneswar, Puri & Konark"
      tagline="Timeless temples. Coastal moments."
      description="Make time for a meaningful Odisha escape. Explore a three-day journey from Vizag through Bhubaneswar, Puri and Konark, with the details planned around your group."
      range="3 days · 2 nights"
      heading="Your Odisha escape, at a glance."
      heroImage={heritageImage}
      heroAlt="Bhubaneswar, Puri and Konark destination imagery"
      bookingNote="The listed price is per couple. Confirm your dates, pickup point, hotel names, transport, meals, entry fees and final quote before booking. Discuss temple entry requirements, darshan arrangements, visiting hours and any Chilika boating plans in advance. Special darshan or boating is included only when expressly confirmed; availability and local conditions may affect arrangements."
    />
  );
}
