import React, {useState} from "react";
import { Link } from 'react-router-dom'
const SearchBar =() => {
    const [searchPlant, setSearchPlant] = useState('');

    const handleInputChange = (event) => {
        setSearchPlant(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        //search logic
        console.log('Searching for', searchPlant);
    };

    return (
        <form onSubmit={ handleSearch}>
            <input
                type="text"
                value = {searchPlant}
                onChange={handleInputChange}
                placeholder="Search Plants"
                />
                <Link to ={'/plant-info'}>
                <button type="submit">Search</button>
                </Link>
                
                
        </form>
    );
};

export default SearchBar;



















