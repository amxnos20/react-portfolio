import React from 'react'
import './About.css'
import manOnTable from '../images/manOnTable.svg'
import Title from './Title'

const About = () => {
  return (
    <div className='about'>
      <Title title='About me' />
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='about-text'>
              <h2>Let me introduce myself 🚀</h2>
              <p>
                A passionate Engineer 🙍‍♂️, who love web development, data and
                digital projects. I keep learning and improving every day
                because technology never stops 📈.
                <br /> <br /> The knowledge that I acquired during my
                experiences, my motivation and also my dynamism constitute
                essential assets that I wish to put at your disposal. <br />
                <br />
              </p>
            </div>
          </div>
          <div className='col-6'>
            <div className='about__img'>
              <img src={manOnTable} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
