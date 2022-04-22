import styles from './styles.module.scss'
import Image from '../Image'

const SimpleCard = ({ caption, image = '/images/cardHome1.jpg' }) => {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image src={image} nolazy layout="fill" objectFit="cover" />
      </div>
      <p className={styles.content}>{caption}</p>
    </article>
  )
}

export default SimpleCard
