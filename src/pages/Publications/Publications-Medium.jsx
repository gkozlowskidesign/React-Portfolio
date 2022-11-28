import React from 'react'


const products = [
    {
        id: 1,
        name: 'Different Types of DAOs',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/b6wqIbTqSnslQ5-B68HNvFeF4Wuyq7ydf-i9eYjMf8k',
        education: 'web3 concepts',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/4RHlYkRiqAAialaqES8mf.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 concepts',
    },
    {
        id: 2,
        name: 'Shiba Inu',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/iyCUUeL3RTiGCKMZcEfEBMxt-e29XK5DGQV5nW10-QA',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/7Nyhpwtju2NO8jdYmEkQg.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 3,
        name: 'Avalanche',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/G-uHsKfc2DlzvWv7ZLTS-EHSXWE78NldSf0IZLsFgc',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/QygaJvLXwbPipjU4FASyi.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 4,
        name: 'Binance',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/rsOwGNMy-pdVSHixgj3pVVjnOy0fYiJ5a5j_TUh9fcs',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/Of2Oq__4xrRX4ZjZBcGny.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',  },
      {
        id: 5,
        name: 'UniSwap',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/ESIcOPBevWOhmSxeK1TUnFYfic83Q17sDyZbyHjY-20',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/W-ivc8ZfqAcCTj-EnYQWy.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 6,
        name: 'Celsius',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/BQ_Wpe6ifJHtZsXAiFCAXoaxSpq57Dkr_HG7RZH2kOE',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/MRr8t9Xn87Stzue4OOL3p.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 7,
        name: 'Kusama',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/wBgBW-up5LM6UFCOPYyw2oPKUZ8_JPkQBm7h_QlyCYs',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/CmHFKvaDXzC_B1EdixS3R.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 8,
        name: 'Aave',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/5RhuWBifLxE8c4SqBKpvwSCJHAX21dzs2iRYe9BJAXo',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/08wnLlnaabu17j5nwLdTO.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 9,
        name: 'Kucoin',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/e3ekBjU5NnKr087koz4oaFMnKi3JQO0MTrsNw9c1tRc',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/jhEW9kY3ukKX4zR-fXQg1.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 10,
        name: 'Non-Fungible Tokens (NFTs)',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/9StXr96qlubzk57TmUcAxv6L9E7PHj_T3vlGytGs_4k',
        education: 'web3 concepts',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/w8ZcP23A9IAKFGrT-YN3s.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 concepts',
      },
      {
        id: 11,
        name: 'Blockchains and Sidechains',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/HOC6vNzdRfGirae3zuY6UDEgF1EWTi3vNumhB936kTs',
        education: 'web3 concepts',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/ei5i171VGpiaqZrLBjIHr.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 concepts',
      },
      {
        id: 12,
        name: 'Traditional Finance vs DeFi',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/89q_BcgSPYyYStmMj-q_f8m1yT_wj1Grpd27KeUVs6c',
        education: 'web3 concepts',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/5oRxqPQ-3f__rdIEkK7up.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 concepts',
      },
      {
        id: 13,
        name: 'Decentralized Exchange (DEX)',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/cSR-gZlxvuF2zQQDyniUwuG87qxmdsO3OUAgISOzOh0',
        education: 'web3 concepts',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/8h6e7v5ELwfAFcZHhc_rV.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 concepts',
      },
      {
        id: 14,
        name: 'Cryptocurrency Staking',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/PE8fXPoQlXkOOAOZJD-jEFCHW61hIcZTaVA0RmeYdSo',
        education: 'web3 concepts',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/7-o9GBtCw3gt6HBdgVbAS.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 concepts',
      },
      {
        id: 15,
        name: 'Initial Decentralized Exchange Offering',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/-SDtOQSCLANLfvXyYYgQxqrAbi4-O_bfLycR091hr5Y',
        education: 'web3 concepts',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/eSCvjEvr5r4un7HBr_bqY.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 concepts',
      },
      {
        id: 16,
        name: 'Ethereum Merge',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/8GuoH9LcOIU6t8e-gPpdEe2MTFEv6H8DDGdDuyI76DE',
        education: 'web3 concepts',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/vOBIEyYULRWw_lzygSuM0.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 concepts',
      },
      {
        id: 17,
        name: 'Different Types of DAOs',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/b6wqIbTqSnslQ5-B68HNvFeF4Wuyq7ydf-i9eYjMf8k',
        education: 'web3 concepts',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/4RHlYkRiqAAialaqES8mf.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 concepts',
      },
    // More products...
  ]
  

  export default function Example() {
    return (
      
                    
        <div name="about" className='w-full h-100  bg-gradient-to-r from-gray-900  to-indigo-900'>

    

        

  



<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">


<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
{products.map((product) => (
<a key={product.id} href={product.href} className="group">
  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
    <img
      src={product.imageSrc}
      alt={product.imageAlt}
      className="h-full w-full object-cover object-center group-hover:opacity-75"
    />
  </div>
  <h3 className="mt-4 text-lg font-bold text-indigo-400">{product.name}</h3>
  <p className="mt-1 text-sm font-medium text-white">{product.education}</p>
</a>
))}
  </div>
</div>
</div>




)
}
     
        
