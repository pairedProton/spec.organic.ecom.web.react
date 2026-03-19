import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { getProductDetails } from "../api/homeApi";
import { productImages } from "../assets/images";

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { isLoggedIn, openAuthModal } = useAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const fallbackImage = productImages.amlapowder;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductDetails(id);
        if (res.status) {
          setProduct(res.data);
          // Auto-select first variant
          if (res.data.variants && res.data.variants.length > 0) {
            setSelectedVariant(res.data.variants[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () =>
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const getVariantImage = variant => {
    if (variant?.image && variant.image.trim() !== "") return variant.image;
    return fallbackImage;
  };

  const getVariantImages = variant => {
    if (variant?.images && variant.images.length > 0) return variant.images;
    return [fallbackImage];
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      openAuthModal();
      return;
    }
    if (!product || !selectedVariant) return;
    addToCart(
      {
        id: selectedVariant.variant_id,
        title: product.product_name,
        price: parseFloat(selectedVariant.sale_price),
        imageURL: getVariantImage(selectedVariant),
      },
      quantity,
    );
  };

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      openAuthModal();
      return;
    }
    handleAddToCart();
  };

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );
  }

  const mainImage = getVariantImage(selectedVariant);
  const thumbImages = getVariantImages(selectedVariant);
  const savings = selectedVariant
    ? (
        parseFloat(selectedVariant.price) -
        parseFloat(selectedVariant.sale_price)
      ).toFixed(2)
    : 0;

  return (
    <div className="w-full ">
      <div className="container mx-auto py-8  px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Gallery */}
          <div>
            <div className=" rounded-md w-full lg:w-[70%] aspect-5/6 overflow-hidden grid place-items-center">
              <img
                src={mainImage}
                alt={product.product_name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-4 flex gap-4 items-center overflow-x-auto">
              {thumbImages.map((src, idx) => (
                <div
                  key={idx}
                  className="w-24 h-24 rounded-md shrink-0 overflow-hidden grid place-items-center cursor-pointer border border-gray-200 hover:border-green-500 transition-colors"
                >
                  <img
                    src={src}
                    alt={`thumb-${idx}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div>
            <h1 className="text-2xl font-semibold">{product.product_name}</h1>

            {/* Description */}
            {product.description && (
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
            )}

            {/* Variant Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-6">
                <h3 className="font-medium mb-3 text-gray-800">
                  Select Pack Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map(variant => {
                    const isSelected =
                      selectedVariant?.variant_id === variant.variant_id;
                    const variantSaving = (
                      parseFloat(variant.price) - parseFloat(variant.sale_price)
                    ).toFixed(2);

                    return (
                      <button
                        key={variant.variant_id}
                        onClick={() => {
                          setSelectedVariant(variant);
                          setQuantity(1);
                        }}
                        className={`relative flex flex-col items-center px-5 py-3 rounded-lg border-2 transition-all duration-200 cursor-pointer min-w-[120px]
                          ${
                            isSelected
                              ? "border-green-600 bg-green-600 text-white shadow-md"
                              : "border-gray-200 bg-white text-gray-800 hover:border-green-400"
                          }`}
                      >
                        {/* Variant Name */}
                        <span
                          className={`text-sm font-semibold ${isSelected ? "text-white" : "text-gray-900"}`}
                        >
                          {variant.variant_name}
                        </span>

                        {/* Price */}
                        <div className="mt-1 flex items-center gap-1.5">
                          <span
                            className={`text-base font-bold ${isSelected ? "text-white" : "text-gray-900"}`}
                          >
                            ₹{parseFloat(variant.sale_price).toFixed(0)}
                          </span>
                          {parseFloat(variant.price) >
                            parseFloat(variant.sale_price) && (
                            <span
                              className={`text-xs line-through ${isSelected ? "text-green-100" : "text-gray-400"}`}
                            >
                              ₹{parseFloat(variant.price).toFixed(0)}
                            </span>
                          )}
                        </div>

                        {/* Savings Badge */}
                        {parseFloat(variantSaving) > 0 && (
                          <span
                            className={`mt-1 text-xs font-medium px-2 py-0.5 rounded-full
                            ${
                              isSelected
                                ? "bg-green-700 text-green-100"
                                : "bg-green-50 text-green-700"
                            }`}
                          >
                            Save ₹{parseFloat(variantSaving).toFixed(0)}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Selected Variant Price */}
            {selectedVariant && (
              <div className="mt-6 flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  ₹ {parseFloat(selectedVariant.sale_price).toFixed(2)}
                </span>
                {parseFloat(selectedVariant.price) >
                  parseFloat(selectedVariant.sale_price) && (
                  <span className="text-lg text-gray-400 line-through">
                    ₹ {parseFloat(selectedVariant.price).toFixed(2)}
                  </span>
                )}
                {parseFloat(savings) > 0 && (
                  <span className="text-sm font-medium text-green-700 bg-green-50 px-2 py-1 rounded">
                    You save ₹{parseFloat(savings).toFixed(2)}
                  </span>
                )}
              </div>
            )}

            {/* Weight info */}
            {selectedVariant && selectedVariant.weight && (
              <div className="mt-2 text-sm text-gray-500">
                Weight: {selectedVariant.weight} kg
              </div>
            )}

            {/* Quantity + Buttons */}
            <div className="mt-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  type="button"
                  className="px-4 py-2 text-lg font-medium hover:bg-gray-100 rounded-l-lg transition-colors"
                  onClick={decrementQuantity}
                >
                  −
                </button>
                <span className="px-5 py-2 select-none font-medium border-x border-gray-300">
                  {quantity}
                </span>
                <button
                  type="button"
                  className="px-4 py-2 text-lg font-medium hover:bg-gray-100 rounded-r-lg transition-colors"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <button
                  type="button"
                  className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 font-medium transition-colors"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition-colors"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Description */}
        <div className="mt-12">
          {product.description && (
            <div className="p-6 rounded-b">
              <div className="font-medium mb-2 text-lg">Description</div>
              <p className="text-sm leading-6 text-gray-800">
                {product.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
