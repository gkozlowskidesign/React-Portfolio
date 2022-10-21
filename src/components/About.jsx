import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-20">
                My background experience has a focus on managing, designing or 
                developing SaaS and PaaS products or project features 
                with freelance design experience creating modern UI expereinces. 
            </p>
            <br/>

            <p className="text-xl">
                I've worked with startups, major corporate 
                enterprises and small local businesses satisfying stakeholders 
                and reaching roadmap goals with proven results.
            </p>
        </div>
    </div>
  )
}

export default About