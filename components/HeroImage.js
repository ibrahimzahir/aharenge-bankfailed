import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function HeroImage() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <img loading="lazy" src="/bml1.png" />
        </div>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
          <img loading="lazy" src="/bml2.png" />
        </div>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <img loading="lazy" src="/bml3.png" />
        </div>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <img loading="lazy" src="/bml4.jpg" />
        </div>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <img loading="lazy" src="/bml5.jpg" />
        </div>
      </Carousel>
      <div className=" sm:absolute sm:bottom-12 sm:left-40 text-center">
        <p className="text-white">HUS RIBAA</p>
        <button
          className="text-gray-900 bg-white py-4 
        px-14 rounded-full shadow-md font-bold mt-4
         hover:shadow-xl hover:scale-105 transition 
         duration-500 hover:bg-red-600 hover:text-white"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default HeroImage;
