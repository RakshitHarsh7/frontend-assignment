import React from 'react'
import logo from '../assets/logo.svg';
import { FaAngleDown } from "react-icons/fa6";


const OneBoxNavbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#121212] p-4">
    <div className="flex items-center gap-2">
        <img className="h-5" src={logo} alt="Onebox Logo" />
        <h1 className="text-xl font-bold text-white ml-10">Onebox</h1>
    </div>
    <div className='flex items-center justify-center gap-4'>
    <div className="text-white">Tim's Workspace</div>
    <FaAngleDown color='white'/>

    </div>
  </div>
  )
}

export default OneBoxNavbar