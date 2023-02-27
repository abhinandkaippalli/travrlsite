import React from 'react'
import OwlCarouselOne from './owlCarousels/OwlCarouselOne'
import OwlCarouselTwo from './owlCarousels/OwlCarouselTwo'

function HolidaySection() {
    return (
        <section className="holiday-section">
            <div className="container">
                <div className="row">


                    <div className="col-12 hd-wraper">
                        <strong>Choose Your</strong>
                        <h4>Perfect Holiday</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor.
                            Aenean massa. Cum sociis the</p>
                    </div>


                    <div className="col-12">
                        <div className="row">

                            {/* OwlCarouselOne */}
                            <OwlCarouselOne />

                            <div className="col-lg-3 col-md-4 bx-mb">
                                <div className="btn-wrp">
                                    <a href="#" className="package-btn">
                                        <img src={"images/img8.png"} alt="" />
                                        <span className="package-info">
                                            <strong className="packageName fs-16 fw-600">Museum of the <br /> Future</strong>
                                            <span className="priceInfo">
                                                <span className="fs-13 fw-400">From</span>
                                                <strong className="fs-13 fw-700"><span>₹</span> 3222.22</strong>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 bx-mb">
                                <div className="btn-wrp">
                                    <a href="#" className="package-btn">
                                        <img src={"images/img3.png"} alt="" />
                                        <span className="package-info">
                                            <strong className="packageName fs-16 fw-600">Museum of the <br /> Future</strong>
                                            <span className="priceInfo">
                                                <span className="fs-13 fw-400">From</span>
                                                <strong className="fs-13 fw-700"><span>₹</span> 3222.22</strong>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 bx-mb">
                                <div className="btn-wrp">
                                    <a href="#" className="package-btn">
                                        <img src={"images/img4.png"} alt="" />
                                        <span className="package-info">
                                            <strong className="packageName fs-16 fw-600">Museum of the <br /> Future</strong>
                                            <span className="priceInfo">
                                                <span className="fs-13 fw-400">From</span>
                                                <strong className="fs-13 fw-700"><span>₹</span> 3222.22</strong>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 bx-mb">
                                <div className="btn-wrp">
                                    <a href="#" className="package-btn">
                                        <img src={"images/img5.png"} alt="" />
                                        <span className="package-info">
                                            <strong className="packageName fs-16 fw-600">Museum of the <br /> Future</strong>
                                            <span className="priceInfo">
                                                <span className="fs-13 fw-400">From</span>
                                                <strong className="fs-13 fw-700"><span>₹</span> 3222.22</strong>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 bx-mb">
                                <div className="btn-wrp">
                                    <a href="#" className="package-btn">
                                        <img src={"images/img6.png"} alt="" />
                                        <span className="package-info">
                                            <strong className="packageName fs-16 fw-600">Museum of the <br /> Future</strong>
                                            <span className="priceInfo">
                                                <span className="fs-13 fw-400">From</span>
                                                <strong className="fs-13 fw-700"><span>₹</span> 3222.22</strong>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 bx-mb">
                                <div className="btn-wrp">
                                    <a href="#" className="package-btn">
                                        <img src={"images/img7.png"} alt="" />
                                        <span className="package-info">
                                            <strong className="packageName fs-16 fw-600">Museum of the <br /> Future</strong>
                                            <span className="priceInfo">
                                                <span className="fs-13 fw-400">From</span>
                                                <strong className="fs-13 fw-700"><span>₹</span> 3222.22</strong>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* OwlCarouselTwo */}
                            <OwlCarouselTwo />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HolidaySection