import React from 'react'
import { callactions, textactions } from '../Data'
import BannersData from './BannersData'

export default function Banners() {
    return (
        <>

            <div className="banners">
                <div className="container">
                    <div className="row call2Action gy-3">
                        {
                            callactions.map(e =>
                                <BannersData {...e} col='col- col-md-6' />
                            )
                        }
                    </div>

                    <div className="row textAction gy-3">
                        {
                            textactions.map(e =>
                                <BannersData {...e} col='col- col-md-4' />
                            )
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
