import React from 'react';

import SearchBarArea from '../../components/SearchBarArea';
import SearchBarPlanet from '../../components/SearchBarPlanets';

const Profile = () => {
    return (
        <main> 
            <h1>Profile</h1>
            <div className='Location'>
                <SearchBarArea></SearchBarArea>
            </div>
            <div className='Planet'>
                <SearchBarPlanet></SearchBarPlanet>
            </div>
           
        </main>
    )
}

export default Profile;
