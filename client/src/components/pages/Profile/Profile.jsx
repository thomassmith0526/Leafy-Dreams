import {useState, useEffect, useContext} from 'react';
import { useSearchParams } from 'react-router-dom';
import '../Profile/Profile.css';
import { AuthContext } from '../../../utils/AuthContext';
// import SearchBarArea from '../../SearchBarArea/index';
// import SearchBarPlant from '../../SearchBarPlants/index';

const Profile = () => {
    const { user } = useContext(AuthContext);
    
    const [searchParams]= useSearchParams();
    const searchPlant = searchParams.get('search');
    const [plant, setPlant] = useState(null);


    
    // useEffect(() => {
    //     const fetchPlant = async () => {
    //         try {
    //             const res = await fetch(`https://perenual.com/api/species-list?key=sk-hjux66ef51ce55fd36940&q=${searchPlant}`);
    //             if (!res.ok) {
    //                 throw new Error(`Didn't actually get data`);
    //             }
    //             const data = await res.json();
    //             console.log(data);

    //             if (data.data && data.data.length > 0) {
    //                 setPlant(data.data[0]);
    //                 // if (data.data && data.data.length > 0) {
    //                 //     for (let i = 0; i < data.data.length; i++) {
    //                 //         setPlant(data.data[i]);
    //                     // }
    //                 // }
    //                 //needs a for loop
    //             }
    //         }   catch (error) {
    //             console.log('Error fetching data', error);
    //         }
    //     };

    //     fetchPlant();
    // }, []);

    // useEffect(() => {
    //     console.log(plant);
    // }, []);

//     useEffect(() => {
//         console.log(plant);
//     }, []);
// console.log(plant)

    return (
        <main>
        <div id="content" className="container p-0">
            <div className="profile-header">
                <div className="profile-header-cover"></div>
                <div className="profile-header-content">
                    <div className="profile-header-img">
                        <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt="Clyde Stanley"
                        />
                    </div>
                    <div className="profile-header-info">
                        <h4 className="m-t-sm">{user.userName}</h4>
                        <p className="m-b-sm">UXUI + Frontend Developer</p>
                        <a href="#" className="btn btn-xs btn-primary mb-4">Edit Profile</a>
                    </div>
                </div>

                <ul className="profile-header-tab nav nav-tabs">
                    <li className="nav-item">
                        <a
                            href="https://www.bootdey.com/snippets/view/bs4-profile-with-timeline-posts"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link_"
                        >
                            POSTS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="https://www.bootdey.com/snippets/view/bs4-profile-about"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link_"
                        >
                            ABOUT
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="https://www.bootdey.com/snippets/view/profile-photos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link_"
                        >
                            PHOTOS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="https://www.bootdey.com/snippets/view/profile-videos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link_"
                        >
                            VIDEOS
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="https://www.bootdey.com/snippets/view/bs4-profile-friend-list"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link_ active show"
                        >
                            FRIENDS
                        </a>
                    </li>
                </ul>
            </div>

     
            <div className='Name'>
                <h1>Profile</h1>
            </div>
            
            {/* <div className='Location'>
                <SearchBarArea></SearchBarArea>
            </div>
            <div className='Planet'>
                <SearchBarPlant></SearchBarPlant>
            </div> */}
           
                <div className='Recent'>
                    <h2>Your Plants</h2>
                    {plant ? (
                            <div>
                                {/* {plant._id.default_image.medium_url} */}
                                {searchPlant}
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                </div>
            

            {/* <div className='History'>
                <h2>Your Zone</h2>
                <h3>zone ##</h3>
            </div> */}
            </div>

              {/* Personal Information Section */}
              <div className="col-md-4 hidden-xs hidden-sm">
                    <ul className="profile-info-list">
                        <li className="title">PERSONAL INFORMATION</li>
                        <li>
                            <div className="field">Occupation:</div>
                            <div className="value">UXUI / Frontend Developer</div>
                        </li>
                        <li>
                            <div className="field">Skills:</div>
                            <div className="value">C++, PHP, HTML5, CSS, jQuery, MYSQL, Ionic, Laravel, Phonegap, Bootstrap, Angular JS, Asp.net</div>
                        </li>
                        <li>
                            <div className="field">Birth of Date:</div>
                            <div className="value">1989/11/04</div>
                        </li>
                        <li>
                            <div className="field">Country:</div>
                            <div className="value">San Francisco</div>
                        </li>
                        <li>
                            <div className="field">Address:</div>
                            <div className="value">
                                <address className="m-b-0">
                                    Twitter, Inc.<br />
                                    1355 Market Street, Suite 900<br />
                                    San Francisco, CA 94103
                                </address>
                            </div>
                        </li>
                        <li>
                            <div className="field">Phone No.:</div>
                            <div className="value">
                                (123) 456-7890
                            </div>
                        </li>
                    </ul>
                </div>
        </main>
    );
}

export default Profile;
