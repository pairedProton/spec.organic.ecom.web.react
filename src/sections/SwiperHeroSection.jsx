import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { bannerImages } from '../assets/images'

const SwiperHeroSection = () => {

    const heroSec1SwiperSlides = [
        {
            image: bannerImages.products,
        },
        {
            image: bannerImages.immunity,
        },
        {
            image: bannerImages.gift,
        },
    ]

  return (
    <div className='w-full h-auto'>
        <style>{`
            .swiper-pagination {
                position: absolute;
                bottom: 20px !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                width: auto !important;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            loop={true}
            className="w-full h-auto"
        >
            {heroSec1SwiperSlides.map((slide, index) => (
                <SwiperSlide key={index} className="w-full flex justify-center items-center">
                    <div className="w-full h-auto relative">
                        <img 
                            src={slide.image} 
                            alt={`Hero slide ${index + 1}`}
                            className="w-full h-full object-contain object-center"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default SwiperHeroSection
