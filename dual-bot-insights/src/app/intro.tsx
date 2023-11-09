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

      <div className="max-w-4xl px-4" style={{marginTop: '100px'}}>
        <div className="intro-box rounded-lg border bg-background p-8">

          <h1 className="mb-8 text-7xl font-semibold">
            Welcome to <br></br> Dual-Bot Insights 
          </h1>

          <p className="text text-2xl mb-4 leading-normal">
            This website is host to a study that explores people's preferences when interacting with chatbots in an effort to improve our understanding of Human-Machine Communication
          </p>

          <p className="text text-2xl leading-normal">
            <i><b>Please read carefully and conisder the following:<br></br></b></i>
          </p>

          <ul className="custom-list text text-xl leading-normal">
              <li>You are about to answer a few general questions, and then interact with two chatbots, each with a unique style. Afterwards you'll be asked several questions about your interactions with them</li>
              <li>Any data provided will be kept secure and used only for the purpose of this study</li>
              <li>Chatbots have been known to "hallucinate," meaning that they can generate incorrect or nonsensical responses. These occurences should be recognised and taken into account</li>
          </ul>

        </div>
      </div>   
      
      <button className="intro-box rounded-lg p-4 mt-4 text-2xl" onClick={handleButtonClick}>
          I understand and <br></br> accept
      </button>
      
    </div>  
  );
}