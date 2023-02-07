import React, { useState } from 'react'
import { cartImgs } from '../Data'
import Products from '../Homepage/Products';

export default function Prodetails() {

    let [count, setCount] = useState(0);
    let [imageSrc, setImageSrc] = useState(cartImgs[0]);


    function funcc(pas) {
        setImageSrc(pas)
    }

    const incre = (e) => {
        e.preventDefault();
        setCount(count + 1);
    }

    const decre = (e) => {
        e.preventDefault();
        setCount(count - 1);
    }

    return (
        <>
            <section className="proDetails">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="imageSec">

                                <div className="row bigImg">
                                    <div className="col mb-1">
                                        <img src={imageSrc} alt="" />
                                    </div>
                                </div>

                                <div className="row smallImgs">
                                    {
                                        cartImgs.map(e =>
                                            <div className="col">
                                                <img src={e} alt="" onClick={() => { funcc(e) }} />
                                            </div>

                                        )
                                    }

                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 ms-md-4">
                            <div className="content">

                                <h6>Home / T-Shirt</h6>
                                <h4>Men's Fashion T Shirt</h4>
                                <h2>$139.00</h2>

                                <div className="selection">
                                    <select className='selectPanel p-2 rounded-1'>
                                        <option>Select Size</option>
                                        <option>X Small</option>
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                        <option>X Large</option>
                                    </select>
                                </div>

                                <div className="cart">

                                    <form action="">
                                        <div className="cart">
                                            <button className='button' onClick={decre} disabled={count == 0 ? true : false}>-</button>
                                            <input type="text" value={count} />
                                            <button className='button' onClick={incre}>+</button>
                                        </div>

                                        <input type="submit" disabled={count == 0 ? true : false} value="Add To Cart" />

                                    </form>

                                    <div className="details">
                                        <h3>Product Details</h3>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea sunt doloribus nisi, totam quia alias delectus ex ullam provident praesentium optio repellat dolores commodi molestias ut itaque consequatur, qui omnis voluptate sit quas reiciendis accusantium. Numquam assumenda consectetur modi reprehenderit vel, molestias cumque eum quidem, adipisci iste nemo repellat dolor?</p>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>

            <Products />

        </>
    )
}
