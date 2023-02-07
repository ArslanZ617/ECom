import React from 'react'
import DownloadApp from './DownloadApp'
import Head from './Head'
import WeAre from './WeAre'
import Features from '../Homepage/Features'
import Newsletter from '../Homepage/Newsletter'

export default function About() {
    return (
        <>
            <div className="about">
                <Head />
                <WeAre />
                <DownloadApp />
                <Features />
                <Newsletter />
            </div>
        </>
    )
}
