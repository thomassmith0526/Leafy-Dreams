import React, { useState, useEffect, useContext } from 'react';
import SearchModal from '../pages/Search/SearchModal';
import { useMutation } from '@apollo/client';
import { ADD_USER_PLANT_MUTATION } from "../../utils/Mutation.js"
import { AuthContext } from '../../utils/AuthContext.jsx';


const PlantBar = () => {
    const { user, updateUserPlants } = useContext(AuthContext);
    console.log(user);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [plants, setPlants] = useState([]);
    const [selectedPlant, setSelectedPlant] = useState(""); // State for selected plant
    const [plantDetails, setPlantDetails] = useState(null);
    const [selectedPlantId, setSelectedPlantId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addPlant] = useMutation(ADD_USER_PLANT_MUTATION, {
        onError: (error) => {
            console.error('Error adding plant:', error);
        },
        onCompleted: (data) => {
            console.log('Plant added:', data);
        }
    });

    const searchPlants = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://perenual.com/api/species-list?key=sk-hjux66ef51ce55fd36940&q=${selectedPlant}`);
            if (!response.ok) {
                const errorDetails = await response.text();
                console.error('Response error:', response.status, errorDetails)
                throw new Error('you fed up');
            }
            const data = await response.json();
            setPlants(data.data);
            console.log(data.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (selectedPlant) { // Only fetch if selectedPlant is defined
            searchPlants();
        }
    }, [selectedPlant]); // This runs when selectedPlant changes

    const fetchPlantDetails = async (plantId) => {
        console.log('Fetching details for Plant ID:', plantId);
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://perenual.com/api/species/details/${plantId}?key=sk-hjux66ef51ce55fd36940&q`);
            if (!response.ok) {
                throw new Error('Failed to get plant details');
            }
            const data = await response.json();
            setPlantDetails(data);
            setSelectedPlantId(plantId);
            console.log(data);
            //how do i get these to go into the user plants array?!
            console.log(plantId);
            console.log(data.common_name);
            setIsModalOpen(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPlantDetails(null);
    };

    const handleAddPlant = async () => {
        if (plantDetails && user) {
            const commonName = plantDetails.common_name;
            try {
                const { data } = await addPlant({ variables: { email: user.email, commonName } });
                console.log('Mutation result:', data);

                const updatedPlants = [...user.plant, { _id: data.addPlant.plant[data.addPlant.plant.length - 1]._id, commonName}];
                updateUserPlants(updatedPlants);
            } catch (error) {
                console.error('Error calling addPlant:', error);
            }
        }
    };
    return (
        <>
        <div className="searchBody">
        <h1>Search</h1>
       <input
            type='text'
            value={selectedPlant}
            onChange={(e) => setSelectedPlant(e.target.value)}
            placeholder='Enter plant name'
            />
        
        {error && <p>Error: {error}</p>}   
   
     

         <div className='searchResults'>
            {plants.length > 0 && (
                <ul>
                    {plants.map((plant) => (
                        <li key={plant.id}>
                            {plant.default_image?.thumbnail ? (
                                <img src={plant.default_image.thumbnail} alt={plant.common_name} />
                            ) : (
                                <p>No thumbnail available</p>
                            )}
                            <p>
                                <button onClick={() => fetchPlantDetails(plant.id)}>
                                    {plant.common_name || 'No search results'}
                                </button>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </div>
        <SearchModal isOpen={isModalOpen} onClose={closeModal} addPlant={handleAddPlant} commonName={plantDetails?.common_name || 'N/A'}>
        {plantDetails && (
            <div className='plantDetails'>
                <img src={plantDetails.default_image.thumbnail} alt={plantDetails.common_name} />
                <p>Common Name: {plantDetails.common_name || 'N/A'}</p><hr />
                <p>Scientific Name: {plantDetails.scientific_name?.[0] || 'N/A'}</p><hr />
                <p>Other Names: {plantDetails.other_name?.[0] || 'N/A'}</p><hr />
                <p>Cycle: {plantDetails.cycle || 'N/A'}</p><hr />
                <p>Watering: {plantDetails.watering || 'N/A'}</p><hr />
                <p>Depth Water Requirement: {plantDetails.depth_water_requirement?.[0] || 'N/A'}</p><hr />
                <p>Watering Period: {plantDetails.watering_period || 'N/A'}</p><hr />
                <p>Watering General Benchmark:</p>
                    <p>Unit: {plantDetails.watering_general_benchmark?.unit || 'N/A'}</p>
                    <p>Value: {plantDetails.watering_general_benchmark?.value || 'N/A'}</p><hr />
                <p>Plant Anatomy:</p>
                    {plantDetails.plant_anatomy?.length > 0 ? (
                        <ul>
                            {plantDetails.plant_anatomy?.map((anatomy, index) => (
                                <li key={index}>
                                    {anatomy.part}: {anatomy.color.join(', ') || 'N/A'}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>N/A</p>
                    )}<hr />
                <p>Sunlight: {plantDetails.sunlight?.[0] || 'N/A'}</p><hr />
                <p>Pruning Months: {plantDetails.pruning_month?.[0] || 'N/A'}</p> 
                    {plantDetails.pruning_month && plantDetails.pruning_month.length > 0 ? (
                        <ul>
                            {plantDetails.pruning_month.map((month, index) => (
                                <li key={index}>
                                    {month || 'N/A'}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>N/A</p>
                    )}<hr />
            </div>   
        )}
    </SearchModal>
</>
    );
};

export default PlantBar;




















