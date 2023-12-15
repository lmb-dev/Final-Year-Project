'use client'

import './globals.css';
import React, { useState } from 'react';
// @ts-ignore
import Likert from 'react-likert-scale';

export default function TaC({ changeStage}: { changeStage: () => void;})  {
    
    const [likertResponses, setLikertResponses] = useState([0, 0, 0]);
    const updateLikertResponse = (index: number, value: number) => {
        const newResponses = [...likertResponses];
        newResponses[index] = value;
        setLikertResponses(newResponses);
    };

    const agree= [
        { value: 1, text: "I agree" },
      ];

    //#region TaC Questions
        const TaC1 = {
            question: "Data provided for this study will be safeguarded to ensure its confidentiality, and will be used exclusively for the purposes of this study. Under no circumstances will it be disclosed or shared with third parties ",
            responses: agree,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(0, val.value);
            }
        };
        
        const TaC2 = {
            question: "No personal, identifiable data will be collected at any point during this study. During conversations with the chatbots, please refrain from mentioning anything that may reveal your identity, such as name or location",
            responses: agree,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(1, val.value);
            }
        };

        const TaC3 = {
            question: "The responses generated by the chatbots do not necessarily represent the views or opinions of the site administrators, and we are not responsible for any false or offensive content. If at any point you feel uncomfortable, you have the right to stop at any time",
            responses: agree,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(2, val.value);
            }
        };
    //#endregion

    //#region Button Consts
        const [isClicked, setIsClicked] = useState(false);
        
        const handleClick = () => {
            if (likertResponses.includes(0)) {
                alert("Please agree to all statements if you wish to continue.");
            } else {
                setIsClicked(true);
                changeStage();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
    //#endregion
  
    return (
        <div className="relative flex flex-col justify-center items-center w-full text-[2.75vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[1.75vw] mt-[350px] sm:mt-[350px] md:mt-[400px] lg:mt-[400px]">
            <h1 className="mb-2 text-center w-[90%]">
                By using this website, you agree to our Terms and Conditions:
            </h1>         
                   
            <Likert {...TaC1} className={`noLine ${likertResponses[0] === 0 ? ' ' : 'likert-fade'}`} />
            <Likert {...TaC2} className={`noLine ${likertResponses[1] === 0 ? ' ' : 'likert-fade'}`} />
            <Likert {...TaC3} className={`noLine ${likertResponses[2] === 0 ? ' ' : 'likert-fade'}`} />

            <button className={`text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] rounded-lg font-semibold duration-300 ease-in-out hover:underline ${isClicked ? 'button-fade' : ''}`} onClick={handleClick} onTouchEnd={handleClick}>
                Continue...
            </button>

        </div>
    );
}