"use client";
import React, { useTransition, useState} from 'react';
import Image  from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TailwindCSS</li>
            </ul>
        ),
    },
    {

        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Master CyberSecurity</li>
                <li>Bachelor Computer Science</li>

            </ul>
        ),
    },
    {

        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Full stack Bootcamp</li>
                <li>Networking ec-council</li>

            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Solutions CTC</li>
                <li>Lebanese General Security</li>
                <li>MetroSuperstore</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
  return (
    <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
            <Image
                src="/images/About.jpg"
                alt="About image"
                className='object-cover'
                width={500}
                height={500}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>I am a full stack web developer with passion to create interactive and responsive web applications.
                   I have experience working with JavaScript, React, Node.js, Express, PostgreSQL, HTML, CSS, and Git.
                   I am a quick learner and always looking to expand my knowledge and skills.
                   I am excited to work with others to create amazing applications.
                </p>

                <div className='flex flex-row mt-8'>
                    <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                    >
                        Skills
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        Education
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("certifications")}
                        active={tab === "certifications"}
                    >
                        Certifications
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("experience")}
                        active={tab === "experience"}
                    >
                        Experience
                    </TabButton>
            
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}

                </div>

            </div>
        </div>

    </section>
  )
}

export default AboutSection

