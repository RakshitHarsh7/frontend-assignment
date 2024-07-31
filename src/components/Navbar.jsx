import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = ({ toggleDarkMode }) => {
  return (
    <div className='items-center flex flex-col justify-center bg-black w-full'>
        <div className='flex items-center justify-center gap-2 pt-2'>
        <img className='h-5' src={logo} alt="" />
        <h1 className="text-xl font-bold text-center text-white">REACHINBOX</h1>
        <button onClick={toggleDarkMode} className="text-white">
          Toggle Dark Mode
        </button>
        </div>
        <hr className='w-full border-gray-700 mt-2'/>
    </div>
  )
}   

export default Navbar