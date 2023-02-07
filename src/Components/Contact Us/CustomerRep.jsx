import React from 'react'
import { customerCare } from '../Data'
import Card from './Card'

export default function CustomerRep() {
    return (
        <>
            <section className="customerRep">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 form">
                            <p>Leave a message</p>
                            <h1>We love to hear from you</h1>

                            <form action="">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder='Your Name' />
                                </div>

                                <div class="mb-3">
                                    <input type="email" class="form-control" placeholder='E-mail' />
                                </div>

                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder='Subject' />
                                </div>

                                <div class="mb-3">
                                    <textarea type="text" class="form-control" rows={6} placeholder='Your Message' />
                                </div>

                                <button type="submit" class="btn btn-success">Submit</button>
                            </form>

                        </div>

                        <div className="col-md-4">
                            <Card>
                                {
                                    customerCare.map(e =>
                                        <>
                                            <div className="cards">
                                                <div className="image">
                                                    <img src={e.image} alt="" />
                                                </div>

                                                <div className="details">
                                                    <h5>{e.name}</h5>
                                                    <p>{e.desig}</p>
                                                    <p>{e.phone}</p>
                                                    <p>{e.email}</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </Card>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
