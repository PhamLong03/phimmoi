import MovieCard from '@/components/MovieCard'
import { getAllMovie } from '@/prisma/movies'
import Image from 'next/image'
import React from 'react'

const Movies = async () => {
  const movies = await getAllMovie()
  return (
      <div className='absolute flex flex-row w-screen justify-center z-10'>
        <div className='grid gap-10 grid-cols-5 grid-rows-2 w-auto mt-12'>
          {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}

        </div>
      </div>
  )
}

export default Movies