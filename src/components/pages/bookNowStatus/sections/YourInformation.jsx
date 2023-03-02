import React from 'react'

function YourInformation() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8 mb-4">
                        <div className="booking-success-msg mb-5">
                            <span className="greenTick"></span>
                            <div className="success-txt">
                                <div className="dark-blue-txt"><strong className="fw-600">sree,</strong> your order was submitted successfully!</div>
                                <p className="">Booking details has been sent to: sree@gmail.com</p>
                            </div>
                        </div>
                        <div className="book-now-form">
                            <div className="form-row border-radius-25 mb-xl-5 mb-4">
                                <strong>Your Information</strong>
                                <ul className="form-group booking-status col-12">
                                    <li className="row">
                                        <label htmlFor="" className="col-md-6">First Name</label>
                                        <span className="col-md-6">Sree</span>
                                        <span className="col-12"><hr/></span>
                                    </li>
                                    <li className="row">
                                        <label htmlFor="" className="col-md-6">Last name</label>
                                        <span className="col-md-6">Hari</span>
                                        <span className="col-12"><hr/></span>
                                    </li>
                                    <li className="row">
                                        <label htmlFor="" className="col-md-6">Email</label>
                                        <span className="col-md-6">sree2022@gmail.com</span>
                                        <span className="col-12"><hr/></span>
                                    </li>
                                    <li className="row">
                                        <label htmlFor="" className="col-md-6">Address Line 1</label>
                                        <span className="col-md-6">M.G.Road</span>
                                        <span className="col-12"><hr/></span>
                                    </li>
                                    <li className="row">
                                        <label htmlFor="" className="col-md-6">Address Line 2</label>
                                        <span className="col-md-6">South Ernaulam</span>
                                        <span className="col-12"><hr/></span>
                                    </li>
                                    <li className="row">
                                        <label htmlFor="" className="col-md-6">City</label>
                                        <span className="col-md-6">Kochi</span>
                                        <span className="col-12"><hr/></span>
                                    </li>
                                    <li className="row">
                                        <label htmlFor="" className="col-md-6">State/Province/Region</label>
                                        <span className="col-md-6">Kerala</span>
                                        <span className="col-12"><hr/></span>
                                    </li>
                                    <li className="row">
                                        <label htmlFor="" className="col-md-6">ZIP code/Postal code</label>
                                        <span className="col-md-6">682014</span>
                                        <span className="col-12"><hr/></span>
                                    </li>
                                    <li className="row">
                                        <label htmlFor="" className="col-md-6">Country</label>
                                        <span className="col-md-6">India</span>
                                        <span className="col-12"><hr/></span>
                                    </li>
                                    <li className="row">
                                        <label htmlFor="" className="col-md-6">Special Requirements</label>
                                        <span className="col-md-6">Nil</span>
                                        <span className="col-12"><hr/></span>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <form action="">
                            <ul className="booking-tocken-info">
                                <li>
                                    <strong className="fw-600">Booking Number:</strong>
                                    <span>17431</span>
                                </li>
                                <li>
                                    <strong className="fw-600">Booking Date:</strong>
                                    <span>10/11/2022</span>
                                </li>
                                <li>
                                    <strong className="fw-600">Payment Method:</strong>
                                    <span>Bank Transfer</span>
                                </li>
                                <li>
                                    <strong className="fw-600">Status:</strong>
                                    <span>Pending</span>
                                </li>
                            </ul>
                            <div className="right-blue-box light-blue-bg border-radius-25">
                                <strong className="title-typ1 d-block text-center fw-700 white-txt mb-3">ENQUIRY</strong>
                                <p className="text-center fw-400 white-txt">Abu Dhabi Fully Loaded - Buy
                                    1 Get 1 Free - Winter
                                </p>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="white-border mb-4">
                                            <img src="/images/img27.png" alt="" className="w-100" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-row booking-summery white-txt">
                                            <div className="col-5 fw-500 mb-2">Email</div>
                                            <div className="col-7 fw-500 mb-2">abc@domain.com</div>
                                            <div className="col-5 fw-500 mb-2">Max people</div>
                                            <div className="col-7 fw-500 mb-2">8</div>
                                            <div className="col-5 fw-500 mb-2">No. Adult</div>
                                            <div className="col-7 fw-500 mb-2">1</div>
                                            <div className="col-5 fw-500 mb-2">Date</div>
                                            <div className="col-7 fw-500 mb-2">18/11/2022</div>
                                            <div className="col-5 fw-500">Duration</div>
                                            <div className="col-7 fw-500">2-3 hours</div>
                                            <div className="col-12 mt-4 fs-17">
                                                Guest Name: Mr sreehari
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <hr style={{bordeColor:'#ffffff'}} />
                                    </div>
                                </div>
                                <div className="form-row price-summery white-txt">
                                    <div className="col-6 fw-500 mb-2">Adult Price</div>
                                    <div className="col-6 fw-500 mb-2">Rs.1.650</div>
                                    <div className="col-6 fw-500 mb-2">Subtotal</div>
                                    <div className="col-6 fw-500 mb-2">Rs.1.650</div>
                                    <div className="col-6 fw-500 mb-2">Tax</div>
                                    <div className="col-6 fw-500 mb-2">0%</div>
                                    <div className="col-6 total-price fw-600">Pay Amount</div>
                                    <div className="col-6 total-price fw-600">Rs. 37 156</div>
                                </div>
                            </div>
                            <div className="d-flex help-btn align-items-center border-radius-25 mb-3">
                                <span className="mr-2">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.7476 3.06918C15.8257 3.73322 16.2788 5.16286 15.81 6.405L13.607 12.1861C13.1929 13.2798 12.1617 13.9438 11.0758 13.8266L7.74779 13.4673C6.38846 17.6937 6.38846 22.3107 7.74779 26.5372L11.0758 26.1778C12.1617 26.0606 13.1929 26.7246 13.607 27.8184L15.81 33.5916C16.2866 34.8338 15.8335 36.2634 14.7476 36.9274L10.3415 39.6461C9.37274 40.2476 8.15403 40.068 7.36499 39.2164C-2.455 28.5996 -2.455 11.397 7.36499 0.780187C8.15403 -0.071347 9.38055 -0.243216 10.3493 0.350514L14.7554 3.06918H14.7476ZM31.8095 2.6395C36.8093 6.76437 39.9967 13.0142 39.9967 19.9983C39.9967 26.9825 36.8093 33.2323 31.8173 37.3571C31.0205 38.0133 29.8408 37.904 29.1768 37.1071C28.5127 36.3103 28.6299 35.1306 29.4268 34.4666C33.5985 31.0214 36.2469 25.8184 36.2469 19.9983C36.2469 14.1782 33.5985 8.97523 29.4268 5.53003C28.6299 4.8738 28.5127 3.68634 29.1768 2.88949C29.8408 2.09264 31.0205 1.97546 31.8173 2.6395H31.8095ZM26.7784 8.21744C30.2627 10.9674 32.497 15.2172 32.497 19.9983C32.497 24.7794 30.2627 29.0293 26.7862 31.7792C25.9738 32.4198 24.7941 32.2792 24.1535 31.4667C23.5129 30.6542 23.6535 29.4746 24.466 28.834C27.0753 26.7715 28.7471 23.5763 28.7471 19.9983C28.7471 16.4203 27.0753 13.2251 24.466 11.1627C23.6535 10.5221 23.5129 9.34241 24.1535 8.52993C24.7941 7.71746 25.9738 7.57684 26.7862 8.21744H26.7784ZM21.6692 13.7641C23.677 15.1157 24.9972 17.4046 24.9972 19.9983C24.9972 22.592 23.677 24.881 21.677 26.2247C20.8177 26.8028 19.6537 26.5762 19.0755 25.7169C18.4974 24.8575 18.724 23.6935 19.5833 23.1154C20.5911 22.4357 21.2474 21.2951 21.2474 19.9983C21.2474 18.7015 20.5911 17.5609 19.5833 16.8812C18.724 16.3031 18.4974 15.1391 19.0755 14.2797C19.6537 13.4204 20.8177 13.1938 21.677 13.7719L21.6692 13.7641Z" fill="#6A6868" />
                                    </svg>
                                </span>
                                <div className="d-flex flex-column align-items-baseline">
                                    <span className="fs-14 fw-400">HELP AND SUPPORT</span>
                                    <a href="tel:+55 123 987 00" className="light-blue-txt fw-700">+55 123 987 00</a>
                                    <span className="fs-14 fw-400">Monday to Friday 9.00am - 7.30pm</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YourInformation