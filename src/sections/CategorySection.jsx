import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';

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
    <div className='container mx-auto w-full h-auto py-20 px-10 relative group bg-[#f3f1e5] ' >
      {/* Navigation Buttons */}
      <button className="category-swiper-button-prev absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg text-green-700 hover:bg-green-50 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center">
        <FaChevronLeft size={20} />
      </button>
      <button className="category-swiper-button-next absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg text-green-700 hover:bg-green-50 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center">
        <FaChevronRight size={20} />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation={{
          prevEl: '.category-swiper-button-prev',
          nextEl: '.category-swiper-button-next',
        }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
          1280: { slidesPerView: 6, spaceBetween: 50 },
        }}
        className='w-full py-4 px-2'
      >
        {categorySectionData.map((category, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center cursor-pointer '>
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
              <h3 className=' font-semibold text-md -mt-2  text-gray-800 text-center font-[Open Sans] '>
                {category.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CategorySection