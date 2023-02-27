// import './App.css';
import React from "react";
import Navbar from "./components/navbar/Navbar";
import MidBar from "./components/midbar/MidBar";
import HolidaySection from "./components/holiday-section/HolidaySection";
import VideoBanner from "./components/videoBanner/VideoBanner";
import ChoosePopularFlight from "./components/choosePopularFlight/ChoosePopularFlight";
import FlightBookingOffer from "./components/flightBookingOffer/FlightBookingOffer";
import TravelReview from "./components/travelReview/TravelReview";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <MidBar />
      <HolidaySection />
      <VideoBanner />
      <ChoosePopularFlight />
      <FlightBookingOffer />
      <TravelReview />
      <Footer />
    </div>
  );
}

export default App;
