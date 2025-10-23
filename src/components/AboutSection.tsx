import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FaGlobe, FaBriefcase } from "react-icons/fa";
import { useRef } from "react";
import dp from "../../assets/images/dp.jpg";

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
  className="relative min-h-[80vh] flex items-center py-24 px-8 bg-dark-secondary"
>
  <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
    {/* === Left Side: Designer Profile Card === */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="glass-card rounded-2xl bg-dark-primary p-8 text-center border border-[#0DA2E7]/30 shadow-[0_0_30px_rgba(13,162,231,0.1)] hover:shadow-[0_0_40px_rgba(13,162,231,0.3)] transition-all duration-500">
        <div className="relative mb-6">
          <img
            src={dp}
            alt="Tahir Ziaee"
            className="w-48 h-48 mx-auto rounded-full object-cover border-2 border-[#0DA2E7] shadow-[0_0_25px_rgba(13,162,231,0.4)]"
          />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#0DA2E7] rounded-full shadow-[0_0_15px_rgba(13,162,231,0.7)]"></div>
        </div>

        <h3 className="text-2xl font-heading font-bold mb-2 text-white">
          Tahir Ziaee
        </h3>
        <p className="text-[#0DA2E7] font-medium mb-6">
          Graphic Designer & UI/UX Expert
        </p>

        <div className="flex flex-col items-center space-y-3 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <FaBriefcase className="w-4 h-4 text-green-400" />
            <span>Open for Opportunities</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGlobe className="w-4 h-4 text-blue-400" />
            <span>Available Worldwide</span>
          </div>
          <div className="pt-4">
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1owxoGFaRtyX2N7Zly0ISKdNYLmHmEWVz/view?usp=drivesdk",
                  "_blank"
                )
              }
              className="bg-[#0DA2E7] hover:bg-transparent hover:text-[#0DA2E7] border border-[#0DA2E7] text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View My CV
            </button>
          </div>
        </div>
      </div>
    </motion.div>

    {/* === Right Side (Same as Before) === */}
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
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 text-glow-sm">
          The Mind Behind the Interface
        </h2>
        <p className="font-body text-lg text-gray-300 leading-relaxed">
          I'm a UI/UX designer obsessed with clarity and creative depth.
          From clean app layouts to bold product stories — I turn pixels
          into emotions.
        </p>
      </motion.div>

      {/* Skills, Tools, Experience same as before */}
      <div className="grid grid-cols-1 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 rounded-md neon-border-hover transition-all"
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
