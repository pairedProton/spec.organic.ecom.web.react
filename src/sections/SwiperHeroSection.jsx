import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getBanners } from "../api/homeApi";

const SwiperHeroSection = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await getBanners();
        if (res.status) {
          setBanners(res.data);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[300px] bg-[#f3f1e5] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-auto bg-[#f3f1e5]  pb-10 ">
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
        {banners.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-full flex justify-center items-center"
          >
            <div className="w-full h-110 relative">
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
  );
};

export default SwiperHeroSection;
