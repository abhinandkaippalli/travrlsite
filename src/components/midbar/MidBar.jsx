import React, { useEffect, useRef } from 'react'
import FlightsSearch from './FlightsSearch'
import { Carousel } from 'bootstrap';
// import homeBanner1 from '/images/homeBanner1.jpg'


function MidBar() {

    const carouselRef = useRef(null);

    useEffect(() => {
        const carouselInstance = new Carousel(carouselRef.current, {
            interval: 500,
            pause: false,
        });

        return () => carouselInstance.dispose();
    }, []);

    return (
        <div>
            <section className="midbar-wrapper">
                <div className="midbar-carousel carousel slide carousel-fade d-none d-md-block"
                    data-ride="carousel"
                    ref={carouselRef}
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={'/images/home-banner1.jpg'}
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Let's go new</h2>
                                <h3>Explore and travel.</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={'/images/home-banner2.jpg'} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Let's go new</h2>
                                <h3>Explore and travel.</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={'/images/home-banner3.jpg'}
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Let's go new</h2>
                                <h3>Explore and travel.</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Flight Search */}
                <FlightsSearch />

            </section>
        </div>
    )
}

export default MidBar