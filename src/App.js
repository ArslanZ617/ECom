import React, { createContext } from 'react'
import Navbar from './Components/Navbar'
import './CSS/style.css'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/Homepage/HomePage'
import Shop from './Components/Shop/Shop'
import Prodetails from './Components/Shop/Prodetails'
import BlogSec from './Components/Blog/BlogSec'
import About from './Components/About/About'
import ContactUs from './Components/Contact Us/ContactUs'
import Cart from './Components/Cart/Cart'
export let ArrivHead = createContext();

export default function App() {
  return (
    <>
      <Navbar />

<Routes>

  <Route exact path='/home' element={<HomePage />}/>
  <Route exact path='/shop' element={<Shop /> }/>
  <Route exact path='/add-to-cart' element={<Prodetails /> }/>
  <Route exact path='/blog' element={<BlogSec /> }/>
  <Route exact path='/about' element={<About /> }/>
  <Route exact path='/contact' element={<ContactUs /> }/>
  <Route exact path='/cart' element={<Cart /> }/>

</Routes>

      <Footer />
    </>
  )
}
