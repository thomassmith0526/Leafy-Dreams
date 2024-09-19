import React from 'react';
import '../PlantInfo/PlantInfo.css'
// import './PlantInfo.js'

const PlantInfo = () => {
    return (
        <>
        <div className='wrapper'>
            <header className='header'>
                <h1>The Plant 411</h1></header>

                <article className='main'>
                    <div className='plantimage'>Image of plant goes in this div.  
                    </div>
                    <p className='plantname'>
                        <h2>Plant Name</h2>
                    </p>
                </article>

                <article className='secondary'>
                    <div id='plantcare'>information regarding sun exposure, types of fertilizer needed, soil type and watering in this div</div>
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