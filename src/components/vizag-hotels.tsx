import { HotelCollection } from "@/components/hotel-collection";
import { vizagHotels } from "@/components/vizag-hotel-data";
export function VizagHotels() {
  return (
    <HotelCollection
      region="Vizag"
      heroImage={
        vizagHotels.find(
          (hotel) => hotel.name === "Novotel Visakhapatnam Varun Beach",
        )!.image
      }
      heroAlt="Novotel Visakhapatnam Varun Beach overlooking the coast"
      intro="Find a place to pause between coastal days and valley adventures. Share your dates and room preferences with our local team."
      hotels={vizagHotels}
    />
  );
}
