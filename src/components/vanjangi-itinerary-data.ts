import { Waves, Compass, Coffee, Mountain } from "lucide-react";
import hero from "@/assets/hero.jpg";

const coast =
  "https://www.vizagarakutourpackages.com/wp-content/uploads/2024/01/vizag2.jpg";
export const vanjangiPlan = [
  {
    title: "A coastal welcome.",
    place: "Visakhapatnam",
    tag: "Arrival & southern coast",
    icon: Waves,
    image: coast,
    alt: "Visakhapatnam coastal scenery",
    stay: "Night 1 in Vizag",
    intro:
      "Arrive, freshen up and ease into your holiday with city and coastal sights.",
    plan: [
      {
        period: "Morning · Pickup & temple visit",
        description:
          "Meet your driver and freshen up at the hotel, subject to check-in availability. Begin with Simhachalam Temple, adjusting the start around your arrival.",
      },
      {
        period: "Afternoon · Southern coastline",
        description:
          "Break for lunch, then explore Yarada, the lighthouse and Dolphin Hill as access and time permit.",
      },
      {
        period: "Evening · City stops & rest",
        description:
          "Include Sagar Durga Temple and City Central Park before returning to your Vizag accommodation. Confirm opening hours with the team.",
      },
    ],
    stops: [
      "Simhachalam Temple",
      "Yarada Beach & lighthouse",
      "Dolphin Hill",
      "Sagar Durga Temple & City Central Park",
    ],
  },
  {
    title: "A day beside the sea.",
    place: "Visakhapatnam",
    tag: "Coastal landmarks",
    icon: Compass,
    image: coast,
    alt: "Coastal scenery around Vizag",
    stay: "Night 2 in Vizag",
    intro:
      "Explore more of Vizag and return to the same hotel for your second night.",
    plan: [
      {
        period: "Morning · Temple & coastal drive",
        description:
          "Visit TTD Temple, then continue towards Ramanaidu Studio and Rushikonda. Agree the visit order with your driver.",
      },
      {
        period: "Afternoon · Hilltop & heritage",
        description:
          "After a lunch break, visit Kailasagiri and Visakha Museum. Allow flexibility for attraction access and queues.",
      },
      {
        period: "Evening · Museums & RK Beach",
        description:
          "Visit the submarine and aircraft museums as opening hours allow, then spend time at RK Beach before returning to the hotel.",
      },
    ],
    stops: [
      "TTD Temple & Ramanaidu Studio",
      "Rushikonda & Kailasagiri",
      "Visakha, submarine & aircraft museums",
      "RK Beach",
    ],
  },
  {
    title: "Trade the coast for coffee country.",
    place: "Vizag → Araku",
    tag: "Valley journey",
    icon: Coffee,
    image: hero,
    alt: "Green hills of the Eastern Ghats",
    stay: "Night 3 in Araku",
    intro:
      "Check out and follow the hill road to Araku, with caves and coffee along the way.",
    plan: [
      {
        period: "Morning · Checkout & hill drive",
        description:
          "Leave Vizag after breakfast, with a stop around Damuku before exploring Borra Caves. Wear comfortable shoes for the steps.",
      },
      {
        period: "Afternoon · Coffee & valley views",
        description:
          "Pause for lunch, then continue via Ananthagiri’s coffee-growing area and Galikonda viewpoint.",
      },
      {
        period: "Evening · Local heritage & check-in",
        description:
          "Visit the Tribal Museum and Coffee House if time permits, then check in at Araku. Katiki is excluded from the standard route.",
      },
    ],
    stops: [
      "Damuku viewpoint & Borra Caves",
      "Ananthagiri coffee plantations",
      "Galikonda viewpoint",
      "Tribal Museum & Coffee House",
    ],
  },
  {
    title: "A morning above the everyday.",
    place: "Araku → Vanjangi → Lambasingi",
    tag: "Early hill-country start",
    icon: Mountain,
    image: hero,
    alt: "Eastern Ghats landscape illustrating the hill-country route",
    stay: "Night 4 in Lambasingi",
    intro:
      "An early transfer connects the Vanjangi viewpoint with your next overnight base in Lambasingi.",
    plan: [
      {
        period: "Before dawn · Checkout & Vanjangi",
        description:
          "The reference suggests a 4 AM departure. Confirm timing, walking requirements and viewpoint access with the operator. Mist and sunrise visibility depend on weather.",
      },
      {
        period: "Daytime · Waterfall stop & travel",
        description:
          "Allow time for breakfast and rest, then continue towards Kothapalli waterfalls. Confirm access and a practical stop duration with your driver.",
      },
      {
        period: "Evening · Lambasingi arrival",
        description:
          "Check in at the confirmed Lambasingi resort and rest. Prepare a warm layer and discuss the next morning’s departure with the team.",
      },
    ],
    stops: [
      "Vanjangi viewpoint",
      "Kothapalli waterfalls",
      "Transfer to Lambasingi",
      "Resort check-in & rest",
    ],
  },
  {
    title: "One last hill-country morning.",
    place: "Lambasingi → Vizag",
    tag: "Viewpoint & homeward journey",
    icon: Mountain,
    image: hero,
    alt: "Hill scenery illustrating a Lambasingi morning",
    stay: "Return to Vizag · station or airport drop",
    intro:
      "Enjoy an early viewpoint visit before checkout and the return journey to Vizag.",
    plan: [
      {
        period: "Before dawn · Lambasingi viewpoint",
        description:
          "The reference suggests another 4 AM start. Confirm access and transport, then return to the accommodation to freshen up and check out.",
      },
      {
        period: "Daytime · Plantation & reservoir",
        description:
          "Visit a strawberry plantation if seasonal access permits, then Thajangi Reservoir before continuing towards Vizag. Allow time for meals and breaks.",
      },
      {
        period: "Afternoon or evening · Vizag drop-off",
        description:
          "Confirm your station or airport drop time in writing. The source gives conflicting return times, so arrange onward travel only after the team confirms the schedule.",
      },
    ],
    stops: [
      "Lambasingi viewpoint",
      "Strawberry plantation · seasonal",
      "Thajangi Reservoir",
      "Vizag station or airport drop",
    ],
  },
];
