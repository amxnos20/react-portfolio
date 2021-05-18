import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <div className='card' onClick={props.onClick}>
      <img src={props.src} alt='' />
      <div className='card__info'>
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
        <p style={{ borderBottom: 'solid #001c55', width: '35%' }}>
          View Project
        </p>
      </div>
    </div>
  )
}

export default CardItem
