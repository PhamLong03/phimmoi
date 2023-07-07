'use client'

import React from 'react'
import MenuItem from './MenuItem'
import Logo from './Logo'
import Avatar from './Avatar'
import Search from './Search'

const Navbar = () => {
  return (
    <div className='relative flex flex-row h-24 w-auto py-3 px-24 bg-gray-800/40 border-t-[5px] border-t-gray-400 justify-between'>
      <div className='flex flex-row items-center'>
        <Logo/>
        <div className='flex flex-row mx-16'>
          <MenuItem title='Home' isChose={true}/>
          <MenuItem title='Movies'/>
          <MenuItem title='News'/>
          <MenuItem title='Blog'/>
          <MenuItem title='My List'/>
          <MenuItem title='About'/>
          <MenuItem title='Contact'/>
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

