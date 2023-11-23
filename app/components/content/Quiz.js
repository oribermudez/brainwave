"use client"

import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';
import Image from 'next/image';

const Quiz = ({ question, options, correctOption }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctOption); 
  };

  return (
    <div className="p-4 rounded-lg border border-royal text-black w-full my-8">
      <span className='p-3 m-4 font-bold text-royal'>{question}</span>
      <div className={`relative`}>
        {options?.length && options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={`flex items-center p-3 m-4 border border-gray-300 cursor-pointer rounded-lg hover:bg-emerald/20 ${selectedAnswer === option && !isCorrect ? 'animate-shake' : ''} ${selectedAnswer === option && isCorrect ? 'bg-emerald/20' : ''}`}
          >
            {`${String.fromCharCode(97 + index)}. ${option}`}
            <Image src="/assets/checked.png" width={25} height={25} alt={'Check Icon'} className={`ml-4 h-6 w-6 ${selectedAnswer === option && isCorrect ? 'block' : 'hidden'}`} />
          </div>
        ))}
        {<Confetti active={isCorrect} />}
      </div>
    </div>
  );
};

export default Quiz;
