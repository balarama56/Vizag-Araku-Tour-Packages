import { PackageCollection } from "@/components/package-collection";
import { templeTourPackages } from "@/components/temple-tour-packages";
const heritageImage =
  "https://www.vizagarakutourpackages.com/wp-content/uploads/2020/11/Bhubaneswar-Puri-Konark-small2.jpg";
export const puriKonarkPackages = templeTourPackages
  .filter((p) => ["puri-3d-a", "puri-3d-b"].includes(p.id))
  .map((p) => ({
    ...p,
    image: heritageImage,
    priceBasis: "Per couple · subject to confirmation",
  }));
export function PuriKonarkPackages() {
  return (
    <PackageCollection
      packages={puriKonarkPackages}
      title="Puri & Konark"
      tagline="Sacred places. Coastal pauses."
      description="Explore Odisha’s temples and coast from Vizag. Compare two three-day Puri and Konark options, then discuss the stays, travel pace and visiting arrangements with our local team."
      range="3 days · 2 nights"
      heading="Two options. Your kind of journey."
      heroImage={heritageImage}
      heroAlt="Temple architecture on the Odisha heritage route"
      bookingNote="Both listed starting prices are per couple. Ask for a written comparison of the two options, including pickup, hotel names, meals, entry fees, transport and any Bhubaneswar stops. Confirm temple entry requirements, darshan arrangements and any Chilika boating plans for your dates. Special darshan or boating is included only when expressly stated in your quote."
    />
  );
}
