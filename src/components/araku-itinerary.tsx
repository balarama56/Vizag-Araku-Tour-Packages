import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  Coffee,
  Compass,
  MapPin,
  Mountain,
  Moon,
  Phone,
  Waves,
  Sunrise,
} from "lucide-react";
import { Nav, Footer, Tilt } from "@/components/site";
import { whatsappUrl, callUrl } from "@/components/contact-actions";
import hero from "@/assets/hero.jpg";
import { vanjangiPlan } from "@/components/vanjangi-itinerary-data";
import {
  maredumilliPlan,
  maredumilliFaq,
  maredumilliImage,
} from "@/components/maredumilli-itinerary-data";
import {
  deomaliPlan,
  deomaliFaq,
  deomaliImage,
} from "@/components/deomali-itinerary-data";
import {
  vizagJagdalpurPlan,
  vizagJagdalpurFaq,
} from "@/components/vizag-jagdalpur-itinerary-data";
import {
  jagdalpurPlan,
  jagdalpurFaq,
  jagdalpurImage,
} from "@/components/jagdalpur-itinerary-data";
import {
  papikondaluPlan,
  papikondaluFaq,
  riverImage,
} from "@/components/papikondalu-itinerary-data";

const uploads = "https://www.vizagarakutourpackages.com/wp-content/uploads";
const days = [
  {
    title: "Hello, coastal living.",
    place: "Visakhapatnam",
    tag: "The coast",
    icon: Waves,
    image: `${uploads}/2024/01/vizag2.jpg`,
    alt: "Visakhapatnam coastal scenery",
    stay: "Night in Vizag",
    intro:
      "Settle in after pickup, then spend the day discovering the city by the sea.",
    plan: [
      {
        period: "Morning · Arrival & coastal drive",
        description:
          "Meet the team at your agreed pickup point in Vizag and head to your hotel to freshen up, subject to check-in availability. Begin the coastal drive towards Bheemili and Rushikonda beaches, with a stop at Ramanaidu Studio if time allows.",
      },
      {
        period: "Afternoon · City sights & hilltop views",
        description:
          "Pause for lunch, then explore Visakha Museum and Kailasagiri for views across the city and coastline. Your driver will coordinate the order of visits around your arrival time and attraction access.",
      },
      {
        period: "Evening · Beach walk & return to hotel",
        description:
          "Continue to RK Beach and visit the submarine and aircraft museums, subject to opening hours. Enjoy some time by the sea before returning to your Vizag hotel for an overnight stay.",
      },
    ],
    stops: [
      "Bheemili & Rushikonda beaches",
      "Ramanaidu Studio & Visakha Museum",
      "Kailasagiri hilltop",
      "RK Beach, submarine & aircraft museums",
    ],
  },
  {
    title: "Take the winding road.",
    place: "Vizag → Araku",
    tag: "The mountains",
    icon: Mountain,
    image: hero,
    alt: "Layers of green hills in the Eastern Ghats",
    stay: "Night in Araku",
    intro:
      "Leave the city behind for forested hills, dramatic caves and fresh coffee country.",
    plan: [
      {
        period: "Morning · Check out & head for the hills",
        description:
          "After breakfast, check out of your Vizag hotel and leave for Araku Valley. Visit Simhachalam Temple before continuing into the Eastern Ghats, with scenic stops around Tyda and Damuku as time permits.",
      },
      {
        period: "Afternoon · Discover Borra Caves",
        description:
          "Stop for lunch along the route and explore Borra Caves on foot. Allow time for the steps and uneven surfaces inside. Continue towards Galikonda viewpoint for a break and valley photographs.",
      },
      {
        period: "Evening · Coffee country & Araku stay",
        description:
          "Travel through the Ananthagiri coffee-growing area before reaching Araku. Check in to your confirmed hotel or resort and spend the evening at leisure. Stay overnight in Araku; Katiki waterfall is not part of this day’s standard route.",
      },
    ],
    stops: [
      "Simhachalam Temple",
      "Tyda & Damuku viewpoints",
      "Borra Caves",
      "Galikonda & Ananthagiri coffee plantations",
    ],
  },
  {
    title: "A little more valley time.",
    place: "Araku → Vizag",
    tag: "The memories",
    icon: Coffee,
    image: `${uploads}/2020/11/Araku-Train-View-720x606-1-720x520.jpg`,
    alt: "Scenic Araku Valley landscape",
    stay: "Return to Vizag",
    intro:
      "Explore the valley’s gardens and local heritage before your return to the railway station.",
    plan: [
      {
        period: "Morning · Check out & explore the valley",
        description:
          "After breakfast, pack your bags and check out of your Araku accommodation. Head to Chaprai to enjoy the scenery, then explore Padmapuram Gardens. Access to the water at Chaprai depends on local conditions and restrictions.",
      },
      {
        period: "Afternoon · Local heritage & coffee stop",
        description:
          "Visit the Tribal Museum to learn about the region’s communities, then stop at Coffee House before lunch and the return drive. Keep sightseeing flexible so there is enough time for your onward journey.",
      },
      {
        period: "Evening · Return to Visakhapatnam",
        description:
          "Drive back to Vizag and finish with a drop at the railway station as arranged with the team. Share your train departure time before booking so the return schedule and sightseeing stops can be planned accordingly.",
      },
    ],
    stops: [
      "Chaprai waterfalls",
      "Padmapuram Gardens",
      "Tribal Museum",
      "Coffee House & return journey",
    ],
  },
];

function TravelImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        if (e.currentTarget.getAttribute("src") !== hero)
          e.currentTarget.src = hero;
      }}
    />
  );
}

const twoDayPlan = [
  days[0]!,
  {
    title: "Through tunnels. Into the valley.",
    place: "Vizag → Araku → Vizag",
    tag: "The valley by rail",
    icon: Mountain,
    image: `${uploads}/2020/11/Araku-Train-View-720x606-1-720x520.jpg`,
    alt: "Scenic railway journey through the Araku hills",
    stay: "Return to Vizag · no second overnight stay",
    intro:
      "A full day of railway scenery and valley discoveries, followed by the drive back to the coast.",
    plan: [
      {
        period: "Morning · Check out & board the train",
        description:
          "Leave your Vizag hotel and transfer to the station for the scenic journey towards Borra Guhalu. Meet your driver on arrival. Train seats and departure arrangements need confirmation before travel; ask about a road alternative if tickets are unavailable.",
      },
      {
        period: "Afternoon · Caves, coffee & valley sights",
        description:
          "Explore Borra Caves, then continue to the coffee-growing hills and Galikonda viewpoint. Break for lunch. Discuss which museum, garden and Tadiguda waterfall stops fit the remaining time; this is a busy day, so prioritise your favourites with the team.",
      },
      {
        period: "Evening · Drive back to the coast",
        description:
          "Return by road, with Damuku or Tyda photo stops if daylight and time allow. Confirm your Vizag drop point and expected arrival before booking any onward connection. Katiki is excluded.",
      },
    ],
    stops: [
      "Borra Caves & coffee plantations",
      "Galikonda viewpoint",
      "Tribal Museum & gardens · time permitting",
      "Tadiguda, Damuku & Tyda · confirm stops",
    ],
  },
];

