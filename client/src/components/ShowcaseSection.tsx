import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const mockProjects = [
    {
      id: "1",
      title: "Nebula Finance App",
      description:
        "Modern fintech dashboard with real-time analytics and seamless transaction flows",
      tags: ["UI/UX", "Mobile App", "Fintech"],
      image: "/project-placeholder-1.jpg",
      category: "App Design",
    },
    {
      id: "2",
      title: "Quantum Brand Identity",
      description:
        "Complete brand redesign for a cutting-edge AI startup, from logo to digital presence",
      tags: ["Branding", "Identity", "Visual Design"],
      image: "/project-placeholder-2.jpg",
      category: "Branding",
    },
    {
      id: "3",
      title: "Aurora E-Commerce",
      description:
        "Elegant shopping experience with focus on product discovery and minimalist aesthetics",
      tags: ["Web Design", "E-Commerce", "UI/UX"],
      image: "/project-placeholder-3.jpg",
      category: "Web Design",
    },
    {
      id: "4",
      title: "Pulse Health Platform",
      description:
        "Healthcare dashboard bridging patients and providers with intuitive data visualization",
      tags: ["Dashboard", "Healthcare", "Data Viz"],
      image: "/project-placeholder-4.jpg",
      category: "Dashboard",
    },
    {
      id: "5",
      title: "Stellar Design System",
      description:
        "Comprehensive component library and design tokens for scalable product development",
      tags: ["Design System", "Components", "Documentation"],
      image: "/project-placeholder-5.jpg",
      category: "Design System",
    },
    {
      id: "6",
      title: "Horizon Social App",
      description:
        "Next-gen social platform emphasizing authentic connections and creative expression",
      tags: ["Mobile App", "Social", "UI/UX"],
      image: "/project-placeholder-6.jpg",
      category: "App Design",
    },
  ];

  return (
    <section
      id="showcase"
      ref={ref}
      className="relative min-h-[90vh] py-24 px-8"
      style={{ background: "#0A0A0A" }}
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

          {mockProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-card rounded-md overflow-hidden neon-border-hover transition-all duration-300"
              data-testid={`showcase-project-${project.id}`}
            >
              <div className="aspect-video bg-gradient-to-br from-electric-cyan/20 to-accent-violet/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent" />
                <svg
                  className="w-20 h-20 text-electric-cyan/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div className="p-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <h3 className="font-heading text-xl font-semibold text-white group-hover:text-electric-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-electric-cyan/10 text-neon-glow rounded border border-electric-cyan/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
