import React from 'react'
import DeptCity from './refineSearch/DeptCity'
import MonthOfTravel from './refineSearch/MonthOfTravel'
import PackageTheme from './refineSearch/PackageTheme'
import PackageType from './refineSearch/PackageType'
import PricePerPerson from './refineSearch/PricePerPerson'
import SortBy from './refineSearch/SortBy'
import TravelDuration from './refineSearch/TravelDuration'

function Section() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 hd-wraper innerpage">
                            <strong>Dubai</strong>
                            <h4>Tour Packages <span className="fs-16 fw-400">33 | Packages</span></h4>
                        </div>

                        <div className="col-12">
                            <div className="refine-search">
                                <div className="fs-15 fw-500 dark-blue-txt mb-2">Refine Search:</div>
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-10 filter-left">
                                        <div className="row justify-content-between">

                                            {/*...............................................*/}

                                            <DeptCity />

                                            {/*...............................................*/}

                                            <PricePerPerson />

                                            {/*...............................................*/}

                                            <MonthOfTravel />

                                            {/*...............................................*/}

                                            <TravelDuration />

                                            {/*...............................................*/}

                                            <PackageType />

                                            {/*...............................................*/}

                                            <PackageTheme />


                                        </div>
                                    </div>
                                    <div className="col-md-2 filter-right mb-2">
                                        <div className="row align-items-baseline">
                                            <span className="col-md-5 col-3 fs-15 fw-300 text-right pr-0">Sort by</span>
                                            <div className="col-md-7 col-9">

                                                {/*...............................................*/}

                                                <SortBy />

                                                {/*...............................................*/}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 package-list-wraper">


                            <div className="row package-list no-gutters">
                                <div className="col-md-3 pckg-img pckg-img1" style={{ backgroundImage: 'url(/images/img21.png)' }}></div>
                                <div className="col-md-6">
                                    <div className="pckg-info">
                                        <h3>
                                            Dubai Fully Loaded - Buy 1 Get 1 Free (Al Jadaf Area) Including Dubai Shopping Festival
                                        </h3>
                                        <p className="fs-15 fw-300">Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                                        </p>
                                        <ul className="book-dtls-desc">
                                            <li className="d-flex align-items-center">
                                                <span className="d-flex align-items-center">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.4925 0C3.3525 0 0 3.36 0 7.5C0 11.64 3.3525 15 7.4925 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.4925 0ZM9.9675 11.0325L6.75 7.8075V3.75H8.25V7.1925L11.0325 9.975L9.9675 11.0325Z" fill="#4756CB" />
                                                    </svg>
                                                </span>
                                                <strong className="fs-15 fw-300 ml-2">7D/6N</strong>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <span className="d-flex align-items-center">
                                                    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.5357 7.5C15.8875 7.5 16.2358 7.43072 16.5608 7.29611C16.8857 7.1615 17.181 6.96419 17.4298 6.71546C17.6785 6.46674 17.8758 6.17145 18.0104 5.84647C18.145 5.52149 18.2143 5.17318 18.2143 4.82143C18.2143 4.11103 17.9321 3.42972 17.4298 2.92739C16.9274 2.42506 16.2461 2.14286 15.5357 2.14286C14.8253 2.14286 14.144 2.42506 13.6417 2.92739C13.1393 3.42972 12.8571 4.11103 12.8571 4.82143C12.8571 5.17318 12.9264 5.52149 13.061 5.84647C13.1956 6.17145 13.3929 6.46674 13.6417 6.71546C14.144 7.21779 14.8253 7.5 15.5357 7.5ZM7.5 6.42857C8.35248 6.42857 9.17005 6.08992 9.77284 5.48713C10.3756 4.88433 10.7143 4.06677 10.7143 3.21429C10.7143 2.3618 10.3756 1.54424 9.77284 0.941443C9.17005 0.338647 8.35248 0 7.5 0C6.64752 0 5.82995 0.338647 5.22716 0.941443C4.62436 1.54424 4.28571 2.3618 4.28571 3.21429C4.28571 4.06677 4.62436 4.88433 5.22716 5.48713C5.82995 6.08992 6.64752 6.42857 7.5 6.42857ZM15.5357 9.64286C13.575 9.64286 9.64286 10.6286 9.64286 12.5893V15H21.4286V12.5893C21.4286 10.6286 17.4964 9.64286 15.5357 9.64286ZM7.5 8.57143C5.00357 8.57143 0 9.825 0 12.3214V15H7.5V12.5893C7.5 11.6786 7.85357 10.0821 10.0393 8.87143C9.10714 8.67857 8.20714 8.57143 7.5 8.57143Z" fill="#4756CB" />
                                                    </svg>
                                                </span>
                                                <strong className="fs-15 fw-300 ml-2">pax: 10</strong>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <span className="d-flex align-items-center">
                                                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 7.5C6.4125 7.5 6.76575 7.353 7.05975 7.059C7.35325 6.7655 7.5 6.4125 7.5 6C7.5 5.5875 7.35325 5.23425 7.05975 4.94025C6.76575 4.64675 6.4125 4.5 6 4.5C5.5875 4.5 5.2345 4.64675 4.941 4.94025C4.647 5.23425 4.5 5.5875 4.5 6C4.5 6.4125 4.647 6.7655 4.941 7.059C5.2345 7.353 5.5875 7.5 6 7.5ZM6 15C3.9875 13.2875 2.4845 11.6967 1.491 10.2277C0.497 8.75925 0 7.4 0 6.15C0 4.275 0.60325 2.78125 1.80975 1.66875C3.01575 0.55625 4.4125 0 6 0C7.5875 0 8.98425 0.55625 10.1903 1.66875C11.3967 2.78125 12 4.275 12 6.15C12 7.4 11.5033 8.75925 10.5098 10.2277C9.51575 11.6967 8.0125 13.2875 6 15Z" fill="#4756CB" />
                                                    </svg>
                                                </span>
                                                <strong className="fs-15 fw-300 ml-2">Dubai</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 pckg-price-info white-txt">
                                    <div className="pckg-review text-center">
                                        <span className="fs-15 fw-500">(25 reviews)</span>
                                        <ul>
                                            <li><span className="star-rate-white"></span></li>
                                            <li><span className="star-rate-white"></span></li>
                                            <li><span className="star-rate-white"></span></li>
                                            <li><span className="star-rate-white"></span></li>
                                            <li><span className="star-rate-white"></span></li>
                                        </ul>
                                    </div>
                                    <strike className="d-block text-center fs-15 fw-500">Rs. 63,542</strike>
                                    <div className="text-center pckg-price">
                                        <h4 className="fw-700">Rs. 31,771</h4>
                                        <div className="fs-15 fw-500">/ per person</div>
                                    </div>
                                    <button className="btn btn-typ2 ml-auto mr-auto fw-500 border-radius-100">BOOK NOW</button>
                                </div>
                            </div>


                            <div className="row package-list no-gutters">
                                <div className="col-md-3 pckg-img pckg-img2" style={{ backgroundImage: 'url(/images/img22.png)' }}></div>
                                <div className="col-md-6">
                                    <div className="pckg-info">
                                        <h3>
                                            Crazy Deal Dubai - 5N Including Dubai Shopping Festival
                                        </h3>
                                        <p className="fs-15 fw-300">Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                                        </p>
                                        <ul className="book-dtls-desc">
                                            <li className="d-flex align-items-center">
                                                <span className="d-flex align-items-center">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.4925 0C3.3525 0 0 3.36 0 7.5C0 11.64 3.3525 15 7.4925 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.4925 0ZM9.9675 11.0325L6.75 7.8075V3.75H8.25V7.1925L11.0325 9.975L9.9675 11.0325Z" fill="#4756CB" />
                                                    </svg>
                                                </span>
                                                <strong className="fs-15 fw-300 ml-2">7D/6N</strong>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <span className="d-flex align-items-center">
                                                    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.5357 7.5C15.8875 7.5 16.2358 7.43072 16.5608 7.29611C16.8857 7.1615 17.181 6.96419 17.4298 6.71546C17.6785 6.46674 17.8758 6.17145 18.0104 5.84647C18.145 5.52149 18.2143 5.17318 18.2143 4.82143C18.2143 4.11103 17.9321 3.42972 17.4298 2.92739C16.9274 2.42506 16.2461 2.14286 15.5357 2.14286C14.8253 2.14286 14.144 2.42506 13.6417 2.92739C13.1393 3.42972 12.8571 4.11103 12.8571 4.82143C12.8571 5.17318 12.9264 5.52149 13.061 5.84647C13.1956 6.17145 13.3929 6.46674 13.6417 6.71546C14.144 7.21779 14.8253 7.5 15.5357 7.5ZM7.5 6.42857C8.35248 6.42857 9.17005 6.08992 9.77284 5.48713C10.3756 4.88433 10.7143 4.06677 10.7143 3.21429C10.7143 2.3618 10.3756 1.54424 9.77284 0.941443C9.17005 0.338647 8.35248 0 7.5 0C6.64752 0 5.82995 0.338647 5.22716 0.941443C4.62436 1.54424 4.28571 2.3618 4.28571 3.21429C4.28571 4.06677 4.62436 4.88433 5.22716 5.48713C5.82995 6.08992 6.64752 6.42857 7.5 6.42857ZM15.5357 9.64286C13.575 9.64286 9.64286 10.6286 9.64286 12.5893V15H21.4286V12.5893C21.4286 10.6286 17.4964 9.64286 15.5357 9.64286ZM7.5 8.57143C5.00357 8.57143 0 9.825 0 12.3214V15H7.5V12.5893C7.5 11.6786 7.85357 10.0821 10.0393 8.87143C9.10714 8.67857 8.20714 8.57143 7.5 8.57143Z" fill="#4756CB" />
                                                    </svg>
                                                </span>
                                                <strong className="fs-15 fw-300 ml-2">pax: 10</strong>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <span className="d-flex align-items-center">
                                                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 7.5C6.4125 7.5 6.76575 7.353 7.05975 7.059C7.35325 6.7655 7.5 6.4125 7.5 6C7.5 5.5875 7.35325 5.23425 7.05975 4.94025C6.76575 4.64675 6.4125 4.5 6 4.5C5.5875 4.5 5.2345 4.64675 4.941 4.94025C4.647 5.23425 4.5 5.5875 4.5 6C4.5 6.4125 4.647 6.7655 4.941 7.059C5.2345 7.353 5.5875 7.5 6 7.5ZM6 15C3.9875 13.2875 2.4845 11.6967 1.491 10.2277C0.497 8.75925 0 7.4 0 6.15C0 4.275 0.60325 2.78125 1.80975 1.66875C3.01575 0.55625 4.4125 0 6 0C7.5875 0 8.98425 0.55625 10.1903 1.66875C11.3967 2.78125 12 4.275 12 6.15C12 7.4 11.5033 8.75925 10.5098 10.2277C9.51575 11.6967 8.0125 13.2875 6 15Z" fill="#4756CB" />
                                                    </svg>
                                                </span>
                                                <strong className="fs-15 fw-300 ml-2">Dubai</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 pckg-price-info white-txt">
                                    <div className="pckg-review text-center">
                                        <span className="fs-15 fw-500">(25 reviews)</span>
                                        <ul>
                                            <li><span className="star-rate-white"></span></li>
                                            <li><span className="star-rate-white"></span></li>
                                            <li><span className="star-rate-white"></span></li>
                                            <li><span className="star-rate-white"></span></li>
                                            <li><span className="star-rate-white"></span></li>
                                        </ul>
                                    </div>
                                    <strike className="d-block text-center fs-15 fw-500">Rs. 63,542</strike>
                                    <div className="text-center pckg-price">
                                        <h4 className="fw-700">Rs. 57 727</h4>
                                        <div className="fs-15 fw-500">/ per person</div>
                                    </div>
                                    <button className="btn btn-typ2 ml-auto mr-auto fw-500 border-radius-100">BOOK NOW</button>
                                </div>
                            </div>


                            <div className="row package-list no-gutters">
                                <div className="col-md-3 pckg-img pckg-img3" style={{ backgroundImage: 'url(/images/img20.png)' }}></div>
                                <div className="col-md-6">
                                    <div className="pckg-info">
                                        <h3>
                                            Magical Dubai With Yas Island (Winter)
                                        </h3>
                                        <p className="fs-15 fw-300">Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                                        </p>
                                        <ul className="book-dtls-desc">
                                            <li className="d-flex align-items-center">
                                                <span className="d-flex align-items-center">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.4925 0C3.3525 0 0 3.36 0 7.5C0 11.64 3.3525 15 7.4925 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.4925 0ZM9.9675 11.0325L6.75 7.8075V3.75H8.25V7.1925L11.0325 9.975L9.9675 11.0325Z" fill="#4756CB" />
                                                    </svg>
                                                </span>
                                                <strong className="fs-15 fw-300 ml-2">7D/6N</strong>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <span className="d-flex align-items-center">
                                                    <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.5357 7.5C15.8875 7.5 16.2358 7.43072 16.5608 7.29611C16.8857 7.1615 17.181 6.96419 17.4298 6.71546C17.6785 6.46674 17.8758 6.17145 18.0104 5.84647C18.145 5.52149 18.2143 5.17318 18.2143 4.82143C18.2143 4.11103 17.9321 3.42972 17.4298 2.92739C16.9274 2.42506 16.2461 2.14286 15.5357 2.14286C14.8253 2.14286 14.144 2.42506 13.6417 2.92739C13.1393 3.42972 12.8571 4.11103 12.8571 4.82143C12.8571 5.17318 12.9264 5.52149 13.061 5.84647C13.1956 6.17145 13.3929 6.46674 13.6417 6.71546C14.144 7.21779 14.8253 7.5 15.5357 7.5ZM7.5 6.42857C8.35248 6.42857 9.17005 6.08992 9.77284 5.48713C10.3756 4.88433 10.7143 4.06677 10.7143 3.21429C10.7143 2.3618 10.3756 1.54424 9.77284 0.941443C9.17005 0.338647 8.35248 0 7.5 0C6.64752 0 5.82995 0.338647 5.22716 0.941443C4.62436 1.54424 4.28571 2.3618 4.28571 3.21429C4.28571 4.06677 4.62436 4.88433 5.22716 5.48713C5.82995 6.08992 6.64752 6.42857 7.5 6.42857ZM15.5357 9.64286C13.575 9.64286 9.64286 10.6286 9.64286 12.5893V15H21.4286V12.5893C21.4286 10.6286 17.4964 9.64286 15.5357 9.64286ZM7.5 8.57143C5.00357 8.57143 0 9.825 0 12.3214V15H7.5V12.5893C7.5 11.6786 7.85357 10.0821 10.0393 8.87143C9.10714 8.67857 8.20714 8.57143 7.5 8.57143Z" fill="#4756CB" />
                                                    </svg>
                                                </span>
                                                <strong className="fs-15 fw-300 ml-2">pax: 10</strong>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <span className="d-flex align-items-center">
                                                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 7.5C6.4125 7.5 6.76575 7.353 7.05975 7.059C7.35325 6.7655 7.5 6.4125 7.5 6C7.5 5.5875 7.35325 5.23425 7.05975 4.94025C6.76575 4.64675 6.4125 4.5 6 4.5C5.5875 4.5 5.2345 4.64675 4.941 4.94025C4.647 5.23425 4.5 5.5875 4.5 6C4.5 6.4125 4.647 6.7655 4.941 7.059C5.2345 7.353 5.5875 7.5 6 7.5ZM6 15C3.9875 13.2875 2.4845 11.6967 1.491 10.2277C0.497 8.75925 0 7.4 0 6.15C0 4.275 0.60325 2.78125 1.80975 1.66875C3.01575 0.55625 4.4125 0 6 0C7.5875 0 8.98425 0.55625 10.1903 1.66875C11.3967 2.78125 12 4.275 12 6.15C12 7.4 11.5033 8.75925 10.5098 10.2277C9.51575 11.6967 8.0125 13.2875 6 15Z" fill="#4756CB" />
                                                    </svg>
                                                </span>
                                                <strong className="fs-15 fw-300 ml-2">Dubai</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 pckg-price-info white-txt">
                                    <div className="pckg-review text-center">
                                        <span className="fs-15 fw-500">(25 reviews)</span>
                                        <ul>
                                            <li><span className="star-rate-white"></span></li>
                                            <li><span className="star-rate-white"></span></li>
                                            <li><span className="star-rate-white"></span></li>
                                            <li><span className="star-rate-white"></span></li>
                                            <li><span className="star-rate-white"></span></li>
                                        </ul>
                                    </div>
                                    <strike className="d-block text-center fs-15 fw-500">Rs. 63,542</strike>
                                    <div className="text-center pckg-price">
                                        <h4 className="fw-700">Rs. 31,771</h4>
                                        <div className="fs-15 fw-500">/ per person</div>
                                    </div>
                                    <button className="btn btn-typ2 ml-auto mr-auto fw-500 border-radius-100">BOOK NOW</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


            {/* <div className="modal reg-log-modal" id="LoginModal" tabindex="-1" role="dialog" aria-labelledby="LoginModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center w-100 fw-400" id="loginModalLongTitle">Welcome to the <strong className="fw-500">Travel website</strong></h5>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-7 d-none d-lg-block">
                                    <img src="/images/login-bg.png" alt="..." />
                                </div>
                                <div className="col-lg-5 col-12">
                                    <form>
                                        <div className="form-title mb-3 fw-500">Login</div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="loginInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="loginInputPassword1" placeholder="Password" />
                                            <div className="forgot-passward">
                                                <button type="button" className="fs-11" data-toggle="modal" data-target="#ForgotPasswordModal">Forgot password ?</button>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn border-radius-5 btn-typ1 fs-15 fw-400 w-100">Submit</button>
                                        </div>
                                        <button type="button" className="fs-14 text-below-button" data-toggle="modal" data-target="#RegisterModal">New User ? Click Here to <span className="fw-600">Register</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal reg-log-modal" id="RegisterModal" tabindex="-1" role="dialog" aria-labelledby="RegisterModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center w-100 fw-400" id="RegisterModalLongTitle">Welcome to the <strong className="fw-500">Travel website</strong></h5>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-7 d-none d-lg-block">
                                    <img src="/images/register-bg.png" alt="" />
                                </div>
                                <div className="col-lg-5 col-12">
                                    <form>
                                        <div className="form-title mb-3 fw-500">Let's get started!</div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="RegisterInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="RegisterInputPassword1" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="RegisterInputMobile" placeholder="+91  Mobile number" />
                                        </div>
                                        <div className="form-group chkbx">
                                            <input type="checkbox" id="logintab" checked />
                                            <label for="logintab" className="fz-13 fw-400">
                                                <span className="chk-txt fs-13 fw-400">I Agree to <a href="">terms & conditions</a></span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn border-radius-5 btn-typ1 fs-15 fw-400 w-100">Register</button>
                                        </div>
                                        <button type="button" className="fs-14 text-below-button" data-toggle="modal" data-target="#LoginModal">for existing user <span className="fw-600">Login</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal reg-log-modal" id="ForgotPasswordModal" tabindex="-1" role="dialog" aria-labelledby="ForgotPasswordModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-12">
                                    <form>
                                        <div className="form-title mb-3 fw-500 text-center">Forgot Password?</div>
                                        <p className="fs-13 fw-300 dark-blue-txt text-center">Enter the e-mail address associated with the account.
                                            We'll e-mail a link to reset your password.</p>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="RegisterInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn border-radius-5 btn-typ1 fs-15 fw-400 w-100">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



        </div>
    )
}

export default Section