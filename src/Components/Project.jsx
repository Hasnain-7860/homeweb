import React, { useState } from 'react'
import leftarrow from '../assets/left_arrow.svg'
import rightarrow from '../assets/right_arrow.svg'
import { projectsData } from '../assets/assets'
 
const Project = () => {
    const [currentIndex ,setCurrentIndex] = useState(0);
    const[cardSToShow , setCardsToShow] = useState(1);

    const nextProject =()=>{
        setCurrentIndex((prevIndex)=>(prevIndex+1) % projectsData.lenght)
    }
    const preProject =()=>{
        setCurrentIndex((prevIndex)=> prevIndex === 0 ? projectsData.length-1: 
    
    )
    }

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Project'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2  text-center'>
            Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span> </h1>
            <p className='text-center text-gray-500 mb-8  mx-auto max-w-80 '>Crafting Spaces , Building Legacies-Explore our Portfolio</p>
            <div className='flex justify-end items-center mb-2'>
                <button className='p-3 bg-gray-200 rounded mr-2'>
                <img src={leftarrow} alt="" />
                </button>
                <button className='p-3 bg-gray-200 rounded mr-2'>
                <img src={rightarrow} alt="" />
                </button>
            </div>
            <div className='overflow-hidden'>
                <div className='flex gap-8  transition-transform duration-500 ease-in-out'>
                    {projectsData.map((project,index)=>(
                        <div key={index} className='  w-1/1 lg:relative flex-shrink-0 lg:w-1/4  '>
                            <img className='w-full h-auto mb-14' src={project.image} alt={project.title} />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                    <p className='text-gray-500 text-sm'>
                                        {project.price} <span>{project.location}</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
       
    </div>
  )
}

export default Project