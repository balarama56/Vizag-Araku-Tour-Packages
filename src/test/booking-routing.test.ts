import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import {
  tourCategories,
  serviceCategories,
  hotelCategories,
} from "@/lib/booking-categories";
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
  it.each(cases)(
    "matches %s to its own detail page",
    (path, routeId, parameter, slug) => {
      const router = createRouter({
        routeTree,
        context: { queryClient: new QueryClient() },
      });
      const match = router.matchRoutes(path!).at(-1);
      expect(match?.routeId).toBe(routeId);
      expect(match?.params).toHaveProperty(parameter!, slug);
    },
  );
});
import { isRedirect, isNotFound } from "@tanstack/react-router";
import { Route as LegacyTourRoute } from "@/routes/tour-packages_.$destination";

describe("Original-site tour URLs", () => {
  it.each(tourCategories)("matches $path to its dedicated page", (category) => {
    const router = createRouter({
      routeTree,
      context: { queryClient: new QueryClient() },
    });
    expect(router.matchRoutes(category.path).at(-1)?.routeId).toBe(
      category.path,
    );
  });

  it.each(tourCategories)(
    "permanently redirects the old $slug URL and retains query and anchor",
    (category) => {
      const beforeLoad = LegacyTourRoute.options.beforeLoad!;
      let result: unknown;
      try {
        beforeLoad({
          params: { destination: category.slug },
          location: { searchStr: "?source=bookmark", hash: "packages" },
        } as Parameters<typeof beforeLoad>[0]);
      } catch (error) {
        result = error;
      }
      expect(isRedirect(result)).toBe(true);
      if (!isRedirect(result)) throw new Error("Expected redirect response");
      expect(result.status).toBe(301);
      expect(result.headers.get("Location")).toBe(
        `${category.path}?source=bookmark#packages`,
      );
    },
  );

  it("returns not found for an unknown legacy destination", () => {
    const beforeLoad = LegacyTourRoute.options.beforeLoad!;
    let result: unknown;
    try {
      beforeLoad({
        params: { destination: "unknown-tour" },
        location: { searchStr: "", hash: "" },
      } as Parameters<typeof beforeLoad>[0]);
    } catch (error) {
      result = error;
    }
    expect(isNotFound(result)).toBe(true);
  });
});
