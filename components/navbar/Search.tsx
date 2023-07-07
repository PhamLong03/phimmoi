'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
const Search = () => {
    const [value, setValue] = useState('')
  return (
    <div className='relative flex flex-row h-8 rounded-lg mr-12 items-center'>
        <Link className='w-9 flex flex-row justify-center' href={`/search/${value}`}>
            <BiSearch color='white' size={20}/>
        </Link>
        <input
            type="text" 
            className='h-8 rounded-r-lg bg-transparent outline-none text-white placeholder-white'
            placeholder='Search for movies'
            value={value}
            onChange={(e)=>{
                setValue(e.target.value)
                console.log(value)
            }}
        />
    </div>
  )
}

export default Search