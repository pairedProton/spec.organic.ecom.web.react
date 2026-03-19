import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ProductCard from "../components/ProductCard";
import { getProductList } from "../api/homeApi";

const ProductCategory = ({ categoryId, categoryTitle = "" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductList(categoryId);
        if (res.status) {
          setProducts(res.data);
        }
      } catch (error) {
        console.error(
          `Error fetching products for category ${categoryId}:`,
          error,
        );
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="w-full h-[200px] bg-[#f3f1e5] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

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
            {products.map(product => (
              <SwiperSlide key={product.variant_id} className="h-auto">
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
