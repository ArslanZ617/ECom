import React from 'react'
import { aboutImgs } from '../Images'
import HeroSec from '../Shop/HeroSec'

export default function Head() {
  return (
    <>
        <HeroSec 
            head = '#knowus'
            tagline = 'Explore more About our Products'
            image = {aboutImgs[6]}
        />
    </>
  )
}
