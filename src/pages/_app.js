import "../styles/globals.scss";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
