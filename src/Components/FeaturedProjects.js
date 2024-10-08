import React from 'react'
import { BINGEBOX_ICON, BINGEBOX_LINK } from '../Utils/Constant';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {

  return (
    <div className='bg-gray-800 mt-[80px] mx-auto w-[1100px] py-[80px] px-[80px] rounded-3xl border-4 border-black font-mono mb-[400px]'>
        <div className="flex ">
            <div>

                <Link to={BINGEBOX_LINK} target='blank'>
                <img 
                    src={BINGEBOX_ICON} 
                    alt='BingeBox' 
                    className='w-[220px] border-teal-500 border-2 mr-[280px] h-[220px] rounded-3xl cursor-pointer transform hover:scale-110 transition-all duration-500' />
                </Link>

            </div>

            <div className=''>

                <Link to={BINGEBOX_LINK} target='blank' className="text-2xl font-bold cursor-pointer hover:text-shadow-teal-text hover:text-teal-300 text-teal-500 transition-all duration-300 ">BingeBox</Link>
                <p className="pt-[20px] text-lg">Explore and enjoy your favorite movies with our sleek streaming platform. Browse an extensive library, manage your watchlist, and get personalized recommendations—all built with React, Tailwind CSS, and Redux for a seamless experience.</p>
                <Link to='/projects' className='text-blue-400 hover:text-blue-500 transition duration-300'>Know More.</Link>

            </div>
            
        </div>

        <hr className='w-[800px] mx-auto my-[80px]'></hr>

        <div className="flex ">
            <div>

                <Link to={BINGEBOX_LINK} target='blank'>
                <img 
                    src={BINGEBOX_ICON} 
                    alt='BingeBox' 
                    className='w-[220px] border-teal-500 border-2 mr-[280px] h-[220px] rounded-3xl cursor-pointer transform hover:scale-110 transition-all duration-500' />
                </Link>

            </div>

            <div className=''>

                <Link to={BINGEBOX_LINK} target='blank' className="text-2xl font-bold cursor-pointer hover:text-shadow-teal-text hover:text-teal-300 text-teal-500 transition-all duration-300 ">BingeBox</Link>
                <p className="pt-[20px] text-lg">Explore and enjoy your favorite movies with our sleek streaming platform. Browse an extensive library, manage your watchlist, and get personalized recommendations—all built with React, Tailwind CSS, and Redux for a seamless experience.</p>
                <Link to='/projects' className='text-blue-400 hover:text-blue-500 transition duration-300'>Know More.</Link>
                
            </div>
            
        </div>
    </div>
  )
}

export default FeaturedProjects;