const fourDayPlan = [
  {
    ...days[0]!,
    intro:
      "Begin with Vizag’s northern coastline and city landmarks, then return to your hotel.",
    plan: [
      {
        period: "Morning · Beaches & heritage",
        description:
          "After breakfast, follow the coast towards Bheemili and Thotlakonda, then continue to Rushikonda. Agree the start time with your driver.",
      },
      {
        period: "Afternoon · Hilltop & museums",
        description:
          "Break for lunch before Kailasagiri and Visakha Museum. Check access and opening hours with the team.",
      },
      {
        period: "Evening · Waterfront & hotel",
        description:
          "Explore RK Beach, the submarine museum and Fishing Harbour as time permits. Return to your Vizag accommodation.",
      },
    ],
    stops: [
      "Bheemili & Thotlakonda",
      "Rushikonda & Kailasagiri",
      "Visakha & submarine museums",
      "RK Beach & Fishing Harbour",
    ],
  },
  {
    ...days[0]!,
    title: "A quieter side of Vizag.",
    tag: "Temple & southern coast",
    intro: "Spend another day in the city before the valley journey begins.",
    plan: [
      {
        period: "Morning · Simhachalam",
        description:
          "Visit Simhachalam Temple after breakfast. Allow flexibility for queues and local access arrangements.",
      },
      {
        period: "Afternoon · Dolphin Hill & Yarada",
        description:
          "After lunch, head towards Dolphin Hill and Yarada Beach for coastal scenery and photographs.",
      },
      {
        period: "Evening · Rest & prepare",
        description:
          "Return to the same hotel. Pack for tomorrow’s checkout and confirm your departure time. Stay a second night in Vizag.",
      },
    ],
    stops: [
      "Simhachalam Temple",
      "Dolphin Hill",
      "Yarada Beach",
      "Second overnight stay in Vizag",
    ],
  },
  {
    ...days[1]!,
    title: "Coffee roads. Valley moments.",
    intro:
      "Leave the coast by road and settle into Araku’s hill-country atmosphere.",
    plan: [
      {
        period: "Morning · Check out & valley drive",
        description:
          "Check out after breakfast. Travel towards Araku via Galikonda viewpoint and Ananthagiri’s coffee-growing slopes, allowing time for short breaks.",
      },
      {
        period: "Afternoon · Gardens & local heritage",
        description:
          "Check in as available and pause for lunch. Explore Padmapuram Gardens, Chaprai and the Tribal Museum in an order agreed with your driver.",
      },
      {
        period: "Evening · Coffee stop & unwind",
        description:
          "Include the Coffee Museum if time permits, then return to your Araku accommodation. Enjoy the evening at leisure before the final travel day.",
      },
    ],
    stops: [
      "Galikonda & Ananthagiri coffee plantations",
      "Padmapuram Gardens & Chaprai",
      "Tribal Museum & Coffee Museum",
      "Overnight stay in Araku",
    ],
  },
  {
    ...days[2]!,
    title: "One last wonder on the way.",
    tag: "Caves & homeward views",
    intro: "Make Borra Caves the final highlight before returning to Vizag.",
    plan: [
      {
        period: "Morning · Check out & Borra Caves",
        description:
          "After breakfast, leave your Araku accommodation and head towards Borra Caves. Wear comfortable shoes for steps and uneven surfaces.",
      },
      {
        period: "Afternoon · Explore & continue",
        description:
          "Allow time to explore the caves, then break for lunch before continuing by road towards Vizag.",
      },
      {
        period: "Evening · Vizag drop-off",
        description:
          "Finish at your agreed Vizag drop point. Confirm the return schedule before arranging an onward connection, allowing a buffer for traffic and delays.",
      },
    ],
    stops: [
      "Check out of Araku accommodation",
      "Borra Caves",
      "Return drive through the hills",
      "Agreed drop-off in Vizag",
    ],
  },
];

const annavaramPlan = [
  {
    ...days[0]!,
    stops: [
      "Bheemili, Rushikonda & RK Beach",
      "Ramanaidu Studio & Zoo Park · time permitting",
      "Kailasagiri & Visakha Museum",
      "Submarine & aircraft museums",
    ],
  },
  {
    ...days[0]!,
    title: "A day of devotion.",
    place: "Vizag → Annavaram → Vizag",
    tag: "The temple trail",
    icon: Compass,
    image: `${uploads}/2024/01/araku-annvaram-820x520.jpg`,
    alt: "Temple scenery on the Annavaram tour route",
    intro:
      "Set aside the day for temple visits, returning to your Vizag hotel.",
    plan: [
      {
        period: "Morning · Leave for Annavaram",
        description:
          "Start early at the time agreed with your driver. Travel to Annavaram Satyanarayana Temple, allowing flexibility for the journey and darshan queues.",
      },
      {
        period: "Afternoon · Talupulamma Lova visit",
        description:
          "Pause for lunch and continue to Talupulamma Lova Temple. Confirm the visit order, access and any ritual arrangements with the operator before departure.",
      },
      {
        period: "Evening · Simhachalam & return",
        description:
          "Head back towards Vizag, with Simhachalam Temple planned en route subject to timing and access. Return to your hotel for the second night.",
      },
    ],
    stops: [
      "Annavaram Satyanarayana Temple",
      "Talupulamma Lova Temple",
      "Simhachalam Temple · subject to timing",
      "Second overnight stay in Vizag",
    ],
  },
  {
    ...days[1]!,
    title: "From temple bells to valley trails.",
    intro:
      "Check out and take the scenic road into Araku, with caves and coffee along the way.",
    plan: [
      {
        period: "Morning · Check out & hill drive",
        description:
          "Leave your Vizag hotel and head into the hills. Discuss short stops around Damuku and Tyda with your driver.",
      },
      {
        period: "Afternoon · Borra Caves & coffee country",
        description:
          "Break for lunch and explore Borra Caves. Continue via Galikonda viewpoint and Ananthagiri’s coffee plantations, adjusting stops to daylight and road conditions.",
      },
      {
        period: "Evening · Photo stop & Araku check-in",
        description:
          "Include Sunkarimetta if time permits, then check in to your confirmed Araku accommodation. Katiki is excluded from the standard vehicle route.",
      },
    ],
    stops: [
      "Damuku & Tyda viewpoints",
      "Borra Caves",
      "Galikonda & Ananthagiri coffee plantations",
      "Sunkarimetta · time permitting",
    ],
  },
  {
    ...days[2]!,
    plan: [
      {
        period: "Morning · Check out & gardens",
        description:
          "Pack your bags and check out after breakfast. Begin the day with Padmapuram Gardens.",
      },
      {
        period: "Afternoon · Heritage & coffee",
        description:
          "Explore the Tribal Museum and Coffee House before the return drive. Keep visits flexible around your onward departure.",
      },
      {
        period: "Evening · Station or airport drop",
        description:
          "Return to Vizag for your agreed railway station or airport drop. Share your departure details before booking so the team can allow a suitable travel buffer.",
      },
    ],
    stops: [
      "Padmapuram Gardens",
      "Tribal Museum",
      "Coffee House",
      "Vizag station or airport drop",
    ],
  },
];

