import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Title from './Title'
import netflixClone from '../images/netflix-clone.PNG'

const Cards = () => {
  function openUrlInNewTab(url) {
    var win = window.open(url, '_blank')
    win.focus()
  }
  return (
    <div className='cards'>
      <Title title='Portfolio' />

      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Some cool personal examples of projects that I have done, this is a
        non-exhaustive list (not all projects are presented).
      </p>

      <div className='row'>
        <CardItem
          src={netflixClone}
          title='Netflix clone demo'
          description='Netflix clone with full authentification, database with stripe payment system.'
          onClick={() =>
            openUrlInNewTab('https://netflix-clone-7491d.web.app/')
          }
        />
        <CardItem
          src={netflixClone}
          title='Title Yop'
          description='Explore the hidden waterfall deep inside the Amazon Jungle'
        />
        <CardItem
          src={netflixClone}
          title='Title Yo'
          description='Explore the hidden waterfall deep inside the Amazon Jungle'
        />
      </div>
    </div>
  )
}

export default Cards
