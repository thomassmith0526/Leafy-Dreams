import React from 'react';
import '../Profile/Profile.css'
import SearchBarArea from '../../SearchBarArea';
import SearchBarPlant from '../../SearchBarPlants';

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
                    <ul>
                        <li>rose</li>
                        <li>rose</li>
                        <li>rose</li>
                        <li>rose</li>
                    </ul>
                </div>
            

            <div className='History'>
                <h2>Your Zone</h2>
                <h3>zone ##</h3>
            </div>
        </main>
    )
}

export default Profile;
