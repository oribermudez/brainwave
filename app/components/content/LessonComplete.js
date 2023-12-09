"use client"

import React, { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import Image from 'next/image';
import { Button } from "@material-tailwind/react";

import achievements from '@/app/data-mocks/achievements';

const LessonComplete = ({ achievementId }) => {
  const [achievement, setAchievement] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const handleCompleted = () => {
    setIsComplete(true); 
  };

  useEffect(() => {
    if (achievementId) {
      const medal = achievements.find((achievement) => achievement.id === achievementId);
      setAchievement(medal);
    }
  }, []);

  return (
    <>
      <Button className="my-16 bg-emerald !capitalize text-sm !font-semibold" fullWidth onClick={handleCompleted}>
          Mark As Completed
      </Button>
      {<Confetti active={isComplete} />}
      {isComplete && <div className='mt-8 mb-12 flex border border-royal p-6 rounded-md'>
        <Image src={achievement.image} width={400} height={400} alt="Medal" className='mx-8-4 w-48' />
        <div className='flex flex-col my-4'>
            <p className='ml-8 text-gray-800'><span className='text-emerald'>Congratulations!</span> You have earn a new achievement.</p>
            <div className='grow ml-8'>
              <p className='text-lg my-4 font-bold'>{achievement.name}</p>
              <p className='text-gray-500 w-11/12'>{achievement.description}</p>
              <p className='my-2 text-sm'>Experience: <span className='text-gray-500'>{achievement.exp}</span></p>
            </div>
          </div>
        </div>}
    </>
  );
};

export default LessonComplete;
