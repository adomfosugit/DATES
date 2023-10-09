'use client'
import React, { useState } from 'react';
import { add, isWeekend, format } from 'date-fns';

export default function Home() {
  const [defaultDate, setDefaultDate] = useState('');
  const [workingDays, setWorkingDays] = useState('');
  const [resultDate, setResultDate] = useState('');
  const calculateDate = () => {
    if (!defaultDate || !workingDays) {
      setResultDate('');
      return;
    }

    let currentDate = new Date(defaultDate);
    let addedWorkingDays = 0;

    while (addedWorkingDays < workingDays) {
      currentDate = add(currentDate, { days: 1 });

      if (!isWeekend(currentDate)) {
        addedWorkingDays++;
      }
    }

    setResultDate(format(currentDate, 'dd-MM-yyyy'));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-2xl mx-auto">
       <div className='space-y-4'>
      <h1 className='text-3xl p-3' > Date Calculator</h1>

      <div className='gap-x-2'>
      <label >
        Default Date:
        <input
        className='text-black font-semibold mx-3'
          type="date"
          value={defaultDate}
          onChange={(e) => setDefaultDate(e.target.value)}
        />
      </label>
      </div>
     
      <div>
      <label>
       Number (Working Days):
        <input
        className='text-black font-semibold mx-3 w-[100px]'
          type="number"
          value={workingDays}
          onChange={(e) => setWorkingDays(e.target.value)}
        />
      </label>
      </div>
    
      
      <button className='bg-blue-800 p-2 rounded-xl mx-auto ' onClick={calculateDate}>Calculate</button>
      
    </div> 
    {resultDate && <p>Future Date: {resultDate}</p>} 
    </main>
  )
}
