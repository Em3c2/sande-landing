import Link from "next/link";
import SimpleCard from "../components/SimpleCard/";
import styles from "../styles/home.module.scss";
import Image from "../components/Image";
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <main>
    <Navbar color="white" />
      <section>
        <div className={styles.cover}>
          <div className={styles.backgroundContainer}>
            <Image
              className={styles.background}
              src="/images/cover-home.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.mainConteiner}>
            <div className={styles.caption}>
              <h1 className={styles.title}>
                La confianza al servicio de sus necesidades
              </h1>
              <p className={styles.mainParagraph}>
                Fundado hace más de 45 años, nuestro objetivo siempre ha sido
                hacer propios los intereses de nuestros clientes, buscando
                asesorar, cuidar y proteger a estos en un marco de estricta
                confidencialidad.
              </p>
              <p className={styles.mainParagraph}>
                Ya sea en litigios, asesoramiento o consultoría, la tenacidad,
                creatividad y la experiencia son claros actores en nuestro
                trabajo, siendo que buscamos promover el mejoramiento de
                nuestros servicios con la permanente incorporación de nuevas
                tecnologías.
              </p>
              <Link href="/posts/example">
                <button className={styles.mainButton}>Sobre nosotros</button>
              </Link>
            </div>
            <div className={styles.captionLogo}>
              <div className={styles.logoContainer}>
                <Image src="/images/logoHome.svg" layout="fill" className={styles.logo} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cardsConteiner}>
        <SimpleCard
          image="/images/cardHome1.jpg"
          caption="Aspectos Patrimoniales del Derecho de las Familias"
        />
        <SimpleCard
          image="/images/cardHome2.png"
          caption="Litigios Civiles y Asesoramiento Legal"
        />
        <SimpleCard
          image="/images/cardHome3.jpg"
          caption="Consultoría en Tecnologías Legales"
        />
        <SimpleCard
          image="/images/cardHome4.jpg"
          caption="Desarrollo de Sistemas y Procesos Legales"
        />
      </section>
    </main>
  );
};

export default Home;
