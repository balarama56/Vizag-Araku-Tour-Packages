import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { AndhraTravelArticle } from "@/components/andhra-travel-article";
vi.mock("@/components/site", () => ({Nav:()=>null,Footer:()=>null,Tilt:({children}:any)=>children}));
afterEach(cleanup);
it("has one descriptive heading and valid in-page navigation", () => {
  const {container}=render(<AndhraTravelArticle />);
  expect(screen.getAllByRole("heading",{level:1})).toHaveLength(1);
  expect(screen.getByRole("heading",{level:1})).toHaveTextContent("Explore the beauty of Andhra Pradesh");
  container.querySelectorAll('a[href^="#"]').forEach(link=>expect(container.querySelector(link.getAttribute("href")!)).not.toBeNull());
  expect(container.querySelectorAll("details")).toHaveLength(5);
  expect(screen.getByRole("link",{name:"Explore Vizag Araku tour options"})).toHaveAttribute("href","/tour/vizag-araku-tour-packages");
});