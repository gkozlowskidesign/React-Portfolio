import React from 'react'


    const portfolios = [ 
        {
            id: 1,
            name: 'React & Tailwinds',
            href: '/project-documentation-liquorstore-website',
            ImageSrc: 'https://raw.githubusercontent.com/gkozlowskidesign/React-Portfolio/b47763522b175d12ae52d702c84ec20ce8ec04ba/src/assets/Screenshot-LiquorStore.png',
            ImageAlt: 'Portfolio Website'
       
        },
        { 
            id: 2,
            name: 'React & Tailwinds',
            href: '/project-documentation-software-website',
            ImageSrc: 'https://raw.githubusercontent.com/gkozlowskidesign/React-Portfolio/b47763522b175d12ae52d702c84ec20ce8ec04ba/src/assets/Screenshot-Meta.png',
            ImageAlt: 'Portfolio Website'
        
        },
        {
            id: 3,
            name: 'React & Tailwinds',
            href: '/project-documentation-portfolio-website',
            ImageSrc: 'https://raw.githubusercontent.com/gkozlowskidesign/React-Portfolio/b47763522b175d12ae52d702c84ec20ce8ec04ba/src/assets/Screenshot-Port.png',
            ImageAlt: 'Portfolio Website'

        },
        {
            id: 4,
            name: 'HTML, CSS, & JS',
            href: '/project-documentation-dashboard-user-interface',
            ImageSrc: 'https://raw.githubusercontent.com/gkozlowskidesign/React-Portfolio/b47763522b175d12ae52d702c84ec20ce8ec04ba/src/assets/Screenshot-Dash.png',
            ImageAlt: 'Portfolio Website'
      
        },
        {
            id: 5,
            name: 'HTML, CSS, & JS',
            href: '/project-documentation-healthcare-web-application',
            ImageSrc: 'https://raw.githubusercontent.com/gkozlowskidesign/React-Portfolio/b47763522b175d12ae52d702c84ec20ce8ec04ba/src/assets/Screenshot-Healthcare.png',
            ImageAlt: 'Portfolio Website'
      
        },
        {
            id: 6,
            name: 'HTML, CSS, & JS',
            href: '/project-documentation-portfolio-website-html',
            ImageSrc: 'https://raw.githubusercontent.com/gkozlowskidesign/React-Portfolio/b47763522b175d12ae52d702c84ec20ce8ec04ba/src/assets/Screenshot-OPort.png',
            ImageAlt: 'Portfolio Website'
      
        },

        
      
    ]

    export default function Example() {
        return (
          
                        
    <div name="portfolio"   className=' bg-gradient-to-r from-gray-900  to-indigo-900 w-full text-white '>
            
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <div className='pb-8 mt-20'>
            <p className="text-4xl font-bold inline border-b-4 ml-6 border-indigo-500">Portfolio</p>
        </div>
    
          
            
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 px-10 py-10 mt-10 mb-10  bg-indigo-900 ring-4 ring-gray-900 rounded-xl'>
    
                            {portfolios.map((portfolios) => (
                    <a key={portfolios.id} href={portfolios.href} className="group">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl border-2 border-indigo-500 bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <img
                        src={portfolios.ImageSrc}
                        alt={portfolios.ImageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-30"/>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-indigo-400">{portfolios.name}</h3>
                    </a>
                    ))}
                
            </div>
    </div>
    </div>
    )
    }
    
