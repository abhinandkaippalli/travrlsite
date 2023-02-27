import React from 'react'
import OwlCarousel from 'react-owl-carousel';

function ChoosePopularFlight() {
    return (
        <section className="choose-flight">
            <div className="container">
                <div className="row">
                    <div className="col-12 hd-wraper">
                        <strong>Choose Your</strong>
                        <h4>Popular Flight Near You</h4>
                        <p>Find deals on domestic and international flights</p>
                    </div>
                </div>
            </div>
            <div className="popular-flights">
                <ul className="nav nav-pills mb-4 justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link btn border-radius-100 active" id="pills-International-tab" data-toggle="pill"
                            href="#pills-International" role="tab" aria-controls="pills-International"
                            aria-selected="true">International</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn border-radius-100" id="pills-Domestic-tab" data-toggle="pill"
                            href="#pills-Domestic" role="tab" aria-controls="pills-Domestic"
                            aria-selected="false">Domestic</a>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-International" role="tabpanel"
                        aria-labelledby="pills-International-tab">
                        <OwlCarousel className="owl-carousel international-flights owl-theme owl-loaded"
                            loop
                            autoplay
                            margin={5}
                            nav={false}
                            dots={false}
                            smartSpeed={1000}
                            responsive={{
                                0: { items: 1 },
                                600: { items: 2 },
                                800: { items: 4 },
                                1200: { items: 6 }
                            }}
                        >
                            <div className="owl-stage-outer">
                                <div className="owl-stage">
                                    <a className="owl-item" href="#">
                                        <img src="images/img9.jpg" alt="" />
                                        <span className="flight-info">
                                            <strong>Cochin to London, UK</strong>
                                            <span>Sept 16 - Sept 23 · Round trip</span>
                                        </span>
                                    </a>
                                    <a className="owl-item" href="#">
                                        <img src="images/img10.jpg" alt="" />
                                        <span className="flight-info">
                                            <strong>Cochin to London, UK</strong>
                                            <span>Sept 16 - Sept 23 · Round trip</span>
                                        </span>
                                    </a>
                                    <a className="owl-item" href="#">
                                        <img src="images/img11.jpg" alt="" />
                                        <span className="flight-info">
                                            <strong>Cochin to London, UK</strong>
                                            <span>Sept 16 - Sept 23 · Round trip</span>
                                        </span>
                                    </a>
                                    <a className="owl-item" href="#">
                                        <img src="images/img12.jpg" alt="" />
                                        <span className="flight-info">
                                            <strong>Cochin to London, UK</strong>
                                            <span>Sept 16 - Sept 23 · Round trip</span>
                                        </span>
                                    </a>
                                    <a className="owl-item" href="#">
                                        <img src="images/img13.jpg" alt="" />
                                        <span className="flight-info">
                                            <strong>Cochin to London, UK</strong>
                                            <span>Sept 16 - Sept 23 · Round trip</span>
                                        </span>
                                    </a>
                                    <a className="owl-item" href="#">
                                        <img src="images/img14.jpg" alt="" />
                                        <span className="flight-info">
                                            <strong>Cochin to London, UK</strong>
                                            <span>Sept 16 - Sept 23 · Round trip</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="tab-pane fade" id="pills-Domestic" role="tabpanel" aria-labelledby="pills-Domestic-tab">
                        <OwlCarousel className="owl-carousel domestic-flights owl-theme owl-loaded"
                            loop
                            autoplay
                            margin={5}
                            nav={false}
                            dots={true}
                            smartSpeed={1000}
                            responsive={{
                                0: { items: 1 },
                                600: { items: 2 },
                                800: { items: 4 },
                                1200: { items: 6 }
                            }}
                        >
                            <div className="owl-stage-outer">
                                <div className="owl-stage">
                                    <a className="owl-item" href="#">
                                        <img src="images/img12.jpg" alt="" />
                                        <span className="flight-info">
                                            <strong>Cochin to Edinburgh, UK</strong>
                                            <span>Sept 16 - Sept 23 · Round trip</span>
                                        </span>
                                    </a>
                                    <a className="owl-item" href="#">
                                        <img src="images/img9.jpg" alt="" />
                                        <span className="flight-info">
                                            <strong>Cochin to London, UK</strong>
                                            <span>Sept 16 - Sept 23 · Round trip</span>
                                        </span>
                                    </a>
                                    <a className="owl-item" href="#">
                                        <img src="images/img14.jpg" alt="" />
                                        <span className="flight-info">
                                            <strong>Cochin to Edinburgh, UK</strong>
                                            <span>Sept 16 - Sept 23 · Round trip</span>
                                        </span>
                                    </a>
                                    <a className="owl-item" href="#">
                                        <img src="images/img11.jpg" alt="" />
                                        <span className="flight-info">
                                            <strong>Cochin to London, UK</strong>
                                            <span>Sept 16 - Sept 23 · Round trip</span>
                                        </span>
                                    </a>

                                    <a className="owl-item" href="#">
                                        <img src="images/img13.jpg" alt="" />
                                        <span className="flight-info">
                                            <strong>Cochin to London, UK</strong>
                                            <span>Sept 16 - Sept 23 · Round trip</span>
                                        </span>
                                    </a>

                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChoosePopularFlight