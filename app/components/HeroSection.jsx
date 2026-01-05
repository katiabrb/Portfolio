"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold ">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                Hello, I'm {" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Katia",
                  1000,
                  "Full-stack Developer",
                  1000,
                  "Java Expert",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
              Skilled Software Developer with strong expertise in backend development, APIs, and scalable web applications. Proficient in Magnolia CMS, Java, React, SQL, and Python.
            </p>
            <div>
              <Link 
                href="#contact" 
                className='inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-linear-to-br from-blue-500 via-sky-600 to-cyan-500 hover:opacity-90 text-white text-center'
              >
                Hire Me
              </Link>

              <a 
                href="/Katia_CV.pdf" 
                download="Katia_CV.pdf"
                className='inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-linear-to-br from-blue-500 via-sky-600 to-cyan-500 hover:bg-slate-800 text-white mt-3'
              >
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-center'>
                  Download CV
                </span>
              </a>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-62.5 h-62.5 lg:w-100 lg:h-100 relative overflow-hidden shadow-2xl shadow-blue-600/20">
              <Image
                src="/images/katia-portfolio.jpeg"
                alt="hero image"
                fill
                priority
                sizes="(max-width: 768px) 250px, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
