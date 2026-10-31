import { Compass, Mountain, Waves } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { jagdalpurImage } from "@/components/jagdalpur-itinerary-data";

export const vizagJagdalpurPlan = [
  {
    title: "A coastal beginning.",
    place: "Visakhapatnam · proposed",
    tag: "Proposed Day 1",
    icon: Waves,
    image:
      "https://www.vizagarakutourpackages.com/wp-content/uploads/2024/01/vizag2.jpg",
    alt: "Visakhapatnam coastal scenery",
    stay: "Proposed night 1 in Vizag · confirm with operator",
    intro:
      "The source does not publish daily activities. This suggested city day depends on your arrival and the operator’s final route.",
    plan: [
      {
        period: "Morning · Arrival & freshen up",
        description:
          "Agree a pickup point and time with the team. Transfer to the confirmed accommodation, with check-in subject to availability.",
      },
      {
        period: "Afternoon · Suggested city sights",
        description:
          "Discuss a short coastal drive, hilltop views or museum visits that fit your arrival time. Leave room for lunch and rest.",
      },
      {
        period: "Evening · Hotel & next-day planning",
        description:
          "Return to your accommodation and confirm the next day’s transport, departure time and sightseeing priorities.",
      },
    ],
    stops: [
      "Confirmed Vizag pickup",
      "Optional coast or city sights",
      "Meal and rest breaks",
      "Proposed overnight base · Vizag",
    ],
  },
  {
    title: "Into coffee country.",
    place: "Vizag → Araku · proposed",
    tag: "Proposed Day 2",
    icon: Mountain,
    image: hero,
    alt: "Green hills of Araku Valley",
    stay: "Proposed night 2 in Araku · confirm with operator",
    intro:
      "A suggested valley day, to be finalised around travel time and accommodation availability.",
    plan: [
      {
        period: "Morning · Checkout & hill journey",
        description:
          "Confirm the mode of travel and leave Vizag at the agreed time. Train travel is not promised; ask whether tickets or road transfers are included.",
      },
      {
        period: "Afternoon · Suggested valley stops",
        description:
          "Discuss caves, coffee-country viewpoints or local heritage visits with your driver. Choose a manageable set of stops around meals and access conditions.",
      },
      {
        period: "Evening · Araku check-in",
        description:
          "Settle into the accommodation confirmed in your quote. Review the longer transfer towards Jagdalpur before the next day.",
      },
    ],
    stops: [
      "Transport mode · confirm",
      "Optional valley sightseeing",
      "Coffee-country views",
      "Proposed overnight base · Araku",
    ],
  },
  {
    title: "A journey to a wider horizon.",
    place: "Araku → Jagdalpur · proposed",
    tag: "Proposed Day 3",
    icon: Compass,
    image: hero,
    alt: "Hill scenery illustrating the proposed transfer route",
    stay: "Proposed night 3 in Jagdalpur · confirm with operator",
    intro:
      "Keep this suggested transfer day flexible, with the exact route and travel duration agreed in advance.",
    plan: [
      {
        period: "Morning · Checkout & transfer",
        description:
          "Depart after confirming the vehicle or train arrangements, luggage plan and expected journey duration. Do not assume a particular service or timetable.",
      },
      {
        period: "Afternoon · Travel & rest breaks",
        description:
          "Allow time for meals and comfort stops. Add sightseeing only if it fits the confirmed route and arrival time.",
      },
      {
        period: "Evening · Jagdalpur arrival",
        description:
          "Check in and rest. Discuss a short local outing only if the group is comfortable and there is enough time.",
      },
    ],
    stops: [
      "Confirmed Araku–Jagdalpur connection",
      "Meals and travel breaks",
      "Optional local outing",
      "Proposed overnight base · Jagdalpur",
    ],
  },
  {
    title: "Make room for waterfall country.",
    place: "Jagdalpur region · proposed",
    tag: "Proposed Day 4",
    icon: Waves,
    image: jagdalpurImage,
    alt: "Waterfall scenery in the Jagdalpur region",
    stay: "Proposed night 4 in Jagdalpur · confirm with operator",
    intro:
      "Use this suggested exploration day to choose the region’s sights that matter most to your group.",
    plan: [
      {
        period: "Morning · Agreed sightseeing route",
        description:
          "Ask the operator to propose a practical waterfall, temple or heritage circuit. Confirm the actual stops, walking requirements and opening arrangements.",
      },
      {
        period: "Afternoon · Nature visits & lunch",
        description:
          "Continue with the agreed route after a meal break. Cave entry, boating and park activities need specific confirmation and may involve extra charges.",
      },
      {
        period: "Evening · Return & prepare",
        description:
          "Return to the confirmed accommodation and prepare for the final transfer. Recheck departure timing and your onward connection with the team.",
      },
    ],
    stops: [
      "Waterfall visits · operator to confirm",
      "Optional temples or heritage",
      "Activities · availability dependent",
      "Proposed second Jagdalpur night",
    ],
  },
  {
    title: "Homeward, with time to spare.",
    place: "Jagdalpur → Vizag · proposed",
    tag: "Proposed Day 5",
    icon: Compass,
    image: jagdalpurImage,
    alt: "Jagdalpur-region landscape",
    stay: "Proposed Vizag drop · timing and feasibility to be confirmed",
    intro:
      "The final transfer needs careful planning. Confirm whether a same-day Vizag drop is feasible before booking onward travel.",
    plan: [
      {
        period: "Morning · Checkout & departure",
        description:
          "Leave at the time agreed with your operator. Confirm the route, transport mode and full journey duration in writing.",
      },
      {
        period: "Daytime · Return transfer",
        description:
          "Allow for the long journey, meals, traffic and breaks. Avoid adding sightseeing unless the operator confirms it is practical.",
      },
      {
        period: "Arrival · Agreed drop-off",
        description:
          "Complete the transfer at the confirmed location. Do not rely on the reference’s approximate return time when arranging a train or flight; agree a realistic buffer first.",
      },
    ],
    stops: [
      "Confirmed checkout and departure",
      "Long-distance return transfer",
      "Rest and meal breaks",
      "Vizag drop · confirm feasibility",
    ],
  },
];

export const vizagJagdalpurFaq = [
  [
    "Is this the operator’s confirmed daily itinerary?",
    "No. The reference names the destinations and duration but publishes no daily programme. All five days here are suggestions. Confirm the final route, sightseeing, transport and overnight locations in writing before booking.",
  ],
  [
    "What is the current price?",
    "The headline and package card show ₹36,800, while the overview lists ₹14,500 per person. Ask for the current price basis, total group cost, accommodation, meals, tickets, transfers and taxes in a written quote.",
  ],
  [
    "How are the four nights arranged?",
    "This proposed outline suggests one night in Vizag, one in Araku and two in Jagdalpur. These locations are not confirmed by the source. The operator may need to change the order or distribution to fit transport and arrival times.",
  ],
  [
    "Are return timing and activities guaranteed?",
    "No. Confirm the final transfer duration and whether a same-day Vizag drop fits your onward plans. Cave access, boating, waterfall visits and park activities depend on local conditions, permissions and availability; ask which are included.",
  ],
];
