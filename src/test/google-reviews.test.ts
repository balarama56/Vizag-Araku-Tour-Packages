import { afterEach, describe, expect, it, vi } from "vitest";
vi.mock("@tanstack/react-start/server-only", () => ({}));
import { fetchGoogleReviews } from "@/lib/google-reviews.server";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});
function configure() {
  vi.stubEnv("GOOGLE_PLACES_API_KEY", "test-only-key");
  vi.stubEnv("GOOGLE_PLACE_ID", "test-place");
}
describe("Google reviews connection", () => {
  it("does not call Google without configuration", async () => {
    vi.stubEnv("GOOGLE_PLACES_API_KEY", "");
    const fetch = vi.fn();
    vi.stubGlobal("fetch", fetch);
    expect(await fetchGoogleReviews()).toBeNull();
    expect(fetch).not.toHaveBeenCalled();
  });
  it("preserves attribution, reviewer photos and actual ratings", async () => {
    configure();
    const fetch = vi
      .fn()
      .mockResolvedValue(
        new Response(
          JSON.stringify({
            rating: 4.6,
            userRatingCount: 12,
            reviews: [
              {
                name: "places/test/reviews/one",
                rating: 4,
                text: { text: "A test review" },
                relativePublishTimeDescription: "a week ago",
                authorAttribution: {
                  displayName: "Test Traveller",
                  photoUri: "https://example.com/avatar.jpg",
                  uri: "https://www.google.com/maps/contrib/test",
                },
                googleMapsUri: "https://www.google.com/maps/reviews/test",
              },
            ],
          }),
        ),
      );
    vi.stubGlobal("fetch", fetch);
    const result = await fetchGoogleReviews();
    expect(result?.reviews[0]).toMatchObject({
      rating: 4,
      photo: "https://example.com/avatar.jpg",
      profile: "https://www.google.com/maps/contrib/test",
      time: "a week ago",
    });
    expect(result?.count).toBe(12);
    expect(fetch.mock.calls[0]?.[1]).toMatchObject({
      cache: "no-store",
      headers: { "X-Goog-Api-Key": "test-only-key" },
    });
    expect(JSON.stringify(result)).not.toContain("test-only-key");
  });
  it("falls back safely when Google rejects the request", async () => {
    configure();
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("Forbidden", { status: 403 })));
    expect(await fetchGoogleReviews()).toBeNull();
  });
  it("rejects malformed data and unsafe photo URLs", async () => {
    configure();
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValue(
          new Response(
            JSON.stringify({
              rating: 4,
              userRatingCount: 3,
              reviews: [
                {
                  name: "test",
                  rating: 5,
                  authorAttribution: { displayName: "Test", photoUri: "javascript:alert(1)" },
                },
              ],
            }),
          ),
        ),
    );
    expect(await fetchGoogleReviews()).toBeNull();
  });
});
