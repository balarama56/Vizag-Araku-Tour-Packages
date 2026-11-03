import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import type { ReactNode } from "react";
import { PuriKonarkItinerary } from "@/components/puri-konark-itinerary";
import { puriKonarkPackages } from "@/components/puri-konark-packages";
vi.mock("@/components/site", () => ({
  Nav: () => null,
  Footer: () => null,
  Tilt: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));
afterEach(cleanup);

it.each([1, 2] as const)(
  "preserves Option %s price, source, schedule and quote",
  (option) => {
    const path =
      "/tours/visakapatanam-puri-konark-3d-2n" + (option === 1 ? "-2" : "");
    const price = option === 1 ? "₹26,600" : "₹30,000";
    expect(
      puriKonarkPackages.find(
        (p) => p.id === `puri-3d-${option === 1 ? "a" : "b"}`,
      )?.itineraryUrl,
    ).toBe(path);
    render(<PuriKonarkItinerary option={option} />);
    expect(
      screen.getByRole("link", { name: /View the original itinerary/ }),
    ).toHaveAttribute("href", `https://www.vizagarakutourpackages.com${path}/`);
    expect(screen.getAllByText(price).length).toBeGreaterThan(0);
    expect(
      screen.getByText("Night 1 · stay in Bhubaneswar"),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /Day 4/ }),
    ).not.toBeInTheDocument();
    if (option === 1)
      expect(
        screen.getByRole("heading", { name: "5 AM · Depart Vizag" }),
      ).toBeInTheDocument();
    else
      expect(
        screen.getByRole("heading", { name: "Discover · Puri & Bhubaneswar" }),
      ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
    expect(
      screen.getByText("Night 2 · stay in Bhubaneswar"),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Day 3/ }));
    expect(
      screen.getByRole("heading", {
        name:
          option === 1
            ? "Discover · Temple & cave heritage"
            : "Discover · Chilika Lake",
      }),
    ).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Your name"), {
      target: { value: "Ravi" },
    });
    fireEvent.input(screen.getByLabelText("Travel date"), {
      target: { value: "2099-11-03" },
    });
    fireEvent.change(screen.getByLabelText("Guests"), {
      target: { value: "4" },
    });
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
    for (const value of [
      `Option ${option}`,
      price,
      "Guests: 4",
      "3 days / 2 nights",
      "two nights in Bhubaneswar",
    ])
      expect(text).toContain(value);
    fireEvent.change(screen.getByLabelText("Guests"), {
      target: { value: "3" },
    });
    expect(
      screen.queryByRole("link", { name: "Send enquiry on WhatsApp" }),
    ).not.toBeInTheDocument();
  },
);
