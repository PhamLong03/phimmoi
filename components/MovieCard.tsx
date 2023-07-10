import { movies } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import {MdAdd} from 'react-icons/md'
import {RiStarSFill} from 'react-icons/ri'
const MovieCard = ({
    movie
}:{
    movie: movies
}) => {
  return (
    <div className=' bg-slate-950 w-64 w1 h-96 hover:cursor-pointer mb-2'>
      <Link href={`/movies/${movie.slug}`}>
        <div className='absolute text-white w-48 mt-72 ml-3 h-8 font-semibold text-lg overflow-ellipsis truncate'>
          {movie.name}
        </div>
        <div className='flex felx-row absolute mt-2 ml-2 w-14 h-7 bg-black items-center px-2 rounded-full'>
          <RiStarSFill size={18} color='yellow'/>
          <span className='text-white text-[13px] mt-[1px] ml-[2px]'>
            7.8 
          </span>
        </div>
      </Link>
      <div className='absolute mt-[325px] ml-3 flex flex-row w-60 justify-between'>
        <Button label='Watch now' height='h-10' width='w-28' isRed/>
        <Button label='' height='h-10' width='w-10' Icon={MdAdd}/>
      </div>
      <Link href={`/movies/${movie.slug}`}>
        <Image src={movie.thumbnails} alt="thumbnail" width={600} height={600} />
      </Link>
    </div>
  )
}

export default MovieCard