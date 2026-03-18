import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductCategory = ({ productArray = [], categoryTitle = "" }) => {
  const productCategoryData = productArray;

  return (
    <div className="container mx-auto w-full h-auto py-12 px-10 flex flex-col items-center justify-center  bg-[#f3f1e5] ">
      <h3 className="text-center text-2xl  text-black mb-4 font-[Montserrat]">
        {categoryTitle}
      </h3>
      <div className="sec3CatContainer w-full h-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full "
        >
          <div className=" aaa flex items-center justify-center w-full bg-[#f3f1e5] ">
            {productCategoryData.map((product, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCategory;