const arakuOnlyPlan = [
  {
    ...annavaramPlan[2]!,
    title: "Into the hills. Into your holiday.",
    intro:
      "Start with a Vizag pickup and follow the road to Araku, discovering viewpoints, caves and coffee country along the way.",
    plan: [
      {
        period: "Morning · Vizag pickup & hill drive",
        description:
          "Meet your driver at the agreed Vizag pickup point. Head into the Eastern Ghats with short stops around Damuku and Tyda, depending on your arrival time and road conditions.",
      },
      {
        period: "Afternoon · Caves & coffee country",
        description:
          "Pause for lunch and explore Borra Caves. Continue via Galikonda viewpoint and Ananthagiri’s coffee plantations, leaving time for photos and short breaks.",
      },
      {
        period: "Evening · Valley arrival & overnight stay",
        description:
          "Include Sunkarimetta if daylight and time allow, then check in to your Araku hotel or resort. Settle in for the night. Katiki is excluded from the standard route.",
      },
    ],
  },
  { ...annavaramPlan[3]!, title: "A valley morning to remember." },
];

const lambasingiPlan = [
  days[0]!,
  {
    ...twoDayPlan[1]!,
    title: "Railway views. Valley discoveries.",
    stay: "Second overnight stay · location to be confirmed",
    intro:
      "Explore the valley, then follow the overnight arrangement confirmed by the operator. The source returns to Vizag on Day 2 despite the three-day title.",
  },
  {
    ...days[2]!,
    title: "A fresh perspective in Lambasingi.",
    place: "Lambasingi → Vizag · proposed",
    tag: "Proposed hill-country day",
    image: hero,
    alt: "Eastern Ghats scenery illustrating the proposed hill-country day",
    intro:
      "The source does not publish Day 3. This proposed Lambasingi extension needs operator confirmation, including the second overnight location and all transfers.",
    plan: [
      {
        period: "Morning · Proposed Lambasingi visit",
        description:
          "Agree an early start based on your confirmed overnight location. Ask which viewpoints are practical. Mist and sunrise visibility depend on weather and are not guaranteed.",
      },
      {
        period: "Afternoon · Break & return drive",
        description:
          "Allow time for a meal and begin the return journey. Agree any extra stops around road conditions, available daylight and your onward travel.",
      },
      {
        period: "Evening · Confirmed Vizag drop-off",
        description:
          "Finish at the Vizag drop point agreed in your quote. Share train or flight details before booking so the team can allow a suitable buffer.",
      },
    ],
    stops: [
      "Lambasingi · proposed visit",
      "Viewpoints · confirm with operator",
      "Weather-dependent views",
      "Agreed drop-off in Vizag",
    ],
  },
];

const arakuLambasingiPlan = [
  arakuOnlyPlan[0]!,
  {
    ...days[1]!,
    title: "An early start. A new horizon.",
    place: "Araku → Lambasingi → Araku",
    tag: "Lambasingi excursion",
    intro:
      "Leave early for Lambasingi, explore the surrounding countryside, and return to the same Araku accommodation.",
    plan: [
      {
        period: "Before dawn · Lambasingi viewpoint",
        description:
          "The reference suggests a 2 AM start from Araku. Confirm the pickup time, driving arrangements and viewpoint access with your operator. Carry a warm layer; clear sunrise views and mist depend on weather.",
      },
      {
        period: "Daytime · Plantations & waterfalls",
        description:
          "Pause for breakfast, then visit a strawberry plantation if seasonal access permits. Continue towards Kothapalli waterfalls, with a lunch break. Agree the visit order with your driver.",
      },
      {
        period: "Evening · Chaprai & Araku return",
        description:
          "Include Chaprai if road conditions, daylight and timing allow. Return to Araku for your second overnight stay and some rest after the early start.",
      },
    ],
    stops: [
      "Lambasingi viewpoint",
      "Strawberry plantation · seasonal",
      "Kothapalli waterfalls",
      "Chaprai · time permitting",
    ],
  },
  {
    ...arakuOnlyPlan[1]!,
    title: "One more morning in the valley.",
    intro:
      "Check out, enjoy Araku’s local sights and return to Vizag for your onward journey.",
    plan: [
      {
        period: "Morning · Check out & local sights",
        description:
          "After breakfast, check out and discuss Ranajilleda waterfall access with your driver. Continue to Padmapuram Gardens, keeping visits flexible around conditions.",
      },
      {
        period: "Afternoon · Heritage & coffee",
        description:
          "Visit the Tribal Museum and Coffee House before the return drive. Allow time for lunch and breaks.",
      },
      {
        period: "Evening · Vizag drop-off",
        description:
          "Finish at the agreed Vizag railway station or airport. Share your departure time before booking so the team can confirm a practical return schedule.",
      },
    ],
    stops: [
      "Ranajilleda waterfalls · access permitting",
      "Padmapuram Gardens",
      "Tribal Museum & Coffee House",
      "Vizag station or airport drop",
    ],
  },
];

const lambasingiFourDayPlan = [
  days[0]!,
  lambasingiPlan[1]!,
  {
    ...arakuLambasingiPlan[1]!,
    title: "A proposed day in Lambasingi.",
    place: "Lambasingi excursion · proposed",
    tag: "Proposed Day 3",
    intro:
      "The reference does not publish Days 3–4. This suggested Lambasingi excursion, its transfers and the third overnight location need operator confirmation.",
    stay: "Third overnight stay · location to be confirmed",
    plan: [
      {
        period: "Morning · Proposed viewpoint visit",
        description:
          "Agree a departure based on the confirmed second-night location. Discuss Lambasingi viewpoint access and a realistic driving schedule. Mist and sunrise visibility depend on weather.",
      },
      {
        period: "Afternoon · Suggested countryside stops",
        description:
          "Ask about seasonal strawberry plantation access and waterfall visits. Confirm which stops fit your route, with time for meals and rest.",
      },
      {
        period: "Evening · Agreed overnight stop",
        description:
          "Travel to the accommodation confirmed in your written quote. The reference does not identify the third overnight location; agree this before booking.",
      },
    ],
    stops: [
      "Lambasingi viewpoint · proposed",
      "Seasonal plantation · confirm access",
      "Waterfalls · agree route and conditions",
      "Third overnight location · confirm",
    ],
  },
  {
    ...arakuLambasingiPlan[2]!,
    title: "A final chapter, at your pace.",
    place: "Return to Vizag · proposed",
    tag: "Proposed Day 4",
    intro:
      "A suggested final day to be adapted to your confirmed overnight base and onward departure. Local sightseeing is optional until agreed with the operator.",
    plan: [
      {
        period: "Morning · Check out & optional local visits",
        description:
          "Check out after breakfast. If staying near Araku, discuss gardens or museum visits; otherwise agree stops suited to your actual return route.",
      },
      {
        period: "Afternoon · Return journey",
        description:
          "Allow time for lunch and the drive to Vizag. Avoid adding detours until the team confirms travel time and your onward connection.",
      },
      {
        period: "Evening · Confirmed drop-off",
        description:
          "Finish at the Vizag drop point agreed in your quote. Share your train or flight details before booking and allow a suitable buffer.",
      },
    ],
    stops: [
      "Check out of confirmed accommodation",
      "Optional local sights · agree route",
      "Return transfer to Vizag",
      "Final drop-off · confirm location",
    ],
  },
];

