import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lines: {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < 15; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 200 + 100,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        ctx.strokeStyle = `rgba(13, 162, 231, ${line.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.length, line.y);
        ctx.stroke();

        line.x += line.speed;
        if (line.x > canvas.width + line.length) {
          line.x = -line.length;
          line.y = Math.random() * canvas.height;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(heroRef.current, {
      y: 200,
      opacity: 0.3,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* === Background Video === */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source
            src="https://res.cloudinary.com/dl4kqxuyk/video/upload/v1761920429/bg-video_kdjlh6.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* === Navbar === */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-6 bg-black/30 backdrop-blur-md border-b border-electric-cyan/20">
        <h1 className="font-heading text-2xl text-white tracking-wider">
          <span className="text-electric-cyan">Tahir</span> Ziaee
        </h1>
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-electric-cyan transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-white text-2xl">&#9776;</button>
      </nav>

      {/* === Hero Content === */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-heading font-semibold text-5xl md:text-7xl text-white text-glow mb-6"
        >
          Passionate UI/UX Designer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-body text-lg md:text-3xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          With over two years of experience, bringing ideas to life
          throughintuitive and impactful design. As a freelancer, I specialize
          in creating seamless, user centered interfaces for apps, websites.
          Let's make your vision a reality.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 inline-block bg-electric-cyan/20 hover:bg-electric-cyan/40 text-electric-cyan font-semibold px-8 py-3 rounded-lg border border-electric-cyan/30 backdrop-blur-md transition-all duration-300"
        >
          Explore My Work
        </motion.a>
      </div>

      {/* === Bottom Scroll Indicator === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 flex justify-center mb-8"
      >
        <a
          href="#about"
          className="text-electric-cyan hover:text-neon-glow transition-colors"
        >
          <svg
            className="w-8 h-8 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
