import Head from "next/head";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Lnews from "../components/Lnews";
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
            <h2 className="text-3xl font-bold pt-5">Lattest News</h2>
            <div className="flex items-center space-x-2 pt-6">
              <h2 className="text-sm text-red-500 cursor-pointer">VIEW ALL</h2>
              <ChevronRightIcon className="h-4 text-red-500 cursor-pointer" />
            </div>
          </div>
          <div>
            <Lnews />
          </div>
        </section>
      </main>
    </div>
  );
}
