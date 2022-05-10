import Image from '../Image'
import styles from './styles.module.scss'
import Head from 'next/head'

const SimpleHeader = ({ title, image, loud, className }) => (
  <>
    <Head>
      <title>{`${title} | Estudio Sande`}</title>
      <meta name="title" content={`${title} | Estudio Sande`} />
      <meta name="description" content={`${title} | Estudio Sande`} />

      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://estudiosande.com" />
      <meta property="og:title" content={`${title} | Estudio Sande`} />
      <meta property="og:description" content={`${title} | Estudio Sande`} />
      <meta property="og:image" content={image || '/default-preview.png'} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://estudiosande.com" />
      <meta property="twitter:title" content={`${title} | Estudio Sande`} />
      <meta property="twitter:description" content={`${title} | Estudio Sande`} />
      <meta property="twitter:image" content={image || '/default-preview.png'} />
    </Head>
    <header className={`${className} ${styles.header}`}>
      {image &&
        <div className={styles.image}>
          <Image
            loading="eager"
            src={image}
            height="948"
            width="1920"
            objectFit="cover"
            layout="responsive"
          />
        </div>
      }
      <div className="h-12 w-20 lg:h-24 lg:w-44 m-auto overflow-hidden" >
        <div className={`w-20 h-20 lg:h-44 lg:w-44 -mt-10 lg:-mt-24 m-auto rounded-full ${loud ? 'bg-blue-900' : 'bg-gray-200'}`} />
      </div>
      <h2 className="text-2xl lg:text-5xl mt-6 font-bold m-auto text-center">{title}</h2>
    </header>
  </>
)

SimpleHeader.defaultProps = {
  loud: true,
};

export default SimpleHeader;