import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { C_LOGO, CPP_LOGO, CSS3_LOGO, EXPRESS_JS_LOGO, JAVASCRIPT_LOGO, MONGO_DB_LOGO, NODE_JS_LOGO, REACT_LOGO, REDUX_LOGO } from '../Utils/Constant';

const Skills = () => {
  return (
    <div className='font-mono text-gray-200 text-lg'>
      <Header/>
      <div className='bg-slate-900 h-full pb-[300px]'>
        <h1 className='py-[100px] text-4xl mx-auto max-w-fit'>\_____My Skills_____/</h1>

        <div className='bg-gray-800 w-[1000px] mx-auto rounded-3xl p-[75px]'>
          <h2 className='text-2xl underline mb-[15px]'>Technical Skills</h2>

          <div className='px-[50px] flex'>
            <img src={C_LOGO} alt='c logo'/>
            <p className='ml-[10px] mt-[10px]'>C Programming</p>
          </div>

          <div className='px-[50px] flex'>
            <img src={CPP_LOGO} alt='c++ logo'/>
            <p className='ml-[10px] mt-[10px]'>C++ Programming</p>
          </div>

          <div className='px-[50px] flex'>
            <img src={CSS3_LOGO} alt='css logo'/>
            <p className='ml-[10px] mt-[10px]'>CSS3</p>
          </div>

          <div className='px-[50px] pb-[4px] flex'>
            <img src={JAVASCRIPT_LOGO} alt='javascript logo'/>
            <p className='ml-[10px] mt-[10px]'>Javascript</p>
          </div>

          <div className='px-[50px] pb-[5px] flex'>
            <img src={REACT_LOGO} className='w-[40px] h-[40px] ml-[3px] mr-[7px]' alt='react logo'/>
            <p className='ml-[10px] mt-[10px]'>React.js</p>
          </div>

          <div className='px-[50px] ml-[1px] flex'>
            <img src={REDUX_LOGO} className='w-[43px] mr-[6px]' alt='redux logo'/>
            <p className='ml-[10px] mt-[10px]'>Redux Toolkit</p>
          </div>

          <div className='px-[50px] ml-[1px] flex'>
            <img src={NODE_JS_LOGO} className='w-[43px] mr-[6px]' alt='Node.js logo'/>
            <p className='ml-[10px] mt-[10px]'>Node.js</p>
          </div>

          <div className='px-[50px] ml-[1px] mb-[5px] flex'>
            <img src={EXPRESS_JS_LOGO} className='w-[40px] mr-[6px] bg-gray-500 p-[5px] h-[40px] rounded-md mt-[5px] ml-[3px]' alt='express.js logo'/>
            <p className='ml-[10px] mt-[10px]'>Express.js</p>
          </div>

          <div className='px-[50px] ml-[1px] mb-[50px] flex'>
            <img src={MONGO_DB_LOGO} className='w-[43px] mr-[6px]' alt='mongoDB logo'/>
            <p className='ml-[10px] mt-[10px]'>MongoDB</p>
          </div>

          <h2 className='text-2xl underline'>Coursework</h2>
          
          <ul className='list-disc px-[50px]'>
            <li className='mt-[20px]'>Data Structures and Algorithms</li>
            <li>Object Oriented Programming</li>
            <li className='mb-[20px]'>Operating Systems</li>
          </ul>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Skills;