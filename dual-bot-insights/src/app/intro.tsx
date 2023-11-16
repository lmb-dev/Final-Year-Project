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
    return null;
  }

  return (
    <div className={`absolute w-screen flex flex-col items-center ${fadeOut ? 'fade-out' : ''}`}>
      <div className="border-line"></div>
      <div className="intro-fill">
        <h1 className="intro-title text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl font-bold mb-3 mt-28">Welcome to <br></br> Dual-Bot Insights </h1>
        <p className="intro-text text-xs">This website is host to a study that explores people's preferences when interacting with chatbots in an effort to improve our understanding of Human-Machine Communication</p>        
      </div>

      <svg style={{zIndex:'1'}} className='max-w' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="var(--background-light)" fillOpacity="1" d="M0,224L0,288L72,288L72,192L144,192L144,128L216,128L216,256L288,256L288,96L360,96L360,160L432,160L432,64L504,64L504,288L576,288L576,160L648,160L648,224L720,224L720,64L792,64L792,128L864,128L864,224L936,224L936,224L1008,224L1008,32L1080,32L1080,160L1152,160L1152,288L1224,288L1224,320L1296,320L1296,224L1368,224L1368,32L1440,32L1440,0L1368,0L1368,0L1296,0L1296,0L1224,0L1224,0L1152,0L1152,0L1080,0L1080,0L1008,0L1008,0L936,0L936,0L864,0L864,0L792,0L792,0L720,0L720,0L648,0L648,0L576,0L576,0L504,0L504,0L432,0L432,0L360,0L360,0L288,0L288,0L216,0L216,0L144,0L144,0L72,0L72,0L0,0L0,0Z">
          
        </path>
      </svg> 
      
      <button className="intro-accept rounded-lg" onClick={handleButtonClick}>
          I understand and <br></br> accept
      </button>
      
    </div>  
  );
}


// d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,128C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"