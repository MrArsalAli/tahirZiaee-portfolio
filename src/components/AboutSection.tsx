import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portraitImage from "../../assets/images/dp.png"

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Skills data
  const skills = [
    "UI/UX Design",
    "Product Design",
    "Brand Identity",
    "Design Systems",
    "Prototyping",
    "User Research",
  ];

  const tools = [
    "Figma",
    "Adobe Creative Suite",
    "Framer",
    "Principle",
    "Webflow",
    "After Effects",
  ];

  const experience = [
    "8+ Years in Design",
    "50+ Projects Delivered",
    "Global Client Base",
    "Award-Winning Work",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-[80vh] flex items-center py-24 px-8"
      style={{ background: "#0A0A0A" }}
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] overflow-hidden rounded-md grain-texture"
          data-testid="about-portrait"
        >
          <img
            src={portraitImage}
            alt="Tahir Ziaee"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-8 rounded-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(13, 162, 231, 0.1) 0%, rgba(0, 209, 255, 0.05) 100%)",
            }}
          >
            <h2
              className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 text-glow-sm"
              data-testid="about-title"
            >
              The Mind Behind the Interface
            </h2>
            <p
              className="font-body text-lg text-gray-300 leading-relaxed"
              data-testid="about-description"
            >
              I'm a UI/UX designer obsessed with clarity and creative depth.
              From clean app layouts to bold product stories — I turn pixels
              into emotions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 rounded-md neon-border-hover transition-all"
              data-testid="about-skills"
            >
              <h3 className="font-heading text-xl font-semibold text-electric-cyan mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-electric-cyan/10 text-neon-glow rounded-full border border-electric-cyan/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-6 rounded-md neon-border-hover transition-all"
              data-testid="about-tools"
            >
              <h3 className="font-heading text-xl font-semibold text-electric-cyan mb-4">
                Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-electric-cyan/10 text-neon-glow rounded-full border border-electric-cyan/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card p-6 rounded-md neon-border-hover transition-all"
              data-testid="about-experience"
            >
              <h3 className="font-heading text-xl font-semibold text-electric-cyan mb-4">
                Experience
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {experience.map((exp, index) => (
                  <div key={index} className="text-gray-300 text-sm">
                    {exp}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
