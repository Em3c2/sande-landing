import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import SimpleHeader from '../../components/SimpleHeader';
import Image from '../../components/Image';
import ContactLink from '../../components/ContactLink';

import styles from './styles.module.scss';

const Contacto = () => {
  return (
    <main>
      <Head>
        <title>Contacto | Estudio Sande</title>
      </Head>
      <Navbar color="black" />
      <section>
        <SimpleHeader
          title="Contactanos"
          className="mb-24"
          loud={false}
        />
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <ContactLink
              text="tomas@estudiosande.com"
              icon="MailLogo"
              type="mailto"
            />
            <ContactLink
              text="Paraguay 1551, 4to Piso - Buenos Aires, Argentina"
              icon="MapsLogo"
              link="https://goo.gl/maps/ZPQ3RFgnGAzeA2cH7"
              type="external"
            />
            <ContactLink
              text="+54 9 1111111111"
              icon="Whatsapp"
              type="whatsapp"
            />
          </div>
          <div className={styles.map}>
            <Image src="/images/map.png" layout="fill" objectFit="cover" />
          </div>
        </div>
        <Form />
      </section>
    </main>
  );
};

export default Contacto;
