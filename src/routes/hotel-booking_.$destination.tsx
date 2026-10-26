import { createFileRoute, notFound } from "@tanstack/react-router";
import { BookingDetail } from "@/components/booking-detail";
import { hotelCategories } from "@/lib/booking-categories";
export const Route = createFileRoute("/hotel-booking_/$destination")({
  loader: ({ params }) => {
    const item = hotelCategories.find((item) => item.slug === params.destination);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Hotel booking"} | Vizag Araku Tourism` },
      {
        name: "description",
        content: loaderData?.description ?? "Discuss your travel plans with Vizag Araku Tourism.",
      },
    ],
  }),
  component: Detail,
});
function Detail() {
  const item = Route.useLoaderData();
  return <BookingDetail {...item} kind="Hotel booking" />;
}
