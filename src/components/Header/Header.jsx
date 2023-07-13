import React from 'react'
import avatar from '../../images/avatar.PNG'
import './header.css'

const Header = () => {
  return (
    <header>
        <nav className='navbar flex'>
          <div className="logo flex">
            <div className="avatar-image flex"><img src={avatar} alt="" /></div>
            <h2>Theresah</h2>
          </div>
          <button className="contact-me"><a href="mailto:theresahb14@gmail.com">Contact me</a></button>
        </nav>
    </header>
  )
}

export default Header