import Image from '../Image'
import styles from './styles.module.scss'

const SimpleHeader = ({ title, image, loud, className }) => (
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
    <div className="-mt-2 h-24 w-44 m-auto overflow-hidden" >
      <div className={`h-44 w-44 -mt-24 m-auto rounded-full ${ loud ? 'bg-blue-900' : 'bg-gray-200' }`} />
    </div>
    <h2 className="text-5xl mt-6 font-bold m-auto text-center">{title}</h2>
  </header>
)

SimpleHeader.defaultProps = {
  loud: true,
};

export default SimpleHeader;