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
