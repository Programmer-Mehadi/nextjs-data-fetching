import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-3 p-24 ${inter.className}`}
    >
      <h1 className='font-bold text-2xl'>NextJs Data Fetching: </h1>
      <p className='text-lg'>1. Static Side Fetching: <Link className='bg-fuchsia-600 px-3 py-1 text-white rounded' href={'/static/post'}>All posts</Link>  <Link className='bg-fuchsia-600 px-3 py-1 text-white rounded' href={'/static/post/1'}>Single post</Link> </p>
      <p className='text-lg'>2. Client Side Fetching: <Link className='bg-orange-600 px-3 py-1 text-white rounded' href={'/client/post'}>All posts</Link>  <Link className='bg-orange-600 px-3 py-1 text-white rounded' href={'/client/post/1'}>Single post</Link></p>
      <p className='text-lg'>2. Client Side Fetching (RTK Query): <Link className='bg-blue-600 px-3 py-1 text-white rounded' href={'/rtk/post'}>All posts</Link>  <Link className='bg-blue-600 px-3 py-1 text-white rounded' href={'/rtk/post/1'}>Single post</Link></p>
      <p className='text-lg'>3. Server Side Fetching: <Link className='bg-green-600 px-3 py-1 text-white rounded' href={'/server/post'}>All posts</Link>  <Link className='bg-green-600 px-3 py-1 text-white rounded' href={'/server/post/1'}>Single post</Link></p>
    </main>
  )
}
