import { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';
import Profile from './components/pages/Profile/Profile';
import AreaInfo from './components/pages/AreaInfo/AreaInfo';
import PlantInfo from './components/pages/PlantInfo/PlantInfo.jsx'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <div className='header'>
          <div className='Company'>
            <h1>Leafy Dreams </h1>
          </div>
          <Link to="/">
            <button>Home</button>
          </Link>

          <Link to="/profile">
            <button>Profile</button>
          </Link>

          <Link to="/area-info">
            <button>Area Info</button>
          </Link>

          <Link to="/plant-info">
            <button>Plant Info</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>
          </div>
          

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/area-info" element={<AreaInfo />} />

            <Route path="/plant-info" element={<PlantInfo />} />
            
            <Route path="/signup" element={<Signup />} />

            <Route path="/login" element={<Login />} />
          </Routes>
          <div className='footer'></div>
        </Router>
      </ApolloProvider>
    </>
  )
}

export default App;
