import { useContext } from 'react';
import '../Profile/Profile.css';
import { AuthContext } from '../../../utils/AuthContext';
import noImage from '../../../assets/images/no-image-found.webp';

const Profile = () => {
    const { user } = useContext(AuthContext);

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
           
                <div className='Recent'>
                    <h2>Your Plants</h2>
                    <p>{user.plant.length > 0 ? (
                        user.plant.map((plant) => (
                            <div key={plant._id}>
                            {plant.thumbNail ? (
                            <img src={plant.thumbNail} alt='No image' />
                        ) : <img id='noImage' src={noImage} alt='No Image' />}

                                {/* <img src={plant.thumbNail} alt='No Image' /> */}
                                <span>{plant.commonName}<br></br></span>
                            </div>
                        ))                       
                    ) : (
                        <span>No plants added</span>
                    )}</p>
                </div>
            
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
