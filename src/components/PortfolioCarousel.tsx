import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import mr1 from "../../assets/1.png";
import mr2 from "../../assets/2.png";
import mr3 from "../../assets/3.png";
import mr4 from "../../assets/4.png";
import mr5 from "../../assets/5.png";
import mr6 from "../../assets/6.png";
import mr7 from "../../assets/7.png";
import mr8 from "../../assets/8.png";
import mr9 from "../../assets/9.png";
import mr10 from "../../assets/10.png";
import mr11 from "../../assets/11.png";

const projects = [mr1, mr2, mr3, mr4, mr6, mr5, mr6, mr7, mr8, mr9, mr10, mr11];

export default function PortfolioCarousel() {
  return (
    <div className="py-16 px-6" id="projects">
      <h2 className="text-center text-3xl font-bold text-white mb-4">
        My <span className="text-[#0DA2E7]">Projects</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="max-w-5xl mx-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="md:w-[40%] md:h-[80vh] bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={project}
              alt="Tahir Ziaee"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
