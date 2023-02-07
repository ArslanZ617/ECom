import React from 'react'
import Common from './Common'
import { arrivalImages} from '../Data'

export default function NewArrivals(props) {
  return (
    <>
       <Common 
        head = {props.head}
        subhead = 'Summer Collection New Morden Design'
        images = {arrivalImages}
      />
    </>
  )
}
