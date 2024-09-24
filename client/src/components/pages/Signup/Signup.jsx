import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import './Signup.css';
import redroses from '../../../assets/images/SignUp/redroses.jpg';
import pinkmagnolias from '../../../assets/images/SignUp/pinkmagnolias.webp';
import whitehydrangea from '../../../assets/images/SignUp/whitehydrangea.jpg';


const SIGNUP_MUTATION = gql `
    mutation signup($email: String!, $password: String!, $username: String!) {
    signupUser(email:$email, password:$password, username: $username) {
        password
        email
        username
        }
    }
`;

const Signup = (props) => {
    const [signupState, setSignupState] = useState({email: '', password:'', username: ''});
    const [signupUser, { error, data }] = useMutation(SIGNUP_MUTATION);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignupState({
            ...signupState,
            [name]: value,
        });
    }

    const handleSignupSubmit = async(event) =>{
        console.log('hello')
        event.preventDefault();
        try{
            const {data} = await signupUser({
                variables:{email:signupState.email, password:signupState.password, username: signupState.username},
            })
            if (data.signupUser) { // Adjust based on your mutation response
                console.log('Signup successful:', data.signupUser);
                // Redirect to the next page
                navigate('/Profile'); // Change to your desired route
            }
            //this is where we put redirect to next page
        } catch (e) {
            console.error(e);
        }

        setSignupState({
            email: '',
            password: '',
            username: '',
        });

    }
    return (
        <>
        <div className='carousel'>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={redroses} className="d-block w-100" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={pinkmagnolias} className="d-block w-100" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={whitehydrangea} className="d-block w-100" alt="Third slide" />
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
                <Link to="/">back to the profile.</Link>
            ) : (
            <>
             <div className="mb-3">
                            <label className="form-label">Username:</label>
                            <input
                                type="text"
                                className='textinput'
                                name="username"
                                placeholder="Enter Your Username"
                                value={signupState.username}
                                onChange={handleChange}
                            />
                        </div>

            <div className="mb-3" onSubmit={handleSignupSubmit}>
                <label className="form-label">Email:</label>
                <input
                    type="text"
                    className="textinput"
                    name="email"
                    placeholder="Enter Your Email"
                    id="email-signup"
                    value={signupState.email}
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
                    id="password-signup"
                    value={signupState.password}
                    onChange={handleChange}
                />
            </div>
            
            <button onClick={handleSignupSubmit} className='btnSignup' type='submit'>Sign Up</button>
            
            </>
            )}

            {error && (
                <div className="my-3 p-3 bg-danger text-white">
                {error.message}
                </div>
            )}
        </form>
        </div>
        
        </>
    );
};

export default Signup;