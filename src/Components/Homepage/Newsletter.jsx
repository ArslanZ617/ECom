import React from 'react'
import pattern from '../../Images/img/banner/b14.png'

export default function Newsletter() {
    return (
        <>
            <div className="newsletter">
                <img src={pattern} className='pattern' alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col- col-md-6 content">
                            <h2>Sign Up For Newsletters</h2>
                            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                        </div>

                        <div className="col- col-md-6 form">
                            <input type="text" placeholder='Your email address' />
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
