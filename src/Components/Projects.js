import React from 'react'
import Header from './Header';
import Project1 from './Project1';
import Footer from './Footer';

const Projects = () => {
  return (
    <div className='text-gray-200'>
        <Header/>
        <div className='h-full bg-gray-900 font-mono pb-[300px]'>
          <h1 className='text-4xl mx-auto max-w-fit py-[100px]'>\_____PROJECTS_____/</h1>
          <div className='bg-gray-800 mx-auto w-[1000px] pt-[75px] px-[75px] pb-[1px] rounded-3xl'>

            <Project1/>
            <Project1/>

          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Projects;