import mr1 from "../../assets/images/mr1.jpg";
import mr2 from "../../assets/images/mr2.jpg";
import mr3 from "../../assets/images/mr3.jpg";
import mr4 from "../../assets/images/mr4.jpg";
import mr5 from "../../assets/images/mr5.jpg";
import mr6 from "../../assets/images/mr6.jpg";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: any;
    }
  }
}

export default function ProjectsSection() {
  const marqueeImages1 = [mr1, mr2, mr3, mr4, mr6, mr5];

  const marqueeImages2 = [mr1, mr2, mr3, mr4, mr6, mr5];

  return (
    <>
      <section className="relative py-16 bg-dark-secondary overflow-hidden space-y-14">
        {/* First Marquee */}
        <div className="relative marquee-mask w-full">
          <div className="marquee-content flex gap-4 animate-marquee">
            {[...marqueeImages1, ...marqueeImages1].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative h-60 w-72 bg-gradient-to-br from-[#0DA2E7]/10 to-transparent rounded-xl overflow-hidden shadow-[0_0_20px_rgba(13,162,231,0.2)] hover:shadow-[0_0_25px_rgba(13,162,231,0.5)] transition-all duration-500"
              >
                <img
                  src={image}
                  alt={`Design ${index + 1}`}
                  draggable="false"
                  className="h-full w-full object-cover cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee */}
        <div className="relative marquee-mask w-full">
          <div className="marquee-content flex gap-4 animate-marquee-reverse">
            {[...marqueeImages2, ...marqueeImages2].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative h-60 w-72 bg-gradient-to-br from-[#0DA2E7]/10 to-transparent rounded-xl overflow-hidden shadow-[0_0_20px_rgba(13,162,231,0.2)] hover:shadow-[0_0_25px_rgba(13,162,231,0.5)] transition-all duration-500"
              >
                <img
                  src={image}
                  alt={`Design ${index + 1}`}
                  draggable="false"
                  className="h-full w-full object-cover cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
