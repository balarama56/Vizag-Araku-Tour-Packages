import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import type { ReactNode } from "react";
import { CabServices } from "@/components/cab-services";
vi.mock("@/components/site", () => ({
  Nav: () => null,
  Footer: () => null,
  Tilt: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));
afterEach(cleanup);
function fill(date = "2099-11-03") {
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.input(screen.getByLabelText("Travel date"), {
    target: { value: date },
  });
  fireEvent.input(screen.getByLabelText("Pickup time"), {
    target: { value: "08:30" },
  });
  fireEvent.change(screen.getByLabelText("Pickup location"), {
    target: { value: "Vizag Airport" },
  });
  fireEvent.change(screen.getByLabelText("Drop location or route"), {
    target: { value: "Araku via Borra Caves" },
  });
}
function submit() {
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my cab enquiry" })
      .closest("form")!,
  );
}
it("keeps selected trip, vehicle, date and route in the WhatsApp quote and invalidates edited enquiries", () => {
  render(<CabServices />);
  fireEvent.click(screen.getByRole("button", { name: "Outstation tours" }));
  fireEvent.click(screen.getByRole("button", { name: /^Tempo traveller/ }));
  fill();
  submit();
  const url = new URL(
    screen
      .getByRole("link", { name: "Send cab enquiry on WhatsApp" })
      .getAttribute("href")!,
  );
  expect(url.origin + url.pathname).toBe("https://wa.me/918341146226");
  for (const value of [
    "Ravi",
    "outstation tours",
    "2099-11-03",
    "08:30",
    "Vizag Airport",
    "Araku via Borra Caves",
    "Tempo traveller",
    "tolls",
    "cancellation terms",
  ])
    expect(url.searchParams.get("text")).toContain(value);
  fireEvent.click(screen.getByRole("button", { name: "Local sightseeing" }));
  expect(
    screen.queryByRole("link", { name: "Send cab enquiry on WhatsApp" }),
  ).not.toBeInTheDocument();
});
it("rejects past dates and blank pickup locations", () => {
  render(<CabServices />);
  fill("2000-01-01");
  submit();
  expect(screen.getByRole("alert")).toHaveTextContent(
    "date from today onwards",
  );
  fireEvent.input(screen.getByLabelText("Travel date"), {
    target: { value: "2099-11-03" },
  });
  fireEvent.change(screen.getByLabelText("Pickup location"), {
    target: { value: "   " },
  });
  submit();
  expect(screen.getByRole("alert")).toBeInTheDocument();
  expect(
    screen.queryByRole("link", { name: "Send cab enquiry on WhatsApp" }),
  ).not.toBeInTheDocument();
});
it("browses real Google Maps photos with buttons and keyboard", () => {
  render(<CabServices />);
  const gallery = screen.getByRole("region", { name: "Cab photo gallery" });
  expect(within(gallery).getByRole("img")).toHaveAttribute(
    "src",
    "/images/cab-services/sedan.jpg",
  );
  fireEvent.click(
    within(gallery).getByRole("button", { name: "Next cab photo" }),
  );
  expect(within(gallery).getByRole("img")).toHaveAttribute(
    "src",
    "/images/cab-services/traveller.jpg",
  );
  fireEvent.keyDown(gallery, { key: "ArrowLeft" });
  expect(within(gallery).getByRole("img")).toHaveAttribute(
    "src",
    "/images/cab-services/sedan.jpg",
  );
});

it("shows the matching photo from vehicle cards and the enquiry dropdown", () => {
  render(<CabServices />);
  const gallery = screen.getByRole("region", { name: "Cab photo gallery" });
  fireEvent.click(screen.getByRole("button", { name: /^SUV \/ MUV/ }));
  expect(within(gallery).getByRole("img")).toHaveAttribute(
    "src",
    "/images/cab-services/innova.jpg",
  );
  expect(screen.getByLabelText("Vehicle preference")).toHaveValue("SUV / MUV");
  fireEvent.click(screen.getByRole("button", { name: /^Tempo traveller/ }));
  expect(within(gallery).getByRole("img")).toHaveAttribute(
    "src",
    "/images/cab-services/traveller.jpg",
  );
  fireEvent.change(screen.getByLabelText("Vehicle preference"), {
    target: { value: "SUV / MUV" },
  });
  expect(within(gallery).getByRole("img")).toHaveAttribute(
    "src",
    "/images/cab-services/innova.jpg",
  );
  fireEvent.change(screen.getByLabelText("Vehicle preference"), {
    target: { value: "Sedan" },
  });
  expect(within(gallery).getByRole("img")).toHaveAttribute(
    "src",
    "/images/cab-services/sedan.jpg",
  );
});
