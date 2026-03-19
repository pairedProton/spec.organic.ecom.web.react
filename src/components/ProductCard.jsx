import React from "react";
import { Link } from "react-router-dom";
import { productImages } from "../assets/images";

const ProductCard = ({ product }) => {
  // Use a fallback image (e.g., amlapowder) if the API doesn't provide one
  const imageUrl =
    product.image && product.image.trim() !== ""
      ? product.image
      : productImages.amlapowder;

  return (
    <Link
      to={`/product/${product.product_id}`}
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
    >
      {/* Product Image */}
      <div className="w-full aspect-square bg-linear-to-b from-green-50 to-amber-50 flex items-center justify-center p-4">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-contain rounded "
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col p-4 grow">
        {/* Product Title */}
        <h4 className="text-base font-semibold text-green-900 line-clamp-2 min-h-10 font-[Open Sans] ">
          {product.name}
        </h4>

        {/* Price Section */}
        <div className="flex items-center gap-2 mb-0 mt-auto">
          <span className="text-lg font-semibold text-gray-900">
            ₹ {product.sale_price}
          </span>
          {product.price > product.sale_price && (
            <span className="text-sm text-gray-500 line-through">
              ₹{product.price}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded transition-colors duration-200 mt-2">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
