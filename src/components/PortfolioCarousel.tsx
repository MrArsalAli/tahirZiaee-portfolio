import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import mr1 from "../../assets/images/mr1.jpg";
import mr2 from "../../assets/images/mr2.jpg";
import mr3 from "../../assets/images/mr3.jpg";
import mr4 from "../../assets/images/mr4.jpg";
import mr5 from "../../assets/images/mr5.jpg";
import mr6 from "../../assets/images/mr6.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projects = [mr1, mr2, mr3, mr4, mr6, mr5];
// const projects = [
//   {
//     id: 1,
//     image: {mr1},
//     title: "Saba Fabrics Website",
//   },
//   {
//     id: 2,
//     image: {mr2},
//     title: "Hospital ERP System",
//   },
//   {
//     id: 3,
//     image: {mr3},
//     title: "LMS Platform",
//   },
//   {
//     id: 4,
//     image: {mr4},
//     title: "Microfinance App",
//   },
//   {
//     id: 5,
//     image: {mr5},
//     title: "Microfinance App",
//   },
//   {
//     id: 6,
//     image: {mr6},
//     title: "Microfinance App",
//   },
// ];

export default function PortfolioCarousel() {
  return (
    <div className="bg-gray-950 py-16 px-6">
      <h2 className="text-center text-3xl font-bold text-white mb-10">
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
            className="w-[300px] sm:w-[400px] md:w-[450px] md:h-[500px] bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
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
