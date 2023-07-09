import { movies } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

const MovieCard = ({
    movie
}:{
    movie: movies
}) => {
  return (
    <Link href={`/movies/${movie.slug}`}>
        <div className=' bg-slate-950 w-64 h-96 hover:cursor-pointer mb-2'>
            <Image src={movie.thumbnails} alt="dasads" width={600} height={600}/>
            <div className='hover:cursor-pointer'>
            {movie.name}
            </div>
        </div>
    </Link>
  )
}

export default MovieCard