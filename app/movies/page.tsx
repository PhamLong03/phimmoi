import MovieCard from '@/components/MovieCard'
import { getAllMovie } from '@/prisma/movies'
import Image from 'next/image'
import React from 'react'

const Movies = async () => {
  const movies = await getAllMovie()
  return (
    <main>
      <div className="absolute z-10">
        <Image
           alt=''
           className=''
           src='/background.jpg'
           width={10000}
           height={20000}
           objectFit='repeat'
        />
      </div> 
      <div className='flex flex-row w-screen justify-center absolute z-20'>
      <div className='grid gap-5 grid-cols-5 grid-rows-1 w-auto mt-44'>
        {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
      </div>
      </div>
    </main>
  )
}

export default Movies