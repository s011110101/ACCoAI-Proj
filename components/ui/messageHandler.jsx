"use client";
import React, {useRef, useState} from 'react';
import Input from '@/components/ui/input';


const MessageHandler = () => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
    const [historyLog, setHistoryLog] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);

    };

    async function readAllChunks(readableStream) {
        const reader = readableStream.getReader();
        const chunks = [];

        let done, value;
        while (!done) {
            ({ value, done } = await reader.read());
            chunks.push(value);
        }
    }

    const handleSubmit = async () => {
        const scriptPath = 'openaiTest.py';
        const args = [inputRef.current.value];
        const temp = [...historyLog, "user: " + inputRef.current.value]; // Clone and update

        try {
            const response = await fetch('http://localhost:3001/run-python', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ scriptPath, args }),
            });

            // Assuming response is streaming text
            temp.push("chatGPT: ");

            setHistoryLog(temp);
            const reader = response.body.getReader();
            const utf8Decoder = new TextDecoder('utf-8');
            let count = 0;
            while (true) {
                const { value, done } = await reader.read();
                if (done) {
                    break;
                }
                const textChunk = utf8Decoder.decode(value, { stream: true });
                //console.log("Chunk from Python script:", textChunk);
                temp[temp.length - 1] += textChunk;
                setHistoryLog(temp);
                count+=1;
                if (count % 5 == 0) {
                    setInputValue('.');
                }
                if (count % 9 == 0) {
                    setInputValue('..');
                }
                if (count % 16 == 0) {
                    setInputValue('...');
                }
                if (count % 19 == 0) {
                    setInputValue('');
                }
            }
            setInputValue('');
        } catch (error) {
            console.error('Error calling Python script:', error);
        }

    };



    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div>
            <div>
                {historyLog.map((str, index) => (
                    <h1 key={index}>{str}</h1>  // Use `key` to provide a unique identifier for each element
                ))}
            </div>
            <div className="message-handler">
                <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Message ChatGPT..."
                    className="mt-4"
                />
            </div>

        </div>

    );
};

export default MessageHandler;
