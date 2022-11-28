import e from 'express'
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

            <script>   (document).ready(function(){
        ("ul#posts li a").onclick(function(e){
            e.preventDefault();

            ("#blog").attr("src", (this).attr("href"));
        })
    })</script>
           
        <ul id="posts">
            <li><a id="NFT" href="https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/9StXr96qlubzk57TmUcAxv6L9E7PHj_T3vlGytGs_4k">NFT</a></li>
            <li><a id="KUCOIN" href="https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/e3ekBjU5NnKr087koz4oaFMnKi3JQO0MTrsNw9c1tRc">KUCOIN</a></li>
            <li><a id="DEFI" href="https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/89q_BcgSPYyYStmMj-q_f8m1yT_wj1Grpd27KeUVs6c">DEFI</a></li>
        </ul>

        <iframe id="blog" src="https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/9StXr96qlubzk57TmUcAxv6L9E7PHj_T3vlGytGs_4k" frameborder="0"></iframe>
            
        </div>    
          
        </div>
    </div>    
    </div>
  )
}

export default About
        
