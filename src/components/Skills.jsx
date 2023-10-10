import React from 'react'
import './Skills.css';
import { MdVerified } from "react-icons/md";


function Skills() {
    const iconcolor = {
        color:'var(--skills-card-icon-color)'
    }
    return (
        <>
            <section id='skills'>
                <div className='skills-section'>
                    <div className='skills-heading'>
                        <h5>What Skills I Have</h5>
                        <h2>My Experience</h2>
                    </div>
                    <div className='skills-center'>
                        <div className='skills-content'>

                            <div className='skills-card'>
                                <h5 className='skill-card-heading'>Frontent Development</h5>
                                <div className='skill-card-items-section'>
                                    <div className='skill-card-item'>
                                        <div className='skill-card-item-icon'><MdVerified style={iconcolor}/></div>
                                        <div className='skill-card-item-content'>
                                            <h4>React</h4>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                    <div className='skill-card-item'>
                                        <div className='skill-card-item-icon'><MdVerified style={iconcolor}/></div>
                                        <div className='skill-card-item-content'>
                                            <h4>HTML</h4>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                    <div className='skill-card-item'>
                                        <div className='skill-card-item-icon'><MdVerified style={iconcolor}/></div>
                                        <div className='skill-card-item-content'>
                                            <h4>CSS</h4>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                     <div className='skill-card-item'>
                                        <div className='skill-card-item-icon'><MdVerified style={iconcolor}/></div>
                                        <div className='skill-card-item-content'>
                                            <h4>JavaScript</h4>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                    <div className='skill-card-item'>
                                        <div className='skill-card-item-icon'><MdVerified style={iconcolor}/></div>
                                        <div className='skill-card-item-content'>
                                            <h4>Bootstrap</h4>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='skills-card'>
                                <h5 className='skill-card-heading'>Backend Development</h5>
                                <div className='skill-card-items-section'>
                                    <div className='skill-card-item'>
                                        <div className='skill-card-item-icon'><MdVerified style={iconcolor}/></div>
                                        <div className='skill-card-item-content'>
                                            <h4>MongoDB</h4>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                    <div className='skill-card-item'>
                                        <div className='skill-card-item-icon'><MdVerified style={iconcolor}/></div>
                                        <div className='skill-card-item-content'>
                                            <h4>MySQL</h4>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                    <div className='skill-card-item'>
                                        <div className='skill-card-item-icon'><MdVerified style={iconcolor}/></div>
                                        <div className='skill-card-item-content'>
                                            <h4>Python</h4>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills