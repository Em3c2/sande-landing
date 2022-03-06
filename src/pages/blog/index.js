import Head from 'next/head'
import Navbar from '../../components/Navbar'
import PostCart from '../../components/PostCart'
import styles from "../../styles/blog.module.scss";

const redirect = (destination = '/') => ({ redirect: { destination } });

const baseUrl = process.env.VERCEL_URL

const getServerSideProps = async () => {

  try {
    const endpoint = `${baseUrl}/api/posts/all`
    const response = await fetch(endpoint)
    const posts = await response.json()

    return {
      props: {
        posts,
      },
    }
  }

  catch (err) {
    console.log(err)
    return redirect()
  }
}

const Blog = ({ posts }) => {

  return (
    <main>
      <Head>
        <title>Blog | Estudio Zande</title>
      </Head>
      <Navbar color="black" />
      <div className={styles.background}>
        <h1 className={styles.title}>Bienvenidos a nuestro blog.</h1>
        <div className={styles.grid}>
          {
            posts && posts.map(post => (
              <PostCart post={post} />
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