import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import Stars from '../Stars'

export default function Common(props) {
    let { head, subhead, images } = props;


    return (
        <>
            <section className="products">
                <div className="container">

                    <div className="heading text-center">
                        <h1>{head}</h1>
                        <p>{subhead}</p>
                    </div>

                    <NavLink to='/add-to-cart' style={{ textDecoration: 'none' }}>

                        <div className="row gy-4">

                            {
                                images.map(e =>

                                    <div className="col- col-md-3 boxes">

                                        <div className="box">

                                            <div className="imgBox">
                                                <img src={e.image} alt="" />
                                            </div>

                                            <div className="content">
                                                <p>{e.company}</p>
                                                <h4 className="title">{e.title}</h4>

                                                <div className="stars">
                                                    <Stars count={e.rating} />
                                                </div>

                                                <div className="bottom">
                                                    <h4 className="price">{e.price}</h4>

                                                    <div className="cart">
                                                        <i className="mdi mdi-cart-outline" />
                                                    </div>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                )
                            }

                        </div>

                    </NavLink>

                </div>
            </section>
        </>
    )
}
