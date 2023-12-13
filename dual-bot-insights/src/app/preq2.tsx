'use client'

import './globals.css';
import React, { useState } from 'react';
// @ts-ignore
import Likert from 'react-likert-scale';

export default function Preq2({ changeStage, createList }: { changeStage: () => void; createList: (intArray: number[]) => void }) {
    const fivePointScale= [
        { value: 1, text: "Disagree strongly" },
        { value: 2, text: "Disagree a little" },
        { value: 3, text: "Neutral; no opinion"},
        { value: 4, text: "Agree a little" },
        { value: 5, text: "Agree strongly" }
      ];

    const [likertResponses, setLikertResponses] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const updateLikertResponse = (index: number, value: number) => {
        const newResponses = [...likertResponses];
        newResponses[index] = value;
        setLikertResponses(newResponses);
    };

    //#region BFI Questions
        const BFI1 = {
            question: "... tends to be quiet",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(0, val.value);
            }
        };

        const BFI2 = {
            question: "... is compassionate, has a soft heart",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(1, val.value);
            }
        };

        const BFI3 = {
            question: "... tends to be disorganized",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(2, val.value);
            }
        };

        const BFI4 = {
            question: "... worries a lot",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(3, val.value);
            }
        };

        const BFI5 = {
            question: "... is fascinated by art, music, or literature",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(4, val.value);
            }
        };

        const BFI6 = {
            question: "... is dominant, acts as a leader",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(5, val.value);
            }
        };

        const BFI7 = {
            question: "... is sometimes rude to others",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(6, val.value);
            }
        };

        const BFI8 = {
            question: "... has difficulty getting started on tasks",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(7, val.value);
            }
        };

        const BFI9 = {
            question: "... tends to feel depressed, blue",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(8, val.value);
            }
        };

        const BFI10 = {
            question: "... has little interest in abstract ideas",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(9, val.value);
            }
        };

        const BFI11 = {
            question: "... is full of energy",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(10, val.value);
            }
        };

        const BFI12 = {
            question: "... assumes the best about people",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(11, val.value);
            }
        };

        const BFI13 = {
            question: "... is reliable, can always be counted on",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(12, val.value);
            }
        };

        const BFI14 = {
            question: "... is emotionally stable, not easily upset",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(13, val.value);
            }
        };

        const BFI15 = {
            question: "... is original, comes up with new ideas",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(14, val.value);
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
        <div className="relative flex flex-col justify-center items-center w-full text-[2.5vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[1.75vw] mt-[-25vh] sm:mt-[-30vh] md:mt-[-30vh] lg:mt-[-45vh]">
            <h1 className="mb-2 text-center w-[90%]">
                Below are a number of characteristics that may or may not apply to you. For example, do you agree that you are someone who likes to spend time with others? Please select each option to indicate the extent to which you agree or disagree with the statement.<br></br><br></br><i> I am someone who:</i>
            </h1>
            
            <Likert {...BFI1} className={`${likertResponses[0] === 0 ? ' ' : 'likert-fade'}`} />
            <Likert {...BFI2} className={`${likertResponses[1] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI3} className={`${likertResponses[2] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI4} className={`${likertResponses[3] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI5} className={`${likertResponses[4] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI6} className={`${likertResponses[5] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI7} className={`${likertResponses[6] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI8} className={`${likertResponses[7] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI9} className={`${likertResponses[8] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI10} className={`${likertResponses[9] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI11} className={`${likertResponses[10] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI12} className={`${likertResponses[11] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI13} className={`${likertResponses[12] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI14} className={`${likertResponses[13] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...BFI15} className={`${likertResponses[14] === 0 ? ' ' : 'likert-fade'}`}/>

            <button className={`text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] rounded-lg font-semibold duration-300 ease-in-out hover:underline ${isClicked ? 'button-fade' : ''}`} onClick={handleClick} onTouchEnd={handleClick}>
                Continue
            </button>

        </div>
    );
}