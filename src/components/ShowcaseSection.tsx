import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import mr1 from "../../assets/images/mr1.jpg";
import mr2 from "../../assets/images/mr2.jpg";
import mr3 from "../../assets/images/mr3.jpg";
import mr4 from "../../assets/images/mr4.jpg";
import mr5 from "../../assets/images/mr5.jpg";
import mr6 from "../../assets/images/mr6.jpg";

export default function ShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [mr2, mr3, mr4, mr5, mr1, mr6];

  return (
    <section
      id="showcase"
      ref={ref}
      className="relative min-h-[90vh] py-24 px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="font-heading text-5xl md:text-6xl font-bold text-center text-white text-glow-sm mb-16"
        data-testid="showcase-title"
      >
        Work That Speaks
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-electric-cyan to-transparent opacity-30 hidden md:block" />
          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-electric-cyan to-transparent opacity-30 hidden md:block" />

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ scale: 1.16 }}
              transition={{ duration: 0.6 }}
              className="group relative glass-card rounded-md overflow-hidden neon-border-hover transition-all duration-300"
              data-testid={`showcase-project-${index}`}
            >
              <div className="bg-gradient-to-br from-electric-cyan/20 to-accent-violet/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent" />
                <img
                  src={project}
                  alt={`Design ${index + 1}`}
                  draggable="false"
                  className="h-full w-full object-cover opacity-90 cursor-pointer transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
