import React from 'react'
import Common from './Common'
import { productImages } from '../Data'

export default function Products() {
  return (
    
    <div>
      <Common 
        head = 'Featured Products'
        subhead = 'Summer Collection New Morden Design'
        images = {productImages}
      />
    </div>
    
  )
}
