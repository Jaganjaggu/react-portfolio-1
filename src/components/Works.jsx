import React from 'react'
import './Works.css'
import Proj1 from '../assets/proj1.png'
import Proj2 from '../assets/proj2.png'
import Proj3 from '../assets/proj3.png'


function Works() {
    return (
        <>
            <section id='works'>
                <div className='works-section'>
                    <div className='works-heading'>
                        <h5>My Recent Work</h5>
                        <h2>Projects</h2>
                    </div>
                    <div className='work-card-container'>
                        <div className='work-card-section'>
                            <div className='work-card'>
                               <div className='work-card-img'><img src={Proj1} alt="" /></div>
                               <p>"Parallax Website using HTML and CSS"</p>
                               <div className='work-card-link'>
                                    <a className='github-style' href="https://github.com/Jaganjaggu/Parallax-Nature.git" target='_blank' >Github</a>
                                    <a className='live-demo-style' href="https://website-nature-v01.netlify.app" target='_blank'>Live Demo</a>
                               </div>
                            </div>
                            <div className='work-card'>
                               <div className='work-card-img'><img src={Proj2} alt="" /></div>
                               <p>"pottery Website using HTML and CSS"</p>
                               <div className='work-card-link'>
                                    <a className='github-style' href="https://github.com/Jaganjaggu/pottery.git" target='_blank'>Github</a>
                                    <a className='live-demo-style' href="https://pottery-webpage-v01.netlify.app/" target='_blank'>Live Demo</a>
                               </div>
                            </div>
                            <div className='work-card'>
                               <div className='work-card-img'><img src={Proj3} alt="" /></div>
                               <p>"IMDB Clone using React"</p>
                               <div className='work-card-link'>
                                    <a className='github-style' href="https://github.com/Jaganjaggu/imdb-clone.git" target='_blank'>Github</a>
                                    <a className='live-demo-style' href="https://imdb-clone-c01.netlify.app" target='_blank'>Live Demo</a>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Works