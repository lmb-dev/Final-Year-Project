'use client'

import './globals.css';
import React, { useEffect, useState } from 'react';
import {HiOutlineMail, HiOutlineMailOpen} from "react-icons/hi";
import {BsSun, BsSunFill, BsMoon, BsMoonFill} from "react-icons/bs";


export default function Header() {

    const email = 'lxb150@student.bham.ac.uk';  
    
    //#region email consts
      const [isHoveredEmail, setIsHoveredEmail] = useState(false);
      const handleMouseEnterEmail = () => setIsHoveredEmail(true);
      const handleMouseLeaveEmail = () => setIsHoveredEmail(false);
      const handleClickEmail = () => window.location.href = `mailto:${email}`;
    //#endregion

    //#region moon consts
      const [isHoveredMoon, setIsHoveredMoon] = useState(false);
      const handleMouseEnterMoon = () => setIsHoveredMoon(true);
      const handleMouseLeaveMoon = () => setIsHoveredMoon(false);
      const handleClickMoon = () => {
        document.documentElement.setAttribute('data-theme', 'dark');
        setIsHoveredMoon(false); // Reset hover state for the sun
      };
    //#endregion

    //#region sun consts
      const [isHoveredSun, setIsHoveredSun] = useState(false);
      const handleMouseEnterSun = () => setIsHoveredSun(true);
      const handleMouseLeaveSun = () => setIsHoveredSun(false);
      const handleClickSun = () => {
        document.documentElement.setAttribute('data-theme', 'light');
        setIsHoveredSun(false); // Reset hover state for the moon
      };
    //#endregion

    //#region scroll consts
      const [isScrolled, setIsScrolled] = useState(false);
      useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          setIsScrolled(scrollPosition > 250);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    //#endregion

  return (
    <header className={`header fixed w-full flex justify-between ${isScrolled ? 'header-shadow' : ''}`}>
        
        <div className="flex items-center h-full">
          {isHoveredEmail
            ? <HiOutlineMailOpen className="header-icon" style={{ cursor: 'pointer', marginLeft: '2vw', filter: isHoveredEmail ? `drop-shadow(0 0 10px ${'var(--text-two)'})` : 'none' }} onMouseEnter={handleMouseEnterEmail} onMouseLeave={handleMouseLeaveEmail} onClick={handleClickEmail} />
            : <HiOutlineMail className="header-icon" style={{ cursor: 'pointer', marginLeft: '2vw' }} onMouseEnter={handleMouseEnterEmail} onMouseLeave={handleMouseLeaveEmail} onClick={handleClickEmail} />
          }
          <span className="header-text ml-2 hidden md:block">
            Questions? Send an email!
          </span>
        </div>

        <div className="flex items-center h-full justify-end">
          {isHoveredMoon ||  (typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark')
            ? <BsMoonFill className="header-icon" style={{ cursor: 'pointer', marginRight: '1vw', filter: isHoveredMoon ? `drop-shadow(0 0 10px ${'var(--text-two)'})` : 'none' }} onMouseEnter={handleMouseEnterMoon} onMouseLeave={handleMouseLeaveMoon} onClick={handleClickMoon} />
            : <BsMoon className="header-icon" style={{ cursor: 'pointer', marginRight: '1vw' }} onMouseEnter={handleMouseEnterMoon} onMouseLeave={handleMouseLeaveMoon} onClick={handleClickMoon} />
          }

          {isHoveredSun ||  (typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'light')
            ? <BsSunFill className="header-icon" style={{ cursor: 'pointer', marginRight: '2vw', filter: isHoveredSun ? `drop-shadow(0 0 10px ${'var(--text-two)'})` : 'none' }} onMouseEnter={handleMouseEnterSun} onMouseLeave={handleMouseLeaveSun} onClick={handleClickSun} />
            : <BsSun className="header-icon" style={{ cursor: 'pointer', marginRight: '2vw' }} onMouseEnter={handleMouseEnterSun} onMouseLeave={handleMouseLeaveSun} onClick={handleClickSun} />
          }
        </div> 
      </header>
  );
}
