import { createFileRoute, notFound } from "@tanstack/react-router";
import { BookingDetail } from "@/components/booking-detail";
import { serviceCategories } from "@/lib/booking-categories";
export const Route = createFileRoute("/services_/$service")({
  loader: ({ params }) => {
    const item = serviceCategories.find((item) => item.slug === params.service);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Services"} | Vizag Araku Tourism` },
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
  return <BookingDetail {...item} kind="Services" />;
}
