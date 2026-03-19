import { BiChevronDown } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoImages, productImages } from "../assets/images";
import { searchProducts } from "../api/homeApi";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const { isLoggedIn, user, openAuthModal, logout } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const debounceRef = useRef(null);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Optional: Close on mouse leave, or remove this if you want it to stay open
    setIsDropdownOpen(false);
  };

  const categories = [
    {
      title: "Teas & Coffees",
      items: ["Green Tea", "Wellness Tea", "Infusion", "Coffee"],
    },
    {
      title: "Herbal Supplement",
      items: ["Herbal Powders", "Herbal capsules"],
    },
    {
      title: "Packaged Food",
      items: ["Dal & Pulses", "Health food", "Oil & Ghee", "Salt & Spices"],
    },
    {
      title: "Personal Care",
      items: ["Face Care", "Accessories"],
    },
    {
      title: "Detox Program",
      items: ["Detox"],
    },
    {
      title: "Gifting",
      items: ["Gifting"],
    },
  ];

  // Debounced API search
  useEffect(() => {
    const query = searchText.trim();
    if (query.length === 0) {
      setSearchResults([]);
      setSearchLoading(false);
      return;
    }

    setSearchLoading(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await searchProducts(query);
        if (res.status) {
          setSearchResults(res.data);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
      } finally {
        setSearchLoading(false);
      }
    }, 400);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchText]);

  const fallbackImage = productImages.amlapowder;

  return (
    <div className=" top-0 left-0 right-0 z-50 w-full h-26 flex justify-between items-center px-4 lg:px-12 shadow-xl relative ">
      {/* Mobile: left menu icon */}
      <button
        className="lg:hidden w-10 h-10 grid place-items-center text-xl  "
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open menu"
      >
        <span className="w-5 h-[2px] bg-black block relative">
          <span className="w-5 h-[2px] bg-black block absolute -top-2 left-0"></span>
          <span className="w-5 h-[2px] bg-black block absolute top-2 left-0"></span>
        </span>
      </button>

      {/* logo section  */}
      <Link to={"/"} className="w-20 aspect-square  -ml-30 lg:ml-0">
        <img
          className="w-full h-full object-center object-contain"
          src={logoImages.lightlogo}
          alt=""
        />
      </Link>

      {/* category section (desktop) */}
      <div className="navCatSec hidden lg:flex gap-6  font-[Montserrat] opacity-80">
        <div
          ref={dropdownRef}
          className="shopByCat flex justify-center items-center gap-1 cursor-pointer relative"
          onClick={toggleDropdown}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          Shop By Category{" "}
          <span className="text-lg">
            <BiChevronDown />
          </span>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-6 z-50 min-w-[800px]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="grid grid-cols-6 gap-6 font-[Open Sans] opacity-100! ">
                {categories.map((category, index) => (
                  <div key={index} className="flex flex-col">
                    <h3 className="font-semibold text-black mb-3 text-sm h-10">
                      {category.title}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {category.items.map((item, itemIndex) => (
                        <Link
                          to={"/category"}
                          key={itemIndex}
                          className="text-sm text-gray-700 hover:text-green-600 cursor-pointer transition-colors font-normal "
                        >
                          {item}
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <Link to={"/deal-of-the-day"} className="deal">
          Deal Of the Day
        </Link>
        <Link to={"/combo-offers"} className="combo">
          Combo Offers
        </Link>
        <Link to={"/track-order"} className="Track">
          Track Order
        </Link>
      </div>

      {/* user section  */}
      <div className="userNavSec flex gap-5 text-lg font-semibold relative">
        <div className="search relative" ref={searchRef}>
          <button
            type="button"
            aria-label="Toggle search"
            onClick={() => setIsSearchOpen(prev => !prev)}
            className="cursor-pointer"
          >
            <BsSearch />
          </button>

          {isSearchOpen && (
            <div className="absolute top-full right-0 mt-3 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-3">
              <input
                type="text"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-green-600"
                autoFocus
              />

              <div className="max-h-72 overflow-y-auto mt-3">
                {searchText.trim().length === 0 ? (
                  <p className="text-sm text-gray-500 px-2 py-1">
                    Start typing to see products.
                  </p>
                ) : searchLoading ? (
                  <div className="flex items-center justify-center py-4">
                    <div className="w-6 h-6 border-3 border-green-700 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : searchResults.length > 0 ? (
                  searchResults.map(product => (
                    <Link
                      to={`/product/${product.product_id}`}
                      key={product.variant_id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchText("");
                      }}
                      className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-gray-50"
                    >
                      <img
                        src={
                          product.image && product.image.trim() !== ""
                            ? product.image
                            : fallbackImage
                        }
                        alt={product.name}
                        className="w-10 h-10 object-contain rounded"
                      />
                      <div className="text-sm leading-tight">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-green-700 font-semibold">
                          ₹ {product.sale_price}
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 px-2 py-1">
                    No products found.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => {
            if (isLoggedIn) {
              navigate("/user");
            } else {
              openAuthModal();
            }
          }}
          className="User text-gray-800 hover:text-emerald-700 transition-colors cursor-pointer relative"
          title={isLoggedIn ? user?.name : "Login / Register"}
        >
          <AiOutlineUser />
          {isLoggedIn && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
          )}
        </button>
        <div className="wishlist">
          <AiOutlineHeart />
        </div>
        <Link to="/cart" className="cart relative">
          <BsCart />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 bg-green-700 text-white text-[11px] leading-5 text-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 w-72 bg-white z-50 shadow-xl">
            <div className="px-4 py-3 border-b flex items-center justify-between">
              <div className="font-semibold">Menu</div>
              <button
                className="text-xl"
                aria-label="Close menu"
                onClick={() => setIsMobileOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="px-2 py-2 text-sm">
              {/* Shop By Category expandable */}
              <button
                className="w-full flex items-center justify-between px-2 py-3 hover:bg-gray-50 rounded"
                onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
              >
                <span className="font-semibold">Shop By Category</span>
                <span className="text-lg">{isMobileShopOpen ? "▾" : "▸"}</span>
              </button>
              {isMobileShopOpen && (
                <div className="pl-3">
                  {categories.map(category => (
                    <div key={category.title} className="py-2">
                      <div className="text-gray-700 text-xs uppercase tracking-wide mb-2">
                        {category.title}
                      </div>
                      <div className="flex flex-col gap-2">
                        {category.items.map(item => (
                          <Link
                            key={item}
                            to={"/category"}
                            className="px-2 py-1 hover:text-green-700"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Link
                to={"/deal-of-the-day"}
                className="block px-2 py-3 hover:bg-gray-50 rounded font-semibold"
                onClick={() => setIsMobileOpen(false)}
              >
                Deal Of The Day
              </Link>
              <Link
                to={"/"}
                className="block px-2 py-3 hover:bg-gray-50 rounded font-semibold"
                onClick={() => setIsMobileOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to={"/combo-offers"}
                className="block px-2 py-3 hover:bg-gray-50 rounded font-semibold"
                onClick={() => setIsMobileOpen(false)}
              >
                Combo Offer
              </Link>
              <Link
                to={"/track-order"}
                className="block px-2 py-3 hover:bg-gray-50 rounded font-semibold"
                onClick={() => setIsMobileOpen(false)}
              >
                Track Order
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
