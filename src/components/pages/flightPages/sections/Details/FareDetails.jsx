import React from 'react'

function FareDetails() {
    return (
        <div className="tab-pane p-lg-5 pt-5 p-3 pane2 ">
            <button className="close"><span>&times;</span></button>
            <div className="row fs-13 mb-3">
                <div className="col-md-5 mb-md-0 mb-3">
                    <ul>
                        <li className="d-flex justify-content-between p-1 bdr-b">
                            <strong className="fs-14 fw-600">Fare Breakup <span className="fw-400">(in &#8377;)</span></strong>
                            <span>1 adult</span>
                        </li>
                        <li>
                            <ul className="bdr-b">
                                <li className="text-left p-1"><strong className="fw-500">Base Fare</strong></li>
                                <li className="d-flex justify-content-between p-1"><span>Adult (38748x1)</span><span>38748</span></li>
                                <li className="d-flex justify-content-between p-1"><span>Airline Charges & Taxes</span><span>5070</span></li>
                                <li className="d-flex justify-content-between pw-500 pl-1 pr-1 bdr-t"><span>Airline Fare</span><span>43818</span></li>
                            </ul>
                            <ul className="bdr-b">
                                <li className="d-flex justify-content-between p-1"><span>Discount</span><span>(-)0</span></li>
                                <li className="d-flex justify-content-between pl-1 pr-1 bdr-t"><span>Net Thomas Cook Charges</span><span>0</span></li>
                            </ul>
                        </li>
                        <li className="d-flex justify-content-between bg-b1b1b1 p-1 mt-1">
                            <strong className="fw-600">Total Fare</strong><strong>&#8377; 43,818</strong>
                        </li>
                    </ul>
                </div>
                <div className="col-md-7">
                    <ul>
                        <li className="d-flex align-items-baseline p-1 bdr-b">
                            <strong className="fs-14 fw-600">Fare Rules </strong>
                            <span className="uppercase-txt white-txt green-bg border-radius-5 ml-2 pl-1 pr-1">Refundable</span>
                        </li>
                        <li>
                            <ul>
                                <li className="d-flex justify-content-between p-1 mt-1">
                                    <strong className="fs-13 fw-600">Cancellation fee<span className="fw-400">(per passenger)</span></strong>
                                    <span className="uppercase-txt">cok-dxb</span>
                                </li>
                                <li className="text-left">
                                    <table className="w-100">
                                        <tr className="bdr">
                                            <td className="bg-f0f3f5 p-1" style="width: 40%;">Airline fee</td>
                                            <td className="p-1">&#8377; 500</td>
                                        </tr>
                                        <tr className="bdr">
                                            <td className="bg-f0f3f5 p-1" style="width: 40%;">Thomas Cook Fee</td>
                                            <td className="p-1">&#8377; 500</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                            <ul>
                                <li className="d-flex justify-content-between p-1 mt-1">
                                    <strong className="fs-13 fw-600">Date Change fee<span className="fw-400">(per passenger)</span></strong>
                                    <span className="uppercase-txt">cok-dxb</span>
                                </li>
                                <li className="text-left">
                                    <table className="w-100">
                                        <tr className="bdr">
                                            <td className="bg-f0f3f5 p-1" style="width: 40%;">Airline fee</td>
                                            <td className="p-1">&#8377; 500</td>
                                        </tr>
                                        <tr className="bdr">
                                            <td className="bg-f0f3f5 p-1" style="width: 40%;">Thomas Cook Fee</td>
                                            <td className="p-1">&#8377; 500</td>
                                        </tr>
                                    </table>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="fs-13 fw-500 text-left"><strong>Note: </strong>Cancellation/Flight change charges are indicative. Thomas Cook does not guarantee the accuracy of this information. Airlines stop accepting cancellation/change requests 4 - 72 hours before departure of the flight, depending on the airline, in such scenarios airline will have to be contacted directly for cancellation/change. For "Non-Refundable" fares, certain Airline Tax components are also Non-Refundable. For exact cancellation/change fee, please call us on our Toll Free Number 1800 2099 100.</p>
        </div>
    )
}

export default FareDetails