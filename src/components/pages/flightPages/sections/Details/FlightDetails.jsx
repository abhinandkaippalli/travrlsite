import React from 'react'

function FlightDetails() {
    return (
        <div className="tab-pane p-lg-5 pt-5 p-3 pane1">
            <button className="close"><span>&times;</span></button>
            <div className="d-flex justify-content-md-between flex-md-row flex-column fs-15 fw-300 mb-4">
                <div>Kochi <span className="right-arrow-small arrow-000000"></span> Dubai Friday, 18 Nov, 2022 Reaches next day</div>
                <div>Total Duration: 22hr 45m</div>
            </div>
            <div className="d-flex row justify-content-between fs-15 fw-300 mb-4">
                <ul className="col-lg-3 mb-3">
                    <div className="text-left">
                        <strong className="fw-500 d-block">Japan Airlines</strong>
                        Flight No - JL 494 Economy Boeing 73H
                    </div>
                </ul>
                <div className="col-lg-7">
                    <div className="d-flex row justify-content-between">
                        <div className="col-md-5 mb-md-0 mb-2 text-md-left">
                            <strong className="fw-500 d-block">KCZ 11:45</strong>
                            Fri, 18 Nov, 2022 Kma, Kochi
                        </div>
                        <div className="col-md-2 mb-md-0 mb-2">
                            <div className="d-flex flex-column align-items-center">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM13.293 14.707L9 10.414V4H11V9.586L14.707 13.293L13.293 14.707Z" fill="#959595" />
                                </svg>
                                1hr 15m
                            </div>
                        </div>
                        <div className="col-md-5 text-md-left">
                            <strong className="fw-500 d-block">13:00 HND</strong>
                            Fri, 18 Nov, 2022 Tokyo International, Tokyo Haneda Terminal 1
                        </div>
                    </div>
                </div>

            </div>
            <div className="fs-15 fw-300 mb-4 text-left">
                Note: You will have to change Airport while travelling
            </div>
            <div className="d-flex justify-content-md-between flex-md-row flex-column fs-15 fw-300 mb-4">
                <div>Dubai <span className="right-arrow-small arrow-000000"></span> Kochi Saturday, 26 Nov, 2022 Arrives next day</div>
                <div>Total Duration: 24hr 5m</div>
            </div>
        </div>
    )
}

export default FlightDetails