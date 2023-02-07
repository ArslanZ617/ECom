import React from 'react'
import logo from '../../Images/logo.png'
import { footIcons } from '../Data'

export default function Column1(props) {
    return (

        <>
            <div className='col- col-md-4 address'>

                <img src={logo} className='logo' alt="" />

                <h6>Contact</h6>
                <p><span>Address: </span>562 Wellingtom Road, Street 32, San Francisco</p>
                <p><span>Phone: </span>+01 2222 365 / (+91) 01 2345 6789</p>
                <p><span>Hours: </span>10:00 - 18:00. Mon - Sat</p>
                <h6>Follow Us</h6>
                <div className="icons">
{
    footIcons.map(e=>
            <i className={'fa-brands ' + e} />
    )
}
                </div>
            </div>
        </>
    )
}
