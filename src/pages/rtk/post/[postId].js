import { useGetSinglePostQuery } from '@/redux/api/api';
import React, { useEffect } from 'react'

const SinglePostPage = ({ post }) => {
  const { data, isLoading, isError, error } = useGetSinglePostQuery('4');

  return (
    <div>
      <p className='mt-8 font-bold text-2xl text-center'>Single Post Page <span className='text-emerald-600'>[RTK Fetching]</span></p>
      {
        isLoading ? <p className='text-center mt-14'>Loading...</p> :
          <>
            <p className='text-center mt-10'>User ID: {data.userId}</p>
            <p className='text-center'>Title: {data.title}</p>
            <p className='text-center'>Body: {data.body}</p>
          </>
      }
    </div>
  )
}

export default SinglePostPage;