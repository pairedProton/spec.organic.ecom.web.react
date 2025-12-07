import React from "react";
import Navbar from "../components/Navbar";
import SwiperHeroSection from "../sections/SwiperHeroSection";
import CategorySection from "../sections/CategorySection";
import ProductCategory from "../sections/ProductCategory";
import ProductMeritSection from "../sections/ProductMeritSection";
import ReviewSection from "../sections/ReviewSection";
import VideoSection from "../sections/VideoSection";
import { bannerImages, productImages } from "../assets/images";

const Home = () => {
  const Category1Data = [
    {
      title: "Organic Amla Powder",
      cost: 299,
      sellingPrice: 230,
      imageURL:
        productImages.amlapowder,
    },
    {
      title: "Combo Ghee & Jaggery",
      cost: 959,
      sellingPrice: 817,
      imageURL:
        productImages.ghee,
    },
    {
      title: "Combo Honey, Stevia & Jaggery",
      cost: 440,
      sellingPrice: 433,
      imageURL:
        productImages.honey,
    },
    {
      title: "Immunity Capsules",
      cost: 285,
      sellingPrice: 267,
      imageURL:
        productImages.immunity,
    },
    {
      title: "Tulsi Mulethi Green Tea",
      cost: 260,
      sellingPrice: 260,
      imageURL:
        productImages.tulsigreentea,
    },
    {
      title: "Tulsi Mulethi Green Tea",
      cost: 260,
      sellingPrice: 260,
      imageURL:
        productImages.tulsitea,
    },
    {
      title: "Quinoa",
      cost: 260,
      sellingPrice: 260,
      imageURL:
        productImages.quinoa,
    },
    {
      title: "Triphla",
      cost: 260,
      sellingPrice: 260,
      imageURL:
        productImages.triphla,
    },
  ];

  const BestSellingData = [
    {
      title: "Tulsi Honey Green Tea",
      cost: 260,
      sellingPrice: 260,
      imageURL:
        productImages.tulsihoney,
    },

    {
      title: "Tulsi Tea",
      cost: 260,
      sellingPrice: 260,
      imageURL:
        productImages.tulsitea,
    },
    {
      title: "Turmeric Immunity",
      cost: 260,
      sellingPrice: 260,
      imageURL:
        productImages.turmericimmun,
    },
    {
      title: "Uptan",
      cost: 260,
      sellingPrice: 260,
      imageURL:
        productImages.uptan,
    },
    {
      title: "Cleanseshake",
      cost: 260,
      sellingPrice: 260,
      imageURL:
        productImages.cleanseshake,
    },
  ];

  const ProductMerits = [
    {
      ImageUrl:
        "https://organicindia.com/cdn/shop/files/613X630-tulsi-farm-image.png?v=1666268098",
      title: "GET THE ‘TULSI’ WELLNESS EDGE",
      desc: "",
      para: "Healthy Conscious Living includes conscious business practices to ensure our impact on our world and communities is a positive one. At the foundation of ORGANIC INDIA’s products, company, and sourcing is regenerative agriculture that not only sustains but replenishes the earth; fair trade practices that support and honour farmer partners with equitable wages, health care, and ongoing organic agricultural training; and a LEED Platinum certified production facility that is a marvel of top-tier sustainable design, construction, and operations. This all culminates in the creation of Organic, Non-GMO herbal teas and supplements that support the health of the population, the vibrancy of the planet, and the livelihood of communities in India.",
      sectionStyle: "lg:flex-row",
      btnColor: "bg-black",
    },
    {
      ImageUrl:
        "https://organicindia.com/cdn/shop/files/Section-613x630_diabetic_f426302b-2e4b-4e95-983d-71479a1ac0b5.png?v=1668598897",
      title: "HEALTHY CONSCIOUS LIVING",
      desc: "",
      para: "Healthy Conscious Living includes conscious business practices to ensure our impact on our world and communities is a positive one. At the foundation of ORGANIC INDIA’s products, company, and sourcing is regenerative agriculture that not only sustains but replenishes the earth; fair trade practices that support and honour farmer partners with equitable wages, health care, and ongoing organic agricultural training; and a LEED Platinum certified production facility that is a marvel of top-tier sustainable design, construction, and operations. This all culminates in the creation of Organic, Non-GMO herbal teas and supplements that support the health of the population, the vibrancy of the planet, and the livelihood of communities in India.",
      sectionStyle: "lg:flex-row-reverse",
      btnColor: "bg-orange-400",
    },
    {
      ImageUrl:
        "https://organicindia.com/cdn/shop/files/Section-613x630_diabetic_f426302b-2e4b-4e95-983d-71479a1ac0b5.png?v=1668598897",
      title: "Get set to beat Diabetes!",
      desc: "Lower your blood sugar the natural way.",
      para: "At ORGANIC INDIA we celebrate the healing power of Mother Nature to nourish and restore us to our best health. Explore our curated range of certified organic, whole herb supplements, teas, and infusions to help you control your blood sugar the natural way. Because let’s face it, nature knows best!",
      sectionStyle: "lg:flex-row",
      btnColor: "bg-black",
    },
  ];

  const reviewsData = [
    {
      imageUrl:
        "https://organicindia.com/cdn/shop/files/shradhya_88x88_crop_center.png?v=1667394204",
      product: "Tulsi Green Tea",
      review:
        "I have tried many different brands of green tea, but this Tulsi Green Tea has been my favorite since I came across it three years back. The taste is so much better and so much more natural. I noticed myself falling sick less often since I started drinking it and even my skin has started glowing.",
      name: "Shradhya Chakraborty",
      post: "Interior Designer",
    },
    {
      imageUrl:
        "https://organicindia.com/cdn/shop/files/lalit_88x88_crop_center.png?v=1667396537",
      product: "Honey",
      review:
        "It is hard to find sustainably sourced honey in India. So glad I found this brand. Their multifloral honey is collected straight from the forests of Himalaya without harming the environment. It tastes absolutely delicious, and I love the texture. Happy that I am doing my part to create a greener world.",
      name: "Lalit Yadav",
      post: "IT Manager",
    },
    {
      imageUrl:
        "https://organicindia.com/cdn/shop/files/lalit_88x88_crop_center.png?v=1667396537",
      product: "Apple Cider Vinegar",
      review:
        "I used to self-medicate for my stomach problems and was becoming over reliant on medicines. Ever since I started using Apple Cider Vinegar after my meals, I have seen my problems get better naturally. The taste is better than other ACVs I have tried in India, and you can see the mother enzymes through the glass bottle. I have been using Organic India products for almost a decade now. And when it comes to taste and authenticity, Organic India truly stands out.",
      name: "Pallavi Mishra",
      post: "Export House Owner",
    },
    {
      imageUrl:
        "https://organicindia.com/cdn/shop/files/lalit_88x88_crop_center.png?v=1667396537",
      product: "Quinoa",
      review:
        "I am 22-year-old, living in Gurgaon. I used to skip most of my meals as I did not like the oily, unhealthy food that I got here. But Organic India’s Quinoa changed my life. It is healthy, nutritious, and so easy to prepare! I can finally meet my calorie limits without skipping meals now.",
      name: "Srijita Chakravarti",
      post: "Media Journalist",
    },
    {
      imageUrl:
        "https://organicindia.com/cdn/shop/files/lalit_88x88_crop_center.png?v=1667396537",
      product: "Jaggery Powder",
      review:
        "My wife and I have been using Organic India Jaggery powder for the last three months. It has helped us control our sugar cravings and let us enjoy my wife’s special homemade treats the healthy way. The product is actually sweeter than sugar and has a little bit of an extra punch. We love the taste.",
      name: "Irfan",
      post: "Writer",
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col overflow-x-clip">
      
      <SwiperHeroSection></SwiperHeroSection>
      <CategorySection></CategorySection>

      <ProductCategory
        productArray={Category1Data}
        categoryTitle="Immunity Boosters"
      ></ProductCategory>
      <VideoSection></VideoSection>

      <ProductCategory
        productArray={BestSellingData}
        categoryTitle="Best Selling Products"
      ></ProductCategory>

      <ProductMeritSection {...ProductMerits[0]}></ProductMeritSection>
      <ProductMeritSection {...ProductMerits[1]}></ProductMeritSection>
      <ReviewSection  reviewsData={reviewsData} ></ReviewSection>
      <ProductMeritSection {...ProductMerits[2]}></ProductMeritSection>
    </div>
  );
};

export default Home;
