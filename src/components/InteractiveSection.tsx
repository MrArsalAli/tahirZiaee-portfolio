import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  BrushStroke,
  GeometricCircle,
  TriangleShape,
  GridPattern,
  PenTool,
} from "./FloatingSVGs";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InteractiveSection() {
  const ref = useRef(null);
  const svg1Ref = useRef(null);
  const svg2Ref = useRef(null);
  const svg3Ref = useRef(null);
  const svg4Ref = useRef(null);
  const svg5Ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const svgRefs = [svg1Ref, svg2Ref, svg3Ref, svg4Ref, svg5Ref];
    const speeds = [100, 200, 150, 250, 180];

    svgRefs.forEach((svgRef, index) => {
      if (!svgRef.current) return;

      gsap.to(svgRef.current, {
        y: -speeds[index],
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="interactive"
      ref={ref}
      className="relative min-h-[70vh] flex items-center justify-center py-24 px-8 overflow-hidden"
    >
      <div
        ref={svg1Ref}
        className="absolute top-20 left-[10%] text-electric-cyan/20"
      >
        <BrushStroke className="animate-float" />
      </div>

      <div
        ref={svg2Ref}
        className="absolute top-40 right-[15%] text-neon-glow/20"
      >
        <GeometricCircle />
      </div>

      <div
        ref={svg3Ref}
        className="absolute bottom-32 left-[20%] text-accent-violet/20"
      >
        <TriangleShape />
      </div>

      <div
        ref={svg4Ref}
        className="absolute top-60 right-[25%] text-electric-cyan/20"
      >
        <GridPattern />
      </div>

      <div
        ref={svg5Ref}
        className="absolute bottom-20 right-[10%] text-neon-glow/20"
      >
        <PenTool className="animate-float" />
      </div>

      <div
        className="relative z-10 text-center max-w-4xl mx-auto"
        data-testid="interactive-content"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-6xl font-bold text-white text-glow-sm mb-8"
        >
          The Creative Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-body text-xl md:text-2xl text-gray-300 leading-relaxed"
        >
          Design is alive when you can feel its rhythm. Every scroll is a frame
          — every frame tells a story.
        </motion.p>
      </div>
    </section>
  );
}
