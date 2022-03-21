import Head from 'next/head'
import Navbar from '../../components/Navbar'
import PostCart from '../../components/PostCart'
import styles from "../../styles/blog.module.scss";

const baseUrl = process.env.VERCEL_URL

const getServerSideProps = async () => {

  try {
    // CODE

    return {
      props: {
        posts,
      },
    }
  }

  catch (err) {
    console.log(err)
  }
}

const Blog = props => {
  const posts = props.posts ? props.posts : []

  return (
    <main>
      <Head>
        <title>Blog | Estudio Sande</title>
      </Head>
      <Navbar color="black" />
      <div className={styles.background}>
        <h1 className={styles.title}>Bienvenidos a nuestro blog.</h1>
        <div className={styles.grid}>
          {
            posts && posts.map(post => (
              <PostCart post={post} key={post.id} />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export {
  Blog as default,
  getServerSideProps,
}