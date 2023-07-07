import React from 'react'
import content from '@/footer_content/content.json'
const Footer = () => {
  return (
    <div className='flex flex-row sticky w-5/12 h-72 bg-slate-900/60 rounded-tr-[90px] bottom-0 justify-evenly'>
      <div className='text-white w-1/2 h-auto flex flex-col ml-10 my-10 justify-between'>
        <div className='font-semibold'>
          CATEGORY
          <div className='flex flex-row text-sm font-normal'>
            {content.category.map((item)=>(
              <div>{item}, </div>
            ))}
          </div>
        </div>
        <div className='font-semibold'>
          DIRECTORS/WRITERS
          <div className='flex flex-row text-sm font-normal'>Director: {content.directory.director.map((item)=>(
            <div>{item}</div>
          ))}</div>
          <div className='flex flex-ro text-sm font-normal'>Writer: {content.directory.writer.map((item)=>(
            <div>{item}</div>
          ))}</div>
        </div>
      </div>
      <div className='text-white w-1/2 h-auto flex flex-col mr-5 my-10 justify-between'>
        <div className='font-semibold'>
          STORYLINE
          <div className='text-sm font-normal'>
            {content.storyline}
          </div>
        </div>
        <div className='font-semibold'>
          STARS
          <div className='flex flex-row text-sm font-normal'>
            {content.stars.map((item)=>(
              <div>{item},</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer