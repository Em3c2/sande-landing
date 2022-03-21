import Head from 'next/head'
import Navbar from '../../components/Navbar'
import PostCart from '../../components/PostCart'
import styles from "../../styles/blog.module.scss";

import fs from 'fs'
import { join } from 'path'
import { read } from 'gray-matter'
import { readTime } from '../../utils'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

const getServerSideProps = () => {
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
    
    return {
      props: {},
    }
  }
}

const Blog = ({ posts = [] }) => {

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