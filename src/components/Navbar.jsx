import { BiChevronDown } from "react-icons/bi"; 
import { BsCart } from "react-icons/bs"; 
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
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
      items: ["Green Tea", "Wellness Tea", "Infusion", "Coffee"]
    },
    {
      title: "Herbal Supplement",
      items: ["Herbal Powders", "Herbal capsules"]
    },
    {
      title: "Packaged Food",
      items: ["Dal & Pulses", "Health food", "Oil & Ghee", "Salt & Spices"]
    },
    {
      title: "Personal Care",
      items: ["Face Care", "Accessories"]
    },
    {
      title: "Detox Program",
      items: ["Detox"]
    },
    {
      title: "Gifting",
      items: ["Gifting"]
    }
  ];

  return (
    <div className=" fixed top-0 left-0 right-0 z-50 w-full h-26 flex justify-between items-center px-12 shadow-xl relative">
      {/* logo section  */}
      <figure className="w-24 aspect-square">
        <img
          className="w-full h-full object-center object-contain"
          src="https://organicindia.com/cdn/shop/files/logo-120x120_2.jpg?v=1743768667"
          alt=""
        />
      </figure>

      {/* category section  */}
      <div className="navCatSec flex gap-6 font-semibold">
        <div 
          ref={dropdownRef}
          className="shopByCat flex justify-center items-center gap-1 cursor-pointer relative"
          onClick={toggleDropdown}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          Shop By Category <span className="text-lg"><BiChevronDown /></span>
          
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div 
              className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-6 z-50 min-w-[800px]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="grid grid-cols-6 gap-6 ">
                {categories.map((category, index) => (
                  <div key={index} className="flex flex-col">
                    <h3 className="font-semibold text-black mb-3 text-sm h-10">
                      {category.title}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {category.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex} 
                          className="text-sm text-gray-700 hover:text-green-600 cursor-pointer transition-colors font-normal "
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="deal">Deal Of the Day</div>
        <div className="combo">Combo Offers</div>
        <div className="Track">Track Order</div>
      </div>

      {/* user section  */}
      <div className="userNavSec flex gap-5 text-lg font-semibold">
        <div className="search">
          <BsSearch />
        </div>
        <div className="User">
          <AiOutlineUser />
        </div>
        <div className="wishlist">
          <AiOutlineHeart />
        </div>
        <div className="cart">
         <BsCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
