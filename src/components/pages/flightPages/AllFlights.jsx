import React from 'react'
// import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import Navigation from './sections/Navigation'
import FlightsSearch from '../../midbar/FlightsSearch'

function AllFlights() {
  return (
    <div>
        {/* <Header /> */}
        <FlightsSearch />
        <Navigation />
        <Footer />
    </div>
  )
}

export default AllFlights