export function ArakuItinerary({
  variant = "three-day",
}: {
  variant?:
    | "three-day"
    | "two-day"
    | "four-day"
    | "annavaram"
    | "araku-only"
    | "lambasingi"
    | "araku-lambasingi"
    | "lambasingi-four-day"
    | "vanjangi-five-day"
    | "papikondalu"
    | "jagdalpur"
    | "vizag-jagdalpur"
    | "deomali"
    | "maredumilli";
}) {
  const isForest = variant === "maredumilli";
  const isDayTrip = variant === "deomali";
  const isVizagJagdalpur = variant === "vizag-jagdalpur";
  const isJagdalpur = variant === "jagdalpur" || isVizagJagdalpur;
  const isRiver = variant === "papikondalu";
  const collectionUrl = isForest
    ? "/tour/vizag-maredumilli-tour-packages"
    : isDayTrip
      ? "/tour/vizag-deomali-tour-packages"
      : isJagdalpur
        ? "/tour/vizag-jagdalpur-tour-packages"
        : isRiver
          ? "/tour/vizag-papikondallu-tour-packages"
          : variant === "lambasingi" ||
              variant === "araku-lambasingi" ||
              variant === "lambasingi-four-day" ||
              variant === "vanjangi-five-day"
            ? "/tour/vizag-lambasinghi-tour-packages"
            : "/tour/vizag-araku-tour-packages";
  const isVanjangi = variant === "vanjangi-five-day";
  const isLambasingiFourDay = variant === "lambasingi-four-day";
  const isHillPair = variant === "araku-lambasingi";
  const isLambasingi =
    variant === "lambasingi" || isHillPair || isLambasingiFourDay || isVanjangi;
  const isArakuOnly = variant === "araku-only";
  const isAnnavaram = variant === "annavaram";
  const isTwoDay = variant === "two-day";
  const isFourDay =
    variant === "four-day" || isAnnavaram || isLambasingiFourDay;
  const itineraryDays = isForest
    ? maredumilliPlan
    : isDayTrip
      ? deomaliPlan
      : isVizagJagdalpur
        ? vizagJagdalpurPlan
        : isJagdalpur
          ? jagdalpurPlan
          : isRiver
            ? papikondaluPlan
            : isVanjangi
              ? vanjangiPlan
              : isLambasingiFourDay
                ? lambasingiFourDayPlan
                : isHillPair
                  ? arakuLambasingiPlan
                  : isLambasingi
                    ? lambasingiPlan
                    : isArakuOnly
                      ? arakuOnlyPlan
                      : isAnnavaram
                        ? annavaramPlan
                        : isFourDay
                          ? fourDayPlan
                          : isTwoDay
                            ? twoDayPlan
                            : days;
  const duration = isDayTrip
    ? "1 day tour"
    : isVanjangi || isJagdalpur
      ? "5 days / 4 nights"
      : isFourDay
        ? "4 days / 3 nights"
        : isTwoDay || isArakuOnly || isRiver
          ? "2 days / 1 night"
          : "3 days / 2 nights";
  const price = isForest
    ? "21,000"
    : isDayTrip
      ? "10,869"
      : isVizagJagdalpur
        ? "36,800"
        : isJagdalpur
          ? "37,050"
          : isRiver
            ? "15,900"
            : isVanjangi
              ? "32,500"
              : isLambasingiFourDay
                ? "25,500"
                : isLambasingi
                  ? "21,000"
                  : isArakuOnly
                    ? "10,900"
                    : isAnnavaram
                      ? "24,500"
                      : isFourDay
                        ? "23,500"
                        : isTwoDay
                          ? "11,990"
                          : "16,900";
  const tourName = isForest
    ? "Visakhapatnam to Maredumilli"
    : isDayTrip
      ? "Vizag, Deomali & Duduma"
      : isVizagJagdalpur
        ? "Vizag, Araku & Jagdalpur"
        : isJagdalpur
          ? "Araku Valley & Jagdalpur"
          : isRiver
            ? "Visakhapatnam to Papikondalu"
            : isVanjangi
              ? "Vizag, Araku, Lambasingi & Vanjangi"
              : isHillPair
                ? "Araku & Lambasingi"
                : isLambasingi
                  ? "Vizag, Araku & Lambasingi"
                  : isArakuOnly
                    ? "Araku Valley Tour"
                    : isAnnavaram
                      ? "Visakhapatnam, Araku & Annavaram"
                      : "Visakhapatnam–Araku Valley";
  const priceBasis =
    isForest || isRiver || isJagdalpur || (isFourDay && !isLambasingiFourDay)
      ? "price basis to be confirmed"
      : "per couple";
  const [active, setActive] = useState(0);
  const [enquiry, setEnquiry] = useState("");
  const day = itineraryDays[active]!;
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hello! I'd like a quote for ${tourName}, ${duration} (listed from ₹${price} ${priceBasis}). Name: ${data.get("name")}. Travel date: ${data.get("date")}. Travellers: ${data.get("guests")}. Preferences: ${data.get("notes") || "None"}. Please confirm the total price, price basis, availability, accommodation, transport, meals, train tickets and entry fees.${isAnnavaram ? " Please also confirm temple timings, darshan arrangements and station or airport drop-off." : ""}`;
    const confirmation = isForest
      ? " Please confirm the proposed three-day adaptation, second Maredumilli overnight, Day 3 return, both accommodation nights, any extension cost, current price basis, plantation and waterfall access, boating availability and Vizag drop time. The reference daily plan ends on Day 2."
      : isDayTrip
        ? " Please confirm the proposed one-day route, early pickup, Deomali and Duduma access, walking requirements, return time, vehicle, meals, entry charges and the price difference. No overnight stay is requested."
        : isVizagJagdalpur
          ? " All five daily plans and overnight bases shown are proposed. Please confirm the full route, transport mode, all four hotel nights, price basis, activities, return transfer feasibility and Vizag drop timing before booking."
          : isJagdalpur
            ? " Please confirm three nights in Jagdalpur and one in Araku, train seats and timetable, cave and park access, any boating, the current price basis and the final Vizag station or airport drop time."
            : isRiver
              ? " Please confirm the operating boat route, jetty, camp availability and facilities, meals, both Vizag–Rajahmundry transfers, departure date and time, return arrival and the conflicting price information. I understand the published boat programme starts and ends in Rajahmundry."
              : isVanjangi
                ? " Please confirm two nights in Vizag, one in Araku, one in Lambasingi, the early Vanjangi and Lambasingi visits, walking requirements and the exact station or airport drop time."
                : isLambasingiFourDay
                  ? " Please confirm proposed Days 3 and 4, all three overnight locations, transfers, drop-off and the difference between the listed ₹25,500 and overview ₹25,000 couple price."
                  : isHillPair
                    ? " Please confirm both overnight stays in Araku, the early Lambasingi departure, seasonal plantation access, waterfall visits and the current couple price."
                    : isLambasingi
                      ? " Please confirm the proposed Lambasingi Day 3, second overnight location, all transfers and the current price discrepancy before booking."
                      : "";
    setEnquiry(
      `${whatsappUrl}?text=${encodeURIComponent(message + confirmation)}`,
    );
  }
  return (
    <div className="overflow-x-clip">
      <Nav />
      <main id="main-content" className="itinerary-page">
        <section className="itinerary-hero relative isolate overflow-hidden text-white">
          <img
            src={
              isForest
                ? maredumilliImage
                : isDayTrip
                  ? deomaliImage
                  : isJagdalpur
                    ? jagdalpurImage
                    : isRiver
                      ? riverImage
                      : hero
            }
            alt={
              isForest
                ? "Green forest scenery in Maredumilli"
                : isDayTrip
                  ? "Scenic landscape illustrating the Eastern Ghats route"
                  : isJagdalpur
                    ? "Waterfall scenery in the Jagdalpur region"
                    : isRiver
                      ? "Papikondalu hills along the Godavari River"
                      : "Sunrise over the lush Eastern Ghats"
            }
            fetchPriority="high"
            width={1920}
            height={1088}
            className="itinerary-landscape absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="home-hero-shade absolute inset-0 -z-10" />
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-36 md:pt-44">
            <a
              href={collectionUrl}
              className="text-xs text-white/75 hover:text-white"
            >
              {isForest
                ? "All Vizag Maredumilli tours"
                : isDayTrip
                  ? "All Vizag Deomali tours"
                  : isJagdalpur
                    ? "All Vizag Jagdalpur tours"
                    : isRiver
                      ? "All Vizag Papikondalu tours"
                      : isLambasingi
                        ? "All Vizag Lambasingi tours"
                        : "All Vizag Araku tours"}{" "}
              / {duration}
            </a>
            <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
              <div className="home-hero-intro">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.24em] text-cyan-200">
                  <Compass size={16} />{" "}
                  {isForest
                    ? "Forest roads. Fresh perspectives."
                    : isDayTrip
                      ? "One day. A fresh perspective."
                      : isJagdalpur
                        ? "Valley roads. Waterfall wonders."
                        : isRiver
                          ? "A different kind of river escape"
                          : isLambasingi
                            ? "Coastal days. Hill-country dreams."
                            : isArakuOnly
                              ? "Your little escape to the hills"
                              : isAnnavaram
                                ? "Coast. Valley. Devotion."
                                : "A coast-to-clouds escape"}
                </p>
                <h1 className="mt-6 font-display text-5xl leading-[1.08] sm:text-7xl">
                  {isForest
                    ? "Find your forest escape."
                    : isDayTrip
                      ? "Take the scenic road."
                      : isJagdalpur
                        ? "Follow the hills."
                        : isRiver
                          ? "Follow the river."
                          : isHillPair
                            ? "Valley days."
                            : isArakuOnly
                              ? "Slow mornings."
                              : "Visakhapatnam."}
                  <br />
                  <span className="text-cyan-200 italic">
                    {isForest
                      ? "Maredumilli."
                      : isDayTrip
                        ? "Deomali & Duduma."
                        : isJagdalpur
                          ? "Araku & Jagdalpur."
                          : isRiver
                            ? "Papikondalu."
                            : "Araku Valley."}
                  </span>
                  <br />
                  {isForest
                    ? "A little closer to nature."
                    : isDayTrip
                      ? "Make a day of it."
                      : isJagdalpur
                        ? "A wider horizon awaits."
                        : isRiver
                          ? "Stay a little longer."
                          : isVanjangi
                            ? "Lambasingi & Vanjangi."
                            : isLambasingi
                              ? "And Lambasingi."
                              : isArakuOnly
                                ? "A little closer to nature."
                                : isAnnavaram
                                  ? "And Annavaram."
                                  : "One beautiful journey."}
                </h1>
                <p className="mt-6 max-w-lg text-base leading-8 text-white/75">
                  {isForest
                    ? "Green trails, waterfall stops and time to breathe. Explore a proposed three-day forest break, then let the team confirm your extra night and complete journey."
                    : isDayTrip
                      ? "Hilltop horizons and waterfall scenery, in one ambitious day from Vizag. Explore the proposed outline and let the team confirm a practical route for your group."
                      : isVizagJagdalpur
                        ? "Coast, coffee country and waterfall landscapes. Explore a proposed five-day journey, then let the team confirm a route that fits your group."
                        : isJagdalpur
                          ? "A scenic railway journey, waterfall country and a valley night. Five days to explore further, with time for heritage, coffee and changing landscapes."
                          : isRiver
                            ? "Green hills, open water and a night beside the Godavari. Discover the published river programme, then let the team confirm your complete journey from Vizag."
                            : isVanjangi
                              ? "Five days from coastal landmarks to coffee country and hilltop mornings. Follow the changing scenery through Vizag, Araku, Vanjangi and Lambasingi."
                              : isLambasingiFourDay
                                ? "Coastal sights, valley discoveries and a proposed Lambasingi escape. Four days to explore, with the final route shaped around your plans."
                                : isHillPair
                                  ? "Coffee-country days, a night sky departure and a fresh perspective in Lambasingi. Three days with Araku as your hill-country base."
                                  : isLambasingi
                                    ? "Sea air, coffee country and a proposed escape to Lambasingi. Three days to discover the changing landscapes of the Eastern Ghats."
                                    : isArakuOnly
                                      ? "Two days of winding hill roads, fresh coffee and time to breathe. Leave the city behind and wake up in the valley."
                                      : isAnnavaram
                                        ? "Coastal mornings, meaningful temple visits and a night in the hills. Four days to find a little wonder along the way."
                                        : isFourDay
                                          ? "More sea air. More valley time. Four days to explore the coast, linger in the hills and bring home a little of both."
                                          : isTwoDay
                                            ? "A coastal welcome. A window into the hills. Two days to trade your everyday routine for sea air, railway views and valley discoveries."
                                            : "Salt in the air. Coffee in the hills. Three days to slow down and discover a different side of Andhra Pradesh."}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#journey"
                    className="bg-gold inline-flex items-center gap-3 rounded-full px-6 py-4 font-semibold text-primary-foreground"
                  >
                    Explore the itinerary <ArrowDown size={17} />
                  </a>
                  <a
                    href="#trip-enquiry"
                    className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-4 font-semibold"
                  >
                    Make it your trip <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
              <div className="itinerary-postcards relative mx-auto w-full max-w-md pb-8 pt-4">
                <div aria-hidden="true" className="itinerary-orbit" />
                <Tilt>
                  <div className="itinerary-postcard overflow-hidden rounded-[1.7rem] border border-white/30 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                    <TravelImage
                      src={
                        isForest
                          ? maredumilliImage
                          : isDayTrip
                            ? deomaliImage
                            : isJagdalpur
                              ? jagdalpurImage
                              : isRiver
                                ? riverImage
                                : isArakuOnly || isHillPair
                                  ? hero
                                  : isAnnavaram
                                    ? `${uploads}/2024/01/araku-annvaram-820x520.jpg`
                                    : `${uploads}/2024/01/vizag2.jpg`
                      }
                      alt={
                        isForest
                          ? "Maredumilli forest landscape"
                          : isDayTrip
                            ? "Scenic Eastern Ghats landscape"
                            : isJagdalpur
                              ? "Jagdalpur-region waterfall scenery"
                              : isRiver
                                ? "Godavari River scenery in Papikondalu"
                                : isArakuOnly || isHillPair
                                  ? "Green hills of Araku Valley"
                                  : isAnnavaram
                                    ? "Temple scenery on the Araku and Annavaram route"
                                    : "The coast at Visakhapatnam"
                      }
                      className="h-64 w-full rounded-[1.1rem] object-cover sm:h-80"
                    />
                    <div className="flex items-center justify-between px-2 py-5">
                      <div>
                        <p className="text-[10px] uppercase tracking-[.22em] text-cyan-200">
                          Your next chapter
                        </p>
                        <p className="mt-1 font-display text-2xl">
                          {isForest
                            ? "Let the forest set the pace."
                            : isDayTrip
                              ? "A day beyond the everyday."
                              : isJagdalpur
                                ? "Valleys meet waterfall country."
                                : isRiver
                                  ? "A slower rhythm on the Godavari."
                                  : isVanjangi
                                    ? "Follow the hills a little further."
                                    : isHillPair
                                      ? "Two hills. One memorable escape."
                                      : isArakuOnly
                                        ? "Stay a little closer to the clouds."
                                        : isAnnavaram
                                          ? "A journey with meaning."
                                          : "Sea breeze to hill breeze."}
                        </p>
                      </div>
                      <Compass size={30} className="text-cyan-200" />
                    </div>
                  </div>
                </Tilt>
                <div className="itinerary-floating absolute -bottom-1 right-3 flex items-center gap-3 rounded-2xl border border-white/30 bg-background px-5 py-4 text-foreground shadow-xl">
                  <Mountain className="text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      A change of scenery
                    </p>
                    <p className="font-semibold">
                      {isForest
                        ? "Forest → Falls → Fresh air"
                        : isDayTrip
                          ? "Hilltops → Waterfalls → Home"
                          : isJagdalpur
                            ? "Railway → Waterfalls → Valley"
                            : isRiver
                              ? "Cruise → Camp → River morning"
                              : isVanjangi
                                ? "Coast → Valley → Hilltops"
                                : isHillPair
                                  ? "Araku → Lambasingi → Araku"
                                  : isArakuOnly
                                    ? "Caves → Coffee → Valley"
                                    : isAnnavaram
                                      ? "Coast → Temples → Valley"
                                      : "Coast → Caves → Coffee"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/20 pt-7 md:grid-cols-4">
              {[
                [CalendarDays, duration, "Time to explore"],
                [
                  MapPin,
                  isForest
                    ? "Vizag · Maredumilli · Vizag"
                    : isDayTrip
                      ? "Vizag · Deomali · Duduma · Vizag"
                      : isJagdalpur
                        ? "Vizag · Jagdalpur · Araku · Vizag"
                        : isRiver
                          ? "Rajahmundry · Papikondalu"
                          : isVanjangi
                            ? "Vizag · Araku · Vanjangi · Lambasingi"
                            : isHillPair
                              ? "Vizag · Araku · Lambasingi · Vizag"
                              : isLambasingi
                                ? "Vizag · Araku · Lambasingi"
                                : isAnnavaram
                                  ? "Vizag · Annavaram · Araku"
                                  : "Vizag → Araku → Vizag",
                  "Round-trip journey",
                ],
                [
                  isDayTrip ? Sunrise : Moon,
                  isForest
                    ? "2 forest nights · second night proposed"
                    : isDayTrip
                      ? "No overnight stay"
                      : isVizagJagdalpur
                        ? "4 nights · proposed bases"
                        : isJagdalpur
                          ? "3 nights Jagdalpur + 1 Araku"
                          : isRiver
                            ? "One riverside night · confirm camp"
                            : isVanjangi
                              ? "2 Vizag · 1 Araku · 1 Lambasingi"
                              : isLambasingiFourDay
                                ? "3 nights · confirm locations"
                                : isHillPair
                                  ? "Two nights in Araku"
                                  : isLambasingi
                                    ? "2 nights · confirm locations"
                                    : isArakuOnly
                                      ? "One night in Araku"
                                      : isFourDay
                                        ? "2 nights Vizag + 1 Araku"
                                        : isTwoDay
                                          ? "One night in Vizag"
                                          : "City + valley stays",
                  isForest
                    ? "Confirm the extended stay"
                    : isDayTrip
                      ? "Same-day return · confirm timing"
                      : isJagdalpur
                        ? "Two bases. A wider journey."
                        : isRiver
                          ? "Boat and camp availability on request"
                          : isHillPair
                            ? "One base. Two hill destinations."
                            : isLambasingi
                              ? "Final overnight plan on request"
                              : isArakuOnly
                                ? "Wake up in the valley"
                                : isFourDay
                                  ? "Coastal comfort. Valley calm."
                                  : isTwoDay
                                    ? "A full day in the valley"
                                    : "Two different mornings",
                ],
                [
                  Coffee,
                  isFourDay || isRiver || isJagdalpur || isForest
                    ? `From ₹${price}`
                    : `From ₹${price} / couple`,
                  "Indicative · confirm your quote",
                ],
              ].map(([Icon, title, subtitle]) => {
                const I = Icon as typeof Coffee;
                return (
                  <div key={String(title)} className="flex gap-3">
                    <I size={21} className="mt-1 shrink-0 text-cyan-200" />
                    <div>
                      <p className="text-sm font-semibold">{String(title)}</p>
                      <p className="mt-1 text-xs text-white/60">
                        {String(subtitle)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <nav
          aria-label="Itinerary sections"
          className="border-b border-border bg-background"
        >
          <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-6 py-5 text-sm font-semibold">
            <a href="#overview">The experience</a>
            <a href="#journey">Day by day</a>
            <a href="#details">Good to know</a>
            <a href="#trip-enquiry" className="text-primary">
              Plan this escape ↗
            </a>
          </div>
        </nav>
        <section
          id="overview"
          className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary">
              {isForest
                ? "A little green. A little breathing room."
                : isDayTrip
                  ? "A little adventure. A day to remember."
                  : isJagdalpur
                    ? "A little further. A little more wonder."
                    : isRiver
                      ? "A little river. A little stillness."
                      : isArakuOnly
                        ? "A little coffee. A little calm."
                        : isAnnavaram
                          ? "Nature, heritage & devotion."
                          : "A little sea. A little serenity."}
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              {isDayTrip
                ? "One day."
                : isVanjangi || isJagdalpur
                  ? "Five days."
                  : isFourDay
                    ? "Four days."
                    : isTwoDay || isArakuOnly || isRiver
                      ? "Two days."
                      : "Three days."}
              <br />
              <span className="text-gold italic">
                A world of little moments.
              </span>
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-8">
            <p>
              {isForest ? (
                "Follow forest roads towards plantations, waterfalls and a slower pace. This proposed three-day version makes room for a second forest night, subject to the operator confirming the extended stay and complete route."
              ) : isDayTrip ? (
                "Set aside a day for changing landscapes, open views and a break from the city. This proposed outline brings Deomali and Duduma into one road trip, with the final order and available sightseeing time agreed with the operator."
              ) : isVizagJagdalpur ? (
                "Explore a suggested journey linking Vizag, Araku and Jagdalpur. Use the daily outline to discuss your preferred pace and sights with the team; the source does not publish a confirmed programme."
              ) : isJagdalpur ? (
                "Connect the Araku hills with Jagdalpur’s temples, cave country and waterfalls. Travel out by the proposed rail route, explore from a Jagdalpur base, then return through Araku by road."
              ) : isRiver ? (
                "Trade the usual road trip for a journey shaped by the river. Explore the boat-and-camp outline below, with time for scenery, local stops and a relaxed morning before the return."
              ) : isVanjangi ? (
                "Begin with two days in Vizag, then head into the hills for caves, coffee and local heritage. An early Vanjangi outing leads to a Lambasingi overnight stay, with one more viewpoint morning before your return."
              ) : isLambasingiFourDay ? (
                "Explore the coastal and valley outline, then work with the team to complete a practical four-day journey through Lambasingi. The suggested final two days are clearly marked so you can review the route before booking."
              ) : isHillPair ? (
                "Make Araku your base for a hill-country break, pairing valley attractions with an early excursion to Lambasingi. Between outings, settle back into the same accommodation and enjoy time to unwind."
              ) : isLambasingi ? (
                "Bring the coast, valley and Lambasingi together in one short escape. Explore the outline below, then ask the team to confirm a practical route for your arrival time and preferred pace."
              ) : isArakuOnly ? (
                "Make the valley the heart of your short break. Take in changing landscapes, enjoy relaxed photo stops and leave room to explore at your own pace."
              ) : isAnnavaram ? (
                "Combine the coast and hills with a dedicated temple day. This journey makes room for quiet reflection, local heritage and a change of scenery, while keeping Vizag as your arrival and departure base."
              ) : (
                <>
                  Follow the coastline out of Vizag, climb into the Eastern
                  Ghats and let the valley set the pace. This journey pairs
                  beachside landmarks with cave formations, coffee plantations
                  and Araku’s local heritage.
                </>
              )}
            </p>
            <p>
              {isForest
                ? "The reference publishes a two-day daily plan despite its three-day title. Days 2 and 3 below adapt that outline to a longer stay; the extra night, final return day and any additional charges need written confirmation."
                : isDayTrip
                  ? "Begin and end in Vizag without an overnight stay. The reference does not publish an hourly programme; confirm departure, access, total driving time and whether both destinations fit your group’s pace before booking."
                  : isVizagJagdalpur
                    ? "Every day and overnight base below is proposed. Confirm the complete travel order, accommodation, transport and return arrangements before booking, especially the long final transfer and any onward connection."
                    : isJagdalpur
                      ? "Spend three nights in Jagdalpur and one in Araku. Share your arrival details and onward train or flight before booking, so the team can confirm rail arrangements, transfer days and a realistic final sightseeing plan."
                      : isRiver
                        ? "The published programme begins and ends in Rajahmundry. Your Vizag connections, overnight camp and current boat route must be agreed with the team. Confirm the full departure and return schedule before making onward plans."
                        : isVanjangi
                          ? "Stay two nights in Vizag, one in Araku and one in Lambasingi. Days 4 and 5 involve early departures; confirm transport, walking requirements and your group’s preferred pace before booking."
                          : isLambasingiFourDay
                            ? "The reference publishes only Days 1 and 2 and returns to Vizag on Day 2. Days 3 and 4 here are proposed extensions. Confirm all three overnight locations, the Lambasingi excursion, transport and final drop-off in writing."
                            : isHillPair
                              ? "Start with a Vizag pickup, stay two nights in Araku and return to Vizag on Day 3. Confirm the early Lambasingi departure and the return schedule before arranging onward travel."
                              : isLambasingi
                                ? "The source lists three days and two nights but publishes only two daily plans. Day 3 below is a proposed extension. Confirm the second overnight location, Lambasingi visit, transfers and final drop-off in writing."
                                : isArakuOnly
                                  ? "Begin and end in Vizag, with one overnight stay in Araku. Day 1 follows the hill road into the valley; Day 2 leaves time for gardens, local heritage and coffee before your agreed station or airport drop."
                                  : isFourDay
                                    ? "Spend two nights in Vizag and one in Araku, with road travel between the city and valley. Share your arrival and departure details so the team can confirm pickup, check-in and the final drop-off."
                                    : isTwoDay
                                      ? "Stay in Vizag for one night, then set off on a full-day valley adventure with a proposed train journey out and a road journey back. Share your arrival and onward travel plans to agree a practical schedule."
                                      : "Begin and end in Visakhapatnam, with one night in the city and one in the valley. Share your arrival plans so the team can shape timings around you."}
            </p>
          </div>
        </section>
        <section id="journey" className="bg-secondary/55 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary">
                  The journey, unfolded
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                  Every day, a new view.
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                {isDayTrip
                  ? "Your day, from departure to return."
                  : "Choose a day. Find your favourite moment."}
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
              <div
                className="space-y-3"
                role="group"
                aria-label="Choose itinerary day"
              >
                {itineraryDays.map((item, index) => (
                  <button
                    key={item.tag}
                    aria-pressed={active === index}
                    aria-controls="itinerary-day"
                    onClick={() => setActive(index)}
                    className={`itinerary-day-button flex w-full items-center gap-4 rounded-2xl border p-5 text-left ${active === index ? "border-primary bg-primary text-white shadow-lg" : "border-border bg-card hover:border-primary/50"}`}
                  >
                    <span className="font-display text-3xl opacity-60">
                      0{index + 1}
                    </span>
                    <div className="flex-1">
                      <span className="text-[10px] uppercase tracking-widest opacity-75">
                        Day {index + 1} · {item.tag}
                      </span>
                      <p className="mt-1 font-semibold">{item.place}</p>
                    </div>
                    <item.icon size={22} />
                  </button>
                ))}
                <p className="px-2 pt-3 text-xs leading-6 text-muted-foreground">
                  A suggested route. Timing and access depend on arrival,
                  weather and local conditions.
                </p>
              </div>
              <article
                id="itinerary-day"
                aria-live="polite"
                aria-atomic="true"
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div key={active} className="itinerary-day-content">
                  <div className="relative h-64 sm:h-80">
                    <TravelImage
                      src={day.image}
                      alt={day.alt}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-5 left-6 rounded-full bg-background/95 px-4 py-2 text-xs font-semibold">
                      DAY 0{active + 1} / {day.place}
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="font-display text-3xl">{day.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {day.intro}
                    </p>
                    <ol
                      className="mt-6 space-y-5"
                      aria-label={`Day ${active + 1} travel plan`}
                    >
                      {day.plan.map((step, index) => (
                        <li key={step.period} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-primary"
                          >
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="text-sm font-semibold">
                              {step.period}
                            </h4>
                            <p className="mt-2 text-sm leading-7 text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                    <p className="mt-6 text-xs leading-6 text-muted-foreground">
                      Meal breaks are suggested; meals and attraction tickets
                      are subject to your confirmed quote. The team will confirm
                      timings rather than a fixed hourly schedule.
                    </p>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {day.stops.map((stop) => (
                        <li
                          key={stop}
                          className="flex items-start gap-2 text-sm"
                        >
                          <MapPin
                            size={16}
                            className="mt-0.5 shrink-0 text-primary"
                          />
                          {stop}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-sm font-semibold text-primary">
                      {isDayTrip ? <Sunrise size={17} /> : <Moon size={17} />}
                      {day.stay}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section
          id="details"
          className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_.9fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary">
              Before you head out
            </p>
            <h2 className="mt-3 font-display text-4xl">
              Good plans. Great journeys.
            </h2>
            <div className="mt-8 space-y-3">
              {(isForest
                ? maredumilliFaq
                : isDayTrip
                  ? deomaliFaq
                  : isVizagJagdalpur
                    ? vizagJagdalpurFaq
                    : isJagdalpur
                      ? jagdalpurFaq
                      : isRiver
                        ? papikondaluFaq
                        : [
                            [
                              "What does the price cover?",
                              isVanjangi
                                ? "Starting from ₹32,500 per couple, subject to dates and availability. Ask for a written quote confirming all four overnight stays, vehicle, meals, attraction tickets, taxes, viewpoint access and the station or airport transfer."
                                : isLambasingiFourDay
                                  ? "The listing and package card start at ₹25,500, while the overview says ₹25,000 per couple. Confirm the current rate, price basis and inclusions in writing, together with Days 3–4, all overnight stays, meals, tickets, transfers and taxes."
                                  : isHillPair
                                    ? "The detail page lists ₹21,000 per couple; the matching package card shows ₹23,500. Request the current rate and a written quote confirming both Araku nights, transport, meals, tickets, transfers and taxes."
                                    : isLambasingi
                                      ? "The detail page lists ₹21,000 per couple; the package card lists ₹19,500. Request the current rate and a written breakdown of hotels, transfers, tickets, meals and taxes. Confirm the third-day plan and second overnight stay before booking."
                                      : isAnnavaram
                                        ? "The listing starts at ₹24,500, while its overview shows ₹23,500 per couple. Request a written quote confirming the current rate, price basis, hotels, transport, temple arrangements, meals, tickets and taxes before booking."
                                        : isFourDay
                                          ? "The listing displays ₹23,500, but its overview gives a different per-person rate. Request a written quote confirming the price basis, total group cost, hotels, transport, meals, tickets and taxes before booking."
                                          : `Starting from ₹${price} per couple. Ask for a written quote confirming hotels, vehicle, pickup, meals, tickets and all taxes before paying. Rates vary with dates and group size.`,
                            ],
                            [
                              "Is Katiki waterfall included?",
                              "No. Katiki is an optional, separately arranged excursion involving local jeep access and walking. The tour vehicle does not take that route. Discuss access, conditions and suitability with the operator.",
                            ],
                            [
                              isAnnavaram
                                ? "Are darshan and rituals included?"
                                : "What should I bring?",
                              isAnnavaram
                                ? "Special darshan, rituals and priority entry are included only if confirmed in your written quote. Ask the team about visiting hours, dress requirements, queues and any charges before the temple day. Carry photo ID and comfortable footwear for the wider trip."
                                : "Carry valid photo ID, comfortable walking shoes, sun protection and a light layer for the valley. Confirm any identification requirements when booking.",
                            ],
                            [
                              isVanjangi
                                ? "What should I know about the early starts?"
                                : isHillPair
                                  ? "What should I know about the early start?"
                                  : isTwoDay || isLambasingi
                                    ? "Is the train journey guaranteed?"
                                    : "Can I customise the trip?",
                              isVanjangi
                                ? "The reference suggests 4 AM starts on Days 4 and 5. Confirm departure times, driver arrangements, walking requirements and access with the operator. Bring a warm layer and suitable shoes. Sunrise views, mist and plantation access depend on weather and season."
                                : isHillPair
                                  ? "Confirm the pre-dawn departure, driver arrangements and viewpoint access with the team. Carry a warm layer and discuss your group’s needs. Mist, sunrise visibility, plantation access and waterfall conditions vary; views are not guaranteed."
                                  : isTwoDay || isLambasingi
                                    ? "Train travel depends on seat availability and the agreed booking arrangements. Confirm tickets, station transfers and the return vehicle in writing. Ask the team to explain the alternative plan if train seats cannot be secured."
                                    : "Share your arrival time, group size and preferred pace. The team can confirm adjustments, hotel options and any additional charges. Train tickets are subject to availability and are not promised by this itinerary.",
                            ],
                          ]
              ).map(([q, a]) => (
                <details
                  key={q}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <summary className="cursor-pointer font-semibold">
                    {q}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
          <aside
            id="trip-enquiry"
            className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8"
          >
            <p className="text-xs uppercase tracking-widest text-primary">
              Your next escape starts here
            </p>
            <h2 className="mt-3 font-display text-3xl">
              Make room for a getaway.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              From{" "}
              <strong className="text-foreground">
                ₹{price}
                {isForest ||
                isRiver ||
                isJagdalpur ||
                (isFourDay && !isLambasingiFourDay)
                  ? " · price basis to be confirmed"
                  : " per couple"}
              </strong>{" "}
              · final quote on request
            </p>
            <form
              onSubmit={prepare}
              onChange={() => setEnquiry("")}
              className="mt-7 space-y-4"
            >
              <label className="block text-sm font-medium">
                Your name
                <input
                  name="name"
                  required
                  maxLength={100}
                  autoComplete="name"
                  className="itinerary-input"
                  placeholder="How should we address you?"
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="text-sm font-medium">
                  Travel date
                  <input
                    name="date"
                    type="date"
                    required
                    className="itinerary-input"
                  />
                </label>
                <label className="text-sm font-medium">
                  Travellers
                  <input
                    name="guests"
                    type="number"
                    min={1}
                    max={50}
                    defaultValue={2}
                    required
                    className="itinerary-input"
                  />
                </label>
              </div>
              <label className="block text-sm font-medium">
                Trip preferences (optional)
                <textarea
                  name="notes"
                  rows={3}
                  maxLength={1000}
                  className="itinerary-input"
                  placeholder="Arrival time, hotel preferences, special occasions…"
                />
              </label>
              <button
                type="submit"
                className="bg-gold flex w-full items-center justify-center gap-3 rounded-full px-5 py-4 font-semibold text-primary-foreground"
              >
                Prepare my trip enquiry <ArrowUpRight size={18} />
              </button>
              {enquiry && (
                <div
                  role="status"
                  className="rounded-2xl border border-primary/30 bg-secondary p-4"
                >
                  <p className="flex items-center gap-2 text-sm">
                    <Check size={16} /> Your enquiry is ready.
                  </p>
                  <a
                    href={enquiry}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex font-semibold text-primary underline underline-offset-4"
                  >
                    Send enquiry on WhatsApp ↗
                  </a>
                </div>
              )}
              <p className="text-center text-xs leading-6 text-muted-foreground">
                No payment here. Your details are only shared when you send your
                WhatsApp message.
              </p>
            </form>
            <a
              href={callUrl}
              className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-primary"
            >
              <Phone size={16} /> Prefer a conversation? Call us
            </a>
          </aside>
        </section>
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <a
            href={collectionUrl}
            className="text-sm font-semibold text-primary"
          >
            ← Explore all{" "}
            {isForest
              ? "Vizag Maredumilli"
              : isDayTrip
                ? "Vizag Deomali"
                : isJagdalpur
                  ? "Vizag Jagdalpur"
                  : isRiver
                    ? "Vizag Papikondalu"
                    : isLambasingi
                      ? "Vizag Lambasingi"
                      : "Vizag Araku"}{" "}
            packages
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
