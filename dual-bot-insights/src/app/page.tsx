'use client'

import './globals.css';

import Intro from './intro'
import TaC from './tac'

import Header from './header'
import DarkMsg from './darkMsg'

import PreQ1 from './preq1'
import PreQ2 from './preq2'
import PreQ3 from './preq3'

import Chat1 from './chat1'
import Chat2 from './chat2'

import PostQ1 from './postq1'
import PostQ2 from './postq2'

import End from './end'


import React, { useEffect, useState } from 'react';


const randomizer = Math.random(); //randomize for order effect

let dbList: number[] = [];
const createList = (intArray: number[]) =>{
  dbList = [...dbList, ...intArray];
}

export default function Home() {
  const [blurBody, setBlurBody] = useState(false);
  const [stage, setStage] = useState(0);


  const onBlurClick = () => {
    setBlurBody(true);
  };

  const changeStage = () => {
    setStage(stage+1);
  };


  let currentStage;
  switch (stage){ 
    case 0:
      currentStage = <TaC changeStage={changeStage}/>
      break;

    case 1:
      currentStage = <PreQ1 changeStage={changeStage} createList={createList}/>
      break;
    
    case 2:
      currentStage = <PreQ2 changeStage={changeStage} createList={createList}/>
      break;

    case 3:
      currentStage = <PreQ3 changeStage={changeStage} createList={createList}/>
      break;

    case 4:
      if(randomizer < 0.5){
        currentStage = <Chat1 changeStage={changeStage} createList={createList}/>
        break;
      }
      else{
        currentStage = <Chat2 changeStage={changeStage} createList={createList}/>
        break;
      }

    case 5:
      if(randomizer < 0.5){
        currentStage = <PostQ1 changeStage={changeStage} createList={createList}/>
        break;
      }
      else{
        currentStage = <PostQ2 changeStage={changeStage} createList={createList}/>
        break;
      }
    
    case 6:
      if(randomizer < 0.5){
        currentStage = <Chat2 changeStage={changeStage} createList={createList}/>
        break;
      }
      else{
        currentStage = <Chat1 changeStage={changeStage} createList={createList}/>
        break;
      }
  
    case 7:
      if(randomizer < 0.5){
        currentStage = <PostQ2 changeStage={changeStage} createList={createList}/>
        break;
      }
      else{
        currentStage = <PostQ1 changeStage={changeStage} createList={createList}/>
        break;
      }
    
    case 8:
      currentStage = <End {...dbList}/> 
      break;
  }
  
    
  //#region dev hacks
    const handleKeyDown = (event: { shiftKey: any; key: string; }) => {
      if (event.shiftKey && event.key === 'S') {
        changeStage();
      }
    };

    const handleKeyDown2 = (event: { shiftKey: any; key: string; }) => {
      if (event.shiftKey && event.key === 'A') {
        setStage(stage-1);
      }
    };

    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keydown', handleKeyDown2);
    }); 
  //#endregion
  
  return (
    <main className="flex flex-col">   
      <div className='absolute'>
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


