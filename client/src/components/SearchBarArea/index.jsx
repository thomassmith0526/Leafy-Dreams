import React, {useState} from "react";

const BarSearch =() => {
    const [searchArea, setSearchArea] = useState('');

    const handleInputChange =(event) => {
        setSearchArea(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        //search logic
        console.log('Searching for', searchArea);
    };

    return (
        <form onSubmit={ handleSearch }>
            <input
                type="text"
                value = {searchArea}
                onChange={handleInputChange}
                placeholder="Search Location"
                />
                <button type="submit">Search</button>
        </form>
    );
};

export default BarSearch;