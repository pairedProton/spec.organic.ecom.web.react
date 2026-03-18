import React, { useState } from 'react'
import { productImages } from '../assets/images';
import { useCart } from '../context/CartContext';
const Product = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: "140059",
    title: "Tulsi Green Tea Pomegranate Flavour",
    brand: "Organic India",
    imageMain:
      productImages.tulsigreentea,
    imageThumbs: [
      productImages.tulsigreentea,
      productImages.tulsigreentea,
    ],
    variant: "25 Infusion Bag",
    sku: "140059",
    price: 215,
    mrp: 215,
    usp: "INR 7.76 / Infusion bag",
    offers: [
      "Flat ₹900 off on Clean 7 Day Kit. T&C",
      "Get 15% Off on orders above ₹1499/- T&C"
    ],
    description:
      "Infused with fruity notes of pomegranate and sweet Hibiscus flowers, and the tangy flavour of Raspberries, this premium Green Tea with Tulsi is a delightful combination that will charm your tastebuds and brighten your day.",
    ingredients:
      "Green Tea, Rama Tulsi, Krishna Tulsi, Hibiscus, Vana Tulsi, Pomegranate Flower. Contains added natural flavours.",
    info: [
      { label: "Shelf Life", value: "30 Months" },
      { label: "Product Dimension", value: "6.8 x 7.8 x 14.9 cm" },
      { label: "Manufacturer", value: "ORGANIC INDIA Pvt. Ltd." },
      {
        label: "Manufacturer Address",
        value:
          "C-5/10, Agro Park, Phase II UPSIDC Industrial Area Kursi Road Barabanki-225302, Uttar Pradesh India"
      },
      { label: "Country Of Origin", value: "India" }
    ],
    faq: [
      {
        q: "Does this tea contain caffeine?",
        a: "Yes, Green tea (Camellia Sinensis) contains caffeine."
      },
      {
        q: "Are there any side effects of Tulsi Green Tea Pomegranate?",
        a: "No known harmful side effects of this tea; there are only benefits."
      },
      {
        q: "Can I add milk to the tea?",
        a: "We recommend drinking it without milk."
      }
    ]
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        imageURL: product.imageMain,
      },
      quantity
    );
  };

  return (
    <div className="w-full ">
      <div className="container mx-auto py-8  px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Gallery */}
          <div>
            <div className=" rounded-md w-full lg:w-[70%] aspect-5/6 overflow-hidden grid place-items-center">
              <img
                src={product.imageMain}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-4 flex gap-4 items-center overflow-x-auto">
              {product.imageThumbs.map((src, idx) => (
                <div
                  key={idx}
                  className="w-24 h-24  rounded-md shrink-0 overflow-hidden grid place-items-center cursor-pointer"
                >
                  <img src={src} alt={`thumb-${idx}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div>
            <h1 className="text-2xl font-semibold">{product.title}</h1>
            <div className="mt-2 text-sm">
              <span className="text-gray-600">Brand :</span>{" "}
              <span className="font-medium">{product.brand}</span>
            </div>

            <div className="mt-4">
              <h3 className="font-medium mb-2">Available Offers:</h3>
              <ul className="space-y-1 text-sm">
                {product.offers.map((offer) => (
                  <li key={offer} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">●</span>
                    <span>{offer}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <div className="text-sm text-gray-600 mb-1">Select Variant</div>
              <div className=" rounded-md p-3">
                <div className="text-sm">{product.variant}</div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div>SKU: <span className="font-medium">{product.sku}</span></div>
                  <div>MRP: ₹ {product.mrp.toFixed(2)}</div>
                  <div className="col-span-2">USP: {product.usp}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="text-2xl font-semibold">₹ {product.price}</div>
            </div>

            <div className="mt-6 flex  flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center  rounded">
                <button type="button" className="px-3 py-2" onClick={decrementQuantity}>-</button>
                <span className="px-4 select-none">{quantity}</span>
                <button type="button" className="px-3 py-2" onClick={incrementQuantity}>+</button>
              </div>
              <div className='flex flex-col md:flex-row gap-2' >
                
              <button
                type="button"
                className="px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
              <button type="button" className="px-6 py-3 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                BUY NOW
              </button>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Tabs */}
        <div className="mt-12">
          {/* <div className="flex gap-6 border-b">
            <button className="py-3 px-1 border-b-2 border-black -mb-px">Description</button>
            <button className="py-3 px-1 text-gray-500 hover:text-black">Ingredients</button>
            <button className="py-3 px-1 text-gray-500 hover:text-black">Product Information</button>
            <button className="py-3 px-1 text-gray-500 hover:text-black">FAQ</button>
            <button className="py-3 px-1 text-gray-500 hover:text-black">Reviews</button>
          </div> */}

          <div className="p-6  rounded-b">
          <div className="font-medium mb-2">Description</div>
            <p className="text-sm leading-6 text-gray-800">{product.description}</p>
          </div>

          <div className="p-6  rounded mt-6">
            <div className="font-medium mb-2">Ingredients</div>
            <p className="text-sm leading-6 text-gray-800">{product.ingredients}</p>
          </div>

          <div className="p-6 rounded mt-6">
            <div className="font-medium mb-3">Product Information</div>
            <ul className="text-sm space-y-2">
              {product.info.map((row) => (
                <li key={row.label}>
                  <span className="text-gray-600">{row.label} :</span> {row.value}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6  rounded mt-6">
            <div className="font-medium mb-3">FAQ</div>
            <ul className="space-y-4 text-sm">
              {product.faq.map((f, i) => (
                <li key={i}>
                  <div className="font-medium">{i + 1}. {f.q}</div>
                  <div className="text-gray-700">{f.a}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product
