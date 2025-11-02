import bg from "../../assets/bg.png"

export default function ServicesSection() {
  const services = [
    {
      icon: "🎨",
      title: "Brand Design",
      description:
        "Complete brand identity design including logos, color palettes, typography, and brand guidelines that establish strong market presence.",
    },
    {
      icon: "💻",
      title: "UI/UX Design",
      description:
        "Modern, responsive web designs that combine aesthetic appeal with user-centered functionality for optimal digital experiences.",
    },
    {
      icon: "📄",
      title: "Print Design",
      description:
        "High-quality print materials from business cards to large format displays, ensuring your brand looks impeccable in any medium.",
    },
    {
      icon: "📦",
      title: "Packaging Design",
      description:
        "Innovative packaging solutions that protect your product while creating memorable unboxing experiences for your customers.",
    },
    {
      icon: "💡",
      title: "Consultation",
      description:
        "Strategic design consultation to help you make informed decisions about your visual brand and creative direction.",
    },
    {
      icon: "📱",
      title: "Social Media Design",
      description:
        "Engaging social media graphics and templates that maintain brand consistency across all digital platforms and drive engagement.",
    },
  ];

 return (
  <>
    {/* Services Section */}
    <section
      id="services"
      className="relative py-24 px-6 bg-[#020617] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0DA2E7]/15 via-transparent to-[#0DA2E7]/5 blur-3xl opacity-50"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            My{" "}
            <span className="text-[#0DA2E7] drop-shadow-[0_0_20px_#0DA2E7]">
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            High-end visuals, human-centered design & smooth digital
            experiences.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#0b0f1a]/80 backdrop-blur-xl p-10 rounded-3xl border border-[#1e293b]/50 hover:border-[#0DA2E7]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_#0DA2E7]/40"
            >
              {/* Icon with glow */}
              <div className="w-14 h-14 bg-[#0DA2E7]/10 border border-[#0DA2E7]/30 rounded-xl flex items-center justify-center mb-6 text-3xl text-[#0DA2E7] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_#0DA2E7]/30">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#0DA2E7] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Subtle glow animation */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#0DA2E7]/0 via-[#0DA2E7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);
}