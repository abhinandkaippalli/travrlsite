import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function EnquiryForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleChangeStart = (date) => {
        setStartDate(date);
    }

    const handleChangeEnd = (date) => {
        setEndDate(date);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('')
        setEmail('')
        setStartDate('')
        setEndDate('')
    }

    return (
        <form action="" className="right-blue-box light-blue-bg border-radius-25 form-group" onSubmit={handleSubmit}>
            <strong className="title-typ1 d-block text-center fw-700 white-txt mb-3">ENQUIRY</strong>
            <p className="text-center fw-400 white-txt">Malesuada incidunt excepturi proident quo eros? Sinterdum praesent magnis, eius cumque.
            </p>
            <div className="form-row">
                <div className="col-12 mb-2">
                    <input type="text" placeholder="Name" className="form-control fw-500 border-radius-100" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-12 mb-2">
                    <input type="email" placeholder="Email" className="form-control fw-500 border-radius-100" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-lg-6 mb-3 calndr-icon text-center">
                    <label htmlFor="" className="fw-500 white-txt">Checkin Date</label>
                    <div type="text" className="form-control fw-500 border-radius-100" id="from" name="from" >
                        <DatePicker
                            selected={startDate}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            minDate={new Date()}
                            onChange={handleChangeStart}
                            placeholderText="From"
                            dateFormat="MM/dd/yyyy"
                        />
                    </div>
                </div>
                <div className="col-lg-6 mb-3 calndr-icon text-center">
                    <label htmlFor="" className="fw-500 white-txt">Checkout Date</label>
                    <div className="form-control fw-500 border-radius-100" id="to" name="to">
                        <DatePicker
                            selected={endDate}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            onChange={handleChangeEnd}
                            placeholderText="To"
                            dateFormat="MM/dd/yyyy"
                        />
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <input type="submit" value="send" className="btn btn-typ2 border-radius-100 w-100 uppercase-txt" />
                </div>
            </div>
            <p className="text-center fw-500 white-txt">Thank you for your message. It has been sent.</p>
        </form>
    )
}

export default EnquiryForm