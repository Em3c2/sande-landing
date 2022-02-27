import Head from 'next/head'
import Navbar from '../../components/Navbar'
import SimpleCard from '../../components/SimpleCard'

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
      {
        posts && posts.map(post => (
          <SimpleCard
            image={post.img}
            caption={post.title}
          />
        ))
      }
    </main>
  )
}

export {
  Blog as default,
  getServerSideProps,
}