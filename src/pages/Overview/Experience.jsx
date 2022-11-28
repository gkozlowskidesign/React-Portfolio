import React from 'react'
const About = () => {
  return (
    <div name="about" className='h-4/5 w-full bg-gradient-to-r from-gray-900  to-indigo-900 text-white'>

    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center  px-10 md:flex-row'>
        <div className='flex flex-col justify-center m-4 sm:m-2'>
        <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-indigo-500">Background</p>
            </div>
        <div className="max-w-screen-lg p-4 px-4 sm:p-20 mb-10 flex flex-col justify-center w-full h-full bg-indigo-900 ring-4 ring-gray-900 rounded-xl">
           
            <p className="sm:text-lg text-sm mt-6 sm:mt-0 sm:mb-6 rounded-xl  bg-gray-800 text-white p-6 mx-6  border-2 border-indigo-500 shadow-2xl">
            Motivated, passionate, and highly driven Project Manager and Developer 
            with in depth experience working in a wide variety of technical environments. 
            Comprehensive knowledge of configuring, managing, optimizing, and  troubleshooting 
            software, marketing, and entire IT infrastructures at small to medium scale. </p>
            <p className="sm:text-lg text-sm mt-9 sm:mt-5 mb-6 sm:mb-0 rounded-xl  bg-gray-800 text-white p-6 mx-6 border-2 border-indigo-500 shadow-2xl">
            Over the years I've had the opportunity to work with world class leaders and developers allowing me to learn a variety of professional skills that have helped me succeed in the workforce.
            Some skills include leadership, management, planning, business-analytsis, strategic decision making, design within both operations, as well as frontend and backend software, development of software, the business, processes within and laslty the ability to
            to present and report analytical findings or results in a proper language satisfying customers and stakeholders with proven results.
            </p>

            
        </div>    
          
        </div>
    </div>    
    </div>
  )
}

export default About