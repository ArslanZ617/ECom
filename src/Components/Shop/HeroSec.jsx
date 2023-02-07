import React from 'react'

export default function HeroSec(props) {
  
  let {head, tagline, image} = props;

  return (
    <>
      <section className='heroSec'>
        
        <div className="image">
          <img src={image} alt="" />

          <div className="content">
            <h1>{head}</h1>
            <p>{tagline}</p>
          </div>
        </div>
      </section>
    </>
  )
}
