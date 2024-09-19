import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import './login.css'


const Login = (props) => {
    const [loginState, setLoginState] = useState({email: '', password:''});
    const [login, { error, data }] = useQuery();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginState({
            ...loginState,
            [name]: value,
        });
    }

    const handleLoginSubmit = async(e) =>{
        e.preventDefault();
        try{
            const {data} = await login({
                variables:{...loginState},
            })
        } catch (e) {
            console.error(e);
        }


    }
    return (
        <>
        <div>
            {data ?(
                <Link to="/">back to the homepage.</Link>
            ) : (
            <>
            <div class="mb-3" onSubmit={handleLoginSubmit}>
                <label class="form-label">Email:</label>
                <input
                    type="text"
                    class=""
                    name="email"
                    placeholder="Enter Your Email"
                    id="email-login"
                    value={loginState.password}
                    onChange={handleChange}

                />
            </div>
            
            <div class="mb-3">
                <label class="form-label">Password:</label>
                <input
                    type="password"
                    class=""
                    name="password"
                    placeholder="Enter Your Password"
                    id="password-login"
                    value={loginState.password}
                    onChange={handleChange}
                />
            </div>
            <button id='' type='submit'>Login</button>

            <h2>Don't have an account?</h2>
            <Link to={'/Signup'}>
            <button type='submit'>Sign-up</button>
            </Link>
            </>
            )}

            {error && (
                <div className="my-3 p-3 bg-danger text-white">
                {error.message}
                </div>
            )}
        </div>
            
        </>
    );
};

export default Login;