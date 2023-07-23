import React, { useEffect } from 'react'

const SinglePostPage = ({ post }) => {
  return (
    <div>
      <p className='mt-8 font-bold text-2xl text-center'>Single Post Page <span className='text-emerald-600'>[Static side Fetching]</span></p>
      <p className='text-center mt-10'>User ID: {post.userId}</p>
      <p className='text-center'>Title: {post.title}</p>
      <p className='text-center'>Body: {post.body}</p>
    </div>
  )
}

export default SinglePostPage;

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { postId: post.id.toString() }
  }));
  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.postId}`);
  const data = await res.json();
  return {
    props: {
      post: data
    }
  }
}