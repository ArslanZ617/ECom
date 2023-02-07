import React from 'react'

export default function Common(props) {

    let { head, list } = props;

    return (
        <>
            <div className='col- col-md-2 links'>
                <h6>{head}</h6>
                <ul>
                    {
                        list.map(e =>
                            <li>
                                <a href='#'>{e}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}
