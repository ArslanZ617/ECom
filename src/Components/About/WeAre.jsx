import React from 'react'
import { aboutImgs } from '../Images'

export default function WeAre() {
    return (
        <section className='WeAre'>
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <div className="imgBox">
                            <img src={aboutImgs[5]} alt="" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="content">
                            <h1>Who We Are?</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum veritatis totam, atque ut repellendus quo! Beatae dolore ex aliquid magni temporibus eius, voluptatum adipisci impedit vel mollitia sunt nesciunt natus quisquam soluta laboriosam accusamus odit delectus! Pariatur ipsa corrupti a, consectetur sunt exercitationem architecto, officiis dignissimos cumque temporibus earum.</p>
                            <p className='links'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo error illo, sequi vitae possimus veritatis!</p>
                            <marquee behavior="scroll" direction="left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex officiis cumque earum ipsum hic commodi illum accusantium repellendus suscipit?</marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
