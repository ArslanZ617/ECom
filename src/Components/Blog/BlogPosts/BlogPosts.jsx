import React from 'react'
import ReactPaginate from 'react-paginate'
import { blog } from '../../Data'
import { blogimages } from '../../Images'

export default function BlogPosts() {
    return (
        <>
            <section className="blogPosts">
                <div className="container">
                    {
                        blog.map(e =>

                            <div className="row">
                                <div className="col-md-5">
                                    <div className="image">
                                        <h1>{e.date}</h1>
                                        <img src={e.image} alt="" />
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <div className="content">
                                        <h4>{e.title}</h4>
                                        <p>{e.desc}</p>
                                        <div className="contin">
                                            <h6>Continue Reading </h6>
                                            <hr />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        )}
                </div>

                <ReactPaginate
                    previousLabel={<i className='mdi mdi-arrow-left' />}
                    pageCount={2}
                    nextLabel={<i className='mdi mdi-arrow-right' />}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    previousClassName={'page-link'}
                    nextClassName={'page-link'}
                    pageLinkClassName={'page-link num'}
                    activeClassName={'active'}
                />


            </section>
        </>
    )
}
