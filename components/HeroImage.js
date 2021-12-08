import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function HeroImage() {
  return (
    <div className="">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="">
          <img
            loading="lazy"
            src="/bml1.png"
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[700px]"
          />
        </div>
        <div className="">
          <img
            loading="lazy"
            src="/bml2.png"
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[700px]"
          />
        </div>
        <div className="">
          <img
            loading="lazy"
            src="/bml3.png"
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[700px]"
          />
        </div>
        <div className="">
          <img
            loading="lazy"
            src="/bml4.jpg"
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[700px]"
          />
        </div>
        <div className="">
          <img
            loading="lazy"
            src="/bml5.jpg"
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[700px]"
          />
        </div>
      </Carousel>
      <div className="absolute bottom-56 w-full  sm:w-32 sm:bottom-28 sm:left-36 text-center">
        <p className="hidden sm:grid sm:text-white">HUS RIBAA</p>
        <button
          className="text-gray-900 bg-white py-3 
        px-42 rounded-full shadow-md font-bold mt-4
         hover:shadow-xl hover:scale-105 transition 
         duration-500 hover:bg-red-600 hover:text-white
          text-sm sm:px-10 sm:py-4"
        >
          <p className="sm:w-32">LEARN MORE</p>
        </button>
      </div>
    </div>
  );
}

export default HeroImage;
