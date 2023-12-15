'use client'

import React, {useState} from 'react';
import './globals.css';
import {ImDatabase, ImConfused, ImBubble} from "react-icons/im";


export default function Intro({onBlurClick}: {onBlurClick:() => void}) {
  //#region accept consts
    const [isHovered, setIsHovered] = useState(false); 
    const [isClicked, setIsClicked] = useState(false);
    
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleClick = () => {
      setIsClicked(true);
      onBlurClick();
    }
  //#endregion

  return (
    <div className="w-full flex flex-col items-center">
      
      <div className="border-line"></div>
      
      <div className={`intro-fill ${isClicked ? 'title-up' : ''}`}>
        <h1 className="intro-title text-[6vw] font-bold mb-3 mt-28">Welcome to <br></br> Dual-Bot Insights <span className="version-text"> Version 1.2</span></h1>
        <p className="intro-text text-[2vw] sm:text-[1.5vw] md:text-[1.25vw] lg:text-[0.75vw]">This website is host to a study that explores peoples preferences when interacting with chatbots in an effort to improve our understanding of Human-Machine Communication</p>        
      </div>

      <div className={`${isClicked ? 'info-up' : ''}`} style={{zIndex:'1'}}>       
        <svg style={{zIndex:'1', marginTop: '0px'}} className='max-w' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="var(--background-light)" fillOpacity="1" d="M0,224L0,288L72,288L72,192L144,192L144,128L216,128L216,256L288,256L288,96L360,96L360,160L432,160L432,64L504,64L504,288L576,288L576,160L648,160L648,224L720,224L720,64L792,64L792,128L864,128L864,224L936,224L936,224L1008,224L1008,32L1080,32L1080,160L1152,160L1152,288L1224,288L1224,320L1296,320L1296,224L1368,224L1368,32L1440,32L1440,0L1368,0L1368,0L1296,0L1296,0L1224,0L1224,0L1152,0L1152,0L1080,0L1080,0L1008,0L1008,0L936,0L936,0L864,0L864,0L792,0L792,0L720,0L720,0L648,0L648,0L576,0L576,0L504,0L504,0L432,0L432,0L360,0L360,0L288,0L288,0L216,0L216,0L144,0L144,0L72,0L72,0L0,0L0,0Z"></path>
        </svg> 

        <div className="flex w-full" style={{ justifyContent: 'space-evenly', zIndex: '2'}}>
          <div className="intro-box">
            <ImBubble className="intro-icon mb-3"></ImBubble>
            <h1 className="intro-title font-semibold text-[1.75vw] sm:text-[1.75vw] md:text-[1.5vw] lg:text-[1vw]">What you are about to do:</h1>
            <p className="intro-text text-[1.75vw] sm:text-[1.5vw] md:text-[1.25vw] lg:text-[0.8vw]">You are about to answer a few general questions, and then converse with <span className="font-semibold">two</span> chatbots <span className="font-semibold">around the topic of animals.</span> Afterwards you will give feedback on your interactions</p>
          </div>

          <div className="intro-box">
            <ImDatabase className="intro-icon mb-3"></ImDatabase>
            <h1 className="intro-title font-semibold text-[1.75vw] sm:text-[1.75vw] md:text-[1.5vw] lg:text-[1vw]">How your data will be managed:</h1>
            <p className="intro-text text-[1.75vw] sm:text-[1.5vw] md:text-[1.25vw] lg:text-[0.8vw]">Any data provided for the duration of this study will be safeguarded to ensure its confidentiality, and will be used exclusively for the purposes of this study</p>
          </div>

          <div className="intro-box mb-5">
            <ImConfused className="intro-icon mb-3"></ImConfused>
            <h1 className="intro-title font-semibold text-[1.75vw] sm:text-[1.75vw] md:text-[1.5vw] lg:text-[1vw]">A note about chatbots:</h1>
            <p className="intro-text text-[1.75vw] sm:text-[1.5vw] md:text-[1.25vw] lg:text-[0.8vw]">Chatbots have been known to hallucinate meaning that they can generate incorrect or nonsensical responses. These occurences should be recognised and taken into account</p>
          </div>
        </div>
      </div>

      <button className={`intro-accept rounded-lg font-semibold ${isClicked ? 'button-fade' : ''}`} style={{ filter: isHovered ? `drop-shadow(0 0 3px ${'var(--text-three)'})` : 'none' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} onTouchStart={handleMouseEnter} onTouchEnd={()=>{handleMouseLeave(); handleClick();}}>
        Continue...
      </button>
      
    </div>  
  );
}