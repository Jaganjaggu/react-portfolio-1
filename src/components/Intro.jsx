import React from 'react'
import './Intro.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import Profpic from '../assets/profpic2.png'
import Typewriter from 'typewriter-effect';
import Resume from '../assets/demo-resume.pdf'

function Intro() {
    const iconcolor = {
        color: 'var(--iconcolor)'
    }
    return (

        <>
            <section id='intro'>
                <div className='intro-style'>

                    <div className='into-section left-grid-style'>
                        <a href="https://www.linkedin.com/in/jagan-v-1a258621b/" target='_blank'> <div> <AiFillLinkedin size={'25px'} style={iconcolor} /></div></a>
                        <a href="https://github.com/Jaganjaggu" target='_blank'><div> <AiFillGithub size={'25px'} style={iconcolor} /></div></a>
                        <a href="https://instagram.com/" target='_blank'><div> <AiOutlineInstagram size={'25px'} style={iconcolor} /></div></a>
                        <div className='left-line'></div>
                    </div>

                    <div className='into-section-mid'>
                        <div className='middle-grid-style'>
                            <h5>Hello, I'm</h5>
                            <h1 >Jagan</h1>
                            <Typewriter
                                options={{
                                    strings: ['Full Stack Developer', 'React Developer', 'Good at HTML, CSS, JS'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            <div className='pro-button'>
                                <a href={Resume} download><button className='download-cv'>Download CV</button></a>

                                <button className='lets-talk'>Let's Talk</button>
                            </div>
                            <div className='pro-style '>
                                <img src={Profpic} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='right-grid-style into-section' style={iconcolor}><a style={iconcolor} href="#contact"><p className='right-grid-style'>Scroll down</p></a></div>
                </div>
            </section>
        </>
    )
}

export default Intro