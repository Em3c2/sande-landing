import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
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
          image='/images/cover-services.jpg'
          preview='/images/cover-services-preview.jpg'
          title="Nuestros servicios"
          className="mb-4 lg:mb-24 relative mt-16 lg:mt-0 xl:top-0"
        />
        <div className='flex my-10'>
          <Link href="/contacto">
            <a className='btn__blue-filled mx-auto'>
              Contactanos
            </a>
          </Link>
        </div>
      </section>
      <section>
        <ServiceSection />
      </section>
    </main>
  );
};

export default Servicios;
