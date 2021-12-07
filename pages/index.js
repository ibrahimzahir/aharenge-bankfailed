import Head from "next/head";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Lnews from "../components/Lnews";
import Image from "next/image";
import TopHeader from "../components/TopHeader";
import { ChevronRightIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bank of Maldives - Homepage</title>
        <link rel="icon" href="/bml-logo-1.svg" />
      </Head>
      <TopHeader />
      <Header />
      <HeroImage />
      <main className="container mx-auto px-16">
        <section className="col-2 py-10">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl m-2 font-black pt-5">Latest News</h2>
            <div className="flex items-center space-x-2 pt-6">
              <h2 className="text-sm text-red-500 cursor-pointer">VIEW ALL</h2>
              <ChevronRightIcon className="h-4 text-red-500 cursor-pointer" />
            </div>
          </div>
          <div>
            <Lnews />
          </div>
        </section>
        <section className="py-4">
          <div className="grid grid-cols-2 gap-4 space-x-20">
            <Image
              src="/personal.webp"
              layout="fixed"
              objectFit="cover"
              height={400}
              width={650}
              className="object-cover rounded-xl"
            />
            <div className="p-4">
              <h2 className="text-3xl font-bold leading-normal">
                Positive changes to Namun Islamic, Kamun Haraan BML Islamic
                Personal Financing
              </h2>
              <p className="py-2 leading-loose">
                We have made positive changes to its BML Islamic Personal
                Financing portfolio to allow the option of cash financing in
                addition to the purchase of goods and services.
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
    </div>
  );
}
