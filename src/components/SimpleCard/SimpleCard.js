import Link from 'next/link'
import styles from './styles.module.scss'
import Image from '../Image'

const SimpleCard = ({ caption, section, image = '/images/cardHome1.jpg' }) => {
  return (
    <Link href={`/servicios#${section}`} prefetch>
      <a className={styles.card}>
        <div className={styles.image}>
          <Image src={image} nolazy layout="fill" objectFit="cover" />
        </div>
        <p className={styles.content}>{caption}</p>
      </a>
    </Link>
  )
}

export default SimpleCard
