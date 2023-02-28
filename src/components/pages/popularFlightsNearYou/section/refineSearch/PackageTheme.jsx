import React, { useState } from 'react'
import Select from 'react-select'

function PackageTheme() {

    const options = [
        { value: 'Themes', label: 'Themes' },
        { value: 'Themes 1', label: 'Themes 1' },
        { value: 'Themes 2', label: 'Themes 2' }
    ]

    const [selectedOption, setSelectedOption] = useState({ value: 'Themes', label: 'Themes' })

    const handleSelectChange = selectedOption => {
        setSelectedOption(selectedOption)
    }

    return (
        <div className="filter-box col-lg-2 col-md-4">
            <Select
                className="package-themes"
                name="package-themes"
                value={selectedOption}
                options={options}
                onChange={handleSelectChange}
            />
        </div>
    )
}

export default PackageTheme