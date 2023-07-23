import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-3 p-24 ${inter.className}`}
    >
      <h1 className='font-bold text-2xl'>NextJs Data Fetching: </h1>
      <p className='text-lg'>1. Static Side Fetching</p>
      <p className='text-lg'>2. Client Side Fetching</p>
      <p className='text-lg'>3. Server Side Fetching</p>
    </main>
  )
}
