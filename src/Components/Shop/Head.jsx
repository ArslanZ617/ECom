import React from 'react'
import HeroSec from '../Shop/HeroSec'
import bgImg from '../../Images/img/banner/b1.jpg'

export default function Head() {
    return (
        <>
            <HeroSec
                head='#stayhome'
                tagline='Save more with coupons & up to 70% off!'
                image={bgImg} />
        </>
    )
}
