import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

const plantSearch = () => {
    const [plant, setPlant] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/results', {state: {plant} });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={plant}
                onChange={(e) => setPlant(e.target.value)}
                placeholder="Search"
            />
        </form>
    )
}

export default Search 
