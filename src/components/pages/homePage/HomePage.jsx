import React from 'react'
import Header from '../../header/Header'
import Midbar from '../../midbar/MidBar'
import VideoBanner from '../../videoBanner/VideoBanner'
import HolidaySection from '../../holiday-section/HolidaySection'
import ChoosePopularFlight from '../../choosePopularFlight/ChoosePopularFlight'
import FlightBookingOffer from '../../flightBookingOffer/FlightBookingOffer'
import TravelReview from '../../travelReview/TravelReview'
import Footer from '../../footer/Footer'


function HomePage() {
  return (
    <div>
        <Header />
        <Midbar />
        <HolidaySection />
        <VideoBanner />
        <ChoosePopularFlight />
        <FlightBookingOffer />
        <TravelReview />
        <Footer />
    </div>
  )
}

export default HomePage