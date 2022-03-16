import Head from 'next/head'
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar'
import Image from '../components/Image'

const StaffSection = dynamic(() => import('../components/StaffSection/'))

const Estudio = () => {
  return (
    <main>
      <Head>
        <title>Estudio | Estudio Zande</title>
      </Head>
      <Navbar color="black" />
      <Image
        loading="eager"
        src="/images/cover-estudio.jpg"
        blurDataURL="/images/cover-estudio-small.jpg"
        height="948"
        width="1920"
        className="h-screen"
        objectFit="cover"
      />
      <section>
        <div className="h-44 w-44 -mt-24 m-auto rounded-full bg-blue-900" />
        <h2 className="text-5xl mt-20 font-bold m-auto text-center">El Estudio</h2>
        <div className="columns-2 p-10 w-2/4 m-auto leading-6 h-124">
          <p className='mb-6'>
            Desde hace más de 45 años, nuestro objetivo consiste en hacer propios los intereses de nuestros clientes,
            buscando asesorar, cuidar y proteger a estos en un marco de estricta confidencialidad.
          </p>

          <p className='my-6'>
            Fundado en 1976 por el Dr. José Eduardo Sande, las tareas de litigios orientados al derecho de familia
            patrimonial fueron el principal foco del estudio durante la mayor parte de su existencia.
          </p>

          <p className='my-6'>
            Pese a haber intervenido en una gran cantidad de casos de notoria trascendencia pública, la mediatización
            y publicidad de estos ha sido siempre restringida a los deseos del cliente, siendo la confidencialidad e
            intimidad pilares clave de nuestra labor profesional.
          </p>

          <p className='my-6 mt-64'>
            Actualmente, hemos acoplado a nuestro conocimiento de litigios la provisión de servicios enfocados en consultoría
            y desarrollo de tecnologías orientadas al campo legal, además de contribuir académicamente a dicha corriente.
          </p>

          <p className='my-6'>
            Nuestro objetivo es brindar un espacio de calidad y confidencialidad para las necesidades legales de todos nuestros
            clientes, siendo el cuidado de sus intereses el pilar central de nuestro trabajo.
          </p>
        </div>
      </section>
      <StaffSection full />
    </main>
  );
};

export default Estudio;
