export const tourCategories = [
  {
    slug: "vizag-araku",
    path: "/tour/vizag-araku-tour-packages" as const,
    title: "Vizag Araku Tour Packages",
    description:
      "Plan a trip combining Vizag and Araku. Discuss your travel dates, sightseeing preferences and overnight stays.",
    match: ["Araku"],
  },
  {
    slug: "vizag-lambasingi",
    path: "/tour/vizag-lambasinghi-tour-packages" as const,
    title: "Vizag Lambasingi Tour Packages",
    description:
      "Discuss a Lambasingi trip from Vizag, including pickup time, travel pace and any additional stops.",
    match: ["Lambasingi"],
  },
  {
    slug: "vizag-papikondallu",
    path: "/tour/vizag-papikondallu-tour-packages" as const,
    title: "Vizag Papikondallu Tour Packages",
    description:
      "Enquire about a Papikondalu itinerary from Vizag. Confirm river trip operations, transfers and availability for your dates.",
    match: ["Papikondalu"],
  },
  {
    slug: "vizag-jagdalpur",
    path: "/tour/vizag-jagdalpur-tour-packages" as const,
    title: "Vizag Jagdalpur Tour Packages",
    description:
      "Share your dates and group size to discuss a Jagdalpur itinerary from Vizag. Request a route, stay options and a written quote.",
    match: [],
  },
  {
    slug: "vizag-deomali",
    path: "/tour/vizag-deomali-tour-packages" as const,
    title: "Vizag Deomali Tour Packages",
    description:
      "Plan a Deomali trip from Vizag. Discuss travel times, your preferred stops and any overnight arrangements.",
    match: [],
  },
  {
    slug: "vizag-maredumilli",
    path: "/tour/vizag-maredumilli-tour-packages" as const,
    title: "Vizag Maredumilli Tour Packages",
    description:
      "Tell us your plans for a Maredumilli trip. Ask about the route, transport, stays and local access for your dates.",
    match: [],
  },
  {
    slug: "temple-tours",
    path: "/tour/temple-tour-packages" as const,
    title: "Temple Tour Packages",
    description:
      "Discuss temple routes including Annavaram, Puri and Konark. Confirm visiting arrangements, travel times and stays before booking.",
    match: ["Annavaram", "Puri"],
  },
  {
    slug: "pancharama",
    path: "/tour/pancharama-tour-packages" as const,
    title: "Pancharama Tour Packages",
    description:
      "Explore a two-day Pancharamam pilgrimage from Vizag. Discuss temple visits, stays, transport and group pricing.",
    match: [],
  },
  {
    slug: "vizag-annavaram",
    path: "/tour/vizag-annavaram-tour-packages" as const,
    title: "Vizag Annavaram Tour Packages",
    description:
      "Compare temple breaks and Vizag, Araku and Annavaram combinations. Discuss travel dates, visiting arrangements and group pricing.",
    match: ["Annavaram"],
  },
  {
    slug: "bhubaneswar-puri-konark",
    path: "/tour/bhubaneswar-puri-konark-tour-packages" as const,
    title: "Bhubaneswar Puri Konark Tour Packages",
    description:
      "Explore a three-day Odisha temple and heritage journey from Vizag. Discuss Bhubaneswar, Puri and Konark visits, stays and group pricing.",
    match: ["Puri"],
  },
  {
    slug: "puri-konark",
    path: "/tour/puri-konark-tour-packages" as const,
    title: "Puri Konark Tour Packages",
    description:
      "Compare two three-day Puri and Konark packages from Vizag. Discuss temple visits, stays, transport and couple or group pricing.",
    match: ["Puri"],
  },
];
export const serviceCategories = [
  {
    slug: "cab-booking",
    title: "Cab Booking",
    description:
      "Request a cab for your local sightseeing, pickup or tour. Share the pickup point, date, passenger count and route.",
    checklist: [
      "Pickup and drop-off locations",
      "Date, time and number of passengers",
      "Luggage and vehicle preferences",
      "Fare, driver allowance, parking and toll inclusions",
    ],
  },
  {
    slug: "bus-booking",
    title: "Bus Booking",
    description:
      "Enquire about transport for your group. Share your route and passenger count to discuss suitable vehicle options.",
    checklist: [
      "Group size and preferred seating",
      "Pickup points and travel schedule",
      "Air-conditioning and luggage requirements",
      "Vehicle availability, inclusions and cancellation terms",
    ],
  },
];
export const hotelCategories = [
  {
    slug: "vizag-hotels",
    title: "Vizag hotels",
    description:
      "Find a stay that fits your Vizag trip. Tell us your dates, room requirements, preferred area and budget.",
    checklist: [
      "Check-in and check-out dates",
      "Number of guests, children’s ages and rooms",
      "Preferred area, room type and meal plan",
      "Final hotel name, price, availability and cancellation terms",
    ],
  },
  {
    slug: "araku-hotels",
    title: "Araku Hotels",
    description:
      "Discuss accommodation for your Araku visit. Share your travel dates, room preferences and budget before requesting availability.",
    checklist: [
      "Check-in and check-out dates",
      "Number of guests and rooms",
      "Hotel or resort preferences and meal plan",
      "Room availability, inclusions and cancellation terms",
    ],
  },
];
