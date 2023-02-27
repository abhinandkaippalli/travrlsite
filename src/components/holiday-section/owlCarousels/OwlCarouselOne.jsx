import React from 'react'
import OwlCarousel from 'react-owl-carousel';

function OwlCarouselOne() {
    return (
        <div className="col-lg-3 col-md-4 bx-mb">
            <div className="btn-wrp">
                <OwlCarousel
                    className="package-cat-slider owl-carousel owl-theme"
                    loop
                    autoplay
                    margin={0}
                    nav={false}
                    dots={false}
                    smartSpeed={500}
                    animateOut="fadeOut"
                    items={1}
                >
                    <a href="#" className="cat-btn item">
                        <img src={"/images/img8.png"} alt="" />
                        <span>Dubai</span>
                    </a>
                    <a href="#" className="cat-btn item">
                        <img src={"images/malaysia.jpg"} alt="" />
                        <span>Malaysia</span>
                    </a>
                    <a href="#" className="cat-btn item">
                        <img src={"images/Singapore.jpg"} alt="" />
                        <span>Singapore</span>
                    </a>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default OwlCarouselOne