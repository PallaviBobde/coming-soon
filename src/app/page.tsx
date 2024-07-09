"use client"
import Section1 from "./components/landingpage/section1";
import HeroSection2 from "./components/landingpage/Herosection";
import Section2 from "./components/landingpage/section2";
import Footer from "./components/landingpage/Footer";
import WhySection from "./components/landingpage/Why";
import useSlideToTop from "./hooks/useSlideToTop";
import Section3 from "./components/landingpage/section3";
import { Teams } from "./components/landingpage/Teams";

export default function Home() {
   useSlideToTop(".slide-to-top");
  return (
    <>
      <HeroSection2 />
      <Section1 />
      <Section2 />
      <WhySection />
      <Teams />
      <Section3 />
      <Footer />
    </>
  );
}
