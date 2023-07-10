import { movies } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import {MdAdd} from 'react-icons/md'

const TrendingReels = ({
    movie
}:{
    movie?: movies
}) => {
    
  return (
    <div className='relative h-96 min-w-[650px] mr-3'>
        <Image
            src={movie?.pictures[0] || ''}
            alt=''
            fill
            className='rounded-2xl'
        />
        <div>
            <div className='absolute text-white z-10 text-ellipsis truncate text-2xl w-72 font-semibold mt-64 ml-5'>
                {movie?.name}
            </div>
            <div className='absolute z-10 w-[610px] mt-[275px] ml-5'>
                <div className='flex flex-row text-base mt-10 w-56 justify-between'>
                    <Button label='Watch now' isRed width='w-32' height='h-10'/>
                    <Button label='' Icon={MdAdd} width='w-10' height='h-10'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrendingReels