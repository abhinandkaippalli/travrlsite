import React, { useState } from 'react'

function FormPage() {

    const [firstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [ phone, setPhone ] = useState('')
    const [addressLineOne, setAddressLineOne] = useState('')
    const [addressLineTwo, setAddressLineTwo] = useState('')
    const [ city, setCity ] = useState('')
    const [ state, setState ] = useState('')
    const [ zipCode, setZipCode ] = useState('')
    const [ country, setCountry ] = useState('')
    const [ specialRequirement, setSpecialRequirement ] = ('')
    const [ nameOnCard, setNameOnCard ] = useState('')
    const [ cardNumber, setCardNumber ] = useState('')
    const [ expirationDate, setExpirationDate ] = useState('')
 
    return (
        <form class="book-now-form">
            <div class="form-row border-radius-25 mb-xl-5 mb-4">
                <div class="form-group col-md-6">
                    <label htmlFor="">First Name *</label>
                    <input type="text" class="form-control border-radius-100" id="" />
                </div>
                <div class="form-group col-md-6">
                    <label htmlFor="">Last Name *</label>
                    <input type="text" class="form-control border-radius-100" id="" />
                </div>
                <div class="form-group col-md-6">
                    <label htmlFor="">Email *</label>
                    <input type="email" class="form-control border-radius-100" id="" />
                </div>
                <div class="form-group col-md-6">
                    <label htmlFor="">Phone *</label>
                    <input type="number" class="form-control border-radius-100" id="" />
                </div>
                <div class="form-group col-md-6">
                    <label htmlFor="">Address Line 1</label>
                    <input type="text" class="form-control border-radius-100" id="" />
                </div>
                <div class="form-group col-md-6">
                    <label htmlFor="">Address Line 2</label>
                    <input type="text" class="form-control border-radius-100" id="" />
                </div>
                <div class="form-group col-md-6">
                    <label htmlFor="">City</label>
                    <input type="text" class="form-control border-radius-100" id="" />
                </div>
                <div class="form-group col-md-6">
                    <label htmlFor="">State/Province/Region</label>
                    <input type="text" class="form-control border-radius-100" id="" />
                </div>
                <div class="form-group col-md-6">
                    <label htmlFor="">ZIP code/Postal code</label>
                    <input type="text" class="form-control border-radius-100" id="" />
                </div>
                <div class="form-group col-md-6">
                    <label htmlFor="">Country</label>
                    <input type="text" class="form-control border-radius-100" id="" />
                </div>
                <div class="form-group col-md-12">
                    <label htmlFor="">Special Requirements</label>
                    <textarea class="form-control border-radius-25" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="form-row border-radius-25 booking-payment-sec mb-5">
                <div class="form-group col-md-12">
                    <label htmlFor="">Name on card *</label>
                    <input type="text" class="form-control border-radius-100" id="" />
                </div>
                <div class="form-group col-md-6">
                    <label htmlFor="">Card number *</label>
                    <input type="text" class="form-control border-radius-100" id="" />
                </div>
                <div class="form-group col-md-6 d-flex align-items-end cards-icon-wrp" >
                    <div class="form-control">
                        <img src="/images/cards-icon.png" alt="" />
                    </div>
                </div>
                <div class="form-group col-md-3">
                    <label htmlFor="">Expiration date *</label>
                    <input type="text" class="form-control border-radius-100" id="" placeholder="MM" />
                </div>
                <div class="form-group col-md-3 d-flex align-items-end">
                    <input type="text" class="form-control border-radius-100" id="" placeholder="YEAR" />
                </div>
                <div class="form-group col-md-3 d-flex align-items-end">
                    <input type="text" class="form-control border-radius-100" id="" placeholder="CVV" />
                </div>
                <div class="form-group col-md-3 d-flex align-items-end cards-icon-wrp">
                    <div class="form-control d-flex align-items-center">
                        <img src="/images/icon_ccv.png" alt="" />
                        <span class="fw-300">Last 3 Digit</span>
                    </div>
                </div>

                <hr class="d-block col-12 mt-5 mb-3" style={{ borderColor: '#888888', marginBottom: '0' }} />
                <div class="col-12">
                    <strong class="fs-16 fw-700">Or checkout with Paypal</strong>
                    <p class="fw-300">
                        Lorem ipsum dolor sit amet, vim id accusata sensibus, id ridens quaeque qui. Ne qui vocent ornatus molestie, reque fierent dissentiunt mel ea.
                    </p>
                </div>
            </div>
            <strong class="d-block fs-18 fw-700">Cancellation policy</strong>
            <div class="form-group chkbx">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label fw-300" htmlFor="exampleCheck1">I accept terms and conditions and general policy.</label>
            </div>
            <button type="submit" class="btn btn-typ1 col-md-6 m-auto pl-5 pr-5 border-radius-100 p-3">Submit</button>
        </form>
    )
}

export default FormPage