import React from 'react'
import image from '../../Images/main.png'

export default function Home() {
    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="row">
                        <div className="col- col-md-6 content">
                            <h4>Trade-in-offer</h4>
                            <h2>Super value deals</h2>
                            <h1>On all products</h1>
                            <p>Save more with coupons up to 70% off!</p>
                            <button>Shop Now</button>
                        </div>

                        <div className="col- col-md-6 imgBox">
                            <img src={image} alt="" />
                        </div>

                    </div>
                </div>
               
                 </section>
        </>
    )
}
