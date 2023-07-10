import { Footer } from '@/components'
import MovieTitle from '@/components/MovieTitle'
import { getMovie } from '@/prisma/movies'
import React from 'react'

const MovieId = async ({
  params: {
    slug
  }
}:{
  params: {
    slug: string
  }
}) => {
  const movie = await getMovie(slug)
  return (
    <div className="h-screen max-h-screen flex flex-col justify-between">
        <img
            alt=''
            className='h-screen w-screen'
            src={movie?.pictures[0] || ''}
        />
        <div className='absolute mt-28 ml-24'>
          <MovieTitle title={movie?.name}/>
        </div>
      <div className='sticky bottom-0'> 
          <Footer movie={movie || undefined}/>
      </div>
    </div>
  )
}

export async function generateMetadata({params:{slug}}:{params: {slug: string}}) {
  const movie = await getMovie(slug)
  return {
    title: movie?.name
  }
}
export default MovieId