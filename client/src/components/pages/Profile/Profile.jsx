import React from 'react';

import SearchBarArea from '../../SearchBarArea';
import SearchBarPlant from '../../SearchBarPlanets';

const Profile = () => {
    return (
        <main> 
            <h1>Profile</h1>
            <div className='Location'>
                <SearchBarArea></SearchBarArea>
            </div>
            <div className='Planet'>
                <SearchBarPlant></SearchBarPlant>
            </div>
            <div className='Recent'> 
                 <h2>Recent Searches</h2> 
            </div>
            <div className='History'>
                <h2>Your Zone</h2>
            </div>
        </main>
    )
}

export default Profile;
