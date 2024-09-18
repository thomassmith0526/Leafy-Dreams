import React, {useState} from "react";
import { Link } from 'react-router-dom'
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
                <Link to={'/area-info'}>
                <button type="submit">Search</button>
                </Link>
            </form>
    );
};

export default BarSearch;