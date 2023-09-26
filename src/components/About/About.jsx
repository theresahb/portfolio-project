import React from 'react'
import aboutImage from '../../images/about.PNG'
import { skills } from '../../data/data'
import './about.css'

const About = () => {
  return (
    <main className='about-container' id='about'>
        <div className="about flex">
            <div className="image-container">
                <div className="about-image">
                    <img src={aboutImage} alt="heroImage" />
                </div>
            </div>
            <div className="about-text flex">
                <div className="subtext flex">
                    <h1>Meet Theresah👋</h1>
                    <p>
                        I started this whole journey because I want to build and solve real life problems 
                        and also, build something for myself and by myself. Currently learning to
                        improve my skills in JavaScript and React. I have no work experience yet.
                    </p>
                </div>
                <div className="subtext flex">
                    <h2>Tools</h2>
                    <ul className='tools flex'>
                        {skills.map((skill) => (
                            <li key={skill.id}>{skill.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </main>
  )
}

export default About