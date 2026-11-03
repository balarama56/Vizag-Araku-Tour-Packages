import { HotelCollection } from "@/components/hotel-collection";
import { lambasingiHotels } from "@/components/lambasingi-hotel-data";
import hero from "@/assets/hero.jpg";
export function LambasingiHotels() {
  return (
    <HotelCollection
      region="Lambasingi"
      hotels={lambasingiHotels}
      heroImage={hero}
      heroAlt="Green hills in the Eastern Ghats"
      intro="Make time for misty mornings and a slower mountain stay. Explore Lambasingi resorts and share your dates, guests and room preferences with our local team."
    />
  );
}
