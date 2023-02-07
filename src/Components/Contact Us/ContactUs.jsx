import React from 'react'
import Newsletter from '../Homepage/Newsletter'
import CustomerRep from './CustomerRep'
import Head from './Head'
import Location from './Location'

export default function ContactUs() {
    return (
        <>
            <div className="contactus">
                <Head />
                <Location />
                <CustomerRep />
                <Newsletter />
            </div>
        </>
    )
}
