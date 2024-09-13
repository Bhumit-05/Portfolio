import React from 'react'
import { GITHUB_IMG, GITHUB_PROFILE, LINKEDIN_IMG, LINKEDIN_PROFILE } from '../Utils/Constant';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='h-[300px] bg-gray-700 mt-[400px] flex  text-xl font-mono'>
        <div className='mx-auto my-auto flex'>
            <div>
                <Link to={GITHUB_PROFILE} className='flex mb-[20px]' target='blank'>
                    <img src={GITHUB_IMG} className='w-[42px]' alt="Github"/>
                    <p className='my-auto ml-[10px]'>Github</p>
                </Link>
                
                <Link to={LINKEDIN_PROFILE} className='flex' target='blank'>
                    <img src={LINKEDIN_IMG} className='w-[40px]' alt='LinkedIn'/>
                    <p className=' my-auto ml-[10px]'>LinkedIn</p>
                </Link>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer;