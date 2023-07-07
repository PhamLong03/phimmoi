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
        width={65}
        height={50}
        className='rounded-full'
    />
  )
}

export default Avatar