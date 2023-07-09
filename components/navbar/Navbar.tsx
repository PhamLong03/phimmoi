'use client'

import React from 'react'
import MenuItem from './MenuItem'
import Logo from './Logo'
import Avatar from './Avatar'
import Search from './Search'
import {usePathname} from 'next/navigation'
const Navbar = () => {
  const path = usePathname().replace('/','')
  
  const check = (pathName: string) => {
    if(path.match(pathName)){
      return true
    }
    else {
      return false
    }
  }
  return (
    <div className='flex flex-row h-24 w-screen py-3 px-24 bg-gray-800/40 border-t-[5px] border-t-gray-400 justify-between'>
      <div className='flex flex-row items-center'>
        <Logo/>
        <div className='flex flex-row mx-16'>
          <MenuItem title='Movies' isChose={check(`movies`)}/>
          <MenuItem title='News' isChose={check('news')}/>
          <MenuItem title='Blog' isChose={check('blog')}/>
          <MenuItem title='My List' isChose={check('my%20list')}/>
          <MenuItem title='About' isChose={check('about')}/>
          <MenuItem title='Contact' isChose={check('contact')}/>
        </div>
      </div>

      <div className='flex flex-row items-center'>
        <Search/>
        <Avatar/>
      </div>
    </div>
  )
}

export default Navbar

