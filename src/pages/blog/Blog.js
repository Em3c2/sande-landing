import Head from 'next/head'
import getConfig from 'next/config'
import fs from 'fs'
import { join } from 'path'
import { read } from 'gray-matter'
import Navbar from '../../components/Navbar'
import PostCart from '../../components/PostCart'
import SimpleHeader from '../../components/SimpleHeader';
import { readTime, redirect } from '../../utils'
import styles from "./styles.module.scss";

const { serverRuntimeConfig } = getConfig()

const Blog = ({ posts = [] }) => {
  return (
    <main>
      <Head>
        <title>Blog | Estudio Sande</title>
      </Head>
      <Navbar color="black" />
      <SimpleHeader 
          className="mb-24"
          title="Bienvenidos a nuestro blog"
          loud={false}
        />
      <div className={styles.background}>
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

const getStaticProps = () => {
  try {
    const fileNames = fs.readdirSync(join(serverRuntimeConfig.PROJECT_ROOT, 'public/posts/'))
    const posts = fileNames.map(name => {
      const { data, content } = read(join(serverRuntimeConfig.PROJECT_ROOT, `public/posts/${name}`))
      return { ...data, id: name.split('.')[0], time: readTime(content) }
    })

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

export {
  Blog as default,
  getStaticProps,
}
