import Head from 'next/head'
import dynamic from 'next/dynamic'
import Image from '../../components/Image'
import Navbar from '../../components/Navbar'
import fs from 'fs'
import { join } from 'path'
import { read } from 'gray-matter'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()
const Markdown = dynamic(() => import('../../components/Markdown'), { loading: () => <p>Loading...</p> })

const redirect = (destination = '/') => ({ redirect: { destination } })

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

const Post = ({ data, content }) => {
  const {
    title = "Default Title",
    img = '/post_images/default.png',
  } = data;

  return (
    <main>
      <Navbar color="black" />
      <Head>
        <title>{title}</title>
      </Head>
      <div className='py-12 px-8 text-justify flex flex-col items-center justify-center m-auto gap-5'>
        <h1 className='text-5xl text-bold text-red-800 mb-10'>{title}</h1>
        <div className="max-w-5xl w-full">
          <Image src={img} layout="responsive" width="800" height="350" />
        </div>
        <Markdown className='prose max-w-5xl w-full' content={content} />
      </div>
    </main>
  )
}

export {
  Post as default,
  getStaticPaths,
  getStaticProps,
}