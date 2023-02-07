import React from 'react'
import myVideo from '../../Images/img/about/1.mp4'


export default function DownloadApp() {
    return (
        <section className='downloadApp'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Download our <a href='#'>App</a></h1>
                        <div className="videoBox">
                            <video src={myVideo} loop autoPlay muted />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
