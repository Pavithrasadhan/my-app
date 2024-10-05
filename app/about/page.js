import { Fugaz_One } from 'next/font/google';
import React from 'react';
import Image from 'next/image';


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function About() {
    return (

        <div className="grid grid-cols-2 gap-4">
            <div className=" p-4">

            <Image
      src="/pavi.jpg"
      width={500}
      height={500}
      alt="Pavithra"
      className = " "
      
    />
    </div>
    <div className="p-4">
            <h1 className={'text-7xl sm:text-7xl md:text-7xl text-center ' + fugaz.className}>
            Hi! I'm Pavithra, 
            </h1>
            <p className='text-4xl sm:text-4xl md:text-3xl text-center w-full mx-auto max-w-[600px]'>
                <span className='font-semibold'>
            A passionate developer with an interest in building web applications. 
            I enjoy learning new technologies and improving my skills.
                In my free time, I love reading books, exploring new places, and experimenting with new coding projects.
                </span>
            </p>           

    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={`text-indigo-500 duration-200 hover:text-white hover:bg-indigo-500 ${fugaz.className}`}>
            <a href="/Pavithra-Software Developer.pdf" target="_blank" rel="noopener noreferrer">
                Download my Resume
            </a>

            </p>
            </footer>
</div>
</div>
    );
}



