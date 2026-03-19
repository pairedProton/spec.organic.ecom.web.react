import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getPopularProducts } from "../api/homeApi";

const DealOfTheDay = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getPopularProducts();
        if (res.status) {
          setProducts(res.data);
        }
      } catch (error) {
        console.error("Error fetching popular products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full h-auto">
      <div className="mx-auto container w-full py-10 px-10">
        <h2 className="text-3xl mb-8 font-[Montserrat]">Deal Of The Day</h2>

        {loading ? (
          <div className="w-full h-64 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(p => (
              <ProductCard key={p.variant_id || p.product_id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-10 text-lg">
            No deals available right now.
          </div>
        )}
      </div>
    </div>
  );
};

export default DealOfTheDay;
