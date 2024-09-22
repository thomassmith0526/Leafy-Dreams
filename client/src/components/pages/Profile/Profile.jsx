 import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
import '../Profile/Profile.css'
import SearchBarArea from '../../SearchBarArea/index';
import SearchBarPlant from '../../SearchBarPlants/index';
import searchPlant from '../../SearchBarPlants/index'
const Profile = () => {
    const [searchParams]= useSearchParams();
    const searchPlant = searchParams.get('search')
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        const fetchPlant = async () => {
            try {
                const res = await fetch(`https://perenual.com/api/species-list?key=sk-hjux66ef51ce55fd36940&q=${searchPlant}`);
                if (!res.ok) {
                    throw new Error(`Didn't actually get data`);
                }
                const data = await res.json();
                console.log(data);

                if (data.data && data.data.length > 0) {
                    setPlant(data.data[0]);
                    // if (data.data && data.data.length > 0) {
                    //     for (let i = 0; i < data.data.length; i++) {
                    //         setPlant(data.data[i]);
                        // }
                    // }
                    //needs a for loop
                }
            }   catch (error) {
                console.log('Error fetching data', error);
            }
        };

        fetchPlant();
    }, []);

    useEffect(() => {
        console.log(plant);
    }, []);

    useEffect(() => {
        console.log(plant);
    }, []);
console.log(plant)

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
                    {plant ? (
                            <div>
                                {/* {plant._id.default_image.medium_url} */}
                                {searchPlant}
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                </div>
            

            <div className='History'>
                <h2>Your Zone</h2>
                <h3>zone ##</h3>
            </div>
        </main>
    )
}

export default Profile;
