import React from 'react'
import { IconType } from 'react-icons/lib'

const Button = ({
    label, Icon, isRed
}:{
    label: string, 
    Icon: IconType
    isRed?: boolean
}) => {
  return (
    <div className={`flex flex-row font-semibold h-14 w-56 justify-center items-center rounded-full mr-14 ${isRed ? 'bg-pink-800 text-white' : 'bg-white text-black'}`}>
        <Icon size={27} className='mr-[1px]'/>
        {label}
    </div>
  )
}

export default Button