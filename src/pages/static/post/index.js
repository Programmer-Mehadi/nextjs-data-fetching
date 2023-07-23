import Link from 'next/link';
import React, { useEffect } from 'react'

const AllPostPage = ({ post }) => {

  return (
    <div>
      <p className='mt-8 font-bold text-2xl text-center'>All Post Page <span className='text-emerald-600'>[Static side Fetching]</span></p>

      <ul className='mt-10'>
        {
          post ? post?.map((post, index) => (
            <Link href={`/static/post/${post.id}`} key={post.id}>
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

export default AllPostPage;

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return {
    props: {
      post: data
    },
    revalidate: 30
  }
}