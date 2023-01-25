import React from 'react'
import { posts1, posts2, posts3, posts } from '../static/images'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {files} from '../static/icons'
import '../App.css'
const Posts = () => {
  return (
    <div className='container m-5'>
      <div className='text-center'>
        <h2>Recent Posts</h2>
        <span
      style={{color:'#6E6E6E',marginTop:'3px'}}
      >______&nbsp;<img src={files}/>&nbsp;______</span>
        <p style={{color:'#6E6E6E',marginTop:'3px'}}>Latest News Update Around The World From Technology.</p>
        <div className="row justify-content-end">
          <div className="col-md-4 m-2">
            <div className="posts1">
              <div
                style={{ paddingTop: '140px' }}
              >
                <div
                  style={{ fontSize: '18px',marginLeft:'7px' }}
                >
                  12 TIPS FOR WRITING EFFECTIVE EMAI...
                </div>
                <div
                  style={{ fontSize: '15px',marginLeft:'7px' }}
                >
                  June 5,2021                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-2">
            <div className="posts2">
              <div
                style={{ paddingTop: '140px' }}
              >
                <div
                  style={{ fontSize: '18px',marginLeft:'7px' }}
                >
                  American IT Company Proposed Tech...
                </div>
                <div
                  style={{ fontSize: '15px',marginLeft:'7px' }}
                >
                  March 5,2021                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-md-4 m-2">
            <div className="posts3 ">
              <div
                style={{ paddingTop: '140px' }}
              >
                <div
                  style={{ fontSize: '18px',marginLeft:'7px' }}
                >
                  Developing Ideas Into Shapes Is Our Art
                </div>
                <div
                  style={{ fontSize: '15px',marginLeft:'7px' }}
                >
                  Februry 28,2021                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-2">
            <div className="posts4 ">
              <div
                style={{ paddingTop: '140px' }}
              >
                <div
                  style={{ fontSize: '18px',marginLeft:'7px' }}
                >
                  The 5 Challenges of Small Business Di
                </div>
                <div
                  style={{ fontSize: '15px',marginLeft:'7px' }}
                >
                  January 20,2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts