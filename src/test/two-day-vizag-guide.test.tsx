import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { TwoDayVizagGuide } from "@/components/two-day-vizag-guide";
import { shortBreakPrice } from "@/lib/two-day-vizag-guide";
vi.mock("@/components/site",()=>({Nav:()=>null,Footer:()=>null,Tilt:({children}:any)=>children}));
afterEach(cleanup);
it("shows the couple price, correct package link and working contents",()=>{
 const {container}=render(<TwoDayVizagGuide/>);
 const rate = new Intl.NumberFormat("en-IN").format(shortBreakPrice);
 expect(screen.getByRole("heading",{name:`Listed from ₹${rate} per couple`})).toBeInTheDocument();
 expect(screen.getAllByRole("heading",{level:1})).toHaveLength(1);
 expect(screen.getByRole("link",{name:"Review the detailed two-day package"})).toHaveAttribute("href","/tours/visakhapatnam-araku-valley-tour-2-d-1-n/");
 container.querySelectorAll('a[href^="#"]').forEach(link=>expect(container.querySelector(link.getAttribute("href")!)).not.toBeNull());
 expect(container.querySelectorAll("details")).toHaveLength(6);
 expect(screen.getByRole("table")).toBeInTheDocument();
});