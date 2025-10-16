import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollTrigger() {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}

export function useGSAPFadeIn(trigger: string, deps: React.DependencyList = []) {
  useEffect(() => {
    const elements = document.querySelectorAll(trigger);
    
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, deps);
}
