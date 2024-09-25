import PropTypes from 'prop-types';
import './SearchModal.css';

const SearchModal = ({ isOpen, onClose, addPlant, children }) => {
    if (!isOpen) return null;

    return (
        <div className='overlay' onClick={onClose}>
            <div className='content' onClick={(e) => e.stopPropagation()}>
                <button className='close-button' onClick={onClose}>Close</button>
                {children}
                {addPlant && <button className='add-button' onClick={addPlant}>Add</button>}
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