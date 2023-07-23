import Link from 'next/link';
import React, { useEffect } from 'react'

const AllPostPage = () => {
  const [post, setPost] = React.useState([])
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setPost(data)
    }
    fetchData()

  }, [])
  return (
    <div>
      <p className='mt-8 font-bold text-2xl text-center'>All Post Page <span className='text-emerald-600'>[Client side Fetching]</span></p>

      <ul className='mt-10'>
        {
          post ? post?.map((post, index) => (
            <Link href={`/client/post/${post.id}`} key={post.id}>
              <li className='text-center p-2'> {index + 1}. {
                post.title
              } </li>
            </Link>
          )) : <p className='text-center mt-14'>Loading</p>
        }
      </ul>
    </div>
  )
}

export default AllPostPage