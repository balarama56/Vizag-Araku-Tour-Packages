import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import type { ReactNode } from "react";
import { ArakuItinerary } from "@/components/araku-itinerary";

vi.mock("@/components/site", () => ({
  Nav: () => null,
  Footer: () => null,
  Tilt: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));
afterEach(cleanup);

it("marks the Maredumilli extension and enquiry clearly while preserving the three-day template", () => {
  render(<ArakuItinerary variant="maredumilli" />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Maredumilli.",
  );
  expect(
    screen.getByText("2 forest nights · second night proposed"),
  ).toBeInTheDocument();
  expect(
    screen.queryByText("Is Katiki waterfall included?"),
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(
    screen.getByText(
      "Proposed night 2 in Maredumilli · operator confirmation needed",
    ),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 3/ }));
  expect(
    screen.getByRole("heading", { name: "Morning · Breakfast & checkout" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", {
      name: /Explore all Vizag Maredumilli packages/,
    }),
  ).toHaveAttribute("href", "/tour/vizag-maredumilli-tour-packages");
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("Visakhapatnam to Maredumilli, 3 days / 2 nights");
  expect(message).toContain("₹21,000 price basis to be confirmed");
  expect(message).toContain("second Maredumilli overnight");
  expect(message).toContain("reference daily plan ends on Day 2");
});

it("adapts the template to a one-day Deomali trip without overnight or unrelated valley content", () => {
  render(<ArakuItinerary variant="deomali" />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Deomali & Duduma.",
  );
  expect(screen.getByText("No overnight stay")).toBeInTheDocument();
  expect(
    screen.getByText("Return to Vizag · no overnight stay"),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: "Early morning · Vizag pickup & hill drive",
    }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("button", { name: /Day 2/ }),
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText("Is Katiki waterfall included?"),
  ).not.toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /Explore all Vizag Deomali packages/ }),
  ).toHaveAttribute("href", "/tour/vizag-deomali-tour-packages");
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("Vizag, Deomali & Duduma, 1 day tour");
  expect(message).toContain("₹10,869 per couple");
  expect(message).toContain("No overnight stay is requested");
  expect(message).toContain("return time");
});

it("keeps the Vizag Araku Jagdalpur draft distinct and requests confirmation of all five days", () => {
  render(<ArakuItinerary variant="vizag-jagdalpur" />);
  expect(screen.getByText("4 nights · proposed bases")).toBeInTheDocument();
  expect(
    screen.getByText("Proposed night 1 in Vizag · confirm with operator"),
  ).toBeInTheDocument();
  expect(screen.queryByText("Night 1 in Jagdalpur")).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(
    screen.getByText("Proposed night 2 in Araku · confirm with operator"),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 5/ }));
  expect(
    screen.getByText(
      "Proposed Vizag drop · timing and feasibility to be confirmed",
    ),
  ).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("Vizag, Araku & Jagdalpur, 5 days / 4 nights");
  expect(message).toContain("₹36,800 price basis to be confirmed");
  expect(message).toContain(
    "All five daily plans and overnight bases shown are proposed",
  );
  expect(message).toContain("return transfer feasibility");
});

it("shows the Jagdalpur route with three city nights, one valley night and rail confirmation", () => {
  render(<ArakuItinerary variant="jagdalpur" />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Araku & Jagdalpur.",
  );
  expect(screen.getByText("3 nights Jagdalpur + 1 Araku")).toBeInTheDocument();
  expect(screen.getByText("Night 1 in Jagdalpur")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(screen.getByText("Night 2 in Jagdalpur")).toBeInTheDocument();
  expect(
    screen.getByText("Kutumsar Caves · access permitting"),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 3/ }));
  expect(screen.getByText("Night 3 in Jagdalpur")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 4/ }));
  expect(screen.getByText("Night 4 in Araku")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 5/ }));
  expect(screen.getByText("Vizag station or airport drop")).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /Explore all Vizag Jagdalpur packages/ }),
  ).toHaveAttribute("href", "/tour/vizag-jagdalpur-tour-packages");
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("Araku Valley & Jagdalpur, 5 days / 4 nights");
  expect(message).toContain("₹37,050 price basis to be confirmed");
  expect(message).toContain("train seats and timetable");
  expect(message).toContain("three nights in Jagdalpur and one in Araku");
});

