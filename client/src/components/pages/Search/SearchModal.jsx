import PropTypes from 'prop-types';
import './SearchModal.css';
import { AuthContext } from '../../../utils/AuthContext.jsx';
import { useContext } from 'react';

const SearchModal = ({ isOpen, onClose, addPlant, children }) => {
    if (!isOpen) return null;
    const {isLoggedIn,logout} = useContext(AuthContext); 
    const handleLogout = () => {
    logout()
    console.log('im running')
}
    return (
        <div className='overlay' onClick={onClose}>
            <div className='content' onClick={(e) => e.stopPropagation()}>
                <button className='close-button' onClick={onClose}>Close</button>
                {children}
                {isLoggedIn ? (                 
                    <>
                    {addPlant && <button className='add-button' onClick={addPlant}>Add</button>}
                    </>
            ) : null}
            </div>
        </div>
    );
};

SearchModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    addPlant: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default SearchModal;