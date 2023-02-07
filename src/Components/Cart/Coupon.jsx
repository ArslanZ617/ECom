import React from 'react'

export default function Coupon() {
    return (
        <>
            <div className="coupon">

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 apply">
                            <h4>Apply Coupon</h4>
                            <input type="text" placeholder='Enter Your Coupon' />
                            <button>Apply</button>
                        </div>

                        <div className="col-md-6 details">
                            <h4>Cart Totals</h4>
                            <table class="table table-bordered table-sm">
                                <thead>
                                    <tr>
                                        <td>Cart Subtotal</td>
                                        <td>$ 335</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>Free</td>
                                    </tr>

                                    <tr>
                                        <th>Total</th>
                                        <th>$ 335</th>
                                    </tr>

                                </tbody>
                            </table>

                            <button>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
