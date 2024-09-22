import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const signupFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('.email-login').value.trim()
    const password = document.querySelector('.password-login').value.trim();
    if (email && password) {
        const response =await fetch()
    }
}
const Signup = () => {
    return (
        <>
        <h2>Sign-Up:</h2>
            <div class="mb-3">
                <label class="form-label">Email:</label>
                <input
                    type="text"
                    class=""
                    name="email"
                    id="email-login"
                    placeholder="Enter Your Email"
                />
            </div>
            
            <div class="mb-3">
                <label class="form-label">Password:</label>
                <input
                    type="password"
                    class=""
                    name="password"
                    id="password-login"
                    placeholder="Enter Your Password"
                />
            </div>
            <button id='' type='submit'>Signup</button>
            
        </>
    )
}

export default Signup;


