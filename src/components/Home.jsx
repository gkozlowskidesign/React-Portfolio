import React from 'react';
import HeroImage from '../assets/heroimage.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
  <div name="home" className='h-screen py-8 w-full bg-gradient-to-b from-black  via-black to-gray-800'>
    
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-4xl font-bold text-white px-4 py-4'>I'm a Software Developer</h2>
            <p className='text-gray-500 px-4 py-4 max-w-md'>
                I have 6 years of expereience in software development, I love to work on web applications 
                using technologies like
                React, Tailwind, Next JS, AWS and many others.
            </p>

            <div>
                <Link to="portfolio" smooth duartion={500} className='group text-1xl text-white w-fit px-6 py-3 flex items-center 
                rounded-md bg-gradient-to-r from-blue-700 to-purple-500 cursor-pointer'>
                    Portfolio</Link>
                    <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={20} />
                    </span>
               
            </div>
        </div>
        <div>
            <img src={HeroImage} alt="My Profile"
            className="rounded-3xl ml-4 mx-auto w-3/4 md:w-full" 
            />
        </div>
    </div>
  </div>
  );
};

export default Home;
