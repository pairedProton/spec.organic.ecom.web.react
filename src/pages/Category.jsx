import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productImages, bannerImages } from '../assets/images';


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

  const Category1Data = [
    {
      title: "Organic Amla Powder",
      cost: 299,
      sellingPrice: 230,
      imageURL: productImages.amlapowder,
    },
    {
      title: "Combo Ghee & Jaggery",
      cost: 959,
      sellingPrice: 817,
      imageURL: productImages.ghee,
    },
    {
      title: "Combo Honey, Stevia & Jaggery",
      cost: 440,
      sellingPrice: 433,
      imageURL: productImages.honey,
    },
    {
      title: "Immunity Capsules",
      cost: 285,
      sellingPrice: 267,
      imageURL: productImages.immunity,
    },
    {
      title: "Tulsi Mulethi Green Tea",
      cost: 260,
      sellingPrice: 260,
      imageURL: productImages.tulsigreentea,
    },
    {
      title: "Tulsi Mulethi Green Tea",
      cost: 260,
      sellingPrice: 260,
      imageURL: productImages.tulsitea,
    },
    {
      title: "Quinoa",
      cost: 260,
      sellingPrice: 260,
      imageURL: productImages.quinoa,
    },
    {
      title: "Triphla",
      cost: 260,
      sellingPrice: 260,
      imageURL: productImages.triphla,
    },
  ];

  const BestSellingData = [
    {
      title: "Tulsi Honey Green Tea",
      cost: 260,
      sellingPrice: 260,
      imageURL: productImages.tulsihoney,
    },
    {
      title: "Tulsi Tea",
      cost: 260,
      sellingPrice: 260,
      imageURL: productImages.tulsitea,
    },
    {
      title: "Turmeric Immunity",
      cost: 260,
      sellingPrice: 260,
      imageURL: productImages.turmericimmun,
    },
    {
      title: "Uptan",
      cost: 260,
      sellingPrice: 260,
      imageURL: productImages.uptan,
    },
    {
      title: "Cleanseshake",
      cost: 260,
      sellingPrice: 260,
      imageURL: productImages.cleanseshake,
    },
  ];

  // Combine both arrays and remove duplicates based on imageURL
  const allProducts = [...Category1Data, ...BestSellingData];
  const seenImages = new Set();
  const uniqueProducts = allProducts.filter((product) => {
    if (seenImages.has(product.imageURL)) {
      return false;
    }
    seenImages.add(product.imageURL);
    return true;
  });

  // Map to the expected format and name it categoryProducts
  const categoryProducts = uniqueProducts.map((product, index) => ({
    id: index + 1,
    title: product.title,
    sellingPrice: product.sellingPrice,
    cost: product.cost,
    imageURL: product.imageURL,
  }));

  
  return (
    <div className='w-full h-auto' >
      <div className="catBannerSec relative w-full h-120 bg-amber-300 ">
        <div className="absolute top-0 left-0 w-full h-full">
          <img  className='w-full h-full object-center object-cover' src={bannerImages.gift} alt="" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categoryProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Category