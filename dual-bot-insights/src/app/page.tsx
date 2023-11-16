'use client'

import './globals.css';

import Intro from './intro'
import Header from './header'
import Body from './body'
import DarkMsg from './darkMsg'

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [blurBody, setBlurBody] = useState(false);


  const onButtonClick = () => {
    setBlurBody(true);
  };
  

  return (
    // flexible layout
    <main className="flex flex-col">   
      <div>
        <Intro onButtonClick={onButtonClick}/>
      </div>
      
      <div className={blurBody ? 'main-blur' : 'blur-sm'}>
        {/* <Body /> */}
      </div>

      <Header />
      <DarkMsg/>
    </main>

  );
}





