import React from 'react'
import { aboutImgs } from '../Images'
import HeroSec from '../Shop/HeroSec'

export default function Head() {
  return (
    <>
        <HeroSec
            head = "#cart"
            tagline = 'Add your coupon code & SAVE upto 70%!'
            image = {aboutImgs[6]}
        />
    </>
  )
}
