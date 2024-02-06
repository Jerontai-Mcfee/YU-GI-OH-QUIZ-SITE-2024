import Link from 'next/link';
import Image from './Assets/Images/yugi.jpg';
import Image2 from './Assets/Images/bgojo.jpg';
import React from 'react';
import './globals.css';

const logoStyle = {
  width: "40px", 
  height: "40px", 
  borderRadius: "50%", 
  marginRight: "5px", 
};


export default function Home() {
  return (
    <main ><img src={Image} width={500}
      height={500} className="logo"  alt='logo' style={logoStyle} />
      <div className="container">
      
        <h1>Quiz App</h1>
        <Link href='/quiz'>
        <button> Start Quiz</button>
        </Link>
      </div>
    </main>
  );
}
