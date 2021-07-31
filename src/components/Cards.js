import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Title from './Title'
import netflixClone from '../images/netflix-clone.PNG'
import amazonClone from '../images/amazon-next.PNG'
import covidTracker from '../images/covid-tracker.PNG'

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
          src={covidTracker}
          title='Covid Tracker'
          description='Covid App built with real data, map, chart, table... functionality. Tech: React,Custom API,Material-UI,Leaflet'
          onClick={() =>
            openUrlInNewTab('https://covid-tracker-5d6f2.web.app/')
          }
        />
        <CardItem
          src={amazonClone}
          title='Amazon Clone Demo App'
          description='Amazon App with full user authentification, basket functionality, database and stripe payment system. Tech: React,NextJS,Redux,Tailwind CSS,Custom API,Webhook,Stripe,Firebase'
          onClick={() => openUrlInNewTab('https://amazon-2-0-delta.vercel.app/')}
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
