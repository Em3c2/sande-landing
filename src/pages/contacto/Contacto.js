import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import SimpleHeader from '../../components/SimpleHeader';
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
        <Form />
      </section>
    </main>
  );
};

export default Contacto;
