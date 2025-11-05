import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

import { useEffect, useRef } from "react";

export default function FooterSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 400;

    let animationId: number;
    let offset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "rgba(13, 162, 231, 0)");
      gradient.addColorStop(0.5, "rgba(13, 162, 231, 0.3)");
      gradient.addColorStop(1, "rgba(13, 162, 231, 0)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let x = 0; x < canvas.width; x += 10) {
        const y = Math.sin((x + offset) * 0.01) * 30 + canvas.height / 2;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      offset += 2;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer id="contact" className="relative py-24 px-8 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        data-testid="footer-wave-canvas"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-6xl font-bold text-white text-glow-sm"
          data-testid="footer-title"
        >
          Let's Create the Future
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-400"
          data-testid="footer-subtitle"
        >
          Ready to collaborate?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
            <a
              href="mailto:tahir@example.com"
              className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 hover:border-[#0DA2E7] transition-all duration-500 group hover:shadow-[0_0_25px_#0DA2E7]/40"
            >
              <Mail className="w-6 h-6 text-[#0DA2E7] group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium text-gray-200 group-hover:text-[#0DA2E7] transition-colors duration-300">
                tahirziaee3@gmail.com
              </span>
            </a>

            <a
              href="https://wa.me/+971502079132"
              target="_blank"
              className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 hover:border-[#0DA2E7] transition-all duration-500 group hover:shadow-[0_0_25px_#0DA2E7]/40"
            >
              <Phone className="w-6 h-6 text-[#0DA2E7] group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium text-gray-200 group-hover:text-[#0DA2E7] transition-colors duration-300">
                +971 502079132
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-electric-cyan/20"
        >
          <p className="text-sm text-gray-500" data-testid="footer-copyright">
            © {new Date().getFullYear()} Crafted and Built by{" "}
            <a
              href="https://aliarsalan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-cyan hover:text-neon-glow transition-colors"
            >
              AA.
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
