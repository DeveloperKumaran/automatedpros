import React from 'react'
import { useState,useEffect } from 'react'
import '../src/Input.css'
const Input = ()=>{

    const [inputText, setInputText] = useState('');
    const [maxConsecutiveChars, setMaxConsecutiveChars] = useState('');
  
    const handleInputChange = (e) => {
      const text = e.target.value;
      setInputText(text);
      findMaxConsecutiveChars(text);
    };
  
    const findMaxConsecutiveChars = (text) => {
      let maxCount = 0;
      let currentChar = '';
      let currentCount = 0;
      const charCounts = {};
  
      for (let i = 0; i < text.length; i++) {
        if (text[i] === currentChar) {
          currentCount++;
        } else {
          currentChar = text[i];
          currentCount = 1;
        }
  
        if (currentCount > maxCount) {
          maxCount = currentCount;
          charCounts[currentChar] = currentCount;
          
        }
      }
      
      const maxChars = Object.keys(charCounts).filter((char) => charCounts[char] === maxCount);
      setMaxConsecutiveChars(maxChars.join(', ') + `: ${maxCount}`);
      
    };
      
      // Use this function with user input to find the character with the most consecutive appearances.
      



    return(
        <div>
        <input className='text-char' type="text" placeholder="Enter text"
        value={inputText}
        onChange={handleInputChange}
      />
      <p className='max-char'>Max Consecutive Character(s): {maxConsecutiveChars}</p>
      
    </div>
        
    );
}

export default Input;
