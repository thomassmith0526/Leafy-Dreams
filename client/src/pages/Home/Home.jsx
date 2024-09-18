import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import plantPic1 from '../../assets/plantpic1.webp';
import plantPic2 from '../../assets/plantpic2.webp';
import plantPic3 from '../../assets/plantpic3.webp';

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
            <div className='aboutUsBox'>
                 {/* about us info would go here */}
                 <h1>About Us Info</h1>
            </div>
            <div className='plantFinderBox'>
                 {/* about us info would go here */}
                 <h1>Info about Plant Finder/link to Plant Finder</h1>
            </div>
        </div>
        </>
    )
}

export default Home;