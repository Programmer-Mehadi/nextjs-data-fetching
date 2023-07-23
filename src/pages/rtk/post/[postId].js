import { useGetSinglePostQuery } from '@/redux/api/api';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const SinglePostPage = () => {
  const id = useRouter()?.query?.postId;
  const { data, isLoading, isError, error } = useGetSinglePostQuery(id);
  return (
    <div>
      <p className='mt-8 font-bold text-2xl text-center'>Single Post Page <span className='text-emerald-600'>[RTK Fetching]</span></p>
      {
        isLoading ? <p className='text-center mt-14'>Loading...</p> :
          <>
            <p className='text-center mt-10'>User ID: {data?.data?.userId}</p>
            <p className='text-center'>Title: {data?.data?.title}</p>
            <p className='text-center'>Body: {data?.data?.body}</p>
          </>
      }
    </div>
  )
}

export default SinglePostPage;