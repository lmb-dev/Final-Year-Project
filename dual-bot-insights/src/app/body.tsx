'use client'

import './globals.css';
import React from 'react';
// @ts-ignore
import Likert from 'react-likert-scale';

export default function Body() {
  const fivePointScale= [
    { value: 1, text: "Disagree strongly" },
    { value: 2, text: "Disagree a little" },
    { value: 3, text: "Neutral; no opinion"},
    { value: 4, text: "Agree a little" },
    { value: 5, text: "Agree strongly" }
  ];

  //#region Demographic Questions
    const genderQuestion = {
      question: "Which of the following best describes your gender?",
      responses: [
        { value: 1, text: "Male"},
        { value: 2, text: "Female" },
        { value: 3, text: "Non-binary"},
        { value: 4, text: "Other"},
      ],
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };
      
    const ageQuestion = {
      question: "How old are you?",
      responses: [
        { value: 1, text: "Under 18"},
        { value: 2, text: "18-21" },
        { value: 3, text: "22-29"},
        { value: 4, text: "30-39"},
        { value: 5, text: "40-49"},
        { value: 6, text: "50-59"},
        { value: 7, text: "65+"},
      ],
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const educationQuestion = {
      question: "What is the highlest level of education you have achieved or are currently working towards? Equivalent levels may be selected as well.",
      responses: [
        { value: 1, text: "No formal education"},
        { value: 2, text: "GCSE" },
        { value: 3, text: "A-level"},
        { value: 4, text: "Undergraduate degree"},
        { value: 5, text: "Master's degree"},
        { value: 6, text: "Doctorate PhD"},
      ],
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const techExpQuestion = {
      question: "How would you rate your own computer expertise?",
      responses: [
        { value: 1, text: "Do not feel competent at all"},
        { value: 2, text: "Below average" },
        { value: 3, text: "Average"},
        { value: 4, text: "Above average"},
        { value: 5, text: "Professionally qualified specialist"},
      ],
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };
  //#endregion

  //#region BFI Questions
    const BFI1 = {
      question: "... tends to be quiet",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI2 = {
      question: "... is compassionate, has a soft heart",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI3 = {
      question: "... tends to be disorganized",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI4 = {
      question: "... worries a lot",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI5 = {
      question: "... is fascinated by art, music, or literature",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI6 = {
      question: "... is dominant, acts as a leader",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI7 = {
      question: "... is sometimes rude to others",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI8 = {
      question: "... has difficulty getting started on tasks",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI9 = {
      question: "... tends to feel depressed, blue",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI10 = {
      question: "... has little interest in abstract ideas",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI11 = {
      question: "... is full of energy",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI12 = {
      question: "... assumes the best about people",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI13 = {
      question: "... is reliable, can always be counted on",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI14 = {
      question: "... is emotionally stable, not easily upset",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const BFI15 = {
      question: "... is original, comes up with new ideas",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };
  //#endregion

  //#region GAAIS Questions
    const GAAIS1 = {
      question: "Artificial Intelligence can provide new economic opportunities for this country",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const GAAIS2 = {
      question: "There are many beneficial applications of Artificial Intelligence",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const GAAIS3 = {
      question: "Much of society will benefit from a future full of Artificial Intelligence",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const GAAIS4 = {
      question: "Artificial intelligence can have positive impacts on people’s wellbeing",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const GAAIS5 = {
      question: "I find Artificial Intelligence sinister",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const GAAIS6 = {
      question: "I shiver with discomfort when I think about future uses of Artificial Intelligence",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const GAAIS7 = {
      question: "Artificial Intelligence might take control of people",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };

    const GAAIS8 = {
      question: "I think Artificial intelligence is dangerous",
      responses: fivePointScale,
      // @ts-ignore
      onChange: val => {
        console.log(val);
      }
    };
  //#endregion

  return (
    <div className="max-w-4xl px-4 flex-col justify-center items-center min-h-screen" style={{marginTop: '100px'}}>
          <h1 className="mb-4 text-2xl">
            Tell us a bit about yourself:
          </h1>         
          
          <Likert {...genderQuestion} className="noLine" />
          <Likert {...ageQuestion} className="noLine" />
          <Likert {...educationQuestion} className="noLine" />
          <Likert {...techExpQuestion} className="noLine" />

          <h1 className="mb-4 text-2xl">
            <br></br>Below are a number of characteristics that may or may not apply to you. For example, do you agree that you are someone who likes to spend time with others? Please select each statement to indicate the extent to which you agree or disagree with that statement.<br></br><br></br><i> I am someone who:</i>
          </h1>

          <Likert {...BFI1} />
          <Likert {...BFI2} />
          <Likert {...BFI3} />
          <Likert {...BFI4} />
          <Likert {...BFI5} />
          <Likert {...BFI6} />
          <Likert {...BFI7} />
          <Likert {...BFI8} />
          <Likert {...BFI9} />
          <Likert {...BFI10} />
          <Likert {...BFI11} />
          <Likert {...BFI12} />
          <Likert {...BFI13} />
          <Likert {...BFI14} />
          <Likert {...BFI15} />

          <h1 className="mb-4 text-2xl">
            <br></br>Again, please select each statement to indicate the extent to which you agree or disagree, this time regarding your attitudes towards artificial intelligence:
          </h1>

          <Likert {...GAAIS1} />
          <Likert {...GAAIS2} />
          <Likert {...GAAIS3} />
          <Likert {...GAAIS4} />
          <Likert {...GAAIS5} />
          <Likert {...GAAIS6} />
          <Likert {...GAAIS7} />
          <Likert {...GAAIS8} />
    </div>
  );
}