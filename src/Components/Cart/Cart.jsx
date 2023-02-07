import React from 'react'
import Coupon from './Coupon'
import Head from './Head'
import Table from './Table'

export default function Cart() {
    return (
        <>
        <div className="cart">
            <Head />
            <Table />
            <Coupon />
        </div>
        </>
    )
}
