import React from 'react';
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import Image from '../../components/Image'
import Navbar from '../../components/Navbar'

const baseUrl = process.env.VERCEL_URL

const getStaticPaths = async () => {
  return {
    paths: [
      '/blog/example',
      '/blog/example2',
      '/blog/example3',
    ],
    fallback: true,
  }
}

const getStaticProps = async (context) => {
  const { params: { postId } } = context

  try {
    const endpoint = `https://${baseUrl}/api/posts/${postId}`
    const response = await fetch(endpoint)
    const postData = await response.json()

    return {
      props: {
        postData,
      },
    }
  }

  catch (err) {
    console.log(err, 'error')
    return {
      props: {}
    }
  }
}

const Post = ({ postData: { content, data = {} } = {} }) => {
  const {
    title,
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