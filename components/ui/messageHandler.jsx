
import React, { useState, useRef } from 'react';
import Input from './Input';

const MessageHandler = () => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        console.log("Submitting:", inputValue);
        // Call your Python function here or handle the data as needed
        setInputValue('');  // Clear the input field
        if (inputRef.current) {
            inputRef.current.value = ''; // Reset the actual DOM element's value
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="message-handler">
            <Input
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Message ChatGPT..."
                className="mt-4"
            />
        </div>
    );
};

export default MessageHandler;
