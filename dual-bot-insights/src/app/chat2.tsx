'use client'
export const runtime = 'edge';

import './globals.css';
import React, { useEffect, useState } from 'react';
import { useChat } from 'ai/react';

export default function Chat1({changeStage}: {changeStage:() => void}) {
    //#region Button Consts
        const [isHovered, setIsHovered] = useState(false); 
        const [isClicked, setIsClicked] = useState(false);
        
        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);
        const handleClick = () => {
            setIsClicked(true);
            changeStage();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

    //#endregion

    //#region SendButton Consts
        const [isHoveredSend, setIsHoveredSend] = useState(false); 
        
        const handleMouseEnterSend = () => setIsHoveredSend(true);
        const handleMouseLeaveSend = () => setIsHoveredSend(false);
    //#endregion
  
    //#region timer
        const [timeRemaining, setTimeRemaining] = useState(500);
        useEffect(() => {
                const timer = setInterval(() => {
                    setTimeRemaining((prevTime) => {
                        if (prevTime === 0) {
                        clearInterval(timer);
                        changeStage();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        return 0;
                        }
                        return prevTime - 1;
                    });
                }, 1000);
     
                return () => clearInterval(timer);
        }, [changeStage]);
    //#endregion

    const { messages, input, handleInputChange, handleSubmit} = useChat({
        api: '/api/chat',
        initialMessages: [
            {
                id: '',
                content: 'Your purpose is to talk about Animals and Animals only. Do not answer requests or questions not related to it directly. You are a talkative, friendly zoologist, who is very keen to help unless the conversation is not about animals. You are sometimes distracted from answering questions properly or directly. You can use excessive capitalization and punction to show emotion. You can provide intrusive suggestions to steer the conversation. Be concise but also elaborate and unclear',
                role: 'system'
            }
        ],
    })


    return (
        <div className="relative flex flex-col mx-auto w-[80%] md:w-[65%] mt-[-40vw] sm:mt-[-40vw] md:mt-[-30vw] lg:mt-[-25vw] text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.25vw]">

            <h1 className="mb-4 text-center">
                You can now speak freely to Sage by typing into the box below. You can have <span className="font-semibold">up to five minutes of conversation</span>, but do not have to use the whole time.<br></br>Use this time to see what Sage can do, and learn about animals!   
            </h1>

            <ul className="mb-4" style={{color: `${'var(--text-three)'}`}}> 
                {messages
                    .filter((m) => m.role !== "system")
                    .map((m, index) => (
                        <li key={index} className={`py-4 ${index < messages.length - 2 ? 'message-fade' : ''}`}>
                            <span className={"title font-semibold"}>
                                {m.role === "user" ? 'User: ' : "Sage: "}
                            </span>
                            <span className="text whitespace-pre-line">{m.content}</span>
                        </li>
                    ))}
            </ul>

            <form onSubmit={handleSubmit} className="flex gap-4 mb-12">
                <input className="chat-input border-slate/50 py-2 px-4 text" placeholder="Ask about Geography..." value={input} onChange={handleInputChange}/>
                <button className="title font-semibold send-input" type="submit" style={{ filter: isHoveredSend ? `drop-shadow(0 0 3px ${'var(--text-three)'})` : 'none' }} onMouseEnter={handleMouseEnterSend} onMouseLeave={handleMouseLeaveSend} onTouchStart={handleMouseEnterSend} onTouchEnd={handleMouseLeaveSend}>Send</button>
            </form>


            <div className="text-center">
                <button className={`title text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] font-semibold ${isClicked ? 'button-fade' : ''}`} style={{ filter: isHovered ? `drop-shadow(0 0 1px ${'var(--text-one)'})` : 'none' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} onTouchStart={handleMouseEnter} onTouchEnd={()=>{handleMouseLeave(); handleClick();}}>
                    End Conversation...
                </button>

                <h1 className="mb-2 text-center accent">
                    Seconds Remaining: {Math.ceil(timeRemaining)}
                </h1>
            </div>


        </div>
    );
}