import fs from 'fs'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { join } from 'path'
import { read } from 'gray-matter'
import { readTime } from '../../utils'
import getConfig from 'next/config'
import Image from '../../components/Image'
import Navbar from '../../components/Navbar'
import Icon from '../../components/Icon'
import ProcessSection from '../../components/ProcessSection'
import styles from './styles.module.scss'

const SimpleCard = dynamic(() => import('../../components/SimpleCard/'), { loading: () => <p>Loading...</p> })
const StaffSection = dynamic(() => import('../../components/StaffSection/'), { loading: () => <p>Loading...</p> })
const PostCard = dynamic(() => import('../../components/PostCart/'), { loading: () => <p>Loading...</p> })
const Form = dynamic(() => import('../../components/Form'), { loading: () => <p>Loading...</p> })

const { serverRuntimeConfig } = getConfig()

const Home = ({ posts = [] }) => {
  return (
    <div className='overflow-hidden' id="outer-container">
      <Head>
        <title>Home | Estudio Sande</title>
      </Head>
      <Navbar color="white" />
      <main id="page-wrap">
      <section>
        <div className={styles.cover}>
          <div className={styles.backgroundContainerMobile}>
            <Image
              loading="eager"
              className={styles.background}
              src="/images/cover-mobile.png"
              blurDataURL="/images/cover-mobile.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.backgroundContainer}>
            <Image
              loading="eager"
              className={styles.background}
              src="/images/cover-home.jpg"
              blurDataURL="/images/cover-home-small.jpg"
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
              <Link href="/estudio">
                <button className={styles.mainButton}>Sobre nosotros</button>
              </Link>
            </div>
            <div className={styles.captionLogo}>
              <div className={styles.logoContainer}>
                <Icon id='LogoCover' />
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
      <section>
        <ProcessSection
          title="Sobre nosotros."
          caption="Nuestro proceso"
        />
      </section>
      <section
        className="block md:hidden mt-10"
      >
        <Image
          layout="responsive"
          width="375"
          height="250"
          src="/images/section-quote-home-mobile.png"
        />
      </section>
      <section
        className="hidden md:block mt-16"
      >
        <Image
          layout="responsive"
          width="1920"
          height="804"
          src="/images/section-quote-home-desktop.png"
        />
      </section>

      <StaffSection />

      <section className={styles.postsSection}>
        <h2>Nuestro blog</h2>
        <div className={styles.postsContainer}>
          {posts.map(post => (
            <PostCard post={post} key={post.id} className="block md:last-of-type:hidden lg:last-of-type:block" />
          ))}
        </div>
        <button className='btn__blue m-auto'>Ir al blog</button>
      </section>
      <section>
        <Form />
      </section>
    </main>
    </div>
  );
};

export const getStaticProps = () => {
  try {
    const fileNames = fs.readdirSync(join(serverRuntimeConfig.PROJECT_ROOT, 'public/posts/'))
    const posts = fileNames.map(name => {
      const { data, content } = read(join(serverRuntimeConfig.PROJECT_ROOT, `public/posts/${name}`))
      return { ...data, id: name.split('.')[0], time: readTime(content) }
    })

    return {
      props: {
        posts: posts.splice(-3),
      },
    }
  }

  catch (err) {
    console.log(err)

    return {
      props: {},
    }
  }
};

export default Home;