import React from 'react';

const Home = () => {

const Home = [
  {
    src:'https://github.com/gkozlowskidesign/React-Portfolio/blob/main/src/assets/GaryK-1.jpg?raw=true',
  }
]
  return (
  <div name="home" className='w-full bg-gradient-to-r from-gray-900  to-indigo-900'>
    
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-10 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='lg:text-8xl text-4xl font-bold text-white px-4 py-4'>Web Solutions Developer</h2>
            <p className='text-xl text-white px-4 py-2 max-w-md'>
                I have 6 years of expereience in web solutions development and management using CRMs, DBMs, CMs, modern UI and UX design libraries like React Native and Tailwinds, Cloud Computing technologies like AWS, Firebase and Azure and technical analysis reporting skills for agile optimization. 
            </p>
          
        </div>
        <div className='px-12 py-12 m-4 rounded-xl bg-indigo-900 ring-4 ring-gray-900'>
          {Home.map(({src}) =>(
            <img src={src} alt="My Profile" class="rounded-xl"
            className="rounded-xl border-2 border-indigo-500  mx-auto w-full" 
            />
            ))} 
        </div>
    </div>
  </div>
  );
};

export default Home;
