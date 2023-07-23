import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const SinglePostPage = () => {
  const id = useRouter()?.query?.postId;
  const [post, setPost] = useState([])
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setPost(data)
    }
    fetchData()
  }, [id])

  return (
    <div>
      <p className='mt-8 font-bold text-2xl text-center'>Single Post Page <span className='text-emerald-600'>[Client side Fetching]</span></p>

      <p className='text-center mt-10'>User ID: {post.userId}</p>
      <p className='text-center'>Title: {post.title}</p>
      <p className='text-center'>Body: {post.body}</p>
    </div>
  )
}

export default SinglePostPage