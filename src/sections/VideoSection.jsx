import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

// Import videos
import gheeVideo from '../assets/videos/ghee.mp4'
import morungaVideo from '../assets/videos/morunga.mp4'
import quinoaVideo from '../assets/videos/quinoa.mp4'
import tulsiteaVideo from '../assets/videos/tulsitea.mp4'
import uptanVideo from '../assets/videos/uptan.mp4'

const VideoSection = () => {
  // Create array of 10 videos by repeating the 5 available videos
  const videos = [
    gheeVideo,
    morungaVideo,
    quinoaVideo,
    tulsiteaVideo,
    uptanVideo,
    gheeVideo,
    morungaVideo,
    quinoaVideo,
    tulsiteaVideo,
    uptanVideo,
  ]

  return (
    <div className='w-full h-auto py-10 px-4 bg-[#f3f1e5]'>
      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="w-full aspect-[3.5/6] rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default VideoSection