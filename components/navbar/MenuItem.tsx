'use client'

import Link from 'next/link'
import React from 'react'

const MenuItem = ({
    title, isChose
}:{
    title: string,
    isChose?: boolean
}) => {
  const headline = title
  if(title.toLocaleLowerCase()==='home'){
    title = ''
  }
  return (
    <Link href={`/${title.toLocaleLowerCase()}`} className={`flex flex-row justify-center font-light 
    text-lg w-28 py-[34px] px-3 text-white hover:cursor-pointer ${isChose ? ' border-t-[5px] border-t-pink-700':'border-t-[5px] border-t-gray-400'}` 
    }>
      {headline}
    </Link>
  )
}

export default MenuItem