import React from 'react'
import Button from './Button'
import {BsFillPlayFill} from 'react-icons/bs'
import {MdAdd} from 'react-icons/md'
const MovieTitle = ({title}:{title?: string}) => {
    const title1  = title?.split(':',2)
  return (
    <div className='flex flex-col absolute w-[700px] h-96 mt-52 ml-32'>
        <span className='flex flex-col text-6xl font-semibold text-white my-3 justify-center'>
            {title1![0]}
            <span className='my-3'>
                {title1![1]}
            </span>
        </span>
        <div className='flex flex-row justify-start mt-16'>
            <Button label='WATCH TRAILER' Icon={BsFillPlayFill} isRed={true}/>
            <Button label='ADD LIST' Icon={MdAdd} isRed={false}/>
        </div>
    </div>
  )
}

export default MovieTitle