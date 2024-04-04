import React, { useState } from 'react';

const InputWithValidation = ({ validationFunction, placeholder }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        validateInput(value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', inputValue);
    };

    const validateInput = (value) => {
        const validationResult = validationFunction(value);
        setError(validationResult);
    };


    return (
        <div>
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button onClick={handleSubmit} type="submit">
                Click ME
            </button>
        </div>
    );
};

export default InputWithValidation;
