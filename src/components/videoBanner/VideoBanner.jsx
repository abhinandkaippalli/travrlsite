import React from 'react'

function VideoBanner() {
    return (
        <div>
            <section className="video-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 hd-wraper white-txt">
                            <strong>Go & Discover</strong>
                            <h4>Breathtaking Cities</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor.
                                Aenean massa. Cum sociis the</p>
                        </div>
                        <div className="col-12 video-wrapper">
                            <div className="video-container" id="video-container">
                                <video id="video" preload="metadata"
                                    poster="//cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/poster.jpg">
                                    <source src={"images/video-home.mp4"} type="video/mp4" />
                                </video>

                                <div className="play-button-wrapper">
                                    <div title="Play video" className="play-gif" id="circle-play-b">
                                        {/* <!-- SVG Play Button --> */}
                                        <svg width="23" height="25" viewBox="0 0 23 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21.097 14.4351L3.42452 24.6892C1.92473 25.5585 0 24.5059 0 22.7533V2.2451C0 0.495342 1.92195 -0.560066 3.42452 0.312034L21.097 10.5662C21.4382 10.7609 21.7218 11.0424 21.9191 11.3822C22.1163 11.7219 22.2202 12.1078 22.2202 12.5006C22.2202 12.8934 22.1163 13.2793 21.9191 13.619C21.7218 13.9588 21.4382 14.2403 21.097 14.4351Z"
                                                fill="black" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VideoBanner