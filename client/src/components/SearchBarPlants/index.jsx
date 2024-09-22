import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PlantSearch = () => {
    const [searchPlant, setSearchPlant] = useState('');
    const [plants, setPlants] = useState([]);
    const [redirect, setRedirect] = useState(false); // State to handle redirection

    // useEffect(() => {
    //     const fetchPlants = async () => {
    //         try {
    //             const res = await fetch('https://perenual.com/api/species-list?key=sk-2V6W66ef5c906c6ba6942');
    //             const data = await res.json();
    //             console.log(data);

    //             setPlants(data); // Store fetched data in plants state
    //         } catch (error) {
    //             console.log('Error fetching data', error);
    //         }
    //     };

    //     fetchPlants();
    // }, []);

    const handleInputChange = (event) => {
        setSearchPlant(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching for', searchPlant);
        setRedirect(true);
    };

    // If redirect is true, navigate to the plant-info page
    if (redirect) {
        return <Navigate to={`/plant-info?search=${searchPlant}`} />;
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={searchPlant}
                onChange={handleInputChange}
                placeholder="Search Plants"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default PlantSearch;