it("keeps the river itinerary and enquiry clear about its Rajahmundry start and unconfirmed transfers", () => {
  render(<ArakuItinerary variant="papikondalu" />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Papikondalu.",
  );
  expect(screen.queryByRole("heading", { level: 1 })).not.toHaveTextContent(
    "Araku Valley",
  );
  expect(
    screen.getByText("One riverside night · confirm camp"),
  ).toBeInTheDocument();
  expect(
    screen.getByText("Does this include pickup and drop in Vizag?"),
  ).toBeInTheDocument();
  expect(
    screen.queryByText("Is Katiki waterfall included?"),
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(
    screen.getByText("Return to Rajahmundry · Vizag connection to be arranged"),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("button", { name: /Day 3/ }),
  ).not.toBeInTheDocument();
  expect(
    screen.getByRole("link", {
      name: /Explore all Vizag Papikondalu packages/,
    }),
  ).toHaveAttribute("href", "/tour/vizag-papikondallu-tour-packages");
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("Visakhapatnam to Papikondalu, 2 days / 1 night");
  expect(message).toContain("₹15,900 price basis to be confirmed");
  expect(message).toContain("both Vizag–Rajahmundry transfers");
  expect(message).toContain("camp availability");
});

it("shows all five Vanjangi tour days, overnight bases and a complete enquiry", () => {
  render(<ArakuItinerary variant="vanjangi-five-day" />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Lambasingi & Vanjangi.",
  );
  expect(
    screen.getByText("2 Vizag · 1 Araku · 1 Lambasingi"),
  ).toBeInTheDocument();
  expect(screen.getByText("Night 1 in Vizag")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(screen.getByText("Night 2 in Vizag")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 3/ }));
  expect(screen.getByText("Night 3 in Araku")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 4/ }));
  expect(
    screen.getByRole("heading", { name: "Before dawn · Checkout & Vanjangi" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Night 4 in Lambasingi")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 5/ }));
  expect(screen.getByText("Thajangi Reservoir")).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: "Afternoon or evening · Vizag drop-off",
    }),
  ).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain(
    "Vizag, Araku, Lambasingi & Vanjangi, 5 days / 4 nights",
  );
  expect(message).toContain("₹32,500 per couple");
  expect(message).toContain("exact station or airport drop time");
  expect(message).not.toContain("proposed");
});

it("shows four Lambasingi days and requests confirmation of the unpublished final days", () => {
  render(<ArakuItinerary variant="lambasingi-four-day" />);
  expect(screen.getByText("3 nights · confirm locations")).toBeInTheDocument();
  expect(
    screen.queryByText("2 nights · confirm locations"),
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 3/ }));
  expect(
    screen.getByRole("heading", { name: "Morning · Proposed viewpoint visit" }),
  ).toBeInTheDocument();
  expect(
    screen.getByText("Third overnight stay · location to be confirmed"),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 4/ }));
  expect(
    screen.getByRole("heading", {
      name: "Morning · Check out & optional local visits",
    }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("button", { name: /Day 5/ }),
  ).not.toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("Vizag, Araku & Lambasingi, 4 days / 3 nights");
  expect(message).toContain("₹25,500 per couple");
  expect(message).toContain("proposed Days 3 and 4");
  expect(message).toContain("all three overnight locations");
});

it("keeps the Araku Lambasingi route based in Araku with a complete second-day excursion", () => {
  render(<ArakuItinerary variant="araku-lambasingi" />);
  expect(screen.getByText("Two nights in Araku")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(
    screen.getByRole("heading", { name: "Before dawn · Lambasingi viewpoint" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Night in Araku")).toBeInTheDocument();
  expect(screen.getByText("Kothapalli waterfalls")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 3/ }));
  expect(
    screen.getByText("Ranajilleda waterfalls · access permitting"),
  ).toBeInTheDocument();
  expect(
    screen.queryByText(/source does not publish Day 3/),
  ).not.toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("Araku & Lambasingi, 3 days / 2 nights");
  expect(message).toContain("₹21,000 per couple");
  expect(message).toContain("both overnight stays in Araku");
  expect(message).not.toContain("proposed Lambasingi Day 3");
});

it("labels the missing Lambasingi day as proposed and prepares the correct tour enquiry", () => {
  render(<ArakuItinerary variant="lambasingi" />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "And Lambasingi.",
  );
  expect(screen.getByText("2 nights · confirm locations")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 3/ }));
  expect(
    screen.getByRole("heading", {
      name: "Morning · Proposed Lambasingi visit",
    }),
  ).toBeInTheDocument();
  expect(screen.getByText(/source does not publish Day 3/)).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /Explore all Vizag Lambasingi packages/ }),
  ).toHaveAttribute("href", "/tour/vizag-lambasinghi-tour-packages");
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("Vizag, Araku & Lambasingi, 3 days / 2 nights");
  expect(message).toContain("₹21,000 per couple");
});

