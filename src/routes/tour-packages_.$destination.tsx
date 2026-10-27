import { VizagPapikondalluPackages } from "@/components/vizag-papikondallu-packages";
import { VizagLambasingiPackages } from "@/components/vizag-lambasingi-packages";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { VizagArakuPackages } from "@/components/vizag-araku-packages";
import { BookingDetail } from "@/components/booking-detail";
import { tourCategories } from "@/lib/booking-categories";
export const Route = createFileRoute("/tour-packages_/$destination")({
  loader: ({ params }) => {
    const item = tourCategories.find(
      (item) => item.slug === params.destination,
    );
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.title ?? "Tour packages"} | Vizag Araku Tourism`,
      },
      {
        name: "description",
        content:
          loaderData?.description ??
          "Discuss your travel plans with Vizag Araku Tourism.",
      },
    ],
  }),
  component: Detail,
});
function Detail() {
  const item = Route.useLoaderData();
  if (item.slug === "vizag-araku") return <VizagArakuPackages />;
  if (item.slug === "vizag-lambasingi") return <VizagLambasingiPackages />;
  if (item.slug === "vizag-papikondallu") return <VizagPapikondalluPackages />;
  return <BookingDetail {...item} kind="Tour packages" />;
}
