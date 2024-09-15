import React from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';
import FeaturedProjects from './FeaturedProjects';
import Footer from './Footer';

const Body = () => {
    return(
        <div>
        <Header/>
        <div className='h-full bg-slate-900 text-gray-200 font-mono'>
            <div>
                <h1 className='text-4xl text-center pt-[100px]'>Hi, I'm Bhumit Janghel</h1>
                <h2 className='ml-[37.5%] text-lg pt-[5px]'>A Computer Science & Engineering Student at NIT Raipur</h2>
                <h2 className='ml-[37.5%] text-lg py-[5px] '>Passionate about technology, programming and sports</h2>
                <Link to='/about' className='ml-[37.5%] text-lg text-teal-500 hover:text-teal-300 transition-all duration-300'>Learn more.</Link>
            </div>

            <div>
            <h2 className="text-4xl text-center pt-[150px]">\_____FEATURED PROJECTS_____/</h2>
                <FeaturedProjects/>
                <Footer/>
            </div>
        </div>
        </div>
    )
}

export default Body;