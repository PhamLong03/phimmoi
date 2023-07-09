'use client'

import Image from 'next/image'
import React from 'react'

const Avatar = ({
    img
}:{
    img?: string
}) => {
  return (
    <Image
        alt='avatar'
        src={img? img : '/profile-placeholder.png'}
        width={40}
        height={40}
        className='rounded-full'
    />
  )
}

export default Avatar