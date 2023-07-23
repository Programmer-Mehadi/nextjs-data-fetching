
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/post'
    }),
    getSinglePost: builder.query({
      query: postId => `/post/${postId}`
    })
  })
})


export const { useGetPostsQuery, useGetSinglePostQuery } = apiSlice