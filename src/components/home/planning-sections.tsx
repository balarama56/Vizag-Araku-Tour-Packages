import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGoogleReviews } from "@/lib/google-reviews";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CalendarDays,
  CloudRain,
  MapPin,
  MessageCircle,
  Quote,
  Star,
  Sun,
  Mountain,
} from "lucide-react";

const googleReviews = "https://share.google/YGwzmSCpxY5VM4wEG";
// Snapshot checked against the owner's Google Business Profile on 25 October 2026.
// Keep this dated: this is not a live Google reviews feed.
const reviewSnapshot = { rating: "4.8", count: 168, checked: "25 Oct 2026" };
const reviewExcerpts = [
  {
    name: "Sangeeta Chakraborty",
    initials: "SC",
    text: "Good service at affordable price",
    contributor: "108078740128973225713",
  },
  {
    name: "Sruthi gupta",
    initials: "SG",
    text: "I had a wonderful time…",
    contributor: "104912272283029968906",
  },
  {
    name: "Sunil Dash",
    initials: "SD",
    text: "Thank you for giving good travel experience to my family.",
    contributor: "104047815436055850346",
  },
];

function useGoogleReviews() {
  return useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => getGoogleReviews(),
    retry: false,
    gcTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}

function ReviewerPhoto({
  photo,
  name,
  initials,
}: {
  photo: string | null;
  name: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);
  return photo && !failed ? (
    <img
      src={photo}
      alt={`${name} profile photo`}
      width={44}
      height={44}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="h-11 w-11 shrink-0 rounded-full object-cover"
    />
  ) : (
    <span
      aria-hidden="true"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
    >
      {initials}
    </span>
  );
}

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <span className="flex gap-1 text-primary" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={15}
          fill={index < rating ? "currentColor" : "none"}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export function TrustBar() {
  const { data } = useGoogleReviews();
  const summary = data ?? reviewSnapshot;
  return (
    <section aria-label="Travel with confidence" className="border-y border-primary/20 bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-7 px-6 py-8 lg:grid-cols-4">
        <a href="#reviews" className="flex items-center gap-3">
          <Star className="shrink-0 text-primary" size={24} aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold">{summary.rating}/5 on Google</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {summary.count} reviews · {data ? "Google Maps" : reviewSnapshot.checked}
            </p>
          </div>
        </a>
        <div className="flex items-center gap-3">
          <MapPin className="shrink-0 text-primary" size={24} aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold">Based in Vizag</p>
            <p className="mt-1 text-xs text-muted-foreground">Coast, hills & heritage</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <CalendarDays className="shrink-0 text-primary" size={24} aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold">Short breaks & longer stays</p>
            <p className="mt-1 text-xs text-muted-foreground">2–5 day package options</p>
          </div>
        </div>
        <Link to="/contact" className="flex items-center gap-3">
          <MessageCircle className="shrink-0 text-primary" size={24} aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold">Make it your own</p>
            <p className="mt-1 text-xs text-muted-foreground">Discuss a custom itinerary</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export function CustomerReviews() {
  const { data, isFetching } = useGoogleReviews();
  const summary = data ?? reviewSnapshot;
  const reviews = data
    ? data.reviews
    : reviewExcerpts.map((review) => ({
        ...review,
        id: review.contributor,
        rating: 5,
        photo: null,
        profile: null,
        time: "",
        url: `https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s${review.contributor}!2s0x3a395d3c2ac1e4e3:0x88a117a67fb498d6`,
      }));
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="mx-auto max-w-6xl px-6 py-20 md:py-28"
    >
      <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-primary">Customer reviews</p>
          <h2 id="reviews-title" className="mt-3 text-4xl font-semibold md:text-5xl">
            What our customers say.
          </h2>
          <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
            A few words from travellers who have explored with Vizag Araku Tourism.
          </p>
        </div>
        <a
          href={data?.url ?? googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="glass flex w-fit items-center gap-4 rounded-2xl px-5 py-4"
        >
          <span className="font-display text-4xl text-primary">
            {summary.rating}
            <span className="text-lg text-muted-foreground">/5</span>
          </span>
          <span className="text-sm">
            <span className="block font-semibold">
              Google reviews <ArrowUpRight className="inline" size={14} aria-hidden="true" />
            </span>
            <span className="mt-1 block text-xs text-muted-foreground">
              {summary.count} reviews · {data ? "Google Maps" : reviewSnapshot.checked}
            </span>
          </span>
        </a>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <figure key={review.id} className="glass flex h-full flex-col rounded-3xl p-7">
            <div className="flex items-center justify-between">
              <Stars rating={review.rating} />
              <Quote size={28} className="text-primary/35" aria-hidden="true" />
            </div>
            <blockquote className="mt-7 flex-1 font-display text-2xl leading-relaxed">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
              <ReviewerPhoto photo={review.photo} name={review.name} initials={review.initials} />
              <div>
                <a
                  href={review.profile ?? review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold"
                >
                  {review.name}
                </a>
                {review.time && <p className="mt-1 text-xs text-muted-foreground">{review.time}</p>}
                <a
                  className="mt-1 inline-flex items-center gap-1 text-xs text-primary underline underline-offset-4"
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data ? "Read on Google Maps" : "Review excerpt on Google"}{" "}
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      {data && (
        <p className="mt-6 text-xs text-muted-foreground">
          Google Maps ·{" "}
          <a
            className="underline"
            href="https://support.google.com/contributionpolicy/answer/7400114"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google’s review policy
          </a>
        </p>
      )}
      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs leading-6 text-muted-foreground">
          {data
            ? "Reviews from Google Maps, sorted by relevance. Showing up to five reviews."
            : `Selected review excerpts, checked ${reviewSnapshot.checked}. See Google for current reviews.`}
          {isFetching && (
            <span role="status" className="ml-2">
              Checking Google reviews…
            </span>
          )}
        </p>
        <a
          href={data?.url ?? googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          Read all Google reviews <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

const seasons = [
  {
    icon: Mountain,
    months: "October – February",
    title: "Cooler days, hill escapes",
    tag: "A favourite for Araku",
    description:
      "Plan valley sightseeing and time in the hills during the cooler season. November to January is a popular window for Lambasingi’s misty mornings.",
    tip: "Pack a layer for early starts. Mist depends on the weather.",
  },
  {
    icon: Sun,
    months: "March – May",
    title: "An unhurried summer break",
    tag: "Plan around the heat",
    description:
      "If summer suits your schedule, keep outdoor sightseeing to the cooler parts of the day and leave room for shade, indoor stops and rest.",
    tip: "Discuss travel times and a comfortable pace for your group.",
  },
  {
    icon: CloudRain,
    months: "June – September",
    title: "Green landscapes, flexible plans",
    tag: "Monsoon planning",
    description:
      "Rain can change the journey. Keep hill routes flexible and check local conditions before setting out for waterfalls, viewpoints or river activities.",
    tip: "Confirm road access and boat operations close to departure.",
  },
];

export function BestTimeToVisit() {
  return (
    <section
      id="best-time"
      aria-labelledby="best-time-title"
      className="border-y border-border bg-card/50 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Best time to visit</p>
            <h2 id="best-time-title" className="mt-3 text-4xl font-semibold md:text-5xl">
              When should
              <br />
              you visit?
            </h2>
          </div>
          <p className="max-w-md leading-7 text-muted-foreground">
            For an Araku getaway, the cooler months are a good starting point. Choose your dates
            around the places and experiences you want to enjoy.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {seasons.map(({ icon: Icon, ...season }) => (
            <article
              key={season.months}
              className="flex flex-col rounded-3xl border border-primary/20 bg-background/60 p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <Icon size={30} className="text-primary" aria-hidden="true" />
                <p className="text-xs font-semibold text-primary">{season.months}</p>
              </div>
              <p className="mt-7 text-xs uppercase tracking-widest text-muted-foreground">
                {season.tag}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{season.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                {season.description}
              </p>
              <p className="mt-6 border-t border-border pt-5 text-xs leading-6 text-primary">
                {season.tip}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-7 text-xs leading-6 text-muted-foreground">
          Seasonal guidance, not a weather forecast. Sources:{" "}
          <a
            className="underline underline-offset-4"
            href="https://www.cntraveller.in/story/best-time-to-visit-araku-valley/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Araku travel guide
          </a>{" "}
          and{" "}
          <a
            className="underline underline-offset-4"
            href="https://allurisitharamaraju.ap.gov.in/eco-tourism/"
            target="_blank"
            rel="noopener noreferrer"
          >
            district tourism guide
          </a>
          .
        </p>
      </div>
    </section>
  );
}
