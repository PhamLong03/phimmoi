import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <main>
      <div className="h-screen max-h-screen flex flex-col justify-between">
        <img
            alt=''
            className='h-screen w-screen'
            src='/background.jpg'
        />
      </div> 
    </main>
  )
}

export default Blog