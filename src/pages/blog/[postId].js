import React from 'react';
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import Image from '../../components/Image'
import Navbar from '../../components/Navbar'

const redirect = (destination = '/') => ({ redirect: { destination } });
const isValidParam = param => true; // TODO develop this validation

const baseUrl = process.env.VERCEL_URL

const getServerSideProps = async (context) => {
  const { params: { postId } } = context

  try {
    if (!isValidParam(postId)) return redirect()

    const endpoint = `${baseUrl}/api/posts/${postId}`
    const response = await fetch(endpoint)
    const postData = await response.json()

    return {
      props: {
        postData,
      },
    }
  }

  catch (err) {
    console.log(err)
    return redirect()
  }
}

const Post = ({ postData: { content, data } }) => {

  return (
    <main>
      <Navbar color="black" />
      <div className='p-12 max-w-xl flex flex-col items-center justify-center m-auto gap-5'>
        <Head>
          <title>{data.title}</title>
        </Head>
        <h1 className='text-5xl text-bold text-red-800 mb-10'>{data.title}</h1>
        <Image src={data.img} width={800} height={350} className='object-cover' />
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </main>
  )
}

export {
  Post as default,
  getServerSideProps,
}