'use client'

import React from 'react'
import {BiMenuAltRight} from 'react-icons/bi'

const Logo = () => {
  return (
    <div 
      className='flex flex-row justify-between w-40 h-max font-sans'>
        <BiMenuAltRight size={30} color='white'/>
        <a href='/' className='text-2xl font-semibold text-white'>
            Phim
            <span className='text-pink-800'>
                Moi
            </span>
        </a>
    </div>
  )
}

export default Logo