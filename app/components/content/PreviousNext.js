"use client"

import React from 'react';
import Link from 'next/link';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline'

const PreviousNext = ({ previous, next }) => {

  return (
    <div className="text-black flex justify-between items-center text-emerald-dark text-sm">
      <Link href={previous} className={`w-1/4 text-center h-10 flex items-center justify-center rounded-md ${previous ? 'bg-emerald/20 text-emerald-dark' : 'bg-gray-100 text-gray-400'}`}>
        <ChevronLeftIcon className='w-5 h-5 mr-2' />
        Previous Lesson
      </Link>
      <Link href={next} className={`w-1/4 text-center h-10 flex items-center justify-center rounded-md ${next ? 'bg-emerald/20 text-emerald-dark' : 'bg-gray-100 text-gray-400'}`}>
        Next Lesson
        <ChevronRightIcon className='w-5 h-5 ml-2' />
      </Link>  
    </div>
  );
};

export default PreviousNext;
