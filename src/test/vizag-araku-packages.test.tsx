import {
  fireEvent,
  render,
  screen,
  within,
  cleanup,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { ReactNode } from "react";
import { VizagArakuPackages } from "@/components/vizag-araku-packages";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, ...props }: { children: ReactNode; to: string }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));
vi.mock("@/components/site", () => ({
  Nav: () => null,
  Footer: () => null,
  Tilt: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));
vi.mock("@/components/home/planning-sections", () => ({
  TrustBar: () => null,
}));
afterEach(cleanup);

describe("Vizag Araku package cards", () => {
  it("filters by duration and restores all five packages", () => {
    render(<VizagArakuPackages />);
    expect(screen.getAllByRole("article")).toHaveLength(8);
    fireEvent.click(screen.getByRole("button", { name: "4 days" }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 2 of 5 packages",
    );
    expect(screen.getAllByRole("link", { name: /Enquire about/ })).toHaveLength(
      2,
    );
    fireEvent.click(screen.getByRole("button", { name: "All packages" }));
    expect(screen.getAllByRole("link", { name: /Enquire about/ })).toHaveLength(
      5,
    );
  });
  it("sorts by price and carries the chosen package into its enquiry", () => {
    render(<VizagArakuPackages />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-low" },
    });
    const first = screen.getAllByRole("article")[0]!;
    expect(within(first).getByRole("heading")).toHaveTextContent(
      "Araku Valley Tour",
    );
    const enquiry = within(first).getByRole("link");
    const url = new URL(enquiry.getAttribute("href")!);
    expect(url.hostname).toBe("wa.me");
    expect(url.searchParams.get("text")).toContain(
      "Araku Valley Tour (2 days / 1 night)",
    );
    expect(url.searchParams.get("text")).toContain("10,900");
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-high" },
    });
    expect(
      within(screen.getAllByRole("article")[0]!).getByRole("heading"),
    ).toHaveTextContent("Vizag, Araku & Annavaram");
  });
});

import { VizagLambasingiPackages } from "@/components/vizag-lambasingi-packages";

describe("Vizag Lambasingi package cards", () => {
  it("shows four packages and filters the three and five day escapes", () => {
    render(<VizagLambasingiPackages />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 4 of 4 packages",
    );
    expect(
      screen.queryByRole("button", { name: "2 days" }),
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "3 days" }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 2 of 4 packages",
    );
    fireEvent.click(screen.getByRole("button", { name: "5 days" }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 1 of 4 packages",
    );
    const enquiry = screen.getByRole("link", { name: /Enquire about/ });
    const message = new URL(enquiry.getAttribute("href")!).searchParams.get(
      "text",
    );
    expect(message).toContain(
      "Vizag, Araku, Lambasingi & Vanjangi (5 days / 4 nights)",
    );
    expect(message).toContain("32,500");
  });
  it("sorts Lambasingi prices in both directions", () => {
    render(<VizagLambasingiPackages />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-low" },
    });
    expect(
      within(screen.getAllByRole("article")[0]!).getByText("₹19,500"),
    ).toBeInTheDocument();
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-high" },
    });
    expect(
      within(screen.getAllByRole("article")[0]!).getByText("₹32,500"),
    ).toBeInTheDocument();
  });
});
import { VizagPapikondalluPackages } from "@/components/vizag-papikondallu-packages";

describe("Vizag Papikondallu featured package", () => {
  it("shows the river package and carries its details into the enquiry", () => {
    render(<VizagPapikondalluPackages />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 1 of 1 package",
    );
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Before you book" }),
    ).toBeInTheDocument();
    const enquiry = screen.getByRole("link", {
      name: /Enquire about Visakhapatnam to Papikondalu/,
    });
    const message = new URL(enquiry.getAttribute("href")!).searchParams.get(
      "text",
    );
    expect(message).toContain(
      "Visakhapatnam to Papikondalu (2 days / 1 night)",
    );
    expect(message).toContain("15,900");
    expect(screen.getAllByRole("link", { name: /Enquire about/ })).toHaveLength(
      1,
    );
  });
});
import { VizagJagdalpurPackages } from "@/components/vizag-jagdalpur-packages";

