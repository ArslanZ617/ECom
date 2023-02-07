import React from 'react'
import { contacts } from '../Data'
import ContactUs from './ContactUs'

export default function Location() {
    return (
        <>
            <section className="location">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <p>GET IN TOUCH</p>
                            <h2>Visit one of our agency location or contact us today</h2>
                            <h6>Head Office</h6>
                            <div className="contacts">
                                {
                                    contacts.map(e =>
                                        <p class={"mdi mdi-" + e.icon}>  {' ' + e.text}</p>
                                    )}
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="map">
                            <iframe width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=%20Faisalabad+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>                            
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
