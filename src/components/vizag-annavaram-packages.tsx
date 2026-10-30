import { PackageCollection } from "@/components/package-collection";
import { templeTourPackages } from "@/components/temple-tour-packages";
const templeImage =
  "https://www.vizagarakutourpackages.com/wp-content/uploads/2024/01/araku-annvaram-820x520.jpg";
export const vizagAnnavaramPackages = templeTourPackages.filter((p) =>
  ["vadapalli-2d", "annavaram-4d-a", "annavaram-4d-b"].includes(p.id),
);
export function VizagAnnavaramPackages() {
  return (
    <PackageCollection
      packages={vizagAnnavaramPackages}
      title="Vizag Annavaram"
      tagline="Valley views. Meaningful temple journeys."
      description="Find a temple escape that fits your plans. Compare three listed options, from a short pilgrimage to a four-day Vizag, Araku and Annavaram journey."
      range="2–4 day temple escapes"
      heading="Three options. A journey that matters."
      heroImage={templeImage}
      heroAlt="Temple scenery on the Araku and Annavaram route"
      bookingNote="Confirm the temples covered in your chosen package, darshan arrangements, travel pace, pickup point, stays, meals and transport before booking. The Vadapalli listing starts at a per-person fare; ask our team to confirm the price basis for each option. Similar routes may have different inclusions, so request a written comparison for your dates. Special darshan is included only when expressly confirmed."
    />
  );
}
