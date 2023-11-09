'use client'

import './globals.css';
import Intro from './intro'
import Header from './header'
import Body from './body'

import React, { useState } from 'react';

export default function Home() {
  const [blurBody, setBlurBody] = useState(false);

  const onButtonClick = () => {
    setBlurBody(true);
  };
  
  return (
    <main className="flex flex-col min-h-screen items-center justify-start relative">
      <div className={blurBody ? 'main-blur' : 'blur-sm'}>
        <Body />
      </div>

      <div className="absolute">
        <Intro onButtonClick={onButtonClick}/>
      </div>

      <Header />
    </main>

  );
}





