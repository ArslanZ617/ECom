import React, { createContext } from 'react'
import Home from '../../Components/Homepage/Home'
import Features from '../../Components//Homepage/Features'
import Products from '../../Components//Homepage/Products'
import RepairBanner from '../../Components//Homepage/RepairBanner'
import NewArrivals from '../../Components//Homepage/NewArrivals'
import Banners from '../../Components//Homepage/Banners'
import Newsletter from '../../Components//Homepage/Newsletter'

export default function HomePage() {

    return (
        <>
            <Home />
            <Features />
            <Products />
            <RepairBanner />
            <NewArrivals head = 'New Arrivals' />
            <Banners />
            <Newsletter />
        </>
    )
}
