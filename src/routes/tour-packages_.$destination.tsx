import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { tourCategories } from "@/lib/booking-categories";

// Keep bookmarks and inbound links working after the canonical URL migration.
export const Route = createFileRoute("/tour-packages_/$destination")({
  beforeLoad: ({ params, location }) => {
    const item = tourCategories.find(
      (item) => item.slug === params.destination,
    );
    if (!item) throw notFound();
    const hash = location.hash ? `#${location.hash.replace(/^#/, "")}` : "";
    throw redirect({
      href: `${item.path}${location.searchStr}${hash}`,
      statusCode: 301,
      replace: true,
    });
  },
});
