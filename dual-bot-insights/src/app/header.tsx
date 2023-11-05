'use client'

import './globals.css';


export default function Header() {

    const email = 'lxb150@student.bham.ac.uk'; 

  return (
    <header className="header fixed top-0 left-0 w-full bg-background rounded-b-lg p-4">
        <div className="border-line"></div>

        <div className="flex justify-between">
            <p className="header-text">This page looks better in dark mode</p>
            <a className="header-text" href={`mailto:${email}`}>
                Questions? Contact me at {email}
            </a>
        </div>

    </header>
  );
}
