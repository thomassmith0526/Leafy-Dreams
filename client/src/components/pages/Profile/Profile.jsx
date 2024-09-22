import React from 'react';
// import React from 'react-router-dom';
import '../Profile/Profile.css'
import SearchBarArea from '../../SearchBarArea/index';
import SearchBarPlant from '../../SearchBarPlants/index';
import searchPlant from '../../SearchBarPlants/index'
const Profile = () => {
    return (
        <main>
            <div className='Name'>
                <h1>Profile</h1>
            </div>
            
            <div className='Location'>
                <SearchBarArea></SearchBarArea>
            </div>
            <div className='Planet'>
                <SearchBarPlant></SearchBarPlant>
            </div>
           
                <div className='Recent'>
                    <h2>Recent Searches</h2>
                    <ul>
                        {/* <li>{searchPlant}</li>
                        <li>rose</li>
                        <li>rose</li>
                        <li>rose</li> */}
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
