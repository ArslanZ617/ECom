import React from 'react'
import Newsletter from '../Homepage/Newsletter'
import Common from '../Homepage/Common'
import { productImages } from '../Data'
import Head from './Head'

export default function Shop() {
    return (
        <>
            <Head />
            <Common
                images={productImages}
            />
            <Newsletter />
        </>
    )
}
