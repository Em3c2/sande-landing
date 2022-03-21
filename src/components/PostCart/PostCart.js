import styles from './styles.module.scss'
import Image from '../Image'
import Link from 'next/link'

const PostCart = ({ className, post }) => {
  const {
    title,
    author = 'Tomas Sande',
    img = '/post_images/default.png',
    id,
    description,
    time,
  } = post


  return (
    <Link href={`/blog/${id}`}>
      <a className={`${styles.card} ${className}`}>
        <article >
          <Image src={img} className={styles.image} width="550px" height="243px" objectFit="cover" />
          <div className={styles.caption}>
            <div className={styles.reading}>
              <small>{time}&#39;<br />read</small>
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
