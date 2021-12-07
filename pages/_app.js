import "tailwindcss/tailwind.css";
import Head from "next/head";
import "../css/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bank of Maldives - Homepage</title>
        <link rel="icon" href="/bml-logo-1.svg" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
