"use client";
import React, { useState } from 'react';
import MessageHandler from './messageHandler';

const MainFrame = () => {
    const [inputValue, setInputValue] = useState('');  // State to hold the input value

    const historyLog = ["aa"];

    return (
        <div>
            <div>
                <h1>Enter a message:</h1>
                {historyLog.map((str, index) => (
                    <h1 key={index}>{str}</h1>  // Use `key` to provide a unique identifier for each element
                ))}
            </div>
            <MessageHandler inputValue={inputValue} setInputValue={setInputValue} />
            <div>
                <h2>Displayed Message:</h2>
                <p>{inputValue}</p> {/* Display the inputValue here */}
            </div>
        </div>
    );
};

export default MainFrame;