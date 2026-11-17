import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { PancharamaGuide } from "@/components/pancharama-guide";
vi.mock("@/components/site",()=>({Nav:()=>null,Footer:()=>null,Tilt:({children}:any)=>children}));
afterEach(cleanup);
it("provides all five temple sections, valid contents links and six FAQs",()=>{
 const {container}=render(<PancharamaGuide/>);
 expect(screen.getAllByRole("heading",{level:1})).toHaveLength(1);
 for(const id of ["amararama","draksharama","somarama","ksheerarama","kumararama"]){expect(container.querySelector(`#${id}`)).not.toBeNull();}
 container.querySelectorAll('a[href^="#"]').forEach(link=>expect(container.querySelector(link.getAttribute("href")!)).not.toBeNull());
 expect(container.querySelectorAll("details")).toHaveLength(6);
 expect(screen.getByRole("table")).toBeInTheDocument();
 expect(screen.getByRole("link",{name:"Explore Pancharama tour options"})).toHaveAttribute("href","/tour/pancharama-tour-packages");
 expect(screen.getAllByRole("link",{name:"Official destination information"})).toHaveLength(5);
});