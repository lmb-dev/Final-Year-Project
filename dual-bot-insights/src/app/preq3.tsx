'use client'

import './globals.css';
import React, { useState } from 'react';
// @ts-ignore
import Likert from 'react-likert-scale';

export default function PreQ3({ changeStage, createList }: { changeStage: () => void; createList: (intArray: number[]) => void }) {
    const fivePointScale= [
        { value: 1, text: "Disagree strongly" },
        { value: 2, text: "Disagree a little" },
        { value: 3, text: "Neutral; no opinion"},
        { value: 4, text: "Agree a little" },
        { value: 5, text: "Agree strongly" }
      ];

    const [likertResponses, setLikertResponses] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    const updateLikertResponse = (index: number, value: number) => {
        const newResponses = [...likertResponses];
        newResponses[index] = value;
        setLikertResponses(newResponses);
    };

    //#region GAAIS Questions
        const GAAIS1 = {
            question: "Artificial Intelligence can provide new economic opportunities for this country",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(0, val.value);
            }
        };

        const GAAIS2 = {
            question: "There are many beneficial applications of Artificial Intelligence",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(1, val.value);
            }
        };

        const GAAIS3 = {
            question: "Much of society will benefit from a future full of Artificial Intelligence",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(2, val.value);
            }
        };

        const GAAIS4 = {
            question: "Artificial intelligence can have positive impacts on people’s wellbeing",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(3, val.value);
            }
        };

        const GAAIS5 = {
            question: "I find Artificial Intelligence sinister",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(4, val.value);
            }
        };

        const GAAIS6 = {
            question: "I shiver with discomfort when I think about future uses of Artificial Intelligence",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(5, val.value);
            }
        };

        const GAAIS7 = {
            question: "Artificial Intelligence might take control of people",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(6, val.value);
            }
        };

        const GAAIS8 = {
            question: "I think Artificial intelligence is dangerous",
            responses: fivePointScale,
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(7, val.value);
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
        <div className="relative flex flex-col justify-center items-center w-full text-[3Svw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[1.75vw] mt-[350px] sm:mt-[350px] md:mt-[400px] lg:mt-[400px]">
            <h1 className="mb-2 text-center w-[90%]">
                Again, please select each option to indicate the extent to which you agree or disagree, this time regarding your attitudes towards artificial intelligence:
            </h1>

            <Likert {...GAAIS5} className={`${likertResponses[4] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...GAAIS3} className={`${likertResponses[2] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...GAAIS1} className={`${likertResponses[0] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...GAAIS7} className={`${likertResponses[6] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...GAAIS8} className={`${likertResponses[7] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...GAAIS2} className={`${likertResponses[1] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...GAAIS4} className={`${likertResponses[3] === 0 ? ' ' : 'likert-fade'}`}/>
            <Likert {...GAAIS6} className={`${likertResponses[5] === 0 ? ' ' : 'likert-fade'}`}/>         

            <button className={`text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] rounded-lg font-semibold duration-300 ease-in-out hover:underline ${isClicked ? 'button-fade' : ''}`} onClick={handleClick} onTouchEnd={handleClick}>
                Continue
            </button>

        </div>
    );
}