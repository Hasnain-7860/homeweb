import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex  justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
            <img className='' src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <li className='cursor-pointer hover:text-gray-400'>About</li>
                <li className='cursor-pointer hover:text-gray-400'>Home</li>
                <li className='cursor-pointer hover:text-gray-400'>Projects</li>
                <li className='cursor-pointer hover:text-gray-400'>Testimonials</li>
            </ul>
            <button className='hidden md:block bg-white py-2  px-8 rounded-full'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar