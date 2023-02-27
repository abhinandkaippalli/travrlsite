import React from 'react'
import OwlCarousel from 'react-owl-carousel';

function OwlCarouselTwo() {
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
                        <img src={'/images/img1.png'} alt="" />
                        <span>Thailand</span>
                    </a>
                    <a href="#" className="cat-btn item">
                        <img src={'images/MachuPicchu-Peru.jpg'} alt="" />
                        <span>Peru</span>
                    </a>
                    <a href="#" className="cat-btn item">
                        <img src={'images/Paris.jpg'} alt="" />
                        <span>Paris</span>
                    </a>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default OwlCarouselTwo