import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import '../Signup/Signup.css';
import './Login.css';
import firbabies from '../../../assets/images/Login/whitefir.jpg';
import yucca from '../../../assets/images/Login/yucca.jpg';
import ginger from '../../../assets/images/Login/ginger.webp';

const LOGIN_MUTATION = gql `
    mutation login($email: String!, $password: String!) {
    loginUser(email:$email, password:$password) {
        password
        email
        }
    }
`;

const Login = (props) => {
    const [loginState, setLoginState] = useState({email: '', password:''});
    const [loginUser, { error, data }] = useMutation(LOGIN_MUTATION);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginState({
            ...loginState,
            [name]: value,
        });
    }

    const handleLoginSubmit = async(event) =>{
        console.log('hello')
        event.preventDefault();
        try{
            const {data} = await loginUser({
                variables:{email:loginState.email, password:loginState.password},
            })
            if (data.loginUser) { // Adjust based on your mutation response
                console.log('Login successful:', data.loginUser);
                // Redirect to the next page
                navigate('/Profile'); // Change to your desired route
            }
            //this is where we put redirect to next page
        } catch (e) {
            console.error(e);
        }

        setLoginState({
            email: '',
            password: '',
        });

    }
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
        <form>
            {data ?(
                <Link to="/"></Link>
            ) : (
            <>
            <div className="mb-3" onSubmit={handleLoginSubmit}>
                <label className="form-label">Email:</label>
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
                <label className="form-label">Password:</label>
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
            
            <button onClick={handleLoginSubmit} className='btnLogin' type='submit'>Login</button>
            
            </>
            )}

            {error && (
                <div className="my-3 p-3 bg-danger text-white">
                {error.message}
                </div>
            )}
        </form>
        <div className='noaccountdiv'>
        <h2 className='noaccount'>Don't have an account?</h2>
            <Link to={'/Signup'}>
            <button className='btnSubmit' type='submit'>Sign-up</button>
            </Link>
            </div>
        </div>
        </>
    );
};

export default Login;