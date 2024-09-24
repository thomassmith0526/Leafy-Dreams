
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
<<<<<<< HEAD
                 <h2>A place where plant lovers can find all of their plant resource needs.</h2>
=======
                 <h2>A place where plant lovers can find all of their plant resource needs.<br></br>We can add additional text here later</h2>
>>>>>>> 6cef46febcf8d1eca759765d0c78c4f545916d70

                </div>
                <div className='column2'>
                    {/* about us info would go here */}
                 <h1>Info about Plant Finder</h1><br></br>
                 <h2>Here you will find...</h2>
                </div>
            </div> 
        </div>
        </>
    );
};

export default Home;