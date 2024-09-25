
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import plantPic1 from '../../../assets/images/Home/plantPic1.jpeg';
import plantPic2 from '../../../assets/images/Home/plantpic2.webp';
import plantPic3 from '../../../assets/images/Home/plantpic3.webp';

const Home = () => {
    return (
        <>
        <div className='homeBody'>
            {/* Bootstrap Carousel */}
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={plantPic1} className="d-block w-100" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={plantPic2} className="d-block w-100" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={plantPic3} className="d-block w-100" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
            </div>
            <div id='row' className='aboutUsBox'>
                <div className='column1'>
                    {/* about us info would go here */}
                 <h1>Welcome to Leafy Dreams!</h1><br></br>
                 <h2> At Leafy Dreams we are a team of six friends who came together to create a working tool of all known plant species. We created this tool to help identify plant life in your zone or just for your own curiosity.We believe that nature is the, most powerful piece of life. 
                 Our mission is to make it simple for anyone to help the environment by giving the helping power to plant new plant life.So if you don't know what plant is good for your area or how to care for it, we have all the answers to help you get started to make your Leafy Dreams come true.  <br></br>
                </h2>

                </div>
                <div className='column2'>
                    {/* about us info would go here */}
                 <h1>What to expect from Plant Finder</h1><br></br>
                 <h2>-Common name(s) of the plant(s)<br></br><br></br>
                     -Cycle Type  <br></br><br></br>(annual, biennial, or perennial.)<br></br><br></br>
                     -Watering Times<br></br><br></br> 
                     -How Frequent <br></br><br></br>
                     -Sunlight & More

</h2>
                </div>
            </div>
            <div className='benefitsdiv'>
                <div className='benefits'>
                    <h3>Benefits of our site:</h3>
                    -Habitat for wildlife<br></br>
                    -Fight climate change<br></br>
                    -Increase property value<br></br>
                    -Enhance air quality<br></br>
                    -Support biodiversity<br></br>
                    -Central erosion<br></br>
                    -Reduce stress
                </div>
            </div> 
        </div>
        </>
    );
};

export default Home;