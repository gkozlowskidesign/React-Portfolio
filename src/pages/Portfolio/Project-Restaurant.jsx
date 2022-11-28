import {  BiReset, BiHighlight,  BiWrench, BiDetail } from "react-icons/bi";
import React from 'react'



const About = () => {


  return (
    <div className='bg-gray-900'>
            <div name="about" className='w-full h-100'>
        
             
            </div>
                    <section>
                        <div class="bg-gray-900 sm:grid grid-cols-5 grid-rows-1 px-4 py-6 min-w-full lg:min-w-screen space-y-6 sm:space-y-0 sm:gap-4">
                            <div class="h-96 col-span-4 bg-gradient-to-r from-gray-900  to-indigo-900 rounded-md flex items-center">
                                <div class="ml-20 w-80">
                                <h2 class="text-white text-4xl font-extrabold">Restaurant</h2>
                                    <h2 class="text-white text-2xl font-extrabold">Website Development</h2>
                                </div>
                            </div>

                            <div class="h-96">
                                <div class="bg-gray-100 py-5 px-4 rounded-lg flex justify-around items-center ">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </span>
                                </div>

                                <div class="bg-gray-800  rounded-md">
                                    <div class="bg-gray-800 rounded-md list-none  text-center mt-8">
                                        
                                        <li class="py-6 rounded-md ring-2 ring-black  hover:bg-gradient-to-r from-gray-900  to-indigo-700 cursor-pointer"><a href="https://github.com/gkozlowskidesign/metaverseot" class="list-none text-white hover:text-indigo-600">Repository</a></li>
                                        <li class="py-6 rounded-md ring-2 ring-black  hover:bg-gradient-to-r from-gray-900  to-indigo-700 cursor-pointer"><a href="https://github.com/gkozlowskidesign/metaverseot/blob/main/README.md#documentation" class="list-none text-white hover:text-indigo-600">Documentation</a></li>                                
                                        <li class="py-6 rounded-md ring-2 ring-black  hover:bg-gradient-to-r from-gray-900  to-indigo-700 cursor-pointer"><a href="https://www.metaverseot.xyz/" class="list-none text-white hover:text-indigo-600">Preview</a></li>
                                        <li class="py-6 rounded-md ring-2 ring-black  hover:bg-gradient-to-r from-gray-900  to-indigo-700 cursor-pointer"><a href="/" class="list-none text-white hover:text-indigo-600">Go Back</a></li>                                
                                        
                                    </div>
                                </div>                        
                            </div>
                        </div>
                    </section>


                    <div class="bg-gray-800">
                            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                <h2 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white ">Quick Start</h2>
                                    <p class="mb-4">Coming Soon...</p>
                                </div>
                            </div>
                    </div>
                    <div class="container mx-auto p-2 px-4 bg-gray-900">

 
                        <div class="flex flex-wrap bg-gray-900">
                            <div class="w-full items-center justify-center md:w-11/12 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-4 lg:px-6 gap-6 ">
                                <div class="relative flex flex-col mt-4 mb-5 bg-gray-900">
                                    <div class="px-4 py-5 flex-auto ring-2 ring-indigo-400 rounded-md bg-gray-800">
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-gradient-to-b from-black  to-indigo-700 ">
                                        <BiDetail class="w-8 h-8" alt="MTOT" />  
                                        </div>
                                        <h6 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">Project Details</h6>
                                        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Coming Soon...</p>
                                    </div>
                                </div>
                                <div class="relative flex flex-col min-w-0 mt-4 mb-5">
                                    <div class="px-4 py-5 flex-auto ring-2 ring-indigo-400 rounded-md bg-gray-800">
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-gradient-to-b from-black  to-indigo-700 ">
                                        <BiHighlight class="w-8 h-8" alt="MTOT" />              
                                        </div>
                                            <h6 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">Project Design</h6>
                                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Coming Soon...</p>
                                    </div>
                                </div>
                             </div>
                             <div class="w-full md:w-11/12 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-4 lg:px-6 gap-6 mb-20">
                                <div class="relative flex flex-col min-w-0 mt-4 mb-5">
                                    <div class="px-4 py-5 flex-auto ring-2 ring-indigo-400 rounded-md bg-gray-800">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-gradient-to-b from-black  to-indigo-700 ">
                                    <BiReset class="w-8 h-8" alt="MTOT" />  
                                    </div>
                                    <h6 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">Project Development</h6>
                                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Coming Soon...</p>

                                    </div>
                                </div>
                                
                                <div class="relative flex flex-col min-w-0 mt-4 mb-5">
                                    <div class="px-4 py-5 flex-auto ring-2 ring-indigo-400 rounded-md bg-gray-800">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-gradient-to-b from-black  to-indigo-700 ">
                                    <BiWrench class="w-8 h-8" alt="MTOT" />  
                                    </div>
                                    <h6 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">Project Resources</h6>
                                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Coming Soon...</p>

                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                </div>

   
            
                

    
                 


  )
}



export default About