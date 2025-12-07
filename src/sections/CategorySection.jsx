import React from 'react'
import { Link } from 'react-router-dom'
// import teaHoney from '../assets/images/products/tulsihoney.png'
// import immunity from '../assets/images/products/immun.png'
// import ghee from '../assets/images/products/ghee.png'
// import Jaggery from '../assets/images/products/jaggery.png'
// import uptan from '../assets/images/products/uptan.png'
// import triphla from '../assets/images/products/triphla.png'
// import gift from '../assets/images/products/gift.png'
// import moringa from '../assets/images/products/moringa.png'

import { productImages } from '../assets/images'

const CategorySection = () => {

    const categorySectionData = [
      {
        image: productImages.tulsihoney,
        title: "Teas & Infusion",
      },

      {
        image: productImages.jaggery,
        title: "Packaged Food",
      },
      {
        image: productImages.cleanseshake,
        title: "Personal Care",
      },
      {
        image: productImages.tulsitea,
        title: "Detox Program",
      },
      {
        image: productImages.gift,
        title: "Gifting",
      },
      {
        image: productImages.ghee,
        title: "Oil and Ghee",
      },
      {
        image: productImages.moringa,
        title: "Trending Organic",
      },
      {
        image: productImages.immunity,
        title: "Herbal Supplement",
      },
    ];

  return (
    <div className='container mx-auto w-full h-auto py-12 px-10 ' >
      <div className='w-auto h-auto flex flex-wrap  items-center gap-10  justify-center' >
        {categorySectionData.map((category, index) => (
          <div key={index} className='flex flex-col items-center cursor-pointer '>
            {/* Circular Category Element */}
            <div className='relative w-full max-w-[250px] aspect-square rounded-full border border-gray-300 overflow-hidden mb-4'>
              {/* Two-tone background */}
              <div className='absolute inset-0'>
                {/* Top portion - light green */}
                <div className='absolute top-0 left-0 right-0 h-1/2 bg-green-50'></div>
                {/* Bottom portion - sandy brown */}
                <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-amber-50'></div>
              </div>
              {/* Image content */}
              <Link to={'/category'} className='relative w-full h-full flex items-center justify-center'>
                <img 
                  src={category.image} 
                  alt={category.title}
                  className='w-full h-full object-contain z-10 hover:scale-105 transition-all duration-300 '
                />
              </Link >
            </div>
            {/* Category Name */}
            <h3 className=' font-semibold text-xl text-gray-800 text-center'>
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategorySection