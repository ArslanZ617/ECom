import React from 'react'
import { features } from '../Data'

export default function Features() {
    return (
        <>
            <section className="features">
                <div className="container">
                    <div className="row featureImgs gy-3">

                        {
                            features.map(e =>
                                <div className="col-md-2 boxes">
                                    <div className="box">
                                        <img src={e.image} alt="" />
                                        <h6 style={e.myStyle}>{e.title}</h6>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>
        </>
    )
}
