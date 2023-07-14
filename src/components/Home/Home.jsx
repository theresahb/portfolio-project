import React from 'react'
import heroImage from '../../images/hero.PNG'
import './home.css'

const Home = () => {
  return (
    <main className='home-container' id='home'>
        <div className="hero flex">
            <div className="hero-text">
                <h1>I love to craft accessible and responsive websites.</h1>
            </div>
            <div className="hero-image-text flex">
                <div className="image-container">
                    <div className="hero-image">
                        <img src={heroImage} alt="heroImage" />
                    </div>
                </div>
                <div className="hero-subtext flex">
                    <div className="sub flex">
                        <h2>Hello 👋</h2>
                        <h2>I'm Theresah,</h2>
                        <h2>A Frontend Developer based in Ghana.</h2>
                    </div>
                    <button className='resume-btn'><a href="https://drive.google.com/file/d/12incQ_aY__1vzjOjSCPq7EP_155Bs61C/view?usp=drivesdk">Resume</a></button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home