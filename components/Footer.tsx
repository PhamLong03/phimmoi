import React from 'react'
import content from '@/footer_content/content.json'
import { movies } from '@prisma/client'
const Footer = ({
  movie
}:{
  movie?: movies
}) => {
  return (
    <div className='absolute flex flex-row w-[800px] overflow-hidden h-72 bg-slate-900/80 rounded-tr-[90px] bottom-0 justify-evenly hover:w-[800px] duration-200'>
      <div className='text-white w-1/2 h-auto flex flex-col ml-16 my-10 justify-between'>
        <div className='font-semibold'>
          CATEGORY
          <div className='flex flex-row text-sm font-normal'>
            {movie?.categories.map((item)=>(
              <div key={item}>{item}, </div>
            ))}
          </div>
        </div>
        <div className='font-semibold'>
          DIRECTORS/WRITERS
          <div className='flex flex-row text-sm font-normal'>Director: {movie?.directors.map((item)=>(
            <div>{item}</div>
          ))}</div>
          <div className='flex flex-ro text-sm font-normal'>Writer: {movie?.writers.map((item)=>(
            <div>{item}</div>
          ))}</div>
        </div>
      </div>
      <div className='text-white w-1/2 h-auto flex flex-col mr-5 my-10 justify-between'>
        <div className='font-semibold'>
          STORYLINE
          <div className='text-sm font-normal'>
            {movie?.storyLine}
          </div>
        </div>
        <div className='font-semibold mb-5'>
          STARS
          <div className='flex flex-row text-sm font-normal'>
            {movie?.stars.map((item)=>(
              <div>{item},</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer