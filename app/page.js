import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import './globals.css';
import logo from './Assets/Images/yugiohlogo.png'




export default 

function Home() {
  return (
    <main > 
      
      <div className="container">
      
      <Image className='logo'
      src={logo}
      layout="fixed"
      alt="Logo"
      />
      
      
      
        <h1>Quiz App</h1>
        <Link href='/quiz'>
        <button> Start Quiz</button>
        </Link>
      </div>
      
    </main>
  );
}
