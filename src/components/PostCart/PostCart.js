import styles from './styles.module.scss'
import Image from '../Image'
import Link from 'next/link'

const PostCart = ({ post }) => {
  const {
    title,
    author = 'Tomas Sande',
    img = '/post_images/default.png',
    id,
    description
  } = post


  return (
    <Link href={`/blog/${id}`}>
      <a className={styles.card}>
        <article >
          <Image src={img} className={styles.image} width="550px" height="243px" objectFit="cover" />
          <div className={styles.caption}>
            <div className={styles.reading}>
              <smal>19' read</smal>
            </div>
            <small className={styles.author}> Posteado por {author}</small>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default PostCart
