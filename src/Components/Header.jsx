import React from 'react'
import Navbar from './Navbar'
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import Contact from './Contact';


const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
        <Navbar/>
        <motion.div
            initial={{opacity:0 , y:100}} 
            transition={{
            duration:1.5
            }}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
      

       
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:32 text-white'>
            <h2 className='text-5xl md:text-[82px] lg:5xl max-w-7xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
            <div className='flex items-center text-center justify-center space-x-6 mt-16'>
                <li className='list-none border border-white px-8 py-3 rounded'>Projects</li>
                <Link><li className='list-none bg-blue-500 px-8 py-3 rounded'>Contact Us</li></Link>
            </div>
        </motion.div>
    </div>
  )
}

export default Header