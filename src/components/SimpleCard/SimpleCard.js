import styles from './styles.module.scss'
import Image from '../Image'

const SimpleCard = ({ caption, image = '/images/cardHome1.jpg' }) => {
  return (
   <article className={styles.card}>
      <Image src={image} nolazy width="380" height="178" objectFit="cover" />
      <p className={styles.content}>{caption}</p>
    </article>
  )
}

export default SimpleCard
