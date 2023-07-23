import { useGetPostsQuery } from '@/redux/api/api';
import Link from 'next/link';
import React from 'react'

const AllPostPage = ({ post }) => {
  const { data, isLoading, error, isError } = useGetPostsQuery(undefined);

  return (
    <div>
      <p className='mt-8 font-bold text-2xl text-center'>All Post Page <span className='text-emerald-600'>[RTK Fetching]</span></p>

      <ul className='mt-10'>
        {
          !isLoading ? data?.data?.map((post, index) => (
            <Link href={`/rtk/post/${post.id}`} key={post.id}>
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

