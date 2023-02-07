import React from 'react'

export default function Stars(props) {
    return (
        <>
            {(() => {
                let rows = [];
                for (let i = 0; i < props.count; i++) {
                    rows.push(<i className='fa-sharp fa-solid fa-star' />)
                }
                return rows;
            })()}
        </>
    )
}
