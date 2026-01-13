"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { FaLinkedin } from 'react-icons/fa';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        if (response.status === 200) {
            setEmailSubmitted(true);
            e.target.reset();
        }
    };

    return (
        <section className='grid md:grid-cols-2 gap-4 my-12 py-24 relative' id='contact'>
            <div className='bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-3xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2 opacity-50'></div>

            <div className='z-10'>
                <h5 className='text-2xl font-bold text-white my-2 font-mono'>
                    Let's Connect
                </h5>
                <p className='text-[#ADB7BE] mb-6 max-w-md'>
                    I'm looking for new opportunities, my inbox is always open. 
                    Whether you have a question or just want to say hi, I'll try my best 
                    to get back to you!
                </p>
                
                <div className='socials flex flex-row gap-4'>
                    <Link 
                        href="https://www.linkedin.com/in/your-profile" 
                        target="_blank"
                        className="text-white hover:text-blue-400 transition-all duration-300 text-4xl hover:-translate-y-1"
                    >
                        <FaLinkedin />
                    </Link>
                </div>
            </div>

            <div className='z-10'>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor="email" className='text-white mb-2 block text-sm font-medium'>
                            Your email
                        </label>
                        <input
                            name='email'
                            type="email"
                            id="email"
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-cyan-500 transition-colors outline-none'
                            placeholder='joe@google.com'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="subject" className='text-white block text-sm mb-2 font-medium'>
                            Subject
                        </label>
                        <input
                            name='subject'
                            type="text"
                            id="subject"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-cyan-500 transition-colors outline-none'
                            placeholder='Just say hello'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>
                            Message
                        </label>
                        <textarea 
                            name='message'
                            id="message"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-cyan-500 transition-colors outline-none'
                            placeholder="Let's talk..."
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium py-3 px-5 rounded-lg w-full transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-[0.98]'
                    >
                        Send Message
                    </button>
                    {emailSubmitted && (
                        <p className='text-green-500 text-sm mt-4 font-medium'>
                            Message sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default EmailSection;
