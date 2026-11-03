import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import type { ReactNode } from "react";
import { VadapalliItinerary } from "@/components/vadapalli-itinerary";
import { templeTourPackages } from "@/components/temple-tour-packages";

vi.mock("@/components/site", () => ({
  Nav: () => null,
  Footer: () => null,
  Tilt: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));
afterEach(cleanup);

it("links the package and shows all four destinations with actual photographs", () => {
  expect(
    templeTourPackages.find((p) => p.id === "vadapalli-2d")?.itineraryUrl,
  ).toBe("/tours/visakapatanam-vadapalli-temple-tour-1n-2d");
  render(<VadapalliItinerary />);
  for (const [button, alt] of [
    [/02 Draksharamam/, "Draksharama temple main entrance and gopuram"],
    [/03 Pithapuram/, "Kukkuteswara Swamy Temple entrance in Pithapuram"],
    [/04 Annavaram/, "Annavaram temple complex on Ratnagiri Hill"],
  ] as const) {
    fireEvent.click(screen.getByRole("button", { name: button }));
    expect(screen.getByRole("img", { name: alt })).toBeInTheDocument();
  }
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(
    screen.getByRole("heading", { name: "Morning · Vadapalli darshan" }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("heading", {
      name: "Around 10 PM · Depart Visakhapatnam",
    }),
  ).not.toBeInTheDocument();
});

it("calculates the disclosed reference charges and prepares a dated WhatsApp enquiry", () => {
  render(<VadapalliItinerary />);
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Sita" },
  });
  fireEvent.input(screen.getByLabelText("Departure date"), {
    target: { value: "2099-11-03" },
  });
  fireEvent.change(screen.getByLabelText("Guests"), { target: { value: "3" } });
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
  for (const expected of [
    "Sita",
    "Vadapalli",
    "1 night / 2 days",
    "2099-11-03",
    "Guests: 3",
    "₹5,100",
    "₹100 driver allowance",
    "excluding meals",
    "overnight travel",
  ])
    expect(message).toContain(expected);
  fireEvent.change(screen.getByLabelText("Guests"), { target: { value: "4" } });
  expect(
    screen.queryByRole("link", { name: "Send enquiry on WhatsApp" }),
  ).not.toBeInTheDocument();
});

it("rejects a group exceeding the listed 17-seater instead of preparing a misleading subtotal", () => {
  render(<VadapalliItinerary />);
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Sita" },
  });
  fireEvent.input(screen.getByLabelText("Departure date"), {
    target: { value: "2099-11-03" },
  });
  fireEvent.change(screen.getByLabelText("Guests"), {
    target: { value: "18" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  expect(screen.getByRole("alert")).toHaveTextContent("1–17 guests");
  expect(
    screen.queryByRole("link", { name: "Send enquiry on WhatsApp" }),
  ).not.toBeInTheDocument();
});
