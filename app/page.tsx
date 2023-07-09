import { getMovie, importMovie } from '@/prisma/movies'
import Image from 'next/image'

export default async function Home() {
  const data = await getMovie("spider-man-across-the-spider-verse")
  return (
    <main>
      
    </main>
  )
}
