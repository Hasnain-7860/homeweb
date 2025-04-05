import React from 'react'
import { assets } from '../assets/assets'
import {motion} from "framer-motion";


const About = () => {
  return (
    <div className=' flex flex-col items-center justify-center container mx-auto  p-1  md:px-20 lg:px-32 w-full overflow-hidden lg:h-[100vh] ' id='About'>
          <h1 className='text-2xl  sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light '>Our Brand</span></h1>
          <p className='text-gray-500 max-w-80 text-center mb-8'>Passioate About Propwerties, Dedicated to your  Vision</p>
          <motion.div
           initial={{opacity:0 , y:100}} 
           transition={{
           duration:1.5
           }}
           whileInView={{opacity:1,y:0}}
           viewport={{once:true}}
           
          className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img className='w-full lg:w-1/2 ' src={assets.brand_img} alt="" />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 '>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-semicold'>10+</p>
                        <p className=''>Years of Excellence</p>

                    </div>
                    <div>
                        <p className='text-4xl font-semicold'>10+</p>
                        <p className=''>Years of Excellence</p>

                    </div>
                    <div>
                        <p className='text-4xl font-semicold'>10+</p>
                        <p className=''>Years of Excellence</p>

                    </div>
                    <div>
                        <p className='text-4xl font-semicold'>10+</p>
                        <p className=''>Years of Excellence</p>

                    </div>

                </div>
                <p className='my-10 max-w-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni similique possimus fuga fugiat in, nesciunt minus quasi, dolorum repellendus temporibus earum voluptas eos commodi quibusdam dignissimos rem voluptatum veniam odio totam culpa et recusandae eius ducimus cum. A aspernatur vitae quia veritatis. Deserunt, quasi quidem.</p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded' >Learn more</button>
            </div>
          </motion.div>
          </div>

  )
}

export default About