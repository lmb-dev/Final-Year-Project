'use client'

import './globals.css';
import React, { useState } from 'react';
// @ts-ignore
import Likert from 'react-likert-scale';

export default function PreQ1({ changeStage, createList }: { changeStage: () => void; createList: (intArray: number[]) => void })  {
    
    const [likertResponses, setLikertResponses] = useState([0, 0, 0, 0]);
    const updateLikertResponse = (index: number, value: number) => {
        const newResponses = [...likertResponses];
        newResponses[index] = value;
        setLikertResponses(newResponses);
    };

    //#region Demographic Questions
        const genderQuestion = {
            question: "Which of the following best describes your gender?",
            responses: [
                { value: 1, text: "Male"},
                { value: 2, text: "Female" },
                { value: 3, text: "Other"},
            ],
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(0, val.value);
            }
        };
        
        const ageQuestion = {
            question: "How old are you?",
            responses: [
                { value: 1, text: "21 and Under" },
                { value: 2, text: "22 to 34"},
                { value: 3, text: "35 to 44"},
                { value: 4, text: "45 to 54"},
                { value: 5, text: "55 to 64"},
                { value: 6, text: "65 and Over"},
            ],
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(1, val.value);
            }
        };

        const educationQuestion = {
            question: "What is the highest level of education you have achieved or are currently working towards? Equivalent levels may be selected.",
            responses: [
                { value: 1, text: "No formal education"},
                { value: 2, text: "GCSE" },
                { value: 3, text: "A-level"},
                { value: 4, text: "Bachelors degree"},
                { value: 5, text: "Masters degree"},
                { value: 6, text: "Doctoral degree"},
            ],
            // @ts-ignore
            onChange: val => {
                updateLikertResponse(2, val.value);
            }
        };

        const techExpQuestion = {
            question: "How would you rate your own computer expertise?",
            responses: [
                { value: 1, text: "Limited"},
                { value: 2, text: "Basic" },
                { value: 3, text: "Competent"},
                { value: 4, text: "Skilled"},
                { value: 5, text: "Mastery"},
            ],
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
        <div className="relative flex flex-col justify-center items-center w-full text-[2.75vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[1.75vw] mt-[350px] sm:mt-[350px] md:mt-[400px] lg:mt-[400px]">
            <h1 className="mb-2 text-center w-[90%]">
                Tell us a bit about yourself:
            </h1>         
                   
            <Likert {...genderQuestion} className={`noLine ${likertResponses[0] === 0 ? ' ' : 'likert-fade'}`} />
            <Likert {...ageQuestion} className={`noLine ${likertResponses[1] === 0 ? ' ' : 'likert-fade'}`} />
            <Likert {...educationQuestion} className={`noLine ${likertResponses[2] === 0 ? ' ' : 'likert-fade'}`} />
            <Likert {...techExpQuestion} className={`noLine ${likertResponses[3] === 0 ? ' ' : 'likert-fade'}`} />

            <button className={`text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] rounded-lg font-semibold duration-300 ease-in-out hover:underline ${isClicked ? 'button-fade' : ''}`} onClick={handleClick} onTouchEnd={handleClick}>
                Continue...
            </button>

        </div>
    );
}