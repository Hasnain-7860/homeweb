import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className=' flex flex-col items-center justify-center container mx-auto  p-1 40 md:px-20 lg:px-32 w-full overflow-hidden ' id='About'>
          <h1 className='text-2xl  sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light '>Our Brand</span></h1>
          <p className='text-gray-500 max-w-80 text-center mb-8'>Passioate About Propwerties, Dedicated to your  Vision</p>
          <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img className='w-full lg:w-1/2 ' src={assets.brand_img} alt="" />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 '>
                <div className='gris grid cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
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

            </div>
          </div>
          <p>sdflsjdfldjf</p>
          </div>

  )
}

export default About