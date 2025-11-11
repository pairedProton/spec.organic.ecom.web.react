import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Product from '../pages/Product'
import Cart from '../pages/Cart'

const Routing = () => {
  return (
    <Routes>
        <Route path='' element={<Home/>} ></Route>
        <Route path='/product' element={<Product/>} ></Route>
        <Route path='/category' element={<Category/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
    </Routes>
  )
}

export default Routing