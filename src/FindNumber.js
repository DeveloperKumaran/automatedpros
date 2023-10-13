import React, { useState } from 'react';

function FindNumberPairs() {
  const [inputNumbers, setInputNumbers] = useState('');
  const [targetNumber, setTargetNumber] = useState('');
  const [pairs, setPairs] = useState([]);

  const handleInputChange = (e) => {
    setInputNumbers(e.target.value);
  };

  const handleTargetChange = (e) => {
    setTargetNumber(parseInt(e.target.value));
  };

  const findPairs = () => {
    const numbers = inputNumbers
      .split(',')
      .map((num) => parseInt(num))
      .filter((num) => !isNaN(num));

    const foundPairs = [];
    const seenNumbers = new Set();

    for (let num of numbers) {
      const complement = targetNumber - num;

      if (seenNumbers.has(complement)) {
        foundPairs.push([num, complement]);
      }

      seenNumbers.add(num);
    }

    setPairs(foundPairs);
    console.log('Pairs:', foundPairs);
  };

  return (
    <div>
      <h2>Find Number Pairs</h2>
      <input
        type="text"
        placeholder="Enter numbers (comma-separated)"
        value={inputNumbers}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Target value"
        value={targetNumber}
        onChange={handleTargetChange}
      />
      <button onClick={findPairs}>Find Pairs</button>
      <div>
        <p className='pairsNums'>Pairs that sum to </p>{targetNumber}:
        {pairs.length === 0
          ? ' No pairs found.'
          : pairs.map((pair, index) => (
              <span key={index}> [{pair[0]}, {pair[1]}]</span>
            ))}
      </div>
    </div>
  );
}

export default FindNumberPairs;








