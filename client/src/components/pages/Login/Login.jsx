import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import './login.css'

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
        <form>
            {data ?(
                <Link to="/">back to the homepage.</Link>
            ) : (
            <>
            <div className="mb-3" onSubmit={handleLoginSubmit}>
                <label className="form-label">Email:</label>
                <input
                    type="text"
                    className=""
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
                    className=""
                    name="password"
                    placeholder="Enter Your Password"
                    id="password-login"
                    value={loginState.password}
                    onChange={handleChange}
                />
            </div>
            
            <button onClick={handleLoginSubmit} id='' type='submit'>Login</button>
            
            </>
            )}

            {error && (
                <div className="my-3 p-3 bg-danger text-white">
                {error.message}
                </div>
            )}
        </form>
        <h2>Don't have an account?</h2>
            <Link to={'/Signup'}>
            <button type='submit'>Sign-up</button>
            </Link>
        </>
    );
};

export default Login;