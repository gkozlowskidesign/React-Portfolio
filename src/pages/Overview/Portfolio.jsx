import React from 'react'


    const portfolios = [ 
        {
            id: 2,
            name: 'Website Development',
            href: '/project-documentation-liquorstore-website',
            ImageSrc: 'https://github.com/gkozlowskidesign/metaverseot/blob/main/src/assets/cindys.png?raw=true',
            ImageAlt: 'Portfolio Website'
       
        },
        { 
            id: 1,
            name: 'Website Development',
            href: '/project-documentation-software-website',
            ImageSrc: 'https://github.com/gkozlowskidesign/metaverseot/blob/main/src/assets/meta.png?raw=true',
            ImageAlt: 'Portfolio Website'
        
        },
        {
            id: 5,
            name: 'Website Development',
            href: '/project-documentation-portfolio-website',
            ImageSrc: 'https://github.com/gkozlowskidesign/React-Portfolio/blob/main/src/assets/Personal%20Website%20(REACT).png?raw=true',
            ImageAlt: 'Portfolio Website'

        },
        {
            id: 4,
            name: 'Application Mockup (UI)',
            href: '/project-documentation-dashboard-user-interface',
            ImageSrc: 'https://github.com/gkozlowskidesign/metaverseot/blob/main/src/assets/dash.png?raw=true',
            ImageAlt: 'Portfolio Website'
      
        },
    
        {
            id: 6,
            name: 'Website Development',
            href: '/project-documentation-restaurant-website',
            ImageSrc: 'https://github.com/gkozlowskidesign/React-Portfolio/blob/main/src/assets/Restaurant%20Website%20(HTML).png?raw=true',
            ImageAlt: 'Portfolio Website'
      
        },
        {
            id: 6,
            name: 'Application Design (UI)',
            href: '/project-documentation-software-user-interface',
            ImageSrc: 'https://github.com/gkozlowskidesign/React-Portfolio/blob/main/src/assets/Social%20SaaS%20UI.png?raw=true',
            ImageAlt: 'Portfolio Website'
      
        },
        {
            id: 6,
            name: 'Application Development',
            href: '/project-documentation-healthcare-web-application',
            ImageSrc: 'https://github.com/gkozlowskidesign/React-Portfolio/blob/main/src/assets/covid.png?raw=true',
            ImageAlt: 'Portfolio Website'
      
        },
        {
            id: 6,
            name: 'Website Development',
            href: '/project-documentation-portfolio-website',
            ImageSrc: 'https://github.com/gkozlowskidesign/React-Portfolio/blob/main/src/assets/port-1%20copy.png?raw=true',
            ImageAlt: 'Portfolio Website'
      
        },

        
      
    ]

    export default function Example() {
        return (
          
                        
    <div name="portfolio"   className=' bg-gradient-to-r from-gray-900  to-indigo-900 w-full text-white '>
            
    <div className="max-w-screen-lg p-14 mx-auto flex flex-col justify-center w-full">
        
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
    
