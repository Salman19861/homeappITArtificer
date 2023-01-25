import React from 'react'
import CLogo from '../static/images/companyLogo.png'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbarr = () => {
  return (
    <div
    className='mt-4 ' >
        <div className='mx-5'>
            <span className='mx-2'>
              <img src={CLogo} alt="company-logo" />
            </span>
          <div className='mx-5 mt-4' style={{float:'right',}}>
            <span className='mx-2  '>Home</span>
            <span className='mx-2  '>
              <div class="dropdown">
                  <button class="dropbtn">ABOUT US</button>
                  <div class="dropdown-content">
                    <a href="#">OUR TEAM</a>
                    <a href="#">TESTIMONIAL</a>
                  </div>
              </div>
            </span>
            <span className='mx-2  '>
              <div class="dropdown">
                  <button class="dropbtn">SUBSIDIES</button>
                  <div class="dropdown-content">
                    <a href="#">ITA ACADEMIA</a>
                    <a href="#">ITA R.CENTER</a>
                    <a href="#">ITA KALEWAL</a>
                  </div>
              </div>
            </span>
            <span className='mx-2  '>
              <div class="dropdown">
                  <button class="dropbtn">PRODUCTS</button>
                  <div class="dropdown-content">
                    <a href="#">POINT</a>
                    <a href="#">SCHOOL MIS</a>
                    <a href="#">CURRENCY MIS</a>
                    <a href="#">HAJJ UMRA MIS</a>
                    <a href="#">R. ESTATE SOFTWARE</a>
                  </div>
              </div>
            </span>
            <span className='mx-2  '>
              <div class="dropdown">
                  <button class="dropbtn">SERVICES</button>
                  <div class="dropdown-content">
                    <a href="#">DOMAIN | HOSTING</a>
                    <a href="#">DIGITAL MARKETTING</a>
                    <a href="#">WEB DEVOLOPMENT</a>
                    <a href="#">MOBILE APPLICATION</a>
                    <a href="#">GARPHIC DESIGNING</a>
                    <a href="#">SOFTWARE APPS</a>
                    <a href="#">E-COMMERCE</a>
                    <a href="#">CONTENT-WRITING</a>
                    <a href="#">FYP IDEAS</a>
                  </div>
              </div>
            </span>
            <span className='mx-2  '>
              <div class="dropdown">
                  <button class="dropbtn">PLAYSTORE</button>
                  <div class="dropdown-content">
                    <a href="#">OUR APPS</a>
                    <a href="#">PRIVACY POLICY</a>
                  </div>
              </div>
            </span>
            <span className='mx-2  '>BLOG</span>
            <span className='  '>
              <div class="dropdown">
                  <button class="dropbtn">CONTACT US</button>
                  <div class="dropdown-content">
                    <a href="#">FOR TARININGS</a>
                    <a href="#">APPLY FOR JOBS</a>
                    <a href="#">FOR INTERNSHIP</a>
                  </div>
              </div>
            </span>
          
          </div>
        </div>
    </div>
  )
  
}

export default Navbarr