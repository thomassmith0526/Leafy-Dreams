import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from 'apollo-boost';
import { Link, useNavigate } from 'react-router-dom';

const SIGNUP_MUTATION = gql`
    mutation signup($email: String!, $password: String!) {
        signup(email: $email, password: $password) {
            user {
                _id
                email
            }
            token
        }
    }
`;

const Signup = (props) => {
    const [signupState, setSignupState] = useState({ email: '', password: '' });
    const [signupUser, { error, data }] = useMutation(SIGNUP_MUTATION);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignupState({
            ...signupState,
            [name]: value,
        });
    }

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await signupUser({
                variables: { email: signupState.email, password: signupState.password },
            });
            if (data.login.token) { // Adjust based on your mutation response
                console.log('Login successful:', data.signup.user);
                // Store token in local storage or context
                localStorage.setItem('token', data.signup.token);
                navigate('/Profile'); // Change to your desired route
            }
        } catch (e) {
            console.error(e);
        }

        setSignupState({
            email: '',
            password: '',
        });
    }

    return (
        <>
            <form onSubmit={handleSignupSubmit}>
                {data ? (
                    <Link to="/">back to profile.</Link>
                ) : (
                    <>
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="text"
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
                                name="password"
                                placeholder="Enter Your Password"
                                id="password-signup"
                                value={signupState.password}
                                onChange={handleChange}
                            />
                        </div>

                        <button type='submit'>Sign Up</button>
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

