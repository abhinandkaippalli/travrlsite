import React, { useState } from 'react';
import Select from 'react-select';

function DeptCity() {

    const [selectedOption, setSelectedOption] = useState({ value: 'Depature City', label: 'Depature City' });

    const options = [
        { value: 'Depature City', label: 'Depature City' },
        { value: 'City 1', label: 'City 1' },
        { value: 'City 2', label: 'City 2' }
    ];

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div className="filter-box col-lg-2 col-md-4">
            <Select
                className="dep-city"
                name="dept-city"
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
        </div>
    )
}

export default DeptCity