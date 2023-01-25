import React from 'react'
import {location,telephone,email,facebook,twitter,youtube} from '../static/icons'
const AboveNavbar = () => {
  return (
    <div style={{backgroundColor:'#1A2D51',alignContent:'space-between',
    color:'white',padding:'12px'
    }}>
        <div className='mx-5'>
            <span className='mx-2'><img src={location} alt="" /> Peshawar Board,KPK ,Pakistan</span>
            <span className='mx-2'><img src={telephone} alt="" /> +92-333-9296314</span>
            <span className='mx-2'><img src={email} alt="" /> info@artificer.com</span>
        <div style={{float:'right'}}>
            <span><img src={facebook} alt="" /> / <img src={twitter} alt="" /> / <img src={youtube} alt="" /></span>
        </div>
        </div>
    </div>
  )
}

export default AboveNavbar