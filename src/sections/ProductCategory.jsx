import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const ProductCategory = ({ productArray = [], categoryTitle = "" }) => {
  const productCategoryData = productArray;

  return (
    <div className="container mx-auto w-full h-auto py-12 px-10 flex flex-col items-center justify-center">
      <h3 className="text-center text-2xl font-semibold text-black mb-4">
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
          <div className=" aaa flex items-center justify-center w-full ">
            {productCategoryData.map((product, index) => (
              <SwiperSlide key={index} className="h-auto">
                <Link to={'/product'} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  {/* Product Image */}
                  <div className="w-full aspect-square bg-gradient-to-b from-green-50 to-amber-50 flex items-center justify-center p-4">
                    <img
                      src={product.imageURL}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col p-4 grow">
                    {/* Product Title */}
                    <h4 className="text-base font-semibold text-green-900 mb-2 line-clamp-2 min-h-12">
                      {product.title}
                    </h4>

                    {/* Price Section */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-semibold text-gray-900">
                        ₹ {product.sellingPrice}
                      </span>
                      {product.cost > product.sellingPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹ {product.cost}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded transition-colors duration-200 mt-auto">
                      Add to Cart
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCategory;
