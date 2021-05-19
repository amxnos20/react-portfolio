import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Title from './Title'
import netflixClone from '../images/netflix-clone.PNG'
import amazonClone from '../images/amazon-clone.PNG'

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
        <CardItem src='' title='Coming...' description='Coming...' />
        <CardItem
          src={amazonClone}
          title='Amazon Clone Demo App'
          description='Amazon App with full user authentification, basket functionality, database and stripe payment system.'
          onClick={() => openUrlInNewTab('https://clone-9f936.web.app//')}
        />
        <CardItem
          src={netflixClone}
          title='Netflix Clone Demo App'
          description='Netflix App with full user authentification, database and stripe payment system.'
          onClick={() =>
            openUrlInNewTab('https://netflix-clone-7491d.web.app/')
          }
        />
      </div>
    </div>
  )
}

export default Cards
