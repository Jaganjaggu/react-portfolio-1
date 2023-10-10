import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram,AiOutlineTwitter } from "react-icons/ai";



import './Footer.css'

function Footer() {
  return (
    <>
      <section id='footer'>
        <>
          <div className='footer-section'>
            <div className='footer-heading'>PORTFOLIO</div>
            <div className='footer-lists'>
              <ul className='footer-links'>
                <li><a href="#intro">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#works">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className='footer-icon-section'>
              <a href="www.facebook.com" target='_blank'><div className='footer-icon'><GrFacebookOption size={'17px'} className='footer-icon-color'/></div></a>
              <a href="https://www.instagram.com/" target='_blank'><div className='footer-icon'><AiOutlineInstagram size={'17px'} className='footer-icon-color'/></div></a>
              <a href="https://www.twitter.com/" target='_blank'><div className='footer-icon'><AiOutlineTwitter size={'17px'} className='footer-icon-color'/></div></a>

            </div>
          </div>
        </>
      </section>
    </>
  )
}

export default Footer