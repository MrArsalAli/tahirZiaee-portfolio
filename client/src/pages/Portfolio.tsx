import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import InteractiveSection from "@/components/InteractiveSection";
import FooterSection from "@/components/FooterSection";
import CursorTrail from "@/components/CursorTrail";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export default function Portfolio() {
  useScrollTrigger();

  useEffect(() => {
    document.documentElement.classList.add("smooth-scroll");
    document.body.style.scrollSnapType = "y proximity";
    
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.style.scrollSnapAlign = "start";
    });

    return () => {
      document.documentElement.classList.remove("smooth-scroll");
      document.body.style.scrollSnapType = "";
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#0A0A0A" }}>
      <CursorTrail />
      <HeroSection />
      <AboutSection />
      <ShowcaseSection />
      <InteractiveSection />
      <FooterSection />
    </div>
  );
}
