import React from 'react'
import { EMAIL, GITHUB_IMG, GITHUB_PROFILE, LEETCODE_IMG, LEETCODE_LINK, LINKEDIN_IMG, LINKEDIN_PROFILE, PHONE, RESUME, RESUME_IMG } from '../Utils/Constant';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-gray-700'>
        <div className='h-[300px] flex  text-xl font-mono'>
            <div className='mx-auto my-auto flex'>
                <div>
                    <Link to={GITHUB_PROFILE} className='flex mb-[20px]' target='blank'>
                        <img src={GITHUB_IMG} className='w-[42px]' alt="Github img"/>
                        <p className='my-auto ml-[10px]'>Github</p>
                    </Link>
                    
                    <Link to={LINKEDIN_PROFILE} className='flex mt-[30px]' target='blank'>
                        <img src={LINKEDIN_IMG} className='w-[40px]' alt='LinkedIn img'/>
                        <p className=' my-auto ml-[10px]'>LinkedIn</p>
                    </Link>
                </div>
                <div className='ml-[70px] mt-[-15px]'>
                    <Link to={LEETCODE_LINK} className='flex mb-[7px]' target='blank'>
                        <img src={LEETCODE_IMG} className='w-[130px]' alt="Leecode img"/>
                        <p className='my-auto ml-[-39px]'>Leetcode</p>
                    </Link>

                    <Link to="mailto:bhumit05janghel@gmail.com" className='flex ml-[34px]' target='blank'>
                        <img src={EMAIL} className='w-[60px]' alt='Mail img'/>
                        <p className=' my-auto ml-[10px]'>bhumit05janghel@gmail.com</p>
                    </Link>
                </div>  
                <div className='ml-[70px]'>
                    <Link to="tel:+91 7974844354" className='flex ml-[45px] ' target='blank'>
                        <img src={PHONE} className='w-[40px] h-[40px]' alt='Phone img'/>
                        <p className=' my-auto ml-[10px]'>+91 7974844354</p>
                    </Link>

                    <Link to={RESUME} target='blank' className='flex mt-[27px] ml-[48px]'>
                        <img src={RESUME_IMG} className='w-[40px] '/>
                        <p className='mt-[5px] ml-[10px]'>Resume</p>
                    </Link>
                </div>
            </div>
        </div>
        <p className='mx-auto max-w-fit pb-[30px]'>Made with 
            <span className='text-red-600 mx-[10px] text-2xl'>
                ❤️
            </span>
            using React and Tailwind CSS
        </p>
    </div>
  )
}

export default Footer;