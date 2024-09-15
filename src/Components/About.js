import React from 'react'
import Header from './Header';
import { MY_PHOTO } from '../Utils/Constant';
import Footer from './Footer';

const About = () => {
  return (
    <div className='text-gray-200'>
        <Header/>
        <div className='h-full bg-slate-900 text-gray-200 font-mono pb-[200px]'>
          
          <h1 className='py-[100px] text-4xl mx-auto max-w-fit'>\_____ABOUT ME_____/</h1>
          <img src={MY_PHOTO} alt='my-photo' className='w-[300px] mx-auto border-teal-300 border-2 p-2 rounded-3xl hover:shadow-xl hover:shadow-teal-500 shadow-teal  transition duration-300 ease-in-out'/>
          
          <div className='w-[1000px] mx-auto max-w-fit mt-[100px] bg-gray-800 p-[100px] rounded-3xl text-lg'>
            <p>Hello! I’m Bhumit Janghel, a passionate second-year student pursuing a Bachelor of Technology in Computer Science and Engineering (CSE) at NIT Raipur. My academic journey began at Sri Sankara Vidyalaya, Sector-10, Bhilai, where I completed my class 10th. I continued my education at BSP SSS-10, Bhilai, for my class 12th studies. Currently, I reside in Bhilai, Chhattisgarh.</p>
            <p className='mt-[40px]'>Beyond academics, I have a deep love for sports and e-games. I am proud to be a state-level cricket player, which reflects my dedication and enthusiasm for athletics. Alongside my sporting achievements, I have a profound passion for coding. The world of programming fascinates me, and I relish every opportunity to solve problems and build innovative solutions. My interests in both sports and technology shape my dynamic approach to life and learning.</p>
          </div>

          <div className='w-[1010px] h-[600px] mt-[-550px] ml-[500px] rounded-3xl bg-gray-700/50'></div>
        </div>

        <Footer/>
    </div>
  )
}

export default About;