import Head from 'next/head'
import Navbar from '../../components/Navbar'
import SimpleHeader from '../../components/SimpleHeader';
import ServiceSection from '../../components/ServiceSection';
import styles from './styles.module.scss';

const Servicios = () => {
  return (
    <main>
      <Head>
        <title>Servicios | Estudio Sande</title>
      </Head>
      <Navbar color="black" />
      <section>
        <SimpleHeader
          image='/images/services-cover.jpg'
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
  );
};

export default Servicios;
