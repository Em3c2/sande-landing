import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import SimpleHeader from '../../components/SimpleHeader';
import Image from '../../components/Image';
import ContactLink from '../../components/ContactLink';

import styles from './styles.module.scss';

const Contacto = () => {
  return (
    <main className="relative flex flex-col h-full justify-between">
      <Head>
        <title>Contacto | Estudio Sande</title>
      </Head>
      <div>
        <Navbar color="black" />
        <SimpleHeader
          title="Contactanos"
          className="mb-4 lg:mb-24 relative xl:top-0"
          loud={false}
        />
      </div>
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
            text="+54 11 2472-3830"
            icon="Whatsapp"
            type="whatsapp"
            link="541124723830"
          />
        </div>
        <div className={styles.map}>
          <Image src="/images/map.png" layout="fill" objectFit="cover" />
        </div>
      </div>
      <Form className="w-full" />
    </main>
  );
};

export default Contacto;
