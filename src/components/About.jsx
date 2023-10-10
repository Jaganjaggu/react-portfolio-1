import React from 'react'
import Profpic from '../assets/profpic2.png'
import './About.css'
import { GiAchievement } from "react-icons/gi";



function About() {
  const iconcolor = {
    color: 'var(--about-icon)'
  }
  return (
    <>
      <section id='about'>
        <div className='about-section'>
          <div className='about-heading'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>
          </div>
          <div className='about-content'>
            <div className='about-left-grid'>
              <div className='left-grid-card-back'>
                <div className='left-grid-card-front  '>
                  <img src={Profpic} alt="" />
                </div>
              </div>
            </div>

            <div className='about-right-grid'>
              <div className='about-right-grid-card'>
               <div className='about-center'>
                  <div className='about-card'>
                    <div><GiAchievement size={'25px'} style={iconcolor} /></div>
                    <h3>Experience</h3>
                    <p>2+ Years Working</p>
                  </div>
               </div>
              <div className='about-center'>
                  <div className='about-card'>
                    <div><GiAchievement size={'25px'} style={iconcolor} /></div>
                    <h3>Skills</h3>
                    <p>HTML CSS JS REACT</p>
                  </div>
              </div>
              <div className='about-center'>
                  <div className='about-card'>
                    <div><GiAchievement size={'25px'} style={iconcolor} /></div>
                    <h3>Projects</h3>
                    <p>5+ completed</p>
                  </div>
              </div>

              </div>
              <div className='about-para'>
                <p>"I am a dedicated and adaptable IT professional with a strong passion for technology and a desire for continuous learning. My background includes valuable experience in both the IT industry and as an intern in MEAN stack development at Luminar Technolab. I thrive in dynamic environments, solving complex problems, and collaborating with diverse teams. With a commitment to staying current with emerging technologies, I am excited to embark on a new chapter in my career as a MEAN stack developer, where I can leverage my existing skills and knowledge to create innovative solutions and contribute to the ever-evolving world of web development."</p>
              </div>
              <div className='about-btn'>
                <a href="">Let's Talk</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About