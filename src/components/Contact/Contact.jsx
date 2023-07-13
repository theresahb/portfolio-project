import React from 'react'
import { media } from '../../data/data'
import './contact.css'

const Contact = () => {
  return (
    <main className='contact-container' id='contact'>
        <div className="contacts flex">
            <div className="contact-heading flex">
                <h1>Got something for us to work on?</h1>
                <div className="flex">
                    <p>Contact me here</p>
                </div>
            </div>
            <div className="contact-more flex">
                <div className="contact flex">
                    {media.map((social, index) => (
                        <div className="media flex" key={social.id}>
                            <p><a href={social.link}>{social.name}</a></p>
                        </div>
                    ))}
                </div>
                <div className="more flex">
                    <div className="flex">
                        <h2>More of my projects are here</h2>
                    </div>
                    
                    <p><a href="https://github.com/theresahb">GitHub</a></p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Contact