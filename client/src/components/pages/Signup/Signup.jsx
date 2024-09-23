import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import './signup.css'

const SIGNUP_MUTATION = gql `
    mutation signup($email: String!, $password: String!, $username: String!) {
    signupUser(email:$email, password:$password, username: $username) {
        password
        email
        username
        }
    }
`;

const Signup = () => {
    const [signupState, setSignupState] = useState({email: '', password:'', username: ''});
    const [signupUser, { error, data }] = useMutation(SIGNUP_MUTATION);
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignupState({
            ...signupState,
            [name]: value,
        });
    }

    const handleSignupSubmit = async(event) =>{
        console.log('Signup Data:',  signupState)
        event.preventDefault();
        try{
            const {data} = await signupUser({
                variables:{...signupState},
            })
            console.log('New user data:', data.signupUser)
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
        <form>
            {data ?(
                <Link to="/">back to the profile.</Link>
            ) : (
            <>
             <div className="mb-3">
                            <label className="form-label">Username:</label>
                            <input
                                type="text"
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
                    className=""
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
                    className=""
                    name="password"
                    placeholder="Enter Your Password"
                    id="password-signup"
                    value={signupState.password}
                    onChange={handleChange}
                />
            </div>
            
            <button onClick={handleSignupSubmit} id='' type='submit'>Sign Up</button>
            
            </>
            )}

            {error && (
                <div className="my-3 p-3 bg-danger text-white">
                {error.message}
                </div>
            )}
        </form>
        
        </>
    );
};

export default Signup;