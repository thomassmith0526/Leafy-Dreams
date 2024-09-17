import React from 'react';

import SearchBarArea from '../../components/SearchBarArea';
import SearchBarPlanet from '../../components/SearchBarPlanets';

const Profile = () => {
    return (
        <main>
            <div className='flex row'>
                <SearchBarArea></SearchBarArea>
            </div>
            <div className='Planet'>
                <SearchBarPlanet></SearchBarPlanet>
            </div>
            <h1>Profile</h1>
        </main>
    )
}

export default Profile;
