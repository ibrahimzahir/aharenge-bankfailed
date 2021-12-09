import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Lnews from "../components/Lnews";
import Image from "next/image";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";
import { ChevronRightIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <HeroImage />
      <main className="max-w-8xl px-4 sm:px-36">
        <section className="py-10">
          <div className="flex col-2 items-center justify-between">
            <h2 className="text-2xl sm:text-5xl m-2 font-black pt-5">
              Latest News
            </h2>
            <div className="flex items-center space-x-2 pt-6">
              <h2 className="text-sm text-red-500 cursor-pointer">VIEW ALL</h2>
              <ChevronRightIcon className="h-4 text-red-500 cursor-pointer" />
            </div>
          </div>
          <div>
            <Lnews />
          </div>
        </section>
        <section className="py-20 hover:animate-fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 space-x-20">
            <Image
              src="/personal.webp"
              layout="responsive"
              objectFit="cover"
              height="60%"
              width="100%"
              className="object-cover rounded-xl"
            />
            <div className="py-4">
              <h2 className="text-3xl font-bold leading-normal">
                Positive changes to Namun Islamic, Kamun Haraan BML Islamic
                Personal Financing
              </h2>
              <p className="py-2 leading-loose">
                We have made positive changes to its BML Islamic Personal
                Financing portfolio to allow the option of cash financing in
                addition to the purchase of goods and services. ha ha ha
              </p>
              <div className="py-8">
                <button
                  className="bg-transparent text-red-600 
                font-semibold  py-2 px-8 border-2
              border-red-600  rounded-full 
              transition duration-500 ease-in-out hover:scale-110"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 hover:animate-fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 space-x-20">
            <div>
              <h2 className="text-3xl font-bold leading-normal pb-6">
                Bank anytime, anywhere. Ekam Abadhu Massala Jehifa
              </h2>
              <h2 className="py-2 text-xl font-bold leading-loose">
                What's new?
              </h2>
              <p className="py-2 leading-loose">
                All our branches and service centres will be open on Sunday to
                Thursday from 08:30am to 2:00pm. Selected service centres in
                Male’ City will be open through pre-booked appointments, for
                services not available via online or self-service banking
              </p>
              <div className="py-8">
                <button
                  className="bg-transparent text-red-600 
                font-semibold  py-2 px-8 border-2
              border-red-600  rounded-full 
              transition duration-500 ease-in-out hover:scale-110"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
            <Image
              src="/dhevvadhooatm.jpg"
              layout="responsive"
              objectFit="cover"
              height="60%"
              width="100%"
              className="object-cover rounded-xl"
            />
          </div>
        </section>
        <section className="py-20 hover:animate-fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 space-x-20">
            <Image
              src="/bankofmaldives.png"
              layout="responsive"
              objectFit="cover"
              height="60%"
              width="100%"
              className="object-cover rounded-xl"
            />
            <div className="py-4">
              <h2 className="text-3xl font-bold leading-normal pb-6">
                Bank anytime, anywhere. Ekam Abadhu Massala Jehifa
              </h2>
              <h2 className="py-2 text-xl font-bold leading-loose">
                What's new?
              </h2>
              <p className="py-2 leading-loose">
                We’ve launched our mobile banking app with a new look and extra
                features for a convenient, fast and secure banking experience.
              </p>
              <div className="py-8">
                <button
                  className="bg-transparent text-red-600 
                font-semibold  py-2 px-8 border-2
              border-red-600  rounded-full 
              transition duration-500 ease-in-out hover:scale-110"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
