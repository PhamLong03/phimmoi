import { getMovie, importMovie } from '@/prisma/movies'
import Image from 'next/image'

export default async function Home() {
  const data = await getMovie("spider-man-across-the-spider-verse")
  return (
    <main>
      <div className="h-screen max-h-screen flex flex-col justify-between">
        <img
            alt=''
            className='h-screen w-screen'
            src='/background.jpg'
        />
      </div> 
    </main>
  )
}
