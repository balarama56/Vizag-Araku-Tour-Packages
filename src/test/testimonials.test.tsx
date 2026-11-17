import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { Testimonials } from "@/components/testimonials";
vi.mock("@/components/site", () => ({ Nav: () => null, Footer: () => null, Tilt: ({children}: any) => children }));
afterEach(cleanup);
it("shows all six photos and six videos with playback controlled by the visitor", () => {
  const { container } = render(<Testimonials />);
  expect(screen.getAllByRole("button", {name: /^View photo:/})).toHaveLength(6);
  const videos = container.querySelectorAll("video");
  expect(videos).toHaveLength(6);
  videos.forEach(video => {
    expect(video).toHaveAttribute("controls");
    expect(video).toHaveAttribute("preload", "none");
    const source = video.querySelector("source")!.getAttribute("src")!;
    expect(video).toHaveAttribute("poster", source.replace(".mp4", "-poster.jpg"));
    expect(video).not.toHaveAttribute("autoplay");
  });
});