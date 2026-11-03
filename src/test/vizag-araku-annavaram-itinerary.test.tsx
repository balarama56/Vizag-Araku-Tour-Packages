import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import type { ReactNode } from "react";
import { VizagArakuAnnavaramItinerary } from "@/components/vizag-araku-annavaram-itinerary";
import { templeTourPackages } from "@/components/temple-tour-packages";
import { vizagAnnavaramPackages } from "@/components/vizag-annavaram-packages";

vi.mock("@/components/site", () => ({
  Nav: () => null,
  Footer: () => null,
  Tilt: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));
afterEach(cleanup);

it("opens Option 2 with its own rate, source and coastal day", () => {
  const path = "/tours/visakapatanam-araku-annavaram-tour-4d-3n";
  expect(
    templeTourPackages.find((p) => p.id === "annavaram-4d-b")?.itineraryUrl,
  ).toBe(path);
  expect(
    vizagAnnavaramPackages.find((p) => p.id === "annavaram-4d-b")?.itineraryUrl,
  ).toBe(path);
  render(<VizagArakuAnnavaramItinerary option={2} />);
  expect(
    screen.getByRole("heading", { name: "Arrival · Settle into Vizag" }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Thotlakonda Buddha viewpoint/)).toBeInTheDocument();
  expect(
    screen.getByText(/Continue to RK Beach, Fishing Harbour/),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /View the original itinerary/ }),
  ).toHaveAttribute("href", `https://www.vizagarakutourpackages.com${path}/`);
  expect(screen.queryByText(/₹25,500/)).not.toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.input(screen.getByLabelText("Travel date"), {
    target: { value: "2099-11-03" },
  });
  fireEvent.change(screen.getByLabelText("Guests"), { target: { value: "4" } });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const url = new URL(
    screen
      .getByRole("link", { name: "Send enquiry on WhatsApp" })
      .getAttribute("href")!,
  );
  expect(url.searchParams.get("text")).toContain("Option 2");
  expect(url.searchParams.get("text")).toContain("₹20,500");
  expect(url.searchParams.get("text")).toContain("Guests: 4");
  expect(url.searchParams.get("text")).not.toContain("₹25,500");
});

it("links only the matching option and preserves the four-day order and overnight stays", () => {
  const path = "/tours/visakhapatnam-araku-annavaram-tour-4-d-3-n-2";
  expect(
    templeTourPackages.find((p) => p.id === "annavaram-4d-a")?.itineraryUrl,
  ).toBe(path);
  expect(
    vizagAnnavaramPackages.find((p) => p.id === "annavaram-4d-a")?.itineraryUrl,
  ).toBe(path);
  expect(
    templeTourPackages.find((p) => p.id === "annavaram-4d-b")?.itineraryUrl,
  ).not.toBe(path);
  render(<VizagArakuAnnavaramItinerary />);
  expect(screen.getByText("Night 1 · stay in Vizag")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(
    screen.getByRole("heading", { name: "Morning · Annavaram temple visit" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Night 2 · stay in Vizag")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 3/ }));
  expect(
    screen.getByRole("heading", {
      name: "Daytime · Borra Caves & hilltop views",
    }),
  ).toBeInTheDocument();
  expect(screen.getByText("Night 3 · stay in Araku")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 4/ }));
  expect(
    screen.getByRole("heading", { name: "Return · Station or airport drop" }),
  ).toBeInTheDocument();
});

it("shows actual highlight photos and carries the couple rate into a group-specific quote", () => {
  render(<VizagArakuAnnavaramItinerary />);
  fireEvent.click(screen.getByRole("button", { name: /03 Borra Caves/ }));
  expect(
    screen.getByRole("img", {
      name: "Illuminated limestone formations and walkways inside Borra Caves",
    }),
  ).toHaveAttribute("src", "/images/vizag-araku-annavaram/borra.jpg");
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.input(screen.getByLabelText("Travel date"), {
    target: { value: "2099-11-03" },
  });
  fireEvent.change(screen.getByLabelText("Guests"), { target: { value: "4" } });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const url = new URL(
    screen
      .getByRole("link", { name: "Send enquiry on WhatsApp" })
      .getAttribute("href")!,
  );
  expect(url.origin + url.pathname).toBe("https://wa.me/918341146226");
  const message = url.searchParams.get("text");
  for (const value of [
    "Option 1",
    "4 days / 3 nights",
    "Guests: 4",
    "₹25,500",
    "final group total",
    "two nights in Vizag and one night in Araku",
    "Katiki waterfall is excluded",
  ])
    expect(message).toContain(value);
  expect(message).not.toContain("driver allowance");
  fireEvent.change(screen.getByLabelText("Guests"), { target: { value: "3" } });
  expect(
    screen.queryByRole("link", { name: "Send enquiry on WhatsApp" }),
  ).not.toBeInTheDocument();
});

it("rejects a past travel date", () => {
  render(<VizagArakuAnnavaramItinerary />);
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.input(screen.getByLabelText("Travel date"), {
    target: { value: "2000-01-01" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  expect(screen.getByRole("alert")).toHaveTextContent(
    "travel date from today onwards",
  );
});
