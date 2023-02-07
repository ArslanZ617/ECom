import React from 'react'
import { aboutImgs } from '../Images'
import HeroSec from '../Shop/HeroSec'

export default function Head() {
  return (
    <>
        <HeroSec 
            head = "#let's_talk"
            tagline = 'LEAVE A MESSAGE. We love to hear from you!'
            image = {aboutImgs[6]}
        />
    </>
  )
}
