'use client'

import React, {useState} from 'react';
import './globals.css';



export default function Intro({onButtonClick}: {onButtonClick:() => void}) {
  const[hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleButtonClick = () => {
    setFadeOut(true);
    onButtonClick();
    setTimeout(() => setHidden(true), 2000);
  }
  if(hidden){
    return hidden;
  }

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${fadeOut ? 'fade-out' : ''}`}>

      <div className="max-w-4xl px-4" style={{marginTop: '-100px'}}>
        <div className="intro-box rounded-lg border bg-background p-8">

          <h1 className="mb-8 text-7xl font-semibold">
            Welcome to <br></br> Dual-Bot Insights 
          </h1>

          <p className="text text-2xl mb-4 leading-normal">
            This website aims to
          </p>

          <p className="text text-2xl leading-normal">
            Please read carefully and conisder the following:<br></br>
            Your data
          </p>

        </div>
      </div>   
      
      <button className="intro-box rounded-lg p-4 mt-4 text-2xl" onClick={handleButtonClick}>
          I understand and <br></br> accept
      </button>
      
    </div>  
  );
}