import mr1 from "../../assets/images/showcase/mr1.jpg";
import mr2 from "../../assets/images/showcase/mr2.png";
import mr3 from "../../assets/images/showcase/mr3.jpg";
import mr4 from "../../assets/images/showcase/mr4.jpg";
import mr17 from "../../assets/images/showcase/mr17.jpg";
import mr6 from "../../assets/images/showcase/mr6.jpg";
import mr7 from "../../assets/images/showcase/mr7.jpg";
import mr8 from "../../assets/images/showcase/mr8.jpg";
import mr9 from "../../assets/images/showcase/mr9.jpg";
import mr10 from "../../assets/images/showcase/mr10.jpg";
import mr11 from "../../assets/images/showcase/mr11.jpg";
import mr12 from "../../assets/images/showcase/mr12.jpg";
import mr13 from "../../assets/images/showcase/mr13.jpg";
import mr14 from "../../assets/images/showcase/mr14.jpg";
import mr15 from "../../assets/images/showcase/mr15.jpg";
import mr5 from "../../assets/images/showcase/mr5.jpg";
import mr32 from "../../assets/images/showcase/mr32.jpg";
import mr16 from "../../assets/images/showcase/mr16.jpg";
import mr31 from "../../assets/images/showcase/mr31.jpg";
import mr18 from "../../assets/images/showcase/mr18.jpg";
import mr19 from "../../assets/images/showcase/mr19.jpg";
import mr20 from "../../assets/images/showcase/mr20.jpg";
import mr21 from "../../assets/images/showcase/mr21.jpg";
import mr22 from "../../assets/images/showcase/mr22.jpg";
import mr23 from "../../assets/images/showcase/mr23.jpg";
import mr24 from "../../assets/images/showcase/mr24.jpg";
import mr25 from "../../assets/images/showcase/mr25.jpg";
import mr26 from "../../assets/images/showcase/mr26.jpg";
import mr27 from "../../assets/images/showcase/mr27.jpg";
import mr28 from "../../assets/images/showcase/mr28.jpg";
import mr29 from "../../assets/images/showcase/mr29.jpg";
import mr30 from "../../assets/images/showcase/mr30.jpg";
import mr33 from "../../assets/images/showcase/mr33.jpg";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            marquee: any;
        }
    }
}



export default function ProjectsSection() {

    const marqueeImages1 = [
        mr1,
        mr2,
        mr3,
        mr4,
        mr17,
        mr6,
        mr7,
        mr8,
        mr9,
        mr10,
        mr11,
        mr12,
        mr13,
        mr14,
        mr15,
        mr5,
        mr32,
    ];

    const marqueeImages2 = [
        mr16,
        mr31,
        mr18,
        mr19,
        mr20,
        mr21,
        mr22,
        mr23,
        mr24,
        mr25,
        mr26,
        mr27,
        mr28,
        mr29,
        mr30,
        mr33,
    ];

    return (
        <>
            <section className="relative py-16 bg-dark-secondary overflow-hidden space-y-16">
                {/* First Marquee */}
                <div className="relative marquee-mask w-full">
                    <div className="marquee-content flex gap-8 animate-marquee">
                        {[...marqueeImages1, ...marqueeImages1].map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 relative h-56 w-72 bg-gradient-to-br from-[#0DA2E7]/10 to-transparent rounded-xl overflow-hidden shadow-[0_0_20px_rgba(13,162,231,0.2)] hover:shadow-[0_0_25px_rgba(13,162,231,0.5)] transition-all duration-500"
                            >
                                <img
                                    src={image}
                                    alt={`Design ${index + 1}`}
                                    draggable="false"
                                    className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Marquee */}
                <div className="relative marquee-mask w-full">
                    <div className="marquee-content flex gap-8 animate-marquee-reverse">
                        {[...marqueeImages2, ...marqueeImages2].map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 relative h-56 w-72 bg-gradient-to-br from-[#0DA2E7]/10 to-transparent rounded-xl overflow-hidden shadow-[0_0_20px_rgba(13,162,231,0.2)] hover:shadow-[0_0_25px_rgba(13,162,231,0.5)] transition-all duration-500"
                            >
                                <img
                                    src={image}
                                    alt={`Design ${index + 1}`}
                                    draggable="false"
                                    className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>

    );
}
