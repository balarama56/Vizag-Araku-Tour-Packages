import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import type { ReactNode } from "react";
import { PancharamaItinerary } from "@/components/pancharama-itinerary";
import { pancharamaPackages } from "@/components/pancharama-packages";

vi.mock("@/components/site", () => ({
  Nav: () => null,
  Footer: () => null,
  Tilt: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));
afterEach(cleanup);

it("links all vehicle packages to the itinerary and switches temples and days", () => {
  expect(pancharamaPackages).toHaveLength(6);
  expect(
    pancharamaPackages.every(
      (item) =>
        item.itineraryUrl === "/tours/visakapatanam-pancharamam-tour-2d-1n",
    ),
  ).toBe(true);
  render(<PancharamaItinerary />);
  fireEvent.click(screen.getByRole("button", { name: /04 Draksharama/ }));
  expect(
    screen.getByRole("img", {
      name: "Draksharama temple main entrance and gopuram",
    }),
  ).toHaveAttribute("src", "/images/pancharama/draksharama.jpg");
  fireEvent.click(screen.getByRole("button", { name: /05 Kumararama/ }));
  expect(
    screen.getByRole("img", {
      name: "Kumararama temple courtyard in Samarlakota",
    }),
  ).toHaveAttribute("src", "/images/pancharama/kumararama.jpg");
  expect(
    screen.getByRole("heading", { name: "Kumararama", exact: true }),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(
    screen.getByRole("heading", { name: "Daytime · Draksharama & Kumararama" }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "Early departure · Meet in Vizag" }),
  ).not.toBeInTheDocument();
});

it("carries the selected vehicle, rate and guest preferences into a WhatsApp enquiry", () => {
  render(<PancharamaItinerary />);
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.input(screen.getByLabelText("Travel date"), {
    target: { value: "2099-11-03" },
  });
  fireEvent.change(screen.getByLabelText("Guests"), { target: { value: "4" } });
  fireEvent.change(screen.getByLabelText("Preferences (optional)"), {
    target: { value: "Station pickup" },
  });
  fireEvent.click(screen.getByRole("radio", { name: /Innova/ }));
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
  const text = url.searchParams.get("text");
  for (const expected of [
    "Ravi",
    "2 days / 1 night",
    "2099-11-03",
    "Guests: 4",
    "Innova",
    "₹27,000",
    "Station pickup",
    "price basis",
    "overnight hotel",
  ])
    expect(text).toContain(expected);
  fireEvent.click(screen.getByRole("radio", { name: /Ertiga/ }));
  expect(
    screen.queryByRole("link", { name: "Send enquiry on WhatsApp" }),
  ).not.toBeInTheDocument();
});

it("rejects past dates instead of preparing a booking enquiry", () => {
  render(<PancharamaItinerary />);
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
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
  expect(
    screen.queryByRole("link", { name: "Send enquiry on WhatsApp" }),
  ).not.toBeInTheDocument();
});
