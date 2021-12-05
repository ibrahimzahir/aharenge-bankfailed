import Head from "next/head";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import TopHeader from "../components/TopHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bank of Maldives - Homepage</title>
        <link rel="icon" href="/bml-logo.svg" />
      </Head>
      <TopHeader />
      <Header />
      <HeroImage />
    </div>
  );
}
