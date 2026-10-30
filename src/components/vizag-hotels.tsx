import { HotelCollection } from "@/components/hotel-collection";
const roomImage =
  "https://www.vizagarakutourpackages.com/wp-content/uploads/2024/01/Twin-Beds-Room-View-1024x768-1.jpg";
export function VizagHotels() {
  return (
    <HotelCollection
      region="Vizag"
      heroImage={roomImage}
      heroAlt="Twin-bed room shown in the Hotel Lotus Park listing"
      intro="Find a place to pause between coastal days and valley adventures. Share your dates and room preferences with our local team."
      hotels={[
        {
          name: "Hotel Lotus Park",
          image: roomImage,
          imageAlt: "Twin-bed room from the Hotel Lotus Park reference",
          description:
            "Considering a stay in Vizag? Ask about rooms at Hotel Lotus Park for your travel dates. Our team can help discuss room preferences and arrangements for your group.",
        },
      ]}
    />
  );
}
