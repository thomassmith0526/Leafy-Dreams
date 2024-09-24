import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SELECT_USER } from '../../../utils/Query';
// import { useAuth } from '../../utils/useAuth';
import '../Signup/Signup.css'
import { AuthContext } from '../../../utils/AuthContext';


const Login = () => {
    const [loginState, setLoginState] = useState({email: '', password:''});
    const { login } = useContext(AuthContext); 
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
        <form onSubmit={handleLoginSubmit}>
            
            <div>
            <div className="mb-3" >
                <label htmlFor='email' className="form-label">Email:</label>
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
                <label htmlFor= 'password' className="form-label">Password:</label>
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
            
            <button type='submit' disabled={loading}>
                {loading ? 'Submitting...' : 'Login'}
            </button>
            </div>

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