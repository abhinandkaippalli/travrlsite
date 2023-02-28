import React, { useState } from 'react'
import Select from 'react-select'

function MonthOfTravel() {

    const options = [
        { value: 'month-of-travel', label: 'month-of-travel' },
        { value: 'Jan', label: 'Jan' },
        { value: 'Feb', label: 'Feb' },
        { value: 'Mar', label: 'Mar' }
    ]

    const [selectedOption, setSelectedOption] = useState(options[0])

    const handleSelectChange = selectedOption => {
        setSelectedOption(selectedOption)
    }

    return (
        <div className="filter-box col-lg-2 col-md-4">
            <Select
                className="month-of-travel"
                name="month-of-travel"
                value={selectedOption}
                options={options}
                onChange={handleSelectChange}
            />
        </div>
    )
}

export default MonthOfTravel