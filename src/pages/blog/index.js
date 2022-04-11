import Head from 'next/head'
import Navbar from '../../components/Navbar'
import PostCart from '../../components/PostCart'
import styles from "../../styles/blog.module.scss";
import SimpleHeader from '../../components/SimpleHeader';

import fs from 'fs'
import { join } from 'path'
import { read } from 'gray-matter'
import { readTime } from '../../utils'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

const redirect = (destination = '/') => ({ redirect: { destination } })

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

export {
  Blog as default,
  getStaticProps,
}