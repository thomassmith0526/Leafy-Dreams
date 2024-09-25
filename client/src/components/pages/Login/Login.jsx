import './Login.css';
import firbabies from '../../../assets/images/Login/whitefir.jpg';
import yucca from '../../../assets/images/Login/yucca.jpg';
import ginger from '../../../assets/images/Login/ginger.webp';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SELECT_USER } from '../../../utils/Query';
import '../Signup/Signup.css'
import { AuthContext } from '../../../utils/AuthContext';

const Login = () => {
    const [loginState, setLoginState] = useState({email: '', password:''});
    const {login, logout, isLoggedIn} = useContext(AuthContext); 
    const navigate = useNavigate();
    const { data, loading, error} = useQuery(SELECT_USER, {
        variables: {email:loginState.email},
        skip: !loginState.email
    });
    
    console.log('Requesting user with email:', loginState.email);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginState((oldData) => {
            const updatedData = {
                ...oldData,
                [name]: value
            };
            return updatedData;
        });
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        console.log('Login Form Data:', loginState);
        try { 
            if (data && data.getUser) {
                    console.log('User found:', data.getUser)
                    login(data.getUser);
                    navigate('/Profile', { state: { userData: data.getUser }});

                
            } else {
                alert('Email or password is incorrect.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred during login. Please try again.');
        }
    };

    return (
        <>
        <div className='carousel'>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={firbabies} className="d-block w-100" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={yucca} className="d-block w-100" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={ginger} className="d-block w-100" alt="Third slide" />
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
        </div>
        <div className='signup_container'>
            
            <form onSubmit={handleLoginSubmit}>
            <div className="mb-3" >
                <label htmlFor='email' className="form-label">Email:</label>
                <input
                    type="text"
                    className="textinput"
                    name="email"
                    placeholder="Enter Your Email"
                    id="email-login"
                    value={loginState.email}
                    onChange={handleChange}
                />
            </div>
            
            <div className="mb-3">
                <label htmlFor= 'password' className="form-label">Password:</label>
                <input
                    type="password"
                    className="textinput"
                    name="password"
                    placeholder="Enter Your Password"
                    id="password-login"
                    value={loginState.password}
                    onChange={handleChange}
                />
            </div>

                {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                    </div>
            )}

                    <button type='submit' disabled={loading}>
                        {loading ? 'Submitting...' : 'Login'}
                    </button>
            </form>
                <h2>Don't have an account?</h2>
                <Link to={'/Signup'}>
                    <button type='submit'>Sign-up</button>
                </Link>
        </div>
        </>
    );
};

export default Login;