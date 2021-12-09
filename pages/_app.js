import "tailwindcss/tailwind.css";
import Head from "next/head";
import "../css/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <title>Bank of Maldives - Homepage</title>
        <link rel="icon" href="/bml-logo-1.svg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
