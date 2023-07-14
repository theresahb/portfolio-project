import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <aside>
        <nav className="aside-nav flex">
            <a href="#home">
                <svg xmlns="http://www.w3.org/2000/svg" className="side-icon icon-tabler icon-tabler-home-2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                    <path d="M10 12h4v4h-4z"></path>
                </svg>
            </a>
            <a href="#about">
                <svg xmlns="http://www.w3.org/2000/svg" className="side-icon icon-tabler icon-tabler-mood-smile" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 10l.01 0"></path>
                    <path d="M15 10l.01 0"></path>
                    <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
                </svg>
            </a>
            <a href="#projects">
                <svg xmlns="http://www.w3.org/2000/svg" className="side-icon icon-tabler icon-tabler-building-skyscraper" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21l18 0"></path>
                    <path d="M5 21v-14l8 -4v18"></path>
                    <path d="M19 21v-10l-6 -4"></path>
                    <path d="M9 9l0 .01"></path>
                    <path d="M9 12l0 .01"></path>
                    <path d="M9 15l0 .01"></path>
                    <path d="M9 18l0 .01"></path>
                </svg>
            </a>
            <a href="#contact">
                <svg xmlns="http://www.w3.org/2000/svg" className="side-icon icon-tabler icon-tabler-brand-telegram" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                </svg>
            </a>
        </nav>
    </aside>
  )
}

export default Sidebar