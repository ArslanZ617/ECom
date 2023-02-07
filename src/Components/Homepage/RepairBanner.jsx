import React from 'react'
import banner from '../../Images/img/banner/b2.jpg'

export default function RepairBanner() {
    return (
        <>
            <section className="repairBanner">

                <div className="bgImage">
                    <img src={banner} alt="" />

                    <div className="content">
                        <h4>Repair Services</h4>
                        <h1>Up to <span>70% Off</span> - All T-Shirts & Accessories</h1>
                        <button>Explore More</button>
                    </div>
                </div>

            </section>
        </>
    )
}
