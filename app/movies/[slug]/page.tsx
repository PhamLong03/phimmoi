import { Footer } from '@/components'
import { getMovie } from '@/prisma/movies'
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
  console.log(movie)
  return (
    <>
      <Footer movie={movie || undefined}/>
      {/* <Image
        src={movie?.pictures[0] || ''}
        alt=''
        fill
      /> */}
    </>
  )
}

export default MovieId