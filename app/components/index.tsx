
// app/components/index.tsx

"use client"
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log(inputValue); // Here you would handle the submission of the input value
            setInputValue(''); // Clear the input after submission
        }
    };

    return (
        <>
            <Head>
                <title>Chat Interface</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="container">
                <div className="sidebar">
                    <h2>ChatGPT 3.5</h2>
                    <h6>History conversation</h6>
                    <p>Build Conversation HTML Page</p>
                    <p>ChatGPT UI Analysis</p>
                    {/* Add more sidebar items here */}
                </div>

                <div className="chat-window">
                    <div className="header">How can I help you today?</div>
                    <input
                        type="text"
                        className="message-box"
                        placeholder="Message ChatGPT..."
                        value={inputValue}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                    <div className="disclaimer">
                        ChatGPT can make mistakes. Consider checking important information.
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* Your CSS here */
            `}</style>
        </>
    );
}
