import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { tourCategories, serviceCategories, hotelCategories } from "@/lib/booking-categories";
const cases = [
  ...tourCategories.map((item) => [
    `/tour-packages/${item.slug}`,
    "/tour-packages_/$destination",
    "destination",
    item.slug,
  ]),
  ...serviceCategories.map((item) => [
    `/services/${item.slug}`,
    "/services_/$service",
    "service",
    item.slug,
  ]),
  ...hotelCategories.map((item) => [
    `/hotel-booking/${item.slug}`,
    "/hotel-booking_/$destination",
    "destination",
    item.slug,
  ]),
];
describe("Booking menu destinations", () => {
  it.each(cases)("matches %s to its own detail page", (path, routeId, parameter, slug) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const match = router.matchRoutes(path!).at(-1);
    expect(match?.routeId).toBe(routeId);
    expect(match?.params).toHaveProperty(parameter!, slug);
  });
});
