import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu]= useState(false)
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex  justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
            <img className='' src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <li className='cursor-pointer hover:text-gray-400'><a href="#Home"> Home </a></li>
                <li  className='cursor-pointer hover:text-gray-400'><a href="#About"> About</a></li>
                <li className='cursor-pointer hover:text-gray-400'> <a href="#Project">Projects</a></li>
                <li className='cursor-pointer hover:text-gray-400'><a href="#Testimonials">Testimonials</a></li>
            </ul>
            <button className='hidden md:block bg-white py-2  px-8 rounded-full 'onClick={ alert}>Sign up</button>
            <img onClick={()=>setShowMobileMenu(true)} className='md:hidden w-7 cursor-pointer' src={assets.menu_icon} alt="" />
        </div>
        <div className={`md:hidden ${showMobileMenu? 'fixed w-full':'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'> 
                <img className='w-6 ' onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon}  alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <li className='px-4  py-2 rounded-full inline-block'>Home</li>
                <li className='px-4  py-2 rounded-full inline-block'><a href="#About"> About</a></li>
                <li className='px-4  py-2 rounded-full inline-block'><a href="#Project"> Projects </a></li>
                <li className='px-4  py-2 rounded-full inline-block'><a href="#Testimonials"> Testimonials </a></li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar