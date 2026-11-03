import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import type { ReactNode } from "react";
import { BusServices } from "@/components/bus-services";
vi.mock("@/components/site", () => ({
  Nav: () => null,
  Footer: () => null,
  Tilt: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));
afterEach(cleanup);
function fill(passengers = "20", date = "2099-11-03") {
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.input(screen.getByLabelText("Travel date"), {
    target: { value: date },
  });
  fireEvent.input(screen.getByLabelText("Pickup time"), {
    target: { value: "07:00" },
  });
  fireEvent.change(screen.getByLabelText("Pickup location"), {
    target: { value: "Vizag station" },
  });
  fireEvent.change(screen.getByLabelText("Drop location or route"), {
    target: { value: "Araku and Borra Caves" },
  });
  fireEvent.change(screen.getByLabelText("Passengers"), {
    target: { value: passengers },
  });
}
function submit() {
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my bus enquiry" })
      .closest("form")!,
  );
}
it("matches 12, 24 and 40 seating preferences to gallery and hero photos from either control", () => {
  render(<BusServices />);
  const gallery = screen.getByRole("region", { name: "Bus photo gallery" });
  const hero = screen.getByLabelText("Bus journey postcard");
  for (const [name, path] of [
    ["12 seater", "/images/cab-services/traveller.jpg"],
    ["24 seater", "/images/bus-services/miniBus.jpg"],
    ["40 seater", "/images/bus-services/coach.jpg"],
  ]) {
    fireEvent.click(
      screen.getByRole("button", { name: new RegExp("^" + name) }),
    );
    expect(within(gallery).getByRole("img")).toHaveAttribute("src", path);
    expect(within(hero).getByRole("img")).toHaveAttribute("src", path);
    expect(screen.getByLabelText("Seating preference")).toHaveValue(name);
  }
  fireEvent.change(screen.getByLabelText("Seating preference"), {
    target: { value: "12 seater" },
  });
  expect(within(gallery).getByRole("img")).toHaveAttribute(
    "src",
    "/images/cab-services/traveller.jpg",
  );
});
it("prepares a group-specific bus quote and clears it when the seating or journey changes", () => {
  render(<BusServices />);
  fill("35");
  fireEvent.change(screen.getByLabelText("Seating preference"), {
    target: { value: "40 seater" },
  });
  fireEvent.change(screen.getByLabelText("Journey type"), {
    target: { value: "2" },
  });
  submit();
  const url = new URL(
    screen
      .getByRole("link", { name: "Send bus enquiry on WhatsApp" })
      .getAttribute("href")!,
  );
  expect(url.origin + url.pathname).toBe("https://wa.me/918341146226");
  for (const value of [
    "bus",
    "multi-day tours",
    "40 seater",
    "Passengers: 35",
    "07:00",
    "Vizag station",
    "Araku and Borra Caves",
    "seating layout",
    "tolls",
    "cancellation",
  ])
    expect(url.searchParams.get("text")).toContain(value);
  fireEvent.click(screen.getByRole("button", { name: /^24 seater/ }));
  expect(
    screen.queryByRole("link", { name: "Send bus enquiry on WhatsApp" }),
  ).not.toBeInTheDocument();
});
it("rejects a group larger than the selected seating preference and a past travel date", () => {
  render(<BusServices />);
  fill("25");
  submit();
  expect(screen.getByRole("alert")).toHaveTextContent(
    "Choose a larger seating option",
  );
  expect(
    screen.queryByRole("link", { name: "Send bus enquiry on WhatsApp" }),
  ).not.toBeInTheDocument();
  fill("20", "2000-01-01");
  submit();
  expect(screen.getByRole("alert")).toHaveTextContent(
    "date from today onwards",
  );
});
