import hero from "@/assets/hero.jpg";

const imageDescriptions: Record<string, string> = {
  [hero]: "Misty green hills and a winding railway in Araku Valley at sunrise",
  "/images/vizag-araku-annavaram/araku.jpg": "Green hills and valley scenery in Araku Valley",
  "/images/vadapalli/annavaram.jpg": "Sri Veera Venkata Satyanarayana Swamy temple complex in Annavaram",
  "/images/vizag-araku-annavaram/vizag.jpg": "Visakhapatnam coastline and beach road",
  "/images/vadapalli/vadapalli.jpg": "Sri Venkateswara Swamy Temple in Vadapalli",
  "/images/pancharama/ksheerarama.jpg": "Ksheerarama temple tower in Palakollu",
  "/images/puri-konark/heritage.jpg": "Konark Sun Temple and surrounding gardens in Odisha",
};

export function imageAlt(source: string, fallback: string): string {
  const path = source.replace(/^https?:\/\/[^/]+/, "").split(/[?#]/)[0]!;
  return imageDescriptions[path] ?? imageDescriptions[source] ?? fallback;
}
