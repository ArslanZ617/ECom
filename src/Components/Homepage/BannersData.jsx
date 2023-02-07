import React from 'react'

export default function BannersData(props) {

  let { tag, head, desc, btn, cls, image, col } = props;

  return (
    <>

      <div className={col}>
        <div className="imgBox">
          <img src={image} alt="" />
          <div className="content">
            <p>{tag}</p>
            <h2>{head}</h2>
            <h5>{desc}</h5>
            <button className={cls}>{btn}</button>
          </div>
        </div>
      </div>

    </>
  )
}
