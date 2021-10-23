import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './css/searchPokemon.css';

export const SearchPokemon = ({setPokemon}) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0){
            setPokemon(inputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label>
                <input 
                    type="text" 
                    placeholder="Name or No." 
                    onChange={handleInputChange} 
                    value={inputValue} 
                    id="pokemon"
                />
                </label>
                <button className="unit" type="button" onClick={handleSubmit}></button>
            </div>
        
        </form>
    )
}

SearchPokemon.propTypes = {
    setPokemon: PropTypes.func.isRequired
}

// SearchPokemon.defaultProps = {
//     inputValue: 'pikachu'
// }