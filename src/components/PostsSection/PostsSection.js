import Link from 'next/link'
import dynamic from 'next/dynamic'
import Spinner from '../Spinner';

import styles from './styles.module.scss'

const PostCard = dynamic(() => import('../../components/PostCart/'), { loading: () => <Spinner /> })

const PostSection = ({ posts = [] }) => (
  <section className={styles.postsSection}>
    <h2>Nuestro blog</h2>
    <div className={styles.postsContainer}>
      {posts.length && posts.map(post => (
        <PostCard post={post} key={post.id} className="block md:last-of-type:hidden lg:last-of-type:block" />
      ))}
    </div>
    <Link href="/blog">
      <a className='btn__blue m-auto'>
        Ir al blog
      </a>
    </Link>
  </section>
)

export default PostSection;