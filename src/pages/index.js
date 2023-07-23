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
      <div className='p-10 pt-0 rounded border-2 border-slate-800 mt-8 max-w-[95vw]  overflow-auto'>
        <table className=' px-3  mx-auto mt-14 w-full max-w-[700px]  min-w-[600px]'>
          <thead className='text-left'>
            <tr>
              <th className='text-slate-700'>Types/Ways</th>
              <th className='text-green-700'>Actions</th>
            </tr>
          </thead>
          <tbody className=''>
            <tr>
              <td><p className='text-lg pr-6 pt-8'><span className='font-bold'>1.</span> Static Side Fetching:  </p></td>
              <td>
                <div className='py-3 pt-8'>
                  <Link className='bg-fuchsia-600 px-3 py-1 text-white rounded' href={'/static/post'}>All posts</Link>  <Link className='bg-fuchsia-600 px-3 py-1 text-white rounded' href={'/static/post/1'}>Single post</Link>
                </div>
              </td>
            </tr>
            <tr>
              <td><p className='text-lg pr-6'><span className='font-bold'>2.</span> Client Side Fetching: </p></td>
              <td>
                <div className='py-3'>
                  <Link className='bg-orange-600 px-3 py-1 text-white rounded' href={'/client/post'}>All posts</Link>  <Link className='bg-orange-600 px-3 py-1 text-white rounded' href={'/client/post/1'}>Single post</Link>
                </div>
              </td>
            </tr>
            <tr>
              <td><p className='text-lg pr-6'><span className='font-bold'>3.</span> Client Side Fetching (RTK Query): </p></td>
              <td>
                <div className='py-3'>
                  <Link className='bg-blue-600 px-3 py-1 text-white rounded' href={'/rtk/post'}>All posts</Link>  <Link className='bg-blue-600 px-3 py-1 text-white rounded' href={'/rtk/post/1'}>Single post</Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p className='text-lg pr-6'><span className='font-bold'>4.</span> Server Side Fetching: </p>
              </td>
              <td>
                <div className='py-3'>
                  <Link className='bg-green-600 px-3 py-1 text-white rounded' href={'/server/post'}>All posts</Link>  <Link className='bg-green-600 px-3 py-1 text-white rounded' href={'/server/post/1'}>Single post</Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
