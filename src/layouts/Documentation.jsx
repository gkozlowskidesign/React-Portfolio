import React from 'react'


    const portfolios = [ 
        {
            id: 2,
            name: 'Education',
            href: '/background/education',
            ImageSrc: 'https://github.com/gkozlowskidesign/metaverseot/blob/main/src/assets/meta.png?raw=true',
            ImageAlt: 'Portfolio Website'
       
        },
        { 
            id: 1,
            name: 'Experience',
            href: '/background/experience',
            ImageSrc: 'https://github.com/gkozlowskidesign/metaverseot/blob/main/src/assets/meta.png?raw=true',
            ImageAlt: 'Portfolio Website'
        
        },
        {
            id: 5,
            name: 'Freelance',
            href: '/background/freelance',
            ImageSrc: 'https://github.com/gkozlowskidesign/metaverseot/blob/main/src/assets/meta.png?raw=true',
            ImageAlt: 'Portfolio Website'

        },
        {
            id: 5,
            name: 'Freelance',
            href: '/background/freelance',
            ImageSrc: 'https://github.com/gkozlowskidesign/metaverseot/blob/main/src/assets/meta.png?raw=true',
            ImageAlt: 'Portfolio Website'

        },

        
      
    ]




const About = () => {


  return (
    <div>
            
                    

             
                    

 
                        <div class="flex flex-wrap bg-gray-900">
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4 mx-auto py-10 mt-10 mb-10  bg-indigo-900 ring-4 ring-gray-900 rounded-xl'>
                            
    
                            {portfolios.map((portfolios) => (
                        <a key={portfolios.id} href={portfolios.href} className="group">
                        <div className="aspect-w-1 aspect-h-1 w-4/6 mx-auto overflow-hidden rounded-xl border-2 border-indigo-500 xl:aspect-w-7 xl:aspect-h-8  bg-gray-900">
                        <img
                        src={portfolios.ImageSrc}
                        alt={portfolios.ImageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-30"/>
                          
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 px-10 py-10 mt-10 mb-10  bg-gray-900 ring-4 ring-gray-900 rounded-xl'>

                        <h3 className="mt-4 text-lg text-center bg-gray-900 font-bold mx-auto text-indigo-400">{portfolios.name}</h3>
                        </div>
                        </a>
                        ))}

                        </div>


                          
                        </div>
                        
                </div>
             

   
            
                

    
                 


  )
}



export default About