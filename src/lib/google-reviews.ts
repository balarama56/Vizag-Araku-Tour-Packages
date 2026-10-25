import { createServerFn } from "@tanstack/react-start";

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(async () => {
  const { setResponseHeader } = await import("@tanstack/react-start/server");
  setResponseHeader("Cache-Control", "no-store");
  const { fetchGoogleReviews } = await import("./google-reviews.server");
  return fetchGoogleReviews();
});
