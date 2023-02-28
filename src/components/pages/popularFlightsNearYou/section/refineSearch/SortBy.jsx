import React, { useState } from 'react'
import Select from 'react-select'

function SortBy() {

    const options = [
        { value: 'Select', label: 'Select' },
        { value: 'Price - Low to High', label: 'Price - Low to High' },
        { value: 'Price - High to Low', label: 'Price - High to Low' },
        { value: 'Duration - Low to High', label: 'Duration - Low to High' },
        { value: 'Duration - High to Low', label: 'Duration - High to Low' },
        { value: 'Bookable Online', label: 'Bookable Online' },
        { value: 'Recommended', label: 'Recommended' }
    ]

    const [selectedOption, setSelectedOption] = useState(options[0])

    const handleSelectChange = selectedOption => {
        setSelectedOption(selectedOption)
    }


    return (
        <div>
            <Select
                className="sort-by"
                name="sort-by"
                value={selectedOption}
                options={options}
                onChange={handleSelectChange}
            />
        </div>
    )
}

export default SortBy