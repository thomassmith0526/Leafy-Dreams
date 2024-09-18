import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Search from './pages/Search/Search';
import AreaInfo from './pages/AreaInfo/AreaInfo';
import PlantInfo from './pages/PlantInfo/PlantInfo';

function App() {
  return (
    <>
    <Router>
      <div className='headerNav'>

        <div className='siteTitle'>
        <img src='./src/assets/Animal_Crossing_Leaf.svg' alt='Leaf Icon' />
          <h1>Leafy Dreams</h1>
        </div>

        <div className='buttonBox'>
          <Link to="/">
            <button>Home</button>
          </Link>

          <Link to="/signup">
            <button>Sign Up</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/profile">
            <button>Profile</button>
          </Link>

          <Link to="/search">
            <button>Search</button>
          </Link>
        </div>

      </div>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/search" element={<Search />} />

          <Route path="/area-info" element={<AreaInfo />} />

          <Route path="/plant-info" element={<PlantInfo />} />
        </Routes>
    </Router>
    </>
  )
}

export default App;