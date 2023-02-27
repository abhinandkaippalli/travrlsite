import React, { useState } from 'react'
import RoundTripFlight from './options/RoundTripFlight';
import OneWayTripFlights from './options/OneWayTripFlights';
import MultiCityFlight from './options/MultiCityFlight';

function FlightsSearch() {

    const [selectedTab, setSelectedTab] = useState('return');
    const [selectedClass, setSelectedClass] = useState('Economy');
    const [adultsCount, setAdultsCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infantsCount, setInfantsCount] = useState(0);

    const handleTabChange = (event) => {
        setSelectedTab(event.target.value);
    };

    const handleClassChange = (event) => {
        setSelectedClass(event.target.value);
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="container flight-search-midbar">
                <div className="row p-md-0 p-3">
                    <form className="flight-search col-12">

                        <span className='lbl'>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="30" height="30" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_69_24" transform="scale(0.00195312)" />
                                    </pattern>
                                    <image id="image0_69_24" width="512" height="512"
                                        xlinkHref="data:image/png;base64,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" />
                                </defs>
                            </svg>
                            FLIGHTS
                        </span>

                        <input type="radio" id="return" name="tab" value="return" checked={selectedTab === 'return'} onChange={handleTabChange} />
                        <label htmlFor="return">Round-trip</label>
                        <input type="radio" id="one-way" name="tab" value="one-way" checked={selectedTab === 'one-way'} onChange={handleTabChange} />
                        <label htmlFor="one-way">One-way</label>
                        <input type="radio" id="multi-city" name="tab" value="multi-city" checked={selectedTab === 'multi-city'} onChange={handleTabChange} />
                        <label htmlFor="multi-city">Multi-city</label>

                        <div className="select-className-wrp">
                            <select name="" className="select-class" id="" value={selectedClass} onChange={handleClassChange}>
                                <option value="Economy">Economy</option>
                                <option value="Premium">Premium</option>
                                <option value="Business">Business</option>
                                <option value="First">First</option>
                            </select>
                        </div>

                        <span className={`person-select ${isOpen ? 'open' : ''}`}>
                            <label htmlFor='' className='select-lbl' onClick={() => setIsOpen(!isOpen)}>Traveller<span className='count'>1</span><span className='downarrow'></span>
                            </label>
                            <div className='select-dropbox' style={{ display: isOpen ? "block" : "none" }}>
                                <span className="selectbox d-flex justify-content-between">
                                    <label className="fs-13 fw-600" htmlFor="">Adults
                                        <span className="fs-11">12 years and above</span>
                                    </label>
                                    <span className="selec-wrp d-inline-flex align-items-center">
                                        <input type="number" min={0} value={adultsCount} onChange={(e) => {
                                            const newValue = parseInt(e.target.value);
                                            if (newValue >= 0) {
                                                setAdultsCount(newValue);
                                            }
                                        }} />

                                        <span className="minus" onClick={() => {
                                            if (adultsCount > 0) {
                                                setAdultsCount(adultsCount - 1);
                                            }
                                        }}>-</span>

                                        <span className="add" onClick={() => setAdultsCount(adultsCount + 1)}>+</span>
                                    </span>
                                </span>

                                <span className="selectbox d-flex justify-content-between">
                                    <label className="fs-13 fw-600" htmlFor="">Children
                                        <span className="fs-11">2 - 11 years</span>
                                    </label>
                                    <span className="selec-wrp d-inline-flex align-items-center">

                                        <input type="number" min={0} value={childrenCount} onChange={(e) => {
                                            const newValue = parseInt(e.target.value);
                                            if (newValue >= 0) {
                                                setChildrenCount(newValue);
                                            }
                                        }} />

                                        <span className="minus" onClick={() => {
                                            if (childrenCount > 0) {
                                                setChildrenCount(childrenCount - 1);
                                            }
                                        }}>-</span>

                                        <span className="add" onClick={() => setChildrenCount(childrenCount + 1)}>+</span>
                                    </span>
                                </span>

                                <span className="selectbox d-flex justify-content-between">
                                    <label className="fs-13 fw-600" htmlFor="">Infants
                                        <span className="fs-11">Under 2 years</span>
                                    </label>
                                    <span className="selec-wrp d-inline-flex align-items-center">
                                        <input type="number" min={0} value={infantsCount} onChange={(e) => {
                                            const newValue = parseInt(e.target.value);
                                            if (newValue >= 0) {
                                                setInfantsCount(newValue);
                                            }
                                        }} />
                                        <span className="minus" onClick={() => {
                                            if (infantsCount > 0) {
                                                setInfantsCount(infantsCount - 1);
                                            }
                                        }}>-</span>
                                        <span className="add" onClick={() => setInfantsCount(infantsCount + 1)}>+</span>
                                    </span>
                                </span>
                            </div>
                        </span>

                        {/* Search Box */}

                        <div className="srch-fld">
                            {selectedTab === "return" && <RoundTripFlight />}
                            {selectedTab === "one-way" && <OneWayTripFlights />}
                            {selectedTab === "multi-city" && <MultiCityFlight />}
                        </div>


                    </form>
                </div>
            </div >
        </div>
    )
}

export default FlightsSearch