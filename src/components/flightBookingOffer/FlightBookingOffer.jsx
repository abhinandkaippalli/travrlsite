import React from 'react'

function FlightBookingOffer() {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-12 hd-wraper">
                    <strong>Choose Your</strong>
                    <h4>Best Flight Booking Offers</h4>
                    <p>When you book with us, you know you're booking with the best in the business</p>
                </div>
                <div className="col-12">
                    <ul className="offer-info-wrp">
                        <li>
                            <img src={"/images/cashback-icon.svg"} alt="..." />
                            <div className="offer-info">
                                <strong>Get 8% Cashback</strong>
                                <span>on Flights with Travelsite</span>
                            </div>
                        </li>
                        <li>
                            <img src={"/images/discount-icon.svg"} alt="..." />
                            <div className="offer-info">
                                <strong>Flat 12% Off on</strong>
                                <span>Flights via Mobiwik</span>
                            </div>
                        </li>
                        <li>
                            <img src={"/images/travel-icon.svg"} alt="..." />
                            <div className="offer-info">
                                <strong>International</strong>
                                <span>Travel Guidlines</span>
                            </div>
                        </li>
                        <li>
                            <img src={"/images/voucher-icon.svg"} alt="..." />
                            <div className="offer-info">
                                <strong>Book a flight</strong>
                                <span>Get valuable vouchers</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FlightBookingOffer