describe("Vizag Jagdalpur package cards", () => {
  it("compares both five-day packages and preserves the selected enquiry", () => {
    render(<VizagJagdalpurPackages />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 2 of 2 packages",
    );
    fireEvent.click(screen.getByRole("button", { name: "5 days" }));
    expect(screen.getAllByRole("link", { name: /Enquire about/ })).toHaveLength(
      2,
    );
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-low" },
    });
    const first = screen.getAllByRole("article")[0]!;
    expect(within(first).getByRole("heading")).toHaveTextContent(
      "Vizag, Araku & Jagdalpur",
    );
    const enquiry = within(first).getByRole("link");
    const message = new URL(enquiry.getAttribute("href")!).searchParams.get(
      "text",
    );
    expect(message).toContain("Vizag, Araku & Jagdalpur (5 days / 4 nights)");
    expect(message).toContain("36,800");
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-high" },
    });
    expect(
      within(screen.getAllByRole("article")[0]!).getByRole("heading"),
    ).toHaveTextContent("Araku Valley & Jagdalpur");
  });
});
import { VizagDeomaliPackages } from "@/components/vizag-deomali-packages";

describe("Vizag Deomali day tour", () => {
  it("shows a day tour without an overnight stay and preserves the price basis", () => {
    render(<VizagDeomaliPackages />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 1 of 1 package",
    );
    expect(screen.getByText("1 day tour")).toBeInTheDocument();
    expect(screen.queryByText(/0 nights/)).not.toBeInTheDocument();
    expect(
      screen.getByText("Per couple · subject to confirmation"),
    ).toBeInTheDocument();
    const enquiry = screen.getByRole("link", {
      name: /Enquire about Vizag, Deomali & Duduma/,
    });
    const message = new URL(enquiry.getAttribute("href")!).searchParams.get(
      "text",
    );
    expect(message).toContain("Vizag, Deomali & Duduma (1 day tour)");
    expect(message).toContain("10,869");
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
  });
});
import { VizagMaredumilliPackages } from "@/components/vizag-maredumilli-packages";

describe("Vizag Maredumilli package card", () => {
  it("shows the forest escape and sends the selected package in its enquiry", () => {
    render(<VizagMaredumilliPackages />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 1 of 1 package",
    );
    expect(screen.getByText("3 days / 2 nights")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Visakhapatnam to Maredumilli" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
    const enquiry = screen.getByRole("link", {
      name: /Enquire about Visakhapatnam to Maredumilli/,
    });
    const message = new URL(enquiry.getAttribute("href")!).searchParams.get(
      "text",
    );
    expect(message).toContain(
      "Visakhapatnam to Maredumilli (3 days / 2 nights)",
    );
    expect(message).toContain("21,000");
  });
});
import { TempleTourPackages } from "@/components/temple-tour-packages";

describe("Temple tour package cards", () => {
  it("filters the six listings by duration and restores all options", () => {
    render(<TempleTourPackages />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 6 of 6 packages",
    );
    fireEvent.click(screen.getByRole("button", { name: "3 days" }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 2 of 6 packages",
    );
    expect(screen.getAllByRole("link", { name: /Enquire about/ })).toHaveLength(
      2,
    );
    fireEvent.click(screen.getByRole("button", { name: "4 days" }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 2 of 6 packages",
    );
    fireEvent.click(screen.getByRole("button", { name: "All packages" }));
    expect(screen.getAllByRole("link", { name: /Enquire about/ })).toHaveLength(
      6,
    );
  });
  it("sorts prices, labels the per-person fare and distinguishes duplicate routes", () => {
    render(<TempleTourPackages />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-low" },
    });
    const first = screen.getAllByRole("article")[0]!;
    expect(within(first).getByRole("heading")).toHaveTextContent(
      "Vizag to Vadapalli Temple",
    );
    expect(
      within(first).getByText("Per person · subject to confirmation"),
    ).toBeInTheDocument();
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-high" },
    });
    const highest = screen.getAllByRole("article")[0]!;
    const message = new URL(
      within(highest).getByRole("link").getAttribute("href")!,
    ).searchParams.get("text");
    expect(message).toContain(
      "Vizag, Puri & Konark · Option 2 (3 days / 2 nights)",
    );
    expect(message).toContain("30,000");
  });
});
import { PancharamaPackages } from "@/components/pancharama-packages";

