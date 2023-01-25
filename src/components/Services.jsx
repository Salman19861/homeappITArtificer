import React from 'react'
import {laptop,chart,chat,setting,fix,phone,trainingBlack} from '../static/icons'
import '../App.css'
const Services = () => {
  return (
    <div className='container text-center mt-5'>
      <h1>Our Services</h1>
      <span
      style={{color:'#6E6E6E'}}
      >______&nbsp;<img src={laptop}/>&nbsp;______</span>
      <p>We are creative design agency focused on full implementation services of all sizes</p>
      <div className="row mt-5" >
        <div className="col-sm-4"
        >
          <div className='seviceBox'><img src={chat} alt="" /></div>
          <h4>24/7 Support</h4>
          <p className='pOfService' >Our dedicated support team provides 24/7 support through emails, skype and online calls...</p>
          <a className='readmore' href="#">Read More >></a>
        </div>
        <div className="col-sm-4">
        <div className='seviceBox'><img src={setting} alt="" /></div>
          <h4>Domain Hosting</h4>
          <p className='pOfService' >Domain Hosting We provide services of domain registration and web hosting services at...</p>
          <a className='readmore' href="#">Read More >></a>
        </div>
        <div className="col-sm-4">
        <div className='seviceBox'><img src={fix} alt="" /></div>
          <h4>Website Devolopment</h4>
          <p className='pOfService' >Website Development We design a strong online existence of a website that ensures...</p>
          <a className='readmore' href="#">Read More >></a>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-sm-4">
        <div className='seviceBox'><img src={phone} alt="" /></div>
          <h4>Responsive Layout</h4>
          <p  className='pOfService' >We developed well to provide users optimal viewing experience, easy to read and...</p>
          <a className='readmore' href="#">Read More >></a>
        </div>
        <div className="col-sm-4">
        <div className='seviceBox'><img src={chart} alt="" /></div>
          <h4>Digital Marketting</h4>
          <p  className='pOfService' >Digital Marketing Services Services provide throughout Khyber Pakhtunkhawa like Bill Boards, Tv Comercial...</p>
          <a className='readmore' href="#">Read More >></a>
        </div>
        <div className="col-sm-4">
        <div className='seviceBox'><img src={trainingBlack} alt="" /></div>
          <h4>Professional Training</h4>
          <p className='pOfService' >Professional Training We offer web development training for fresh graduates to spend a...</p>
          <a className='readmore' href="#">Read More >></a>
        </div>

      </div>
    </div>
  )
}

export default Services