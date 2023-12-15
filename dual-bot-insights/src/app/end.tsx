'use client'

import { useEffect, useState } from 'react';
import './globals.css';




export default function End(dbList: number[]) {
  
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClick= () => setButtonClicked(true);

  const handleDB = async () => {
    const response = await fetch('/api/create-table', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dbList }), 
    });
  }
  
  useEffect(() => {
    handleDB();
  }, []); 


  return (
    <div className="relative flex flex-col justify-center items-center w-full text-[3vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[1.75vw] mt-[350px] sm:mt-[350px] md:mt-[400px] lg:mt-[400px]">
      <h1 className="title mb-2 text-center w-[80%] text-[6vw] sm:text-[6vw] md:text-[6vw] lg:text-[3vw]">
          Thank you for participating in Dual-Bot Insights
      </h1>

      {!buttonClicked && (
        <button className='accent mb-12 font-semibold duration-300 ease-in-out hover:underline' onClick={handleButtonClick} onTouchStart={handleButtonClick}>Please Click here to send off your results!</button>
      )}

      {buttonClicked && (
        <h1 className='accent mb-12 font-semibold'>Send Successful!</h1>
      )}
    </div>
    
  );
}