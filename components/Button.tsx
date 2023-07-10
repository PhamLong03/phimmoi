import React from 'react'
import { IconType } from 'react-icons/lib'

const Button = ({
    label, Icon, isRed, height, width
}:{
    label: string, 
    Icon?: IconType
    isRed?: boolean,
    height?: string, 
    width?: string
}) => {
  return (
    <>
 
      <div className={`flex flex-row font-semibold justify-center items-center rounded-full shadow-lg hover:cursor-pointer hover:scale-105 hover:shadow-slate-600 duration-200 ${isRed ? 'bg-pink-800 text-white' : 'bg-white text-black'} ${width !== '' || height !== '' ? `${height} ${width}` : 'h-14 w-56'}`}>
        {Icon && <Icon size={27} className='mr-[1px]'/>}
        {label}
      </div>
 

    </>
  )
}

export default Button