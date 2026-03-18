import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    cartCount,
    cartSubtotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const shipping = cartSubtotal > 999 || cartSubtotal === 0 ? 0 : 80;
  const total = cartSubtotal + shipping;

  return (
    <div className="w-full bg-[#f8f8f8] min-h-[70vh] py-8">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
            Shopping Cart ({cartCount} item{cartCount !== 1 ? "s" : ""})
          </h1>
          {cartItems.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="text-sm font-medium text-red-600 hover:text-red-700"
            >
              Clear cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-900">Your cart is empty</h2>
            <p className="text-gray-600 mt-2">
              Add products to your cart to see them here.
            </p>
            <Link
              to="/"
              className="inline-block mt-6 px-6 py-3 rounded-md bg-green-700 text-white hover:bg-green-800"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <section className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 p-4 lg:p-5"
                >
                  <div className="flex gap-4">
                    <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-md overflow-hidden bg-gray-50 shrink-0">
                      <img
                        src={item.imageURL}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                        <div>
                          <h3 className="text-base lg:text-lg font-medium text-gray-900">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">In stock</p>
                        </div>
                        <p className="text-lg font-semibold text-gray-900">
                          Rs. {item.price}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            className="px-3 py-1.5 text-lg"
                          >
                            -
                          </button>
                          <span className="px-4 text-sm font-medium">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            className="px-3 py-1.5 text-lg"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm font-medium text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>

                        <p className="text-sm text-gray-700">
                          Line total:{" "}
                          <span className="font-semibold">
                            Rs. {item.price * item.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <aside className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-6">
                <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">Rs. {cartSubtotal}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? "Free" : `Rs. ${shipping}`}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-base font-semibold text-gray-900">Total</span>
                    <span className="text-base font-semibold text-gray-900">Rs. {total}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-6 w-full py-3 rounded-md bg-emerald-900 text-white font-semibold hover:bg-emerald-800"
                >
                  Proceed to Checkout
                </button>

                <Link
                  to="/"
                  className="block text-center mt-3 text-sm text-green-700 hover:text-green-800"
                >
                  Continue Shopping
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
