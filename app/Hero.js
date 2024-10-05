import { Fugaz_One } from 'next/font/google';
import React from 'react';


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Hero() {
    return (
        <div 
            className='py-4 md:py-10 flex flex-col gap-8 sm:gap-10' 
            
        >
            <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugaz.className}>
                Welcome to My Personal Space!
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]'>
                <span className='font-semibold'>
                    Hi! I'm Pavithra, a passionate developer dedicated to building innovative web applications. 
                    This application serves as a digital introduction to who I am, showcasing my skills, interests, 
                    and the projects I've worked on. Explore the "About Me" section to learn more about my journey and 
                    what inspires me.
                </span>
            </p>
        </div>
    );
}
