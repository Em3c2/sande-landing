import Script from "next/script"
import Head from "next/head"
import Footer from "../components/Footer";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Script src="/pace.min.js" />
      <Component {...pageProps} />
      <Footer
        sentence="Todos los derechos reservados."
        phone="54 9 11 59219604"
        email="tomas@estudiosande.com"
        direction="Paraguay 1551, 4to Piso, Buenos Aires."
      />
    </>
  );
}

export default MyApp;
