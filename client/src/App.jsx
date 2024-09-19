import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import AreaInfo from './pages/AreaInfo/AreaInfo';
import PlantInfo from './pages/PlantInfo/PlantInfo';

import './SignupForm.css'; // Import the CSS file

function App() {
  return (
    <>
    <Router>
      <h1>Josh Is A Person</h1>

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

        <Link to="/area-info">
          <button>Area Info</button>
        </Link>

        <Link to="/plant-info">
          <button>Plant Info</button>
        </Link>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/area-info" element={<AreaInfo />} />

          <Route path="/plant-info" element={<PlantInfo />} />
        </Routes>
    </Router>
    </>
  )
}

const SignupForm = () => {

  return (
      <form className="signup-form" onSubmit={handleSubmit}>
          {/* form inputs and button */}
      </form>
  );
};


export default App;
