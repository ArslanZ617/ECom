import React, { useState } from 'react'
import { arrivalImages } from '../Data'


export default function Table() {

    let [count, setCount] = useState(1);

    const change = (e) => {
        setCount(e.target.value);
    }

    return (
        <>
            <div className="tableCart">
                <div className="container">

                    <table class="table table-borderless text-center">
                        <thead>
                            <tr className='header'>
                                <th scope="col">REMOVE</th>
                                <th scope="col">IMAGE</th>
                                <th scope="col">PRODUCT</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">SUBTOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arrivalImages.map(e =>
                                    <tr className='tableBody'>
                                        <th scope="row"><i className='mdi mdi-close-circle-outline' /></th>
                                        <td><img src={e.image} alt="" width='70px' /></td>
                                        <td className='title'>{e.title}</td>
                                        <td>${e.price}</td>
                                        <td>
                                            <input type="number" onChange={change} value={count} min='1' max='10' />
                                        </td>
                                        <td>${e.price * count}</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
