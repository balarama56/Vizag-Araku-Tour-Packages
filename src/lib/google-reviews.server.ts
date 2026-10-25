import "@tanstack/react-start/server-only";
import { z } from "zod";

const httpsUrl = z
  .string()
  .url()
  .refine((value) => value.startsWith("https://"));
const placeSchema = z.object({
  rating: z.number().min(0).max(5).optional(),
  userRatingCount: z.number().int().nonnegative().optional(),
  googleMapsUri: httpsUrl.optional(),
  reviews: z
    .array(
      z.object({
        name: z.string(),
        rating: z.number().min(1).max(5),
        text: z.object({ text: z.string() }).optional(),
        relativePublishTimeDescription: z.string().optional(),
        googleMapsUri: httpsUrl.optional(),
        authorAttribution: z.object({
          displayName: z.string(),
          uri: httpsUrl.optional(),
          photoUri: httpsUrl.optional(),
        }),
      }),
    )
    .default([]),
});

export async function fetchGoogleReviews() {
  // Never use VITE_ variables for this key: those are sent to browsers.
  const apiKey = process.env["GOOGLE_PLACES_API_KEY"];
  const placeId = process.env["GOOGLE_PLACE_ID"];
  if (!apiKey || !placeId) return null;
  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
        },
        signal: AbortSignal.timeout(8000),
        cache: "no-store",
      },
    );
    if (!response.ok) return null;
    const place = placeSchema.parse(await response.json());
    if (place.rating === undefined || place.userRatingCount === undefined) return null;
    return {
      rating: place.rating.toFixed(1),
      count: place.userRatingCount,
      url: place.googleMapsUri ?? "https://share.google/YGwzmSCpxY5VM4wEG",
      reviews: place.reviews.map((review) => ({
        id: review.name,
        name: review.authorAttribution.displayName,
        initials: review.authorAttribution.displayName
          .split(/\s+/)
          .map((part) => part[0])
          .slice(0, 2)
          .join(""),
        text: review.text?.text ?? "",
        rating: review.rating,
        photo: review.authorAttribution.photoUri ?? null,
        profile: review.authorAttribution.uri ?? null,
        url:
          review.googleMapsUri ?? place.googleMapsUri ?? "https://share.google/YGwzmSCpxY5VM4wEG",
        time: review.relativePublishTimeDescription ?? "",
      })),
    };
  } catch {
    // Do not expose upstream responses, secrets, or configuration errors to visitors.
    return null;
  }
}
