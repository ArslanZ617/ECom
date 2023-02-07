import React from 'react'
import { payImgs } from '../Images'

export default function Column4(props) {
    return (

        <>
            <div className='col- col-md-4 app'>

                    <h6>Install App</h6>
                    <p>From App Store or Google Play</p>
                    <div className="storeImg">
                        <img src={payImgs[0]} alt="" />
                        <img src={payImgs[2]} alt="" />
                    </div>

                    <p>Secured Payment Gateways</p>
                    <div className="payImg">
                        <img src={payImgs[1]} alt="" />
                    </div>
                </div>
        </>
    )
}
