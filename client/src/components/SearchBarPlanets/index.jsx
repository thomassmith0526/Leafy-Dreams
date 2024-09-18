import React, {useState} from "react";

const SearchBar =() => {
    const [searchPlanet, setSearchPlanet] = useState('');

    const handleInputChange = (event) => {
        setSearchPlanet(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        //search logic
        console.log('Searching for', searchPlanet);
    };

    return (
        <form onSubmit={ handleSearch}>
            <input
                type="text"
                value = {searchPlanet}
                onChange={handleInputChange}
                placeholder="Search Planets"
                />
                {/* <Link to ={'/planet-info'}> */}
                <button type="submit">Search</button>
                {/* </Link> */}
                
                
        </form>
    );
};

export default SearchBar;



















