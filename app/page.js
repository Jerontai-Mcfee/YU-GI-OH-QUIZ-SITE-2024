import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import './globals.css';
import styles from './Home.module.css';




export default 

function Home() {
  return (
    <main > 
      
      <div className="container">
      
      <Image className={styles.circularLogo}
      src="/yugi.png" 
      layout="fixed"
      width={300}
      height={300}
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