"use client";
import dynamic from "next/dynamic";
import { memo } from "react";

const Hero = dynamic(() => import("@/components/Home/Hero"), { ssr: false });
const Services = dynamic(() => import("@/components/Home/Services"), {
  ssr: false,
});
const PartnersSlider = dynamic(
  () => import("@/components/Home/PartnersSlider"),
  {
    ssr: false,
  }
);
const Courses = dynamic(() => import("@/components/Home/Courses"), {
  ssr: false,
});
const About = dynamic(() => import("@/components/Home/About"), {
  ssr: false,
});
const ImageSlider = dynamic(() => import("@/components/Home/ImageSlider"), {
  ssr: false,
});

function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <Services />
      <PartnersSlider />
      <Courses />
      <About />
      <ImageSlider />
    </div>
  );
}

export default memo(Home);
