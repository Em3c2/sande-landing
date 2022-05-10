import Head from 'next/head'
import dynamic from 'next/dynamic'
import Image from '../../components/Image'
import Navbar from '../../components/Navbar'
import fs from 'fs'
import { join } from 'path'
import { read } from 'gray-matter'
import getConfig from 'next/config'
import { redirect } from '../../utils'
import styles from './post.module.scss'

const { serverRuntimeConfig } = getConfig()
const Markdown = dynamic(() => import('../../components/Markdown'), { loading: () => <p>Loading...</p> })

const Post = ({ data, content }) => {
  const {
    title = "Default Title",
    img = '/post_images/default.png',
    description = "",
  } = data;

  return (
    <main className={styles.post}>
      <Navbar color="black" />
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://estudiosande.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={img} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://estudiosande.com" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={img} />

      </Head>
      <div className='py-12 px-8 text-justify flex flex-col items-center justify-center m-auto gap-5'>
        <div className="max-w-5xl w-full rounded-md overflow-hidden">
          <Image src={img} layout="responsive" width="800" height="350" objectFit="cover"/>
        </div>
        <Markdown className='prose max-w-5xl w-full' content={content} />
      </div>
    </main>
  )
}

const getStaticPaths = () => {
  const fileNames = fs.readdirSync(join(serverRuntimeConfig.PROJECT_ROOT, 'public/posts/'))
  const paths = fileNames.map(name => `/blog/${name.replace('.md', '')}`)

  return {
    paths,
    fallback: 'blocking',
  };
}

const getStaticProps = context => {
  const { params: { postId } } = context

  try {
    const { data, content } = read(join(serverRuntimeConfig.PROJECT_ROOT, `public/posts/${postId}.md`))

    return {
      props: {
        data,
        content,
      },
    }
  }

  catch (err) {
    console.log(err)
    return redirect()
  }
}

export {
  Post as default,
  getStaticPaths,
  getStaticProps,
}