'use client'

import { useState } from 'react';
import './globals.css';


export default function End() {
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = () => {
        const linkToCopy = 'https://dual-bot-insights.vercel.app/';
    
        navigator.clipboard.writeText(linkToCopy)
          .then(() => {
            setCopySuccess(true);
          })
          .catch((err) => {
            console.error('Unable to copy to clipboard', err);
          });
      };

    return (
        <div className="relative flex flex-col justify-center items-center w-full text-[2.5vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[1.75vw] mt-[-25vh] sm:mt-[-30vh] md:mt-[-30vh] lg:mt-[-45vh]">
            <h1 className="title mb-2 text-center w-[80%] text-[6vw] sm:text-[6vw] md:text-[6vw] lg:text-[3vw]">
                Thank you for participating in Dual-Bot Insights
            </h1>

            <h1 className="text mb-2 text-center" onClick={copyToClipboard} style={{ cursor: 'pointer'}}>
                {copySuccess ? 'Link copied to clipboard!' : 'Click to share the link: https://dual-bot-insights.vercel.app/'}
            </h1>   
        </div>
    );
}