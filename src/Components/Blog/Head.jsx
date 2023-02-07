import React from 'react'
import HeroSec from '../Shop/HeroSec'
import bgImg from '../../Images/img/banner/b19.jpg'

export default function Head() {
    return (
        <>
            <HeroSec
                head='#readmore'
                tagline='Read all case studies about our Products!'
                image={bgImg} />
        </>
    )
}
