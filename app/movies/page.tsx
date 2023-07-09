import MovieCard from '@/components/MovieCard'
import { getAllMovie } from '@/prisma/movies'
import React from 'react'

const Movies = async () => {
  const movies = await getAllMovie()
  return (
   <div className='flex flex-row w-screen justify-center'>
    <div className='grid gap-5 grid-cols-5 grid-rows-3 w-auto justify-center mt-36 items-center'>
      {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
    </div>
   </div>
  )
}

export default Movies