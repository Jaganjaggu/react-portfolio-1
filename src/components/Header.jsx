import React, { useRef } from 'react'

import Logo from '../assets/logo.jpeg'
import './Header.css'
// import { colors } from '@mui/material';


function Header({ theme, setTheme }) {
  const navRef = useRef();


  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  console.log(theme);

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <>
      <div className='nav-bar' >
        <div>
          <img className='logo' src={Logo} alt="" />
        </div>
        <div className='links ' ref={navRef}>

          <ul className='nav-links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#works">Projects</a></li>

          </ul>
          <a href="#contact"><button className='contact-btn' style={{ fontSize: '14px' }}>Contact</button></a>
     
           {/* <i onClick={showNavbar} style={{ border: 'none', margin: '20px', color: '#000' }} class="fa-2x fa-solid fa-xmark" ></i> */}

        {theme === 'dark' ? (
          <div className=' nav-close-btn' >
            <i onClick={showNavbar} style={{ border: 'none', margin: '20px', color: '#fff' }} class="fa-2x fa-solid fa-xmark" ></i>
          </div>
        ) : (
          <div className=' nav-close-btn' >
            <i onClick={showNavbar} class="fa-solid fa-xmark fa-2x"  style={{ border: 'none', margin: '20px', color: '#000' }}></i>
          </div>
        )
        }
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>

         <div className='theme-icon-fixed'>
            {theme === 'dark' ? (
  
              <i onClick={switchTheme} class="fa-sun fa-regular fa-xl" style={{ color: '#ffff', marginLeft: '10px' }}></i>
            ) : (
              <i onClick={switchTheme} class="fa-moon fa-regular fa-xl" style={{ color: '#000', marginLeft: '10px' }}></i>
            )
            }
         </div>


          {theme === 'dark' ? (
            <div className="nav-btn">  <i onClick={showNavbar} style={{ border: 'none', margin: '20px', color: '#fff' }} class="fa-1x fa-solid fa-bars"></i></div>
          ) : (
            <div className="nav-btn">  <i onClick={showNavbar} style={{ border: 'none', margin: '20px' }} class="fa-1x fa-solid fa-bars"></i></div>
          )
          }


        </div>
       

      </div>
    </>
  )
}

export default Header