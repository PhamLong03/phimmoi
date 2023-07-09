import { Footer } from '@/components'
import MovieTitle from '@/components/MovieTitle'
import { getMovie } from '@/prisma/movies'
import { movies } from '@prisma/client'
import Image from 'next/image'
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
        <MovieTitle title={movie?.name}/>
      <div> 
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