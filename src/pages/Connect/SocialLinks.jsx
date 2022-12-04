import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail} from 'react-icons/hi';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={25} />
                </>
            ),
            href: 'https://www.linkedin.com/in/gary-kozlowski-825053138/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={25} />
                </>
            ),
            href: 'https://github.com/gkozlowskidesign',
    
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={25} />
                </>
            ),
            href: 'mailto:gkozlowskibusiness@outlook.com',
        
        },
    ]

  return ( 
  <div className="hidden lg:flex flex-col top-[50%] left-0 fixed">
    <ul>

        {links.map(({id, child, href, style, download}) => (
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-2 ml-[-85px] hover:ml-[-4px] hover:rounded-md duration-300 bg-gray-500" + style}>
                
                <a href={href} 
                    className='flex justify-between items-center w-full text-white'
                    download={download}
                    target='_blank'
                    rel="noreferrer"
                   
                    
                >
                    {child}
          
                </a>
             </li>

        ))};

  
    </ul>
  </div>
  );
};

export default SocialLinks
