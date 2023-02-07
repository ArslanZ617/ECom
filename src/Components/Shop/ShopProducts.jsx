import React from 'react'
import ReactPaginate from 'react-paginate'
import { productImages } from '../Data'
import Common from '../Homepage/Common'

export default function ShopProducts() {

    const handle = (e) => {
        console.log(e);
    }

    return (
    <>
    <section className="shopPro">

        <Common
            images = {productImages}
        />
        
        <ReactPaginate 
            previousLabel = {<i  className='mdi mdi-arrow-left' />}
            pageCount = {2}
            nextLabel = {<i  className='mdi mdi-arrow-right' />}
            onPageChange = {handle}
            containerClassName = {'pagination m-0'}
            pageClassName = {'page-item'}
            previousClassName = {'page-link'}
            nextClassName = {'page-link'}
            pageLinkClassName = {'page-link num'}
            activeClassName = {'active'}
        />

        {/*
        <div className="pagination">
            <button>1</button>
            <button>2</button>
            <button className='mdi mdi-arrow-right'/>
        </div>
  */}

    </section>
    </>
  )
}
