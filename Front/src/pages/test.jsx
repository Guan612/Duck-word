import React, { useState } from 'react';
import { Button } from 'react-vant'
function TextToSpeech() {
    const [text, setText] = useState('你好');
    
    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleReadText = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        } else {
            alert('Sorry, your browser does not support speech synthesis.');
        }
    };

    return (
        <div>
            <textarea value={text} onChange={handleInputChange} rows="4" cols="10" />
            <Button onClick={handleReadText}>Read Text</Button>
        </div>
    );
}

export default TextToSpeech;