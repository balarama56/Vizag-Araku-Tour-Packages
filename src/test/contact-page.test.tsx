import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { ContactPage, agencyAddress } from "@/components/contact-page";
vi.mock("@/components/site", () => ({ Nav: () => null, Footer: () => null, Tilt: ({children}: any) => children, tours: [{title:"Araku Valley Tour"}] }));
afterEach(cleanup);
function fill(phone = "+91 98765 43210") {
  fireEvent.change(screen.getByLabelText("Your name"), {target:{value:"Ravi"}});
  fireEvent.change(screen.getByLabelText("Phone number"), {target:{value:phone}});
  fireEvent.change(screen.getByLabelText("What can we help with?"), {target:{value:"Cab booking"}});
}
function submit() { fireEvent.submit(screen.getByRole("form", {name:"Trip enquiry"})); }
it("shows the agency address and matching directions", () => {
  render(<ContactPage />);
  expect(document.querySelector("address")).toHaveTextContent(agencyAddress);
  expect(screen.getByRole("link", {name:"Get directions"})).toHaveAttribute("href", expect.stringContaining("destination_place_id=ChIJ4-TBKjxdOToR1pi0f6YXoYg"));
  expect(screen.getByRole("link", {name:"View our Google Maps listing"})).toHaveAttribute("href", "https://share.google/rL0sECmZLclJ9asMr");
  expect(new URL(screen.getByRole("link", {name:"Get directions"}).getAttribute("href")!).searchParams.get("destination")).toBe(agencyAddress);
  expect(screen.getByTitle("Map showing the Vizag Araku Tourism agency address")).toHaveAttribute("loading","lazy");
});
it("prepares a service-specific enquiry and clears it after edits", () => {
  render(<ContactPage />); fill(); submit();
  const url = new URL(screen.getByRole("link",{name:"Send enquiry on WhatsApp"}).getAttribute("href")!);
  expect(url.origin + url.pathname).toBe("https://wa.me/918341146226");
  expect(url.searchParams.get("text")).toContain("Cab booking");
  expect(url.searchParams.get("text")).toContain("Ravi");
  fireEvent.change(screen.getByLabelText("Number of travellers"),{target:{value:"3"}});
  expect(screen.queryByRole("link",{name:"Send enquiry on WhatsApp"})).not.toBeInTheDocument();
});
it("rejects invalid phone numbers and past dates", () => {
  render(<ContactPage />); fill("abc"); submit();
  expect(screen.getByRole("alert")).toBeInTheDocument();
  fill(); fireEvent.change(screen.getByLabelText("Travel date (optional)"),{target:{value:"2000-01-01"}}); submit();
  expect(screen.getByRole("alert")).toBeInTheDocument();
  expect(screen.queryByRole("link",{name:"Send enquiry on WhatsApp"})).not.toBeInTheDocument();
});