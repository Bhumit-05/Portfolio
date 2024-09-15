import React from 'react'
import { Link } from 'react-router-dom';
import { BINGEBOX_ICON, BINGEBOX_LINK, BINGEBOX_REPO, REACT_LOGO, REDUX_LOGO, TAILWIND_LOGO } from '../Utils/Constant';

const Project1 = () => {
  return (
    <div className='bg-gray-900/30 rounded-3xl font-mono p-[50px] mb-[75px]'>

        <div className='flex '>
            <Link to={BINGEBOX_LINK} target='blank' className='flex'>
                <img src={BINGEBOX_ICON} className='w-[150px] h-[150px] rounded-2xl ' alt="Project Icon"/> 
                <h1 className='text-3xl my-auto ml-[60px] underline hover:text-teal-100 transition-all duration-300'>BingeBox</h1>
                <h1 className='h-[40px] my-auto  ml-[60px] w-fit bg-teal-500 hover:bg-teal-600 text-white w- py-2 px-4 rounded-2xl transition duration-300 ease-in-out'>Live Demo</h1>
            </Link>

            <Link to={BINGEBOX_REPO} target='blank' className='h-[40px] ml-[60px] my-auto w-[140px] bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-2xl transition duration-300 ease-in-out'>
               Github Repo
            </Link>
        </div>

        <hr className='w-[670px] mx-auto mt-[60px]'></hr>

        <div className='p-[15px]'>
            <h1 className='text-2xl mb-[10px] mt-[40px]'>Description:</h1>
            
            <p className='text-lg px-[30px]'> BingeBox is an user-friendly streaming platform offering a wide range of movies, shows and content with personalized recommendations and watchlists</p>
            

            <h1 className='text-2xl mb-[5px] mt-[40px]'>Tech stack used:</h1>

            <div className='mx-[25px]'>

                <div className='flex mb-[5px] text-lg'>
                    <img src={TAILWIND_LOGO} className='w-[50px]' alt='Tailwind logo'/>
                    <p className='mt-[12px] ml-[10px]'>Tailwind CSS</p>
                </div>

                <div className='flex text-lg ml-[10px]'>
                    <img src={REACT_LOGO} className='w-[33px] h-[30px]' alt='React logo'/>
                    <p className='ml-[20px]'>React</p>
                </div>

                <div className='flex text-lg mt-[15px] ml-[10px]'>
                    <img src={REDUX_LOGO} className='w-[33px]' alt='Redux logo'/>
                    <p className='ml-[20px]'>Redux Toolkit</p>
                </div>

            </div>

            <h1 className='text-2xl mt-[40px] mb-[10px]'>Features:</h1>
            <ul className='pl-[40px] pr-[25px] text-lg list-disc'>
                <li className=''>Implemented user authentication and authorization using Firebase.</li>
                <li>Browse page contains multiple movies which are fetched from TMDB APIs</li>
                <li>Implemented watchlist, we can add and remove movies into it.</li>
                <li>Integrated Groq API for movie suggestions.</li>
                <li>Reduced API calls by memoization</li>
            </ul>
        </div>

    </div>
  )
}

export default Project1;