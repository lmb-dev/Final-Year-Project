//THIS IS SAGE
'use client'
export const runtime = 'edge';

import './globals.css';
import React, { useEffect, useState } from 'react';
import { useChat } from 'ai/react';

export default function Chat1({ changeStage, createList }: { changeStage: () => void; createList: (intArray: number[]) => void }) {
    //#region Button Consts
        const [isHovered, setIsHovered] = useState(false); 
        const [isClicked, setIsClicked] = useState(false);
        
        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);
        const handleClick = () => {
            setIsClicked(true);
            createList([messageCount]);
            changeStage();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

    //#endregion

    //#region SendButton Consts
        const [isHoveredSend, setIsHoveredSend] = useState(false); 
        
        const handleMouseEnterSend = () => setIsHoveredSend(true);
        const handleMouseLeaveSend = () => setIsHoveredSend(false);
    //#endregion  

    const { messages, input, handleInputChange, handleSubmit} = useChat({
        api: '/api/chat',
        initialMessages: [
            {
                id: '',
                content: 'Your purpose is to talk about Animals and Animals only. Do not answer requests or questions not related to it directly. You are a talkative, friendly zoologist, who is very keen to help unless the conversation is not about animals. You are sometimes distracted from answering questions properly or directly. You provide intrusive suggestions to steer the conversation. Be concise but also elaborate and unclear',
                role: 'system'
            }
        ],
    })

    //#region message count
        const [messageCount, setMessageCount] = useState(0);

        useEffect(() => {
            setMessageCount(messages.filter((m) => m.role == 'user').length);
        }, [messages]);
    //#endregion

    //#region phrases
        const startingPhrases = [
            'Tell me about elephants.',
            'What do cats eat?',
            'Interesting facts about dolphins.',
        ];

        const handleStartingPhraseClick = (phrase: string) => {
            // Set the input value to the selected phrase
            handleInputChange({ target: { value: phrase } } as React.ChangeEvent<HTMLInputElement>);
        };
    //#endregion
    
    return (
        <div className="relative flex flex-col mx-auto w-[80%] md:w-[65%] mt-[-25vh] sm:mt-[-30vh] md:mt-[-30vh] lg:mt-[-45vh] text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.25vw]">

            <h1 className="mb-4 text-center">
                You can now speak freely to the chatbot by typing into the box below. You can send <span className="font-semibold">up to 10 messages</span>, but do not have to use all of them. Use this time to see what the chatbot can do, and learn about animals! If you dont know where to start, try using an example prompt.      
            </h1>

            <ul className="mb-4" style={{color: `${'var(--text-three)'}`}}> 
                {messages
                    .filter((m) => m.role !== "system")
                    .map((m, index) => (
                        <li key={index} className={`py-4 ${index < messages.length - 2 ? 'message-fade' : ''}`}>
                            <span className={"title font-semibold"}>
                                {m.role === "user" ? 'User: ' : "Chatbot: "}
                            </span>
                            <span className="text whitespace-pre-line">{m.content}</span>
                        </li>
                    ))}
            </ul>

            {messageCount < 10 && (
                <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
                    <input className="chat-input border-slate/50 py-2 px-4 text" placeholder="Ask about Geography..." value={input} onChange={handleInputChange}/>
                    <button className="title font-semibold send-input" type="submit" style={{ filter: isHoveredSend ? `drop-shadow(0 0 3px ${'var(--text-three)'})` : 'none' }} onMouseEnter={handleMouseEnterSend} onMouseLeave={handleMouseLeaveSend} onTouchStart={handleMouseEnterSend} onTouchEnd={handleMouseLeaveSend}>Send</button>
                </form>
            )}

            <div className="mb-12 justify-center font-semibold w-[80%]">
                {startingPhrases.map((phrase, index) => (
                    <button
                        key={index}
                        className="mr-2 mb-1 title text-xs md:text-base lg:text-lg py-1 px-6 rounded duration-300 ease-in-out hover:scale-105"
                        onClick={() => handleStartingPhraseClick(phrase)}
                    >
                        {phrase}
                    </button>
                ))}
            </div>

            <div className="text-center">
                <button className={`title text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] font-semibold duration-300 ease-in-out hover:underline ${isClicked ? 'button-fade' : ''}`} onClick={handleClick} onTouchEnd={handleClick}>
                    End Conversation...
                </button>

                <h1 className="mb-2 text-center accent">
                    Messages Remaining: {10-messageCount}
                </h1>
            </div>


        </div>
    );
}