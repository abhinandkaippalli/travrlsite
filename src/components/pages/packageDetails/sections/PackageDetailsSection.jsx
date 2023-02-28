import React from 'react'
import OwlCarouselImages from './OwlCarouselImages'
import EnquiryForm from './EnquiryForm'

function PackageDetailsSection() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <div className="row justify-content-between">
                            <div className="col-md-8 package-name-sec">
                                <h1 className="dark-blue-txt fw-700">Abu Dhabi Fully Loaded - Buy
                                    1 Get 1 Free - Winter</h1>
                                <ul className="d-flex justify-content-end justify-content-md-start">
                                    <li><span className="star-rate-blue"></span></li>
                                    <li><span className="star-rate-blue"></span></li>
                                    <li><span className="star-rate-blue"></span></li>
                                    <li><span className="star-rate-blue"></span></li>
                                    <li><span className="star-rate-ash"></span></li>
                                </ul>
                            </div>
                            <div className="col-md-4 package-price-sec">
                                <strike className="d-block text-center fs-16 fw-400 ash-txt">Rs. <span>1 07 495</span></strike>
                                <div className="text-center pckg-price">
                                    <h4 className="fw-700 light-blue-txt">Rs. <span>53747</span></h4>
                                    <div className="fs-16 fw-400 ash-txt">Starting price per adult</div>
                                </div>
                            </div>
                        </div>
                        <hr className="d-none d-lg-block" style={{ borderColor: "#888888", marginBottom: "0" }} />
                    </div>
                    <div className="col-xl-3 col-lg-4 d-flex align-items-center justify-content-center">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <button className="btn border-radius-100 fs-18 fw-600 white-txt btn-typ1 pl-5 pr-5 uppercase-txt">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="d-block d-lg-none" style={{ borderColor: "#888888", marginBottom: "0" }} />
                <div className="row">
                    <div className="col-xl-9 col-lg-8 pt-3 mb-4">
                        <ul className="book-dtls-desc">
                            <li className="d-flex align-items-center">
                                <span className="d-flex align-items-center">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.4925 0C3.3525 0 0 3.36 0 7.5C0 11.64 3.3525 15 7.4925 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.4925 0ZM9.9675 11.0325L6.75 7.8075V3.75H8.25V7.1925L11.0325 9.975L9.9675 11.0325Z" fill="#4756CB"></path>
                                    </svg>
                                </span>
                                <strong className="fs-15 fw-300 ml-2">7D/6N</strong>
                            </li>
                            <li className="d-flex align-items-center">
                                <span className="d-flex align-items-center">
                                    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5357 7.5C15.8875 7.5 16.2358 7.43072 16.5608 7.29611C16.8857 7.1615 17.181 6.96419 17.4298 6.71546C17.6785 6.46674 17.8758 6.17145 18.0104 5.84647C18.145 5.52149 18.2143 5.17318 18.2143 4.82143C18.2143 4.11103 17.9321 3.42972 17.4298 2.92739C16.9274 2.42506 16.2461 2.14286 15.5357 2.14286C14.8253 2.14286 14.144 2.42506 13.6417 2.92739C13.1393 3.42972 12.8571 4.11103 12.8571 4.82143C12.8571 5.17318 12.9264 5.52149 13.061 5.84647C13.1956 6.17145 13.3929 6.46674 13.6417 6.71546C14.144 7.21779 14.8253 7.5 15.5357 7.5ZM7.5 6.42857C8.35248 6.42857 9.17005 6.08992 9.77284 5.48713C10.3756 4.88433 10.7143 4.06677 10.7143 3.21429C10.7143 2.3618 10.3756 1.54424 9.77284 0.941443C9.17005 0.338647 8.35248 0 7.5 0C6.64752 0 5.82995 0.338647 5.22716 0.941443C4.62436 1.54424 4.28571 2.3618 4.28571 3.21429C4.28571 4.06677 4.62436 4.88433 5.22716 5.48713C5.82995 6.08992 6.64752 6.42857 7.5 6.42857ZM15.5357 9.64286C13.575 9.64286 9.64286 10.6286 9.64286 12.5893V15H21.4286V12.5893C21.4286 10.6286 17.4964 9.64286 15.5357 9.64286ZM7.5 8.57143C5.00357 8.57143 0 9.825 0 12.3214V15H7.5V12.5893C7.5 11.6786 7.85357 10.0821 10.0393 8.87143C9.10714 8.67857 8.20714 8.57143 7.5 8.57143Z" fill="#4756CB"></path>
                                    </svg>
                                </span>
                                <strong className="fs-15 fw-300 ml-2">pax: 10</strong>
                            </li>
                            <li className="d-flex align-items-center">
                                <span className="d-flex align-items-center">
                                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 7.5C6.4125 7.5 6.76575 7.353 7.05975 7.059C7.35325 6.7655 7.5 6.4125 7.5 6C7.5 5.5875 7.35325 5.23425 7.05975 4.94025C6.76575 4.64675 6.4125 4.5 6 4.5C5.5875 4.5 5.2345 4.64675 4.941 4.94025C4.647 5.23425 4.5 5.5875 4.5 6C4.5 6.4125 4.647 6.7655 4.941 7.059C5.2345 7.353 5.5875 7.5 6 7.5ZM6 15C3.9875 13.2875 2.4845 11.6967 1.491 10.2277C0.497 8.75925 0 7.4 0 6.15C0 4.275 0.60325 2.78125 1.80975 1.66875C3.01575 0.55625 4.4125 0 6 0C7.5875 0 8.98425 0.55625 10.1903 1.66875C11.3967 2.78125 12 4.275 12 6.15C12 7.4 11.5033 8.75925 10.5098 10.2277C9.51575 11.6967 8.0125 13.2875 6 15Z" fill="#4756CB"></path>
                                    </svg>
                                </span>
                                <strong className="fs-15 fw-300 ml-2">Dubai</strong>
                            </li>
                        </ul>
                        <div className="details-bg">
                            <img src="/images/img23.png" alt="" />
                        </div>
                        <div className="detail-txt-info">
                            <strong className="d-block fs-22 fw-700 mb-3">OVERVIEW:</strong>
                            <p className="fs-15 fw-400 mb-3">
                                Malesuada incidunt excepturi proident quo eros? Id interdum praesent magnis, eius cumque? Integer aptent officiis recusandae habitasse iure, quisque culpa! Nemo et? Vel excepteur pellentesque morbi ducimus porro commodo sollicitudin, quidem, cupiditate ligula doloribus recusandae non, hac, ullam per, natus parturient sollicitudin! Facilis vestibulum accumsan quisquam excepturi explicabo.
                            </p>
                            <p className="fs-15 fw-400 mb-3">
                                Quam aut, luctus hendrerit, laborum, dolor, consectetur scelerisque quisque feugiat sequi, ea ipsa consequat atque consectetur. Litora aute error eos.Placerat habitasse nascetur sit voluptatem ea sint facilisis! Esse sed lacus! Sociosqu ullamcorper venenatis in.
                            </p>
                            <strong className="d-block fs-22 fw-700 mb-3">INCLUDE & EXCLUDE:</strong>
                            <div className="row">
                                <div className="col-lg-8">
                                    <ul className="row">
                                        <li className="col-md-6">Specialized bilingual guide</li>
                                        <li className="col-md-6">Guide Service Fee</li>
                                        <li className="col-md-6">Private Transport</li>
                                        <li className="col-md-6">Room Service Fees</li>
                                        <li className="col-md-6">Entrance Fees</li>
                                        <li className="col-md-6">Driver Service Fee</li>
                                        <li className="col-md-6">Breakfast And Lunch Box</li>
                                        <li className="col-md-6">Any Private Expenses</li>
                                    </ul>
                                </div>
                            </div>
                            <strong className="d-block fs-22 fw-700 mb-3">INTINERARY:</strong>
                            <p className="fs-15 fw-400 mb-3">
                                Malesuada incidunt excepturi proident quo eros? Id interdum praesent magnis, eius cumque? Integer aptent officiis recusandae habitasse iure, quisque culpa!
                            </p>
                            <div className="row">
                                <div className="col-lg-8">
                                    <ul className="row">
                                        <li className="col-12">DAY 1 Departure at the airport and arrival at the hotel</li>
                                        <li className="col-12">DAY 2 Visit the main museums and lunch included</li>
                                        <li className="col-12">DAY 3 Excursion in the natural oasis and picnic</li>
                                        <li className="col-12">Specialized bilingual guide</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 details-sidebar">

                        {/* ................................................................ */}

                        <EnquiryForm />

                        {/* ..................................................................... */}

                        <div className="related-images-slider-wrp">
                            <strong className="title-typ1 d-block text-center fw-700 mb-2">RELATED IMAGES</strong>
                            <p className="fs-15 fw-400 text-center mb-1">Malesuada incidunt excepturi proident quo eros? Sinterdum praesent magnis, eius cumque.</p>

                            {/* ........................................................ */}

                            <OwlCarouselImages />

                            {/* ............................................................... */}


                        </div>
                        <div className="map-location">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465132.89815532387!2d54.01719551384881!3d24.386494328534404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1669879243332!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="more-pckg-lnks border-radius-25">
                            <div className="white-bg border-radius-100 uppercase-txt text-center fs-18 fw-500 mb-4 p-1">MORE PACKAGES</div>
                            <ul>
                                <li><a href="">Vacation Packages</a></li>
                                <li><a href="">Honeymoon Packages</a></li>
                                <li><a href="">New Year Packages</a></li>
                                <li><a href="">Weekend Packages</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackageDetailsSection