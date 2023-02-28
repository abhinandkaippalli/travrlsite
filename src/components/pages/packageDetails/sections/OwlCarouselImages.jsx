import React from 'react'
import OwlCarousel from 'react-owl-carousel'

function OwlCarouselImages() {
  return (
    <OwlCarousel
    className="owl-theme related-images"
    loop
    autoplay
    margin={18}
    nav={false}
    dots={true}
    smartSpeed={1000}
    responsive={{
        0: {
            items: 1,
        },
        500: {
            items: 2,
        },
    }}
>
    <div className="item">
        <img src="/images/img24.png" alt="" />
    </div>
    <div className="item">
        <img src="/images/img25.png" alt="" />
    </div>
    <div className="item">
        <img src="/images/img24.png" alt="" />
    </div>
    <div className="item">
        <img src="/images/img25.png" alt="" />
    </div>
    <div className="item">
        <img src="/images/img24.png" alt="" />
    </div>
    <div className="item">
        <img src="/images/img25.png" alt="" />
    </div>
</OwlCarousel>
  )
}

export default OwlCarouselImages