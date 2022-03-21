import React from 'react';
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import Image from '../../components/Image'
import Navbar from '../../components/Navbar'

import fs from 'fs'
import { join } from 'path'
import { read } from 'gray-matter'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

const redirect = (destination = '/') => ({ redirect: { destination } })

const getStaticPaths = () => {
  const fileNames = fs.readdirSync(join(serverRuntimeConfig.PROJECT_ROOT, 'public/posts/'))
  const paths = fileNames.map(name => `/blog/${name.replace('.mp', '')}`)

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
      <div className='p-12 max-w-xl flex flex-col items-center justify-center m-auto gap-5'>
        <h1 className='text-5xl text-bold text-red-800 mb-10'>{title}</h1>
        <Image src={img} width={800} height={350} className='object-cover' />
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </main>
  )
}

export {
  Post as default,
  getStaticPaths,
  getStaticProps,
}