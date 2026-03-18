import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { BestSellingData } from "../data/products";

const ComboOffers = () => {
  const products = BestSellingData.map((product, index) => ({
    id: index + 1,
    title: product.title,
    sellingPrice: product.sellingPrice,
    cost: product.cost,
    imageURL: product.imageURL,
  }));

  return (
    <div className="w-full h-auto">
      <div className="mx-auto container w-full py-10 px-10">
        <h2 className="text-3xl  mb-8 font-[Montserrat]">Combo Offers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComboOffers;
