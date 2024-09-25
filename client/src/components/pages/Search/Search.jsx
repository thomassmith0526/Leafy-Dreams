import { useState, useContext, useEffect } from 'react';
import './Search.css';
import SearchModal from './SearchModal.jsx';
import { useMutation } from '@apollo/client';
import { ADD_USER_PLANT_MUTATION } from '../../../utils/Mutation.js';
import { AuthContext } from '../../../utils/AuthContext.jsx';
import PlantBar from '../../PlantBar/index.jsx'


const Search = () => {



    return (
        
          <PlantBar></PlantBar>
  
    );
};

export default Search;