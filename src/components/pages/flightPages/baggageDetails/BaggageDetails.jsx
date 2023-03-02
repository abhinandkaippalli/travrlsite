import React from 'react'

function BaggageDetails() {
    return (
        <div className="tab-pane p-lg-5 pt-5 p-3 pane3">
            <button className="close"><span>&times;</span></button>
            <ul className="fs-13">
                <li className="text-left p-1 bdr-b">
                    Cochin <span className="right-arrow-small arrow-000000"></span> Cochin
                </li>
                <li className="">
                    <ul className="row align-items-center pt-3 pb-3">
                        <li className="col-md-1 mb-md-0 mb-2">
                            <img src="/images/emirates-logo.png" alt="..." />
                        </li>
                        <li className="col-md-2 flex-column text-left mb-md-0 mb-2">
                            <strong>Emirates</strong>
                            <span className="uppercase-txt">cok <span className="right-arrow-small arrow-000000"></span> dxb</span>
                        </li>
                        <li className="col-md-7">
                            <ul className="row bdr-b">
                                <li className="col-4">Checkin</li>
                                <li className="col-4">1 pcs/person</li>
                                <li className="col-4">20 kgs/1pcs</li>
                            </ul>
                            <ul className="row">
                                <li className="col-4">Cabin</li>
                                <li className="col-4">1 pcs/person</li>
                                <li className="col-4">7 kgs/1pcs</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="row align-items-center pt-3 pb-3">
                        <li className="col-md-1 mb-md-0 mb-2">
                            <img src="/images/emirates-logo.png" alt="..." />
                        </li>
                        <li className="col-md-2 flex-column text-left mb-md-0 mb-2">
                            <strong>Emirates</strong>
                            <span className="uppercase-txt">cok <span className="right-arrow-small arrow-000000"></span> dxb</span>
                        </li>
                        <li className="col-md-7">
                            <ul className="row bdr-b">
                                <li className="col-4">Checkin</li>
                                <li className="col-4">1 pcs/person</li>
                                <li className="col-4">20 kgs/1pcs</li>
                            </ul>
                            <ul className="row">
                                <li className="col-4">Cabin</li>
                                <li className="col-4">1 pcs/person</li>
                                <li className="col-4">7 kgs/1pcs</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <p className="fs-13 fw-500 text-left"><strong>Note: </strong>The information provided above is as retrieved from the airline reservation system. Thomas Cook does not guarantee the authenticity of this information. The baggage allowance may vary according to stop-overs, connecting flights and changes in airline rules. Customer is adviced to verify the same from the airline directly before departure.</p>
        </div>
    )
}

export default BaggageDetails