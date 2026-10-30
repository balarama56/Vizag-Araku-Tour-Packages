import {
  HotelCollection,
  type HotelOption,
} from "@/components/hotel-collection";
import hero from "@/assets/hero.jpg";
export const arakuHotelOptions: HotelOption[] = [
  {
    name: "Akshaya Inn",
    image: hero,
    imageAlt: "Araku Valley landscape",
    imageCaption: "Araku Valley · destination image",
    description:
      "Planning an Araku stay? Ask about Akshaya Inn for your dates. Share your preferred room setup, guest count and any requirements so our team can request availability and a quote.",
  },
  {
    name: "Hotel Rajadhani Grand",
    image: hero,
    imageAlt: "Green hills in Araku Valley",
    imageCaption: "Araku Valley · destination image",
    description:
      "Explore a stay at Hotel Rajadhani Grand, listed in our Araku collection. Discuss room types, meal preferences and arrangements for your group before confirming.",
  },
  {
    name: "Apple Resort",
    image: hero,
    imageAlt: "Araku Valley scenery at sunrise",
    imageCaption: "Araku Valley · destination image",
    description:
      "Considering Apple Resort for your valley break? Ask our team to check current rooms, rates and inclusions for your travel dates and group.",
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
