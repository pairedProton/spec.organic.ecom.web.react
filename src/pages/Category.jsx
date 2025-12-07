import React from 'react'
import { Link } from 'react-router-dom';



const Category = () => {

  const categories = [
    {
      title: "Teas & Infusions",
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

  const products = Array.from({ length: 12 }).map((_, index) => ({
    id: index + 1,
    name: "Tulsi Green Tea Classic",
    price: 198,
    mrp: 245,
    image:
      "https://organicindia.com/cdn/shop/files/Original_558X600_crop_center.jpg?v=1749103148"
  }));

  
  return (
    <div className='w-full h-auto' >
      <div className="catBannerSec relative w-full h-70 bg-amber-300 ">
        <div className="absolute top-0 left-0 w-full h-full">
          <img  className='w-full h-full object-center object-cover' src="https://organicindia.com/cdn/shop/files/Diwali-gifts.jpg?v=1760505318" alt="" />
        </div>
      </div>

      <div className="catSec  mx-auto container w-full h-auto flex flex-col lg:flex-row gap-8 py-10 px-10 ">
        {/* Left: Categories */}
        <aside className="w-64 shrink-0">
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <div className=" rounded-md  h-100  overflow-scroll ">
            {categories.map((cat, idx) => (
              <div key={cat.title} className={`${idx !== 0 ? "" : ""}`}>
                <div className="px-4 py-3 font-medium">{cat.title}</div>
                <ul className="px-4 pb-3 space-y-2 text-sm text-gray-700">
                  {cat.items.map((item) => (
                    <li key={item} className="hover:text-green-700 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Right: Product Grid */}
        <section className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 grid place-content-center  rounded hover:bg-gray-50">
                <span className="w-4 h-4 bg-gray-900 block" style={{ clipPath: "polygon(0 0, 40% 0, 40% 40%, 0 40%)" }}></span>
              </button>
              <button className="w-9 h-9 grid place-content-center  rounded hover:bg-gray-50">
                <span className="w-4 h-4 bg-gray-900 block" style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}></span>
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>Sort by</span>
              <select className="border rounded px-2 py-1">
                <option>Best Selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <Link to={'/product'} key={p.id} className="group">
                <div className="w-[80%] aspect-3/4 rounded-md overflow-hidden ">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h4 className="text-base">{p.name}</h4>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm font-semibold">₹ {p.price}</span>
                    <span className="text-xs line-through text-gray-400">₹ {p.mrp}</span>
                  </div>
                  <button className="mt-3 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 text-sm">
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Category