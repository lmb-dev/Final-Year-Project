'use client'

import './globals.css';
import React, { useState } from 'react';
// @ts-ignore
import Likert from 'react-likert-scale';

export default function PostQ1({ changeStage, createList }: { changeStage: () => void; createList: (intArray: number[]) => void }) {
    const fivePointScale= [
        { value: 1, text: "Disagree strongly" },
        { value: 2, text: "Disagree a little" },
        { value: 3, text: "Neutral; no opinion"},
        { value: 4, text: "Agree a little" },
        { value: 5, text: "Agree strongly" }
      ];

    const [likertResponses, setLikertResponses] = useState([0, 0, 0, 0]);
    const updateLikertResponse = (index: number, value: number) => {
        const newResponses = [...likertResponses];
        newResponses[index] = value;
        setLikertResponses(newResponses);
    };

    //#region Questions    
        const useQuestion = {
            question: "The chatbot was a useful tool in learning about Animals",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(0, val.value);
            }
        };

        const engQuestion = {
            question: "The conversation with the chatbot kept me engaged and interested",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(1, val.value);
            }
        };

        const lieQuestion = {
            question: "I felt as though what the chatbot was telling me was untruthful or was unexpected",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(2, val.value);
            }
        };

        const satQuestion = {
            question: "I am satisfied with the overall quality of the conversation I had with the chatbot",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(3, val.value);
            }
        };
    //#endregion

    //#region Button Consts
        const [isClicked, setIsClicked] = useState(false);
        
        const handleClick = () => {
            if (likertResponses.includes(0)) {
                alert("Please answer all questions before continuing.");
            } else {
                setIsClicked(true);
                createList(likertResponses);
                changeStage();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
    //#endregion
  
    return (
        <div className="relative flex flex-col justify-center items-center w-full text-[3vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[1.75vw] mt-[350px] sm:mt-[350px] md:mt-[400px] lg:mt-[400px]">
            <h1 className="mb-2 text-center w-[90%]">
                Below are some statements regarding the conversation you have just had. Please select each option to indicate the extent to which you agree or disagree with that statement.
            </h1>         
                   
            <Likert {...useQuestion} className={`${likertResponses[0] === 0 ? ' ' : 'likert-fade'}`} />
            <Likert {...engQuestion} className={`${likertResponses[1] === 0 ? ' ' : 'likert-fade'}`} />
            <Likert {...lieQuestion} className={`${likertResponses[2] === 0 ? ' ' : 'likert-fade'}`} />
            <Likert {...satQuestion} className={`${likertResponses[3] === 0 ? ' ' : 'likert-fade'}`} />

            <button className={`text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] rounded-lg font-semibold duration-300 ease-in-out hover:underline ${isClicked ? 'button-fade' : ''}`} onClick={handleClick} onTouchEnd={handleClick}>
                Continue...
            </button>

        </div>
    );
}


