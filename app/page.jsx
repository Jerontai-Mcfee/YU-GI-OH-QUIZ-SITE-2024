import Link from 'next/link';
import logo from './Assets/Images/yugi.png';
import Image from 'next/image'
import Image2 from './Assets/Images/bgojo.jpg';
import React from 'react';
import './globals.css';




export default function Home() {
  return (
    <main > <div className="container">
      <Image src="/yugi.png" layout="fill"
      classname="logo"
      />
      <Image src={logo} />
     
      
        <h1>Quiz App</h1>
        <Link href='/quiz'>
        <button> Start Quiz</button>
        </Link>
      </div>
    </main>
  );
}