describe("Pancharama vehicle package cards", () => {
  it("shows six vehicle options and preserves each selection in the enquiry", () => {
    render(<PancharamaPackages />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 6 of 6 packages",
    );
    expect(
      screen.getAllByRole("link", {
        name: /Enquire about Vizag to Pancharamam/,
      }),
    ).toHaveLength(6);
    expect(screen.getAllByText("2 days / 1 night")).toHaveLength(6);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-high" },
    });
    const first = screen.getAllByRole("article")[0]!;
    expect(within(first).getByRole("heading")).toHaveTextContent(
      "Vizag to Pancharamam · 24-seater",
    );
    const message = new URL(
      within(first).getByRole("link").getAttribute("href")!,
    ).searchParams.get("text");
    expect(message).toContain(
      "Vizag to Pancharamam · 24-seater (2 days / 1 night)",
    );
    expect(message).toContain("71,000");
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-low" },
    });
    expect(
      within(screen.getAllByRole("article")[0]!).getByText("₹22,000"),
    ).toBeInTheDocument();
  });
});
import { VizagAnnavaramPackages } from "@/components/vizag-annavaram-packages";

describe("Vizag Annavaram package cards", () => {
  it("shows the three source options and filters the two four-day choices", () => {
    render(<VizagAnnavaramPackages />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 3 of 3 packages",
    );
    fireEvent.click(screen.getByRole("button", { name: "4 days" }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 2 of 3 packages",
    );
    expect(
      screen.queryByRole("heading", { name: "Vizag to Vadapalli Temple" }),
    ).not.toBeInTheDocument();
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-low" },
    });
    const first = screen.getAllByRole("article")[0]!;
    expect(within(first).getByRole("heading")).toHaveTextContent(
      "Vizag, Araku & Annavaram · Option 2",
    );
    const message = new URL(
      within(first).getByRole("link").getAttribute("href")!,
    ).searchParams.get("text");
    expect(message).toContain(
      "Vizag, Araku & Annavaram · Option 2 (4 days / 3 nights)",
    );
    expect(message).toContain("20,500");
    fireEvent.click(screen.getByRole("button", { name: "All packages" }));
    expect(
      screen.getByText("Per person · subject to confirmation"),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /Enquire about/ })).toHaveLength(
      3,
    );
  });
});
import { BhubaneswarPuriKonarkPackages } from "@/components/bhubaneswar-puri-konark-packages";

describe("Bhubaneswar Puri Konark package card", () => {
  it("shows the verified couple fare and preserves the full route in its enquiry", () => {
    render(<BhubaneswarPuriKonarkPackages />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Bhubaneswar, Puri & Konark",
    );
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 1 of 1 package",
    );
    expect(screen.getByText("3 days / 2 nights")).toBeInTheDocument();
    expect(
      screen.getByText("Per couple · subject to confirmation"),
    ).toBeInTheDocument();
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
    const enquiry = screen.getByRole("link", {
      name: /Enquire about Vizag to Bhubaneswar, Puri & Konark/,
    });
    const message = new URL(enquiry.getAttribute("href")!).searchParams.get(
      "text",
    );
    expect(message).toContain(
      "Vizag to Bhubaneswar, Puri & Konark (3 days / 2 nights)",
    );
    expect(message).toContain("30,000");
  });
});
import { PuriKonarkPackages } from "@/components/puri-konark-packages";

describe("Puri Konark package cards", () => {
  it("compares two couple fares and preserves each option in the enquiry", () => {
    render(<PuriKonarkPackages />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 2 of 2 packages",
    );
    expect(
      screen.getAllByText("Per couple · subject to confirmation"),
    ).toHaveLength(2);
    fireEvent.click(screen.getByRole("button", { name: "3 days" }));
    expect(screen.getAllByRole("link", { name: /Enquire about/ })).toHaveLength(
      2,
    );
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-high" },
    });
    const first = screen.getAllByRole("article")[0]!;
    expect(within(first).getByRole("heading")).toHaveTextContent(
      "Vizag, Puri & Konark · Option 2",
    );
    const message = new URL(
      within(first).getByRole("link").getAttribute("href")!,
    ).searchParams.get("text");
    expect(message).toContain(
      "Vizag, Puri & Konark · Option 2 (3 days / 2 nights)",
    );
    expect(message).toContain("30,000");
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-low" },
    });
    expect(
      within(screen.getAllByRole("article")[0]!).getByText("₹26,600"),
    ).toBeInTheDocument();
  });
});
import { VizagHotels } from "@/components/vizag-hotels";

