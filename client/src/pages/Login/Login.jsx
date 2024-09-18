import React from 'react';


// const loginFormHandler = async (event) => {
//     event.preventDefault();
//     const email = document.querySelector('.email-login').value.trim()
//     const password = document.querySelector('.password-login').value.trim();
//     if (email && password) {
//         const response =await fetch()
//     }
// }
const Login = () => {
    return (
        <>
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
            <button type='submit'>Login</button>

            <h2>Don't have an account?</h2>
            <button type='submit'>Sign-up</button>
        </>
    )
}

export default Login;