import React, { useState } from 'react'
import Select from 'react-select'

function TravelDuration() {

    const [selectedOption, setSelectedOption] = useState({ value: 'Duration', label: 'Duration' })

    const options = [
        { value: 'Duration', label: 'Duration' },
        { value: '1 hr', label: '1 hr' },
        { value: '2 hr', label: '2 hr' },
        { value: '3 hr', label: '3 hr' }
    ]

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div className="filter-box col-lg-2 col-md-4">
            <Select
                className='travel-duration'
                name='travel-duration'
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
        </div>
    )
}

export default TravelDuration