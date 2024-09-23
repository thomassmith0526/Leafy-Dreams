import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import '../PlantInfo/PlantInfo.css';
import '../Profile/Profile.jsx'
import searchPlant from '../../SearchBarPlants/index.jsx'
import SearchBarArea from '../../SearchBarArea'
import SearchBarPlant from '../../SearchBarPlants'
const Profile = () => {
    const [plants, setPlants] = useState([]); // Change to an array
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const res = await fetch(`https://perenual.com/api/species-list?key=sk-hjux66ef51ce55fd36940&q=${searchInput}`);
                if (!res.ok) {
                    throw new Error(`Didn't actually get data`);
                }

                const data = await res.json();
                console.log(data);
                 
                if (data.data && data.data.length > 0) {
                    setSearchInput(data); // Set the entire array of plants
                    console.log("data", data)
                    console.log("data filtered", data.data.common_name)
                }  
            } catch (error) {
                console.log('Error fetching data', error);
            }
        };

        fetchPlants();
    }, [searchPlant]); // Add searchPlant as a dependency if you want to fetch on search

    return (
        <main>
            <div className='Name'>
                <h1>Profile</h1>
            </div>
            
            <div className='Location'>
                <SearchBarArea ></SearchBarArea>
            </div>
            <div className='Planet'>
                
                <SearchBarPlant></SearchBarPlant>
            </div>
         
            <div className='Recent'>
                <h2>Results</h2>
                {plants?.map((plant, index) => (
                    <div key={index}>
                        <p>{plant.common_name}</p> {/* Display each plant's common name */}
                    </div>
                ))}
            </div>

            <div className='History'>
                <h2>Your Zone</h2>
                <h3>zone ##</h3>
            </div>
        </main>
    );
}

export default Profile;