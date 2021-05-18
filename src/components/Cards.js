import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Title from './Title'

const Cards = () => {
  return (
    <div className='cards'>
      <Title title='Portfolio' />

      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Some cool personal examples of projects that I have done, this is a
        non-exhaustive list (not all projects are presented).
      </p>

      <div className='row'>
        <CardItem
          src='images/netflix-clone.png'
          title='Netflix clone demo'
          description='Netflix clone with full authentification, database with stripe payment system.'
        />
        <CardItem
          src='images/img-2.jpg'
          title='Title Yo'
          description='Explore the hidden waterfall deep inside the Amazon Jungle'
        />
        <CardItem
          src='images/img-3.jpg'
          title='Title Yo'
          description='Explore the hidden waterfall deep inside the Amazon Jungle'
        />
      </div>
    </div>
  )
}

export default Cards
