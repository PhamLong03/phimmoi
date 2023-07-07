import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='absolute h-screen w-screen' >
        <Image
          src="/background.webp" 
          alt="background"
          fill
          objectFit='cover'
        />
      </div>
    </main>
  )
}
