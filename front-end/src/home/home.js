import React, {useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';

import { useUser, useUpdate } from '../Context.js'
import './home.css'

function Home() {
    const navigate = useNavigate();
    const websiteUser = useUser();
    const updateWebsiteUser = useUpdate();

  // useEffect(()=>{
  //   if(websiteUser.name == 'Logged Out'){
  //     navigate('/')
  //     console.log(websiteUser)
  //   }
  // }, [])

    
  return (
    <div className = 'container'>
      <header>
        <div className="row-one">
          <h3 className='header'>Software Design</h3>
          <nav className = 'nav'>
            <Link to='#' className='nav-text'>Settings</Link>
            <Link to='/account' className='nav-text'>Account</Link>
            <Link to='/' className='nav-text'>Log Out</Link>
          </nav>
        </div>
        <div className="block-text">
          <h1 className='block-text-1' id='awesome-website'>Welcome<br/><br></br>{websiteUser.name}</h1>
          <p className='block-text-2' id='first-p'>
            Thank you so much for choosing us to<br/>guide you
            along with your software design<br/> carrer. We have a great support
            team that<br/>is waiting to assist you. If you are ready to<br/>begin, contact
            a team member now: <br/>
            <button className = 'contact-btn'>Contact A Team Member</button>
          </p>
        </div>
        <img src='https://mytechdecisions.com/wp-content/uploads/2019/10/AdobeStock_256229414.jpg' 
              alt='Image' 
              id='img'
            />
      </header>
      <footer>
        <div className="left-footer">
          <Link id = 'footer-link' to="#" className = 'more-about'>More About Us</Link>
          <Link id = 'footer-link' to = '#' className='footer-terms'>Terms and Services</Link>
          <Link id = 'footer-link' to = '#' className='footer-privacy'>Privacy and Policy</Link>
        </div>
        <div className="right-footer">
          <p className='last-p'>If you have any questions please call us at 
            <bold><i>(333)-628-3822</i></bold>
          </p>
        </div>
      </footer>
  </div>
  )
}

export default Home