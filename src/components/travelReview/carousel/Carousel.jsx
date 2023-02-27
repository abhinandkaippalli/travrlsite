import React from 'react'
import OwlCarousel from 'react-owl-carousel'

function Carousel() {
  return (
    <OwlCarousel className="owl-carousel travel-reviews-carousel owl-theme owl-loaded"
        loop
        autoPlay
        margin={13}
        nav={false}
        dots={true}
        smartSpeed={1000}
        responsive={{
            0: { items: 1 },
            800: { items: 2 },
            1200: { items: 3 }
        }}
        >
            <div className="owl-stage-outer">
                <div className="owl-stage">
                    <div className="owl-item">
                        <div className="review-item row">
                            <div className="col-md-3">
                                <img src={"/images/lady-img1.png"} alt="..." />
                            </div>
                            <div className="review-info col-md-9">
                                <h5>Dubai</h5>
                                <ul>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                </ul>
                                <div className="txt-cntnt">
                                    Dubai, 'the land of Gold' is one of the most cosmopolitan cities in the world.
                                </div>
                                <strong>Ema Cooper</strong>
                            </div>
                        </div>
                    </div>
                    <div className="owl-item">
                        <div className="review-item row">
                            <div className="col-md-3">
                                <img src={"/images/lady-img2.png"} alt="..." />
                            </div>
                            <div className="review-info col-md-9">
                                <h5>Hollend Canals</h5>
                                <ul>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                </ul>
                                <div className="txt-cntnt">
                                    Holland is famous for its canals. Admire the unique structure of Dutch cities.
                                    Go for a boat tour ....
                                </div>
                                <strong>Roger Brooks</strong>
                            </div>
                        </div>
                    </div>
                    <div className="owl-item">
                        <div className="review-item row">
                            <div className="col-md-3">
                                <img src={"/images/man-img1.png"} alt="..." />
                            </div>
                            <div className="review-info col-md-9">
                                <h5>Taipei</h5>
                                <ul>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                </ul>
                                <div className="txt-cntnt">
                                    Taipei is the economic, political, educational and cultural center of Taiwan and
                                    one of the ...
                                </div>
                                <strong>James Fisher</strong>
                            </div>
                        </div>
                    </div>
                    <div className="owl-item">
                        <div className="review-item row">
                            <div className="col-md-3">
                                <img src={"/images/lady-img1.png"} alt="..." />
                            </div>
                            <div className="review-info col-md-9">
                                <h5>Dubai</h5>
                                <ul>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                </ul>
                                <div className="txt-cntnt">
                                    Dubai, 'the land of Gold' is one of the most cosmopolitan cities in the world.
                                </div>
                                <strong>Ema Cooper</strong>
                            </div>
                        </div>
                    </div>
                    <div className="owl-item">
                        <div className="review-item row">
                            <div className="col-md-3">
                                <img src={"/images/lady-img2.png"} alt="..." />
                            </div>
                            <div className="review-info col-md-9">
                                <h5>Hollend Canals</h5>
                                <ul>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                </ul>
                                <div className="txt-cntnt">
                                    Holland is famous for its canals. Admire the unique structure of Dutch cities.
                                    Go for a boat tour ....
                                </div>
                                <strong>Roger Brooks</strong>
                            </div>
                        </div>
                    </div>
                    <div className="owl-item">
                        <div className="review-item row">
                            <div className="col-md-3">
                                <img src={"/images/man-img1.png"} alt="..." />
                            </div>
                            <div className="review-info col-md-9">
                                <h5>Taipei</h5>
                                <ul>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                    <li><span className="star-rate"></span></li>
                                </ul>
                                <div className="txt-cntnt">
                                    Taipei is the economic, political, educational and cultural center of Taiwan and
                                    one of the ...
                                </div>
                                <strong>James Fisher</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
  )
}

export default Carousel