import React from 'react'
import { useNavigate } from 'react-router';
import { AVATAR_URL } from '../Utils/Constant';


const Header = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    }

    const handleAboutClick = () => {
        navigate("/about");
    }

    const handleProjectClick = () => {
        navigate("/projects");
    }

    const handleSkillsClick = () => {
        navigate("/skills");
    }

    return (
        <div className='bg-slate-800 h-[120px] text-gray-200 flex  justify-end font-mono text-xl'>
            <img src = {AVATAR_URL} alt='Avatar'onClick={handleHomeClick} className='w-[70px] h-[70px] cursor-pointer bg-white my-auto rounded-full mr-[600px]'/>
            
            <button 
                className='mr-[100px] my-auto bg-teal-500 h-[40px] w-[140px] rounded-2xl cursor-pointer hover:shadow-teal transition-shadow duration-300' 
                onClick={handleHomeClick}>
                    Home
            </button>

            <button 
                className='mr-[100px] my-auto bg-teal-500 h-[40px] w-[140px] rounded-2xl cursor-pointer hover:shadow-teal transition-shadow duration-300' 
                onClick={handleAboutClick}>
                    About_Me
            </button>

            <button 
                className='mr-[100px] my-auto bg-teal-500 h-[40px] w-[140px] rounded-2xl cursor-pointer hover:shadow-teal transition-shadow duration-300' 
                onClick={handleProjectClick}>
                    Projects
            </button>
            
            <button 
                className='mr-[100px] my-auto bg-teal-500 h-[40px] w-[140px] rounded-2xl cursor-pointer hover:shadow-teal transition-shadow duration-300' 
                onClick={handleSkillsClick}>
                    Skills
            </button>
        </div>
    )
}

export default Header;