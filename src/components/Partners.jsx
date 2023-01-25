import React from 'react'
import { people } from '../static/icons'
import { service1, service2, service3, service4, service5, service6 } from '../static/images'
import Carousel from 'react-bootstrap/Carousel';
const Partners = () => {
  return (
    <div className='p-5'
      style={{ backgroundColor: '#EDEDED' }}>
      <div className='text-center'>
        <h2>Some Of Our Partners</h2>
        <span
          style={{ color: '#6E6E6E' }}
        >______&nbsp;<img src={people} />&nbsp;______</span>
        <p>Our valuable Partners</p>
      </div>
      <Carousel variant="dark" className="text-center" controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className=""
            src={service1}
            alt="First slide"
          />
          <img
            className=""
            src={service2}
            alt="First slide"
          />
          <img
            className=""
            src={service4}
            alt="First slide"
          />
          <img
            className=""
            src={service5}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className=""
            src={service1}
            alt="First slide"
          />
          <img
            className=""
            src={service2}
            alt="First slide"
          />
          <img
            className=""
            src={service3}
            alt="First slide"
          />
          <img
            className=""
            src={service5}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src={service1}
            alt="First slide"
          />
          <img
            className=""
            src={service2}
            alt="First slide"
          />
          <img
            className=""
            src={service3}
            alt="First slide"
          />
          <img
            className=""
            src={service4}
            alt="First slide"
          />
        </Carousel.Item>
        

      </Carousel>

    </div>
  )
}

export default Partners
