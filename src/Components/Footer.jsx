import React from 'react'
import Column1 from './SubComp.jsx/Column1'
import Column2 from './SubComp.jsx/Column2'
import Column4 from './SubComp.jsx/Column4'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            
            <Column1 />
            <Column2 />
            <Column4 />
            
          </div>
        </div>
      </div>
    </>
  )
}
