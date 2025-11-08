import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Product from '../pages/Product'


const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/product' element={<Product/>} />
    </Routes>
  )
}

export default Routing