it("gives the Araku-only escape a valley overnight and its own couple quote", () => {
  render(<ArakuItinerary variant="araku-only" />);
  expect(screen.getByText("One night in Araku")).toBeInTheDocument();
  expect(screen.queryByText("One night in Vizag")).not.toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: "Morning · Vizag pickup & hill drive",
    }),
  ).toBeInTheDocument();
  expect(screen.getByText("Borra Caves")).toBeInTheDocument();
  expect(screen.getByText("Night in Araku")).toBeInTheDocument();
  expect(
    screen.queryByRole("button", { name: /Day 3/ }),
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(screen.getByText("Vizag station or airport drop")).toBeInTheDocument();
  expect(screen.getByText("Padmapuram Gardens")).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("Araku Valley Tour, 2 days / 1 night");
  expect(message).toContain("₹10,900 per couple");
  expect(message).not.toContain("11,990");
});

it("keeps Annavaram temples, caves day and enquiry specific to the combined tour", () => {
  render(<ArakuItinerary variant="annavaram" />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "And Annavaram.",
  );
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(
    screen.getByText("Annavaram Satyanarayana Temple"),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Afternoon · Talupulamma Lova visit" }),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 3/ }));
  expect(screen.getByText("Borra Caves")).toBeInTheDocument();
  expect(screen.getByText("Night in Araku")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 4/ }));
  expect(screen.getByText("Vizag station or airport drop")).toBeInTheDocument();
  expect(screen.queryByText("Chaprai waterfalls")).not.toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("Visakhapatnam, Araku & Annavaram");
  expect(message).toContain("4 days / 3 nights");
  expect(message).toContain("₹24,500 price basis to be confirmed");
  expect(message).toContain("darshan arrangements");
});

it("shows four days with two Vizag nights, a valley stay and caves on the final day", () => {
  render(<ArakuItinerary variant="four-day" />);
  expect(screen.getByText("2 nights Vizag + 1 Araku")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(
    screen.getByRole("heading", { name: "Morning · Simhachalam" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Night in Vizag")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 3/ }));
  expect(screen.getByText("Night in Araku")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 4/ }));
  expect(
    screen.getByRole("heading", { name: "Morning · Check out & Borra Caves" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Return to Vizag")).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("4 days / 3 nights");
  expect(message).toContain("₹23,500 price basis to be confirmed");
  expect(message).not.toContain("per couple");
});

it("keeps the two-day route, overnight stay and quote distinct from the three-day tour", () => {
  render(<ArakuItinerary variant="two-day" />);
  expect(
    screen.queryByRole("button", { name: /Day 3/ }),
  ).not.toBeInTheDocument();
  expect(screen.getByText("One night in Vizag")).toBeInTheDocument();
  expect(screen.queryByText("City + valley stays")).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(
    screen.getByRole("heading", {
      name: "Morning · Check out & board the train",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByText("Return to Vizag · no second overnight stay"),
  ).toBeInTheDocument();
  expect(screen.queryByText("Night in Araku")).not.toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Ravi" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-02-05" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("2 days / 1 night");
  expect(message).toContain("₹11,990 per couple");
  expect(message).not.toContain("16,900");
});

it("switches the itinerary and prepares a dated enquiry that resets after edits", () => {
  render(<ArakuItinerary />);
  fireEvent.click(screen.getByRole("button", { name: /Day 2/ }));
  expect(
    screen.getByRole("heading", { name: "Take the winding road." }),
  ).toBeInTheDocument();
  expect(screen.getByText("Borra Caves")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Day 3/ }));
  expect(screen.getByText("Return to Vizag")).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Priya" },
  });
  fireEvent.change(screen.getByLabelText("Travel date"), {
    target: { value: "2027-01-05" },
  });
  fireEvent.change(screen.getByLabelText("Travellers"), {
    target: { value: "4" },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Prepare my trip enquiry" })
      .closest("form")!,
  );
  const message = new URL(
    screen
      .getByRole("link", { name: /Send enquiry on WhatsApp/ })
      .getAttribute("href")!,
  ).searchParams.get("text");
  expect(message).toContain("2027-01-05");
  expect(message).toContain("Travellers: 4");
  expect(message).toContain("Priya");
  expect(message).toContain("3 days / 2 nights");
  fireEvent.change(screen.getByLabelText("Travellers"), {
    target: { value: "3" },
  });
  expect(
    screen.queryByRole("link", { name: /Send enquiry on WhatsApp/ }),
  ).not.toBeInTheDocument();
});
