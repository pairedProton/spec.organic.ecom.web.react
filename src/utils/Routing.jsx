import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import TrackOrder from "../pages/TrackOrder";
import DealOfTheDay from "../pages/DealOfTheDay";
import ComboOffers from "../pages/ComboOffers";
import UserProfile from "../pages/UserProfile";

const Routing = () => {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="/product/:id" element={<Product />}></Route>
      <Route path="/category" element={<Category />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/track-order" element={<TrackOrder />}></Route>
      <Route path="/deal-of-the-day" element={<DealOfTheDay />}></Route>
      <Route path="/combo-offers" element={<ComboOffers />}></Route>
      <Route path="/user" element={<UserProfile />}></Route>
    </Routes>
  );
};

export default Routing;
