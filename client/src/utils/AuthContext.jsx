import PropTypes from 'prop-types';
import { useState, useEffect, createContext } from 'react';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children}) => {
    const [ user, setUser ] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };
    
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        Navigate('/Login')
    };

    const isLoggedIn = !!user || !!localStorage.getItem('user');

    const updateUserPlants = (newPlants) => {
        setUser((prevUser) => ({
            ...prevUser,
            plant: newPlants,
        }));
        localStorage.setItem('user', JSON.stringify({ ...user, plant: newPlants }));
    };

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);


    return(
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn, updateUserPlants }}>
            {children}
        </AuthContext.Provider>
    );
    
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};