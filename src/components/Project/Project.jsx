import React from 'react'
import { projects } from '../../data/data'
import './project.css'

const Project = () => {
    return (
    <main className='project-container' id='projects'>
        <div className="all-projects flex">
            <div className="heading flex">
                <h1>Selected Projects</h1>
                <p>These are some projects I've worked on. All responsive.</p>
            </div>
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project flex" key={project.id}>
                        <div className="head flex">
                            <h2>{project.title}</h2>
                            <p className='details'>{project.details}</p>
                        </div>
                        
                        <div className='project-tools flex'>{project.tools.map((tool, index) => (
                            <p key={index}>{tool}</p>
                        ))}</div>
                        <div className="project-links flex">
                            <p>
                                <a href={project.github}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                    </svg>
                                </a>
                            </p>
                            <p>
                                <a href={project.live}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M17 7l-10 10"></path>
                                <path d="M8 7l9 0l0 9"></path>
                             </svg>
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    </main>
  )
}

export default Project