describe("Vizag hotel stay enquiry", () => {
  function fillDates(checkOut = "2099-11-03") {
    fireEvent.change(screen.getByLabelText("Check-in", { exact: true }), {
      target: { value: "2099-11-01" },
    });
    fireEvent.change(screen.getByLabelText("Check-out", { exact: true }), {
      target: { value: checkOut },
    });
  }
  function submitEnquiry() {
    fireEvent.submit(
      screen
        .getByRole("button", { name: "Prepare my stay enquiry" })
        .closest("form")!,
    );
  }
  it("prepares a hotel-specific request with stay dates, guests, rooms and preferences", () => {
    render(<VizagHotels />);
    fillDates();
    fireEvent.change(screen.getByLabelText("Guests", { exact: true }), {
      target: { value: "3" },
    });
    fireEvent.change(
      screen.getByLabelText("Stay preferences (optional)", { exact: true }),
      { target: { value: "Twin beds please" } },
    );
    submitEnquiry();
    const link = screen.getByRole("link", { name: "Send enquiry on WhatsApp" });
    const message = new URL(link.getAttribute("href")!).searchParams.get(
      "text",
    );
    expect(message).toContain("Hotel Lotus Park in Vizag");
    expect(message).toContain("2099-11-03 (2 nights)");
    expect(message).toContain("Guests: 3. Rooms: 1.");
    expect(message).toContain("Twin beds please");
    fireEvent.change(screen.getByLabelText("Rooms", { exact: true }), {
      target: { value: "2" },
    });
    expect(
      screen.queryByRole("link", { name: "Send enquiry on WhatsApp" }),
    ).not.toBeInTheDocument();
  });
  it("rejects check-out on or before check-in", () => {
    render(<VizagHotels />);
    fillDates("2099-11-01");
    submitEnquiry();
    expect(screen.getByRole("alert")).toHaveTextContent(
      "check-out date after check-in",
    );
    expect(
      screen.queryByRole("link", { name: "Send enquiry on WhatsApp" }),
    ).not.toBeInTheDocument();
  });
  it("rejects more rooms than guests", () => {
    render(<VizagHotels />);
    fillDates();
    fireEvent.change(screen.getByLabelText("Rooms", { exact: true }), {
      target: { value: "3" },
    });
    submitEnquiry();
    expect(screen.getByRole("alert")).toHaveTextContent(
      "no more rooms than guests",
    );
  });
});
import { ArakuHotels } from "@/components/araku-hotels";

describe("Araku hotel booking cards", () => {
  it("features Akshaya Inn alongside the two reference hotels", () => {
    render(<ArakuHotels />);
    for (const name of [
      "Akshaya Inn",
      "Hotel Rajadhani Grand",
      "Apple Resort",
    ]) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
      expect(
        screen.getByRole("link", {
          name: `Enquire about ${name}`,
        }),
      ).toBeInTheDocument();
    }
    expect(
      screen.getAllByText("Araku Valley · destination image"),
    ).toHaveLength(3);
    expect(screen.getByLabelText("Hotel preference")).toHaveValue(
      "Akshaya Inn",
    );
  });
  it("prepares an Akshaya Inn enquiry in Araku and selects another hotel from its card", () => {
    render(<ArakuHotels />);
    fireEvent.change(screen.getByLabelText("Check-in", { exact: true }), {
      target: { value: "2099-11-01" },
    });
    fireEvent.change(screen.getByLabelText("Check-out", { exact: true }), {
      target: { value: "2099-11-03" },
    });
    fireEvent.submit(
      screen
        .getByRole("button", { name: "Prepare my stay enquiry" })
        .closest("form")!,
    );
    const message = new URL(
      screen
        .getByRole("link", { name: "Send enquiry on WhatsApp" })
        .getAttribute("href")!,
    ).searchParams.get("text");
    expect(message).toContain("Akshaya Inn in Araku");
    expect(message).toContain("2099-11-03 (2 nights)");
    fireEvent.click(
      screen.getByRole("link", {
        name: "Enquire about Apple Resort",
      }),
    );
    expect(screen.getByLabelText("Hotel preference")).toHaveValue(
      "Apple Resort",
    );
    expect(
      screen.queryByRole("link", { name: "Send enquiry on WhatsApp" }),
    ).not.toBeInTheDocument();
  });
});
import { TravelBlog } from "@/components/travel-blog";

describe("Travel blog article cards", () => {
  it("filters the six reference articles by topic", () => {
    render(<TravelBlog />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 6 of 6 articles",
    );
    fireEvent.click(screen.getByRole("button", { name: "Vizag" }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 2 of 6 articles",
    );
    expect(
      screen.getAllByRole("link", { name: /Read full article:/ }),
    ).toHaveLength(2);
  });
  it("combines search with the topic filter and recovers from no results", () => {
    render(<TravelBlog />);
    fireEvent.click(screen.getByRole("button", { name: "Hill escapes" }));
    fireEvent.change(
      screen.getByRole("searchbox", { name: "Search travel articles" }),
      { target: { value: "  VANJANGI  " } },
    );
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 1 of 6 articles",
    );
    expect(
      screen.getByRole("link", { name: /Read full article:/ }),
    ).toHaveAttribute(
      "href",
      "https://www.vizagarakutourpackages.com/araku-lambasingi-vanjangi-tour-package/",
    );
    fireEvent.change(screen.getByRole("searchbox"), {
      target: { value: "unmatched keyword" },
    });
    expect(
      screen.getByRole("heading", { name: "No stories found." }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "Showing 6 of 6 articles",
    );
    expect(screen.getByRole("searchbox")).toHaveValue("");
  });
  it("links to published full articles and preserves the three planning guides", () => {
    render(<TravelBlog />);
    for (const link of screen.getAllByRole("link", {
      name: /Read full article:/,
    })) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(new URL(link.getAttribute("href")!).hostname).toBe(
        "www.vizagarakutourpackages.com",
      );
    }
    expect(
      screen.getByRole("heading", { name: "What to check in a tour quote" }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("Read planning tips")).toHaveLength(3);
  });
});
import { HomeHero } from "@/components/home/home-hero";

describe("Home hero package spotlight", () => {
  it("updates the package details and destination link when a traveller chooses an escape", () => {
    render(<HomeHero />);
    expect(screen.getByText("₹10,900")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "View Araku Valley packages" }),
    ).toHaveAttribute("href", "/tour/vizag-araku-tour-packages");
    fireEvent.click(screen.getByRole("button", { name: "Lambasingi" }));
    expect(screen.getByText("₹19,500")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Lambasingi" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(
      screen.getByRole("link", { name: "View Lambasingi packages" }),
    ).toHaveAttribute("href", "/tour/vizag-lambasinghi-tour-packages");
    fireEvent.click(screen.getByRole("button", { name: "Papikondalu" }));
    expect(screen.getByText("₹15,900")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Visakhapatnam to Papikondalu",
    );
    expect(
      screen.getByRole("link", { name: "View Papikondalu packages" }),
    ).toHaveAttribute("href", "/tour/vizag-papikondallu-tour-packages");
    expect(screen.queryByText("₹19,500")).not.toBeInTheDocument();
  });
  it("provides clear links to tours, personal trip planning and hotel enquiries", () => {
    render(<HomeHero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "From the coast.Into the clouds.",
    );
    expect(
      screen.getByRole("link", { name: "Explore tour packages" }),
    ).toHaveAttribute("href", "#tours");
    expect(screen.getByRole("link", { name: "Plan my trip" })).toHaveAttribute(
      "href",
      "/contact",
    );
    expect(
      screen.getByRole("link", { name: /Stay enquiries/ }),
    ).toHaveAttribute("href", "/hotel-booking");
  });
});
