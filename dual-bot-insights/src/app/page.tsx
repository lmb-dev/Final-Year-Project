'use client'

import './globals.css';

import Intro from './intro'

import Header from './header'
import DarkMsg from './darkMsg'

import PreQ1 from './preq1'
import PreQ2 from './preq2'
import PreQ3 from './preq3'

import React, { useState } from 'react';

export default function Home() {
  const [blurBody, setBlurBody] = useState(false);
  const [stage, setStage] = useState(1);

  const onBlurClick = () => {
    setBlurBody(true);
  };

  const changeStage = () => {
    setStage(stage+1);
  };

  let currentStage;
  switch (stage){
    case 1:
      currentStage = <PreQ1 changeStage={changeStage}/>
      break;
    
    case 2:
      currentStage = <PreQ2 changeStage={changeStage}/>
      break;

    case 3:
      currentStage = <PreQ3 changeStage={changeStage}/>
      break;

    case 4:
      //chatbot 1
      break;

    case 5:
      //PostQ1
      break;
    
    case 6:
      //chatbot 2
      break;
    
    case 7:
      //PostQ2
      break;
  }
  

  return (
    // flexible layout
    <main className="flex flex-col">   
      <div>
        <Intro onBlurClick={onBlurClick}/>
      </div>
      
      <div className={blurBody ? 'main-blur' : 'blur'} style={{ pointerEvents: blurBody ? 'all' : 'none' }}>
        {currentStage}
      </div>

      <Header />
      <DarkMsg />
    </main>

  );
}





