import React from 'react'
import './Css/Hero.css'
import image2 from './Images/image2.jpg'

function Hero() {
  return (
    <>
    <div className='Hero-div'>
        <img alt='image1' src={image2} />
    </div>       

    <div className='text'>
        <p className='heading'>Your Journey Your Story</p>
        <p className='headingp'>Choose Your Favourite Destination</p>
        <button className='btn2'>Travel Plane</button>
    </div>

    </> 
  )
}

export default Hero

