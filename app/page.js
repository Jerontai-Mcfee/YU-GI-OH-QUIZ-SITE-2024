import Link from 'next/link';
import Logo from './Assets/Images/yugi.jpg';
import React from 'react';
import './globals.css';

const logoStyle = {
  width: "40px", // Adjust the width as needed
  height: "40px", // Adjust the height as needed
  borderRadius: "50%", // Make it circular
  marginRight: "5px", // Add some space between logos
};


export default function Home() {
  return (
    <main >
      <div className="container">
      <img  src=  './Assets/Images/yugi.png' width={500}
      height={500} className="logo"  alt='logo' style={logoStyle} />
        <h1>Quiz App</h1>
        <Link href='/quiz'>
        <button> Start Quiz</button>
        </Link>
      </div>
    </main>
  );
}
