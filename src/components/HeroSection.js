import React from 'react'
import './HeroSection.css'
import Button from './Button'
import Typed from 'react-typed'

const HeroSection = () => {
  const typedArray = [
    'From France',
    'Engineer',
    'Developer',
    'Analyst',
    'Fast Learner',
    'Open-source Lover',
  ]
  return (
    <div className='hero-container'>
      <h1>Hi, I'm Aman👋</h1>
      <Typed
        strings={typedArray}
        typeSpeed={40}
        loop={true}
        className='typed-anim'
      />
      <div className='hero-btns'>
        <Button
          pathProps='/about'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          About
        </Button>
        <Button
          pathProps='/contact'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          See my resume
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
