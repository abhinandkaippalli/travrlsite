// import './App.css';
import React from "react";
//import PopularFlightsNearYou from "./components/pages/popularFlightsNearYou/PopularFlightsNearYou";
// import PackageDetails from "./components/pages/packageDetails/PackageDetails";
import BookingSubmission from "./components/pages/bookigSubmission/BookingSubmission";
// import Navbar from "./components/navbar/Navbar";
// import MidBar from "./components/midbar/MidBar";
// import HolidaySection from "./components/holiday-section/HolidaySection";
// import VideoBanner from "./components/videoBanner/VideoBanner";
// import ChoosePopularFlight from "./components/choosePopularFlight/ChoosePopularFlight";
// import FlightBookingOffer from "./components/flightBookingOffer/FlightBookingOffer";
// import TravelReview from "./components/travelReview/TravelReview";
// import Footer from "./components/footer/Footer";
import ScrollTop from "./components/scrollTop/ScrollTop";

function App() {

  return (
    <div className="App">
      {/* <PackageDetails /> */}
      <BookingSubmission />
      {/* <PopularFlightsNearYou /> */}
      {/* <Navbar />
      <MidBar />
      <HolidaySection />
      <VideoBanner />
      <ChoosePopularFlight />
      <FlightBookingOffer />
      <TravelReview /> */}
      {/* <Footer /> */}
      <ScrollTop />
    </div>
  );
}

export default App;
