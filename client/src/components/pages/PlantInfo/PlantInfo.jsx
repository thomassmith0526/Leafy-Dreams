import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import '../PlantInfo/PlantInfo.css';
import '../Profile/Profile.jsx'
import searchPlant from '../../SearchBarPlants/index.jsx'
const PlantInfo = () => {
    const [searchParams]= useSearchParams();
    const searchPlant = searchParams.get('search')
    const [plant, setPlant] = useState(null);
const [urlimg, setUrlimg] =useState()
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
                    
                    //needs a for loop
                }  
                setUrlimg(data.data[0]?.default_image.small_url) 
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
        <>
        <div className='wrapper'>
            <header className='header'>
                <h1>The Plant 411</h1></header>

                <article className='main'>
                    <div className='plantimage'>
                          {plant ? (
                            <div>
                              {urlimg ?(
                                <img src={urlimg} alt='plant picture'></img>    
                              ) : (<p>Loading</p>)} 
                              
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}    
                    </div>
                    <div className='plantname'>
                        <h2>Plant Name</h2>
                      
                        {searchPlant && <p> {searchPlant}</p>}
                    </div>
                </article>

                <article className='secondary'>
                    <div id='plantcare'>The watering level is {plant?.watering} </div>
                </article>

                <article className='third'>
                    <div id='propagation'>Information regarding growth rate, propagation and toxicity safety levels in this div.</div>
                </article>

                <aside className='aside aside-1'>
                    <div id='zoning'>Zoning area information in this div. Maybe an image of a zone number</div>
                </aside>

                <aside className='aside aside-2'>
                    <div id='native'>Native area information goes in this div</div>
                </aside>

                <footer className='footer'>
                    <h4>Made with ❤️ by Group 1</h4>
                    <h5>Josh, Crystal, Thomas, Miranda, Cesar, Sunny</h5>
                </footer>
        </div>
        </>
    );
};

export default PlantInfo;