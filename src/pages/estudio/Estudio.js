import Head from 'next/head'
import dynamic from 'next/dynamic';
import Navbar from '../../components/Navbar'
import SimpleHeader from '../../components/SimpleHeader';
import styles from './styles.module.scss';

const StaffSection = dynamic(() => import('../../components/StaffSection/'))

const Estudio = () => {
  return (
    <main>
      <Head>
        <title>Estudio | Estudio Sande</title>
      </Head>
      <Navbar color="black" />
      <section>
        <SimpleHeader 
          className="mb-4 lg:mb-10 relative mt-16 lg:mt-0 xl:top-0"
          title="El Estudio"
          image="/images/cover-estudio.jpg"
        />
        <div className="prose w-full max-w-5xl p-10 m-auto leading-6">
          <p className="text-justify">
            Desde hace más de 45 años, nuestro objetivo consiste en hacer propios los intereses de nuestros clientes,
            buscando asesorar, cuidar y proteger a estos en un marco de estricta confidencialidad.
            Fundado en 1976 por el Dr. José Eduardo Sande, las tareas de litigios orientados al derecho de familia
            patrimonial fueron el principal foco del estudio durante la mayor parte de su existencia.
            Pese a haber intervenido en una gran cantidad de casos de notoria trascendencia pública, la mediatización
            y publicidad de estos ha sido siempre restringida a los deseos del cliente, siendo la confidencialidad e
            intimidad pilares clave de nuestra labor profesional.
            Actualmente, hemos acoplado a nuestro conocimiento de litigios la provisión de servicios enfocados en consultoría
            y desarrollo de tecnologías orientadas al campo legal, además de contribuir académicamente a dicha corriente.
          </p>
        </div>
      </section>
      <StaffSection full />
    </main>
  );
};

export default Estudio;
