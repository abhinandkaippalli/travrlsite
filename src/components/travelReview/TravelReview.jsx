import React from 'react'
import Carousel from './carousel/Carousel'

function TravelReview() {
    return (
        <section className="travel-reviews">
            <div className="container">
                <div className="row">
                    <div className="col-12 hd-wraper white-txt">
                        <strong>Read The Top</strong>
                        <h4>Travel Reviews</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor.
                            Aenean massa. Cum sociis the</p>
                    </div>
                </div>
            </div>
            <div className="review-slider-wrapper">

                {/* Carousel */}
                <Carousel />

            </div>
        </section>
    )
}

export default TravelReview