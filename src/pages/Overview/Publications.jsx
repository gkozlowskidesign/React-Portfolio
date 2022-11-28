import React from 'react'



const products = [
    {
      id: 1,
      name: 'NFT Web3 Concept',
      href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/9StXr96qlubzk57TmUcAxv6L9E7PHj_T3vlGytGs_4k',
      imageSrc: 'https://mirror-media.imgix.net/publication-images/w8ZcP23A9IAKFGrT-YN3s.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
      imageAlt: 'web3 concepts',
    },
    {
        id: 9,
        name: 'Kucoin Cryptocurrency',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/e3ekBjU5NnKr087koz4oaFMnKi3JQO0MTrsNw9c1tRc',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/jhEW9kY3ukKX4zR-fXQg1.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
    {
      id: 3,
      name: 'DeFi Web3 Concept',
      href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/89q_BcgSPYyYStmMj-q_f8m1yT_wj1Grpd27KeUVs6c',
      imageSrc: 'https://mirror-media.imgix.net/publication-images/5oRxqPQ-3f__rdIEkK7up.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
      imageAlt: 'web3 concepts',
    },
    // More products...
  ]
  

  export default function Example() {
    return (
      
                    
<div name="portfolio"   className=' bg-gradient-to-r from-gray-900  to-indigo-900 w-full text-white'>
        
<div className="max-w-screen-lg p-14 mx-auto flex flex-col justify-center w-full">
    
    <div className='pb-8 mt-20'>
        <p className="text-4xl font-bold inline border-b-4 ml-6 border-indigo-500">Publications</p>
    </div>

      
        
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 sm:px-0 mb-40'>

                        {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl border-2 border-gray-900 bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-30"
                    />
                </div>
                <h3 className="mt-4 text-lg font-bold text-indigo-400">{product.name}</h3>
                </a>
                ))}
            
        </div>
</div>
</div>
)
}


     
        
