import { React, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import '../Signup/Signup.css'

const GET_SINGLE_USER = gql `
    query GetUser($email: String!) {
    getUser(email: $email) {
    _id
    userName
    email
    password
    plants {
      _id
      name
    }
  }
}
`;

const Login = () => {
    const [loginState, setLoginState] = useState({email: '', password:''});
    const navigate = useNavigate()
    
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
                <Link to="/"></Link>
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