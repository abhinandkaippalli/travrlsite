import React, { useState } from 'react'
import Select from 'react-select'

function PackageType() {

    const options = [
        { value: 'Package Type', label: 'Package Type' },
        { value: 'Package Type 1', label: 'Package Type 1' },
        { value: 'Package Type 2', label: 'Package Type 2' }
    ]

    const [selectedOption, setSelectedOption] = useState(options[0])

    const handleSelectChange = selectedOption => {
        setSelectedOption(selectedOption)
    }

    return (
        <div className="filter-box col-lg-2 col-md-4">
            <Select
                className="package-type"
                name="package-type"
                value={selectedOption}
                options={options}
                onChange={handleSelectChange}
            />
        </div>
    )
}

export default PackageType