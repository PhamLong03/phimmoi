import TrendingReels from '@/components/TrendingReels'
import { getAllMovie, getMovie, importMovie } from '@/prisma/movies'

export default async function Home() {
  const movies = await getAllMovie()
  return (
    <main >
      <div className='mt-3 mx-6'>
        <span className='text-white font-semibold text-lg'>
          Trending movies
        </span>
        <div className='flex flex-row w-full h-auto mt-2 rounded-2xl overflow-x-scroll'>
          {movies.map((movie)=>(
            <TrendingReels movie={movie}/>
          ))}
        </div>
      </div>
    </main>
  )
}
