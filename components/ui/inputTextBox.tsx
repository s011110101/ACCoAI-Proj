import { useState, KeyboardEvent } from 'react';

interface MessageInputProps {
    onMessageSend: (message: string) => void; // Callback to send the message to the parent component
}

const MessageInput: React.FC<MessageInputProps> = ({ onMessageSend }) => {
    const [inputValue, setInputValue] = useState('');
    const [displayedValue, setDisplayedValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && inputValue.trim()) {
            onMessageSend(inputValue.trim()); // Send the trimmed message back to the parent
            setDisplayedValue(inputValue);
            console.log(inputValue);
            setInputValue(''); // Clear the input after sending
            event.preventDefault(); // Prevent form submission if wrapped in a form
        }
    };

    return (
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            className="message-box"
            style={{
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '5px'
            }}
            />
    );
};

export default MessageInput;
