import React from 'react'
import BookNowStatus from '../pages/bookNowStatus/BookNowStatus'
import AllFlights from '../pages/flightPages/AllFlights'
import BookingSubmission from '../pages/bookNowOne/BookingSubmission'
import PackageDetails from '../pages/packageDetails/PackageDetails'
import HomePage from '../pages/homePage/HomePage'
import { Route, Routes } from 'react-router-dom'

function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='booknowstatus' element={<BookNowStatus />} />
            <Route path='allflights' element={<AllFlights />} />
            <Route path='bookingsubmission' element={<BookingSubmission />} />
            <Route path='packagedetails' element={<PackageDetails />} />
        </Routes>
    </div>
  )
}

export default MainRouter