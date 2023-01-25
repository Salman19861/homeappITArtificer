import React from 'react'
import slidImage from '../static/images/slideshowImage.jpg' 
import '../App.css'
const SlideShow = () => {
  return (
    <div
    className="slideshow ">
    <div
    style={{paddingTop:'120px'}}
    >
    <div 
    style={{fontSize:'50px'}}
    >
      Developing Ideas Into Shapes Is Our Art
    </div>
    <div
    style={{fontSize:'15px',}}
    >
    IT Artificer Team Develop Best Solution For Your Business To Make it Possible For Your Business To Handle Smoothly
    </div>
    <div
    style={{
      backgroundColor:'#1A2D51',
      fontSize: '15px',
      width: '390px',
      height: '46px',
      display:'inline-flex',
      textAlign:'center',
      margin:'19px'
    }}
          >
        <p
        style={{marginLeft:'39px',marginTop:'8px'}}
        >

        Skype us: itartificer | Call at: 03339296314
        </p>
    </div>
    <br />
    <div 
    style={{marginTop:'240px'}}
    >
    <a href='#' style={{
      backgroundColor:'#1A2D51',
      border:'1px solid #1A2D51',
      color:'white',
      width:'14px',height:'14px',
      display:'inline-flex',
      textDecoration:'none'
    }}>
      <div
      style={{
        backgroundColor:'white',
        width:'7px',height:'7px',
        
      }}
      >.</div>
    </a>
    </div>


    </div>
    </div>
  )
}

export default SlideShow