import React from 'react'
import '../App.css'
import {abovef,af} from '../static/images'
const AboveFooter = () => {
  return (
    <div className='pt-4' style={{backgroundColor:'#262626'}}>
      <div className="row">
        <div className="col-sm-3">
          <h4 className='aboveF'>More About ITA</h4>
          <p className='aboveFP'>
          IT Artificer Serving its Services all over the world specially in Pakistan, America, England, Afghanistan, UAE and India. We employ a skilled team of developers who are totally focused on delivering high quality software solutions which enable our customers to achieve their critical IT objectives.
          </p>
          <img className='mb-5' src={af} alt="" />
        </div>
        <div className="col-sm-3">
          <h4 className='aboveF'>Advance Recent Posts</h4>
          <p className='aboveFP'>
          Recenzja kasyna Spin <br /> Bounty <br />
          December 27, 2022
          </p>
          <div className="row">
            <div className="col-sm-3 pt-4">
              <img src={abovef} width="80px" height={"80px"} alt="" />
            </div>
            <div className="col-sm-7">
              <p className='aboveFP' style={{fontSize:'15px'}}>
              12 TIPS FOR WRITING <br /> EFFECTIVE EMAILS <br /> June 5, 2021
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <h4 className='aboveF'>Recent Posts</h4>
          <p className='aboveFP'>
          Recenzja kasyna Spin Bounty <br /> December 27, 2022
          </p>
          <p className='aboveFP'>
          12 TIPS FOR WRITING EFFECTIVE EMAILS <br /> June 5, 2021
          </p>
          <p className='aboveFP'>
          American IT Company Proposed Tech City in KP <br /> March 5, 2021
          </p>
        </div>

      </div>
    </div>
  )
}

export default AboveFooter