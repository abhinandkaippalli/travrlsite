import React, { useState } from 'react';
import Select from 'react-select';

function PricePerPerson() {

    const [selectedOption, setSelectedOption] = useState({
        value: 'Price Per Person',
        label: 'Price Per Person'
    });

    const options = [
        { value: 'Price Per Person', label: 'Price Per Person' },
        { value: 'Price 1', label: 'Price 1' },
        { value: 'Price 2', label: 'Price 2' }
    ];

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div className="filter-box col-lg-2 col-md-4">
            <Select
                className="price-per-person"
                name="price-per-person"
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
        </div>
    )
}

export default PricePerPerson