import React from 'react'
import { footLinks } from '../Data'
import Common from './Common'

export default function Column2() {
    return (
        <>
        {
            footLinks.map(e=>
                <Common {...e} />
                )
        }
        </>
    )
}
