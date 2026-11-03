import {
  HotelCollection,
  type HotelOption,
} from "@/components/hotel-collection";
import hero from "@/assets/hero.jpg";
import { arakuHotelOptions as researchedHotels } from "@/components/araku-hotel-data";
export const arakuHotelOptions: HotelOption[] = [
  ...researchedHotels,
  {
    name: "Hotel Rajadhani Grand",
    image: hero,
    imageAlt: "Green hills in Araku Valley",
    imageCaption: "Araku Valley · destination image",
    description:
      "Explore a stay at Hotel Rajadhani Grand. Discuss room types, meal preferences and arrangements for your group before confirming.",
  },
];
export function ArakuHotels() {
  return (
    <HotelCollection
      region="Araku"
      hotels={arakuHotelOptions}
      heroImage={hero}
      heroAlt="Araku Valley hills at sunrise"
      intro="Wake up closer to the valley. Explore Araku stay options and share your dates, rooms and preferences with our local travel team."
    />
  );
}
