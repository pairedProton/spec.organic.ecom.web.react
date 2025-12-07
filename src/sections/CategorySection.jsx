import React from 'react'
import { Link } from 'react-router-dom'

const CategorySection = () => {

    const categorySectionData = [
            {
                image: 'https://organicindia.com/cdn/shop/files/tea_2_1.png?v=1737615774',
                title: 'Teas & Infusion',
            },
            {
                image: 'https://organicindia.com/cdn/shop/files/supplement_1.png?v=1737615800',
                title: 'Herbal Supplement',
            },
            {
                image: 'https://organicindia.com/cdn/shop/files/website_bottons_b27ea7b5-99a4-4d65-8749-f39b79fc3c92.png?v=1744792967',
                title: 'Packaged Food',
            },
            {
                image: 'https://organicindia.com/cdn/shop/files/oil-n-ghee_1.png?v=1737615847',
                title: 'Personal Care',
            },
            {
                image: 'https://organicindia.com/cdn/shop/files/healthfood_1.png?v=1737615889',
                title: 'Detox Program',
            },
            {
                image: 'https://organicindia.com/cdn/shop/files/kure.png?v=1737616073',
                title: 'Gifting',
            },

            {
                image: 'https://organicindia.com/cdn/shop/files/healthfood_1.png?v=1737615889',
                title: 'Detox Program',
            },
            {
                image: 'https://organicindia.com/cdn/shop/files/kure.png?v=1737616073',
                title: 'Gifting',
            },
        
    ]

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