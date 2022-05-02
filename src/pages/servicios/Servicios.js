import Head from 'next/head'
import Navbar from '../../components/Navbar'
import SimpleHeader from '../../components/SimpleHeader';
import ServiceSection from '../../components/ServiceSection';
import styles from './styles.module.scss';

const Servicios = () => {
  return (
    <div className='overflow-hidden' id="outer-container">
      <Head>
        <title>Servicios | Estudio Sande</title>
      </Head>
      <Navbar color="black" />
      <main id="page-wrap">
        <section>
          <SimpleHeader
            image='/images/cover-services.jpg'
            title="Nuestros servicios"
            className="mb-24"
          />
          <div className='flex my-10'>
            <button className='btn__blue-filled mx-auto'>Contactanos</button>
          </div>
        </section>
        <section>
          <ServiceSection />
        </section>
      </main>
    </div>
  );
};

export default